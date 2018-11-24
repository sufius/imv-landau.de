import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  ul: {
    marginTop: 0
  }
});

const Schedule = ({ classes }) => (
  <React.Fragment>
    <Typography variant="title" paragraph gutterBottom>
      Kurse und Terminkalender
    </Typography>
    <Typography variant="subheading">Herren</Typography>
    <Typography variant="caption">Sport</Typography>
    <ul className={classes.ul}>
      <li>
        <Typography paragraph>
          Jeden <strong>Freitag</strong> wird von 19 Uhr bis 22 Uhr in der Halle
          des IGS Schulzentrum Ost Fussball gespielt.
        </Typography>
      </li>
    </ul>
    <Typography variant="subheading">Damen</Typography>
    <Typography variant="caption">Koranunterricht</Typography>
    <ul className={classes.ul}>
      <li>
        <Typography paragraph>
          Jeden <strong>Sonntag</strong> findet nach dem Dhuhr-Gebet bis zu dem
          Asr-Gebet ein Koranunterricht ausschließlich nur für Frauen statt.
        </Typography>
      </li>
    </ul>
    <Typography variant="subheading">Kinder</Typography>
    <Typography variant="caption">Schule</Typography>
    <ul className={classes.ul}>
      <li>
        <Typography paragraph>
          Jeden <strong>Samstag</strong> findet von 9:45 Uhr bis 12:15 Uhr der
          Schulunterricht fuer Kinder zwischen 6 bis 13 Jahren statt.
        </Typography>
      </li>
    </ul>
  </React.Fragment>
);

Schedule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Schedule);
