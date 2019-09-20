import React from 'react';
import { Grid } from 'semantic-ui-react';

export const Thumbnail = props => (
    <Grid.Row
        className="thumbnail_row"
        style={{ backgroundColor: 'red', height: '50px' }}
    >
        <Grid.Column className="thumbnail">THUMBNAIL</Grid.Column>
    </Grid.Row>
);
