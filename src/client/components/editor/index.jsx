import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SlideHolder } from '@components/slideHolder';
import './editor.css';

export const Editor = () => (
    <Grid divided="vertically">
        <SlideHolder width={4} />
        <Grid.Column width={12} color="blue">
            SLIDE EDITOR
        </Grid.Column>
    </Grid>
);
