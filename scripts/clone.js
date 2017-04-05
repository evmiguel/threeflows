const pg = require('pg');


// query via connection pool
function queryDatabase(text, values, cb) {
  const connectionUrl = (process.env.NODE_ENV === 'development')
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL +'?ssl=true';
  pg.connect(connectionUrl, function(err, client, done) {
    if (err) {
      console.log(err);
      done();
      cb(err);
      return;
    }
    client.query(text, values, function(err, result) {
      done();
      cb(err, result);
    });
  });
};

// yields rows
function queryForTable(table, cb) {
  const sql = `SELECT * FROM ${table} ORDER BY id;`;
  queryDatabase(sql, [], (err, result) => {
    if (err) {
      console.log('error', JSON.stringify(err));
      return cb(err);
    }

    return cb(null, result.rows);
  });
}


// yields {table: {rows, error}}
function queryAllTables(tables, cb) {
  var tablesDone = 0;

  const output = {};
  tables.forEach((table) => {
    queryForTable(table, (err, result) => {
      output[table] = {};
      if (err) output[table].error = err;
      if (result) output[table].rows = result;

      tablesDone = tablesDone + 1;
      if (tablesDone >= tables.length) return cb(null, output);
    });
  });
}

function main() {
  const tables = [
    'evidence',
    'evaluations',
    'message_popup_questions',
    'reviews',
    'review_tokens'
  ];
  queryAllTables(tables, (err, output) => {
    if (err) {
      console.log('---- error ----');
      console.log(err);
      process.exit(1);
    }
    
    console.log(JSON.stringify(output));
    process.exit(0);
  });
}

main();