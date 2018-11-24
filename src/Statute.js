import React from 'react';
import Typography from '@material-ui/core/Typography';

const Statute = () => (
  <React.Fragment>
     <Typography variant="title" paragraph gutterBottom>
        Satzung
     </Typography>
     <Typography variant="subheading">
        Verantwortlich
     </Typography>
     <Typography paragraph>
       <strong>Anschrift</strong><br/>
         Islamischer multikultureller Verein Landau e.V (IMV Landau)<br/>
         Danziger Platz 14<br/>
         76829 Landau in der Pfalz
     </Typography>
     <Typography paragraph>
         <strong>Telefon</strong><br/>
         +49 6341 5575698
     </Typography>
     <Typography paragraph>
         <strong>E-Mail</strong><br/>
         imv-landau@web.de
     </Typography>
     <Typography variant="caption" paragraph>
       - Satzung in Bearbeitung -
     </Typography>
   </React.Fragment>
);
export default Statute;