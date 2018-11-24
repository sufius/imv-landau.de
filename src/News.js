import React from 'react';
import Typography from '@material-ui/core/Typography';

const News = () => (
  <React.Fragment>
     <Typography variant="title" gutterBottom>
        Aktuelles und Neuigkeiten
     </Typography>
     <Typography variant="caption" paragraph>
        Es liegen keine Meldungen vor.
     </Typography>
   </React.Fragment>
);
export default News;