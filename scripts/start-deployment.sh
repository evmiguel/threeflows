#!/bin/bash

if [ -z "${DATABASE_URL}" ]; then
    export $(cat config/dev)
else
    echo "Exporting PG variables..."
    . scripts/parse-and-export-pgvars.sh
fi

yarn workspace server run start