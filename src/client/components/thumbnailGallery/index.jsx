import React from 'react';
import { Grid } from 'semantic-ui-react';

export const ThumbnailGallery = props => (
    <Grid.Row className="thumbnail_gallery">{props.children}</Grid.Row>
);
