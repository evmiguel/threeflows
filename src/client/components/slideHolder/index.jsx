import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import './slideHolder.css';

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

export const SlideHolder = props => (
    <Grid.Column width={props.width} className="slide_holder" padded={false}>
        <Grid.Row className="dropdown_container">
            <Dropdown
                selection
                placeholder="Add +"
                fluid
                options={dropDownValues}
            />
        </Grid.Row>
    </Grid.Column>
);
