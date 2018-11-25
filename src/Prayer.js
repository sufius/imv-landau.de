import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  gridItem: {
    width: "100%"
  },
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%",
    marginBottom: theme.spacing.unit * 3,
    height: 0,
    overflow: "hidden",
    "& iframe, & object, & embed": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
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

    <Grid container spacing={24}>
      <Grid className={classes.gridItem} item sm={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Fajr (Gebet vor dem Sonnenaufgang)
        </Typography>
        <div className={classes.videoContainer}>
          <iframe
            title="Fajr"
            src="https://www.youtube.com/embed/pRn56g9S58g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Grid>
      <Grid className={classes.gridItem} item sm={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Dhuhr (Mittagsgebet, nach Kulmination der Sonne)
        </Typography>
        <div className={classes.videoContainer}>
          <iframe
            title="Dhuhr"
            src="https://www.youtube.com/embed/T-Lx_j2geps"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Grid>
    </Grid>

    <Grid container spacing={24}>
      <Grid className={classes.gridItem} item sm={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Asr (Nachmittagsgebet, vor dem Sonnenuntergang)
        </Typography>
        <div className={classes.videoContainer}>
          <iframe
            title="Asr"
            src="https://www.youtube.com/embed/EpCeGvtU9Tc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Grid>
      <Grid className={classes.gridItem} item sm={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Maghreb (Gebet nach dem Sonnenuntergang)
        </Typography>
        <div className={classes.videoContainer}>
          <iframe
            title="Maghreb"
            src="https://www.youtube.com/embed/2msQQYHpfcY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Grid>
    </Grid>

    <Grid container spacing={24}>
      <Grid className={classes.gridItem} item sm={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Ishaa (Einbruch der Nacht, bis Mitternacht oder bis zum Morgengrauen)
        </Typography>
        <div className={classes.videoContainer}>
          <iframe
            title="Ishaa"
            src="https://www.youtube.com/embed/3vHsa7MWaTI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Grid>
      <Grid item sm={12} md={6} />
    </Grid>
  </React.Fragment>
);

Prayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prayer);
