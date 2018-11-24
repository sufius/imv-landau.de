import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  iframe: {
    marginBottom: theme.spacing.unit * 3
  }
});

const Prayer = ({ classes }) => (
  <React.Fragment>
    <Typography variant="title" gutterBottom>
      Das Gebet
    </Typography>
    <Typography paragraph>
      Der Koran schreibt dem Gläubigen das Pflichtgebet zu fünf bestimmten
      Tageszeiten vor. Man unterscheidet die eigentlichen Pflichtgebete (fard),
      die keinesfalls unterlassen werden dürfen, von den sogenannten
      sunna-Gebeten, die den fard-Gebeten vorangehen oder folgen. Nafl-Gebete
      sind vollkommen freiwillige Gebete. Witr ist ein verbindliches (wadschib)
      Gebet, das nach dem Nachtgebet verrichtet wird und aus drei
      Gebetsabschnitten besteht. Alle Gebete bestehen aus einer bestimmten
      Anzahl von Gebetsabschnitten (rak‘a).
    </Typography>

    <Typography variant="h6" gutterBottom>
      Fajr (Gebet vor dem Sonnenaufgang)
    </Typography>
    <iframe
      className={classes.iframe}
      title="Fajr"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/pRn56g9S58g"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <Typography variant="h6" gutterBottom>
      Dhuhr (Mittagsgebet)
    </Typography>
    <iframe
      className={classes.iframe}
      title="Dhuhr"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/T-Lx_j2geps"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <Typography variant="h6" gutterBottom>
      Asr (Nachmittagsgebet)
    </Typography>
    <iframe
      className={classes.iframe}
      title="Asr"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/EpCeGvtU9Tc"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <Typography variant="h6" gutterBottom>
      Maghreb (Gebet nach dem Sonnenuntergang)
    </Typography>
    <iframe
      className={classes.iframe}
      title="Maghreb"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2msQQYHpfcY"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <Typography variant="h6" gutterBottom>
      Ishaa (Einbruch der Nacht, bis Mitternacht oder bis zum Morgengrauen)
    </Typography>
    <iframe
      className={classes.iframe}
      title="Ishaa"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3vHsa7MWaTI"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </React.Fragment>
);

Prayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prayer);
