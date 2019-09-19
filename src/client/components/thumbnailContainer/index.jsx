import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import './thumbnailContainer.css';
import 'semantic-ui-css/semantic.min.css';


const dropDownValues = [
    {
        key: 'context',
        value: 'context',
        text: 'Context'
    },
    {
        key: 'anticipate',
        value: 'anticipate',
        text: 'Anticipate'
    },
    {
        key: 'enact',
        value: 'enact',
        text: 'Enact'
    },
    {
        key: 'reflect',
        value: 'reflect',
        text: 'Reflect'
    }
];

export const ThumbnailContainer = props => (
    // This can be red?????
    <Grid.Column width={props.width} className="thumbnail_container" padded={false} >
        <Grid.Row className="dropdown_container">
            <Dropdown
                selection
                placeholder="Add +"
                fluid
                options={dropDownValues}
            />
        </Grid.Row>
        <Grid.Row className="thumbnail_gallery">
            {/* Why is this not red */}
            <Grid.Row style={{height: '25px'}}>
                <Grid.Column>
                    THUMBNAIL
                </Grid.Column>
            </Grid.Row>
        </Grid.Row>
    </Grid.Column>
);
