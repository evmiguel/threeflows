import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Thumbnail } from '@components/thumbnail';
import { ThumbnailGroupTitle } from '@components/thumbnailGroupTitle';

export const ThumbnailGroup = props => (
    <Grid.Row>
        <ThumbnailGroupTitle title={props.title} />
        {props.children}
    </Grid.Row>
);

