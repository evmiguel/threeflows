import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import { ThumbnailGallery } from '@components/thumbnailGallery';
import { Thumbnail } from '@components/thumbnail';
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
    <Grid.Column width={props.width} className="thumbnail_container" padded={false} >
        <Grid.Row className="dropdown_container">
            <Dropdown
                selection
                placeholder="Add +"
                fluid
                options={dropDownValues}
            />
        </Grid.Row>
        <ThumbnailGallery>
            {new Array(25).fill(0,0,25).map(i => <Thumbnail />)}
        </ThumbnailGallery>
    </Grid.Column>
);
