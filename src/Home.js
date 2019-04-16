import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Moment from "react-moment";
import "moment/locale/de";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  lazyLoad: true,
  speed: 500,
  touchThreshold: 20,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  tableWrapper: {
    width: "100%",
    maxWidth: "500px",
    overflowX: "auto",
    marginBottom: theme.spacing.unit
  },
  tableCell: {
    paddingRight: 0,
    "&:last-child": {
      paddingRight: 0
    }
  },
  timingsColumn: {
    display: "flex",
    flexDirection: "column"
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  sliderContainer: {
    padding: theme.spacing.unit * 4
  },
  slider: {
    width: "100%",
    "& img": {
      margin: "auto"
    },
    "& .slick-prev:before, & .slick-next:before": {
      color: "black"
    }
  },
  center: {
    alignSelf: "center"
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      photos: []
    };
  }

  componentDidMount = () => {
    fetch(
      window.location.protocol + "//api.aladhan.com/v1/timings?latitude=49.1955335&longitude=8.1116213&method=3&address=Landau%2FGermany"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response.data });
      });
/*
    fetch("/fetch/photos")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return { data: [] };
        }
      })
      .then(response => {
        const photos = response.data.map(photo => {
          return "/uploads/photos/" + photo;
        });
        this.setState({ photos });
      });
*/
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img
          src="/images/bismillah-03.png"
          alt="Bismiallah"
          style={{
            width: "300px",
            maxWidth: "100%",
            margin: "0 auto 16px",
            display: "block"
          }}
        />

        <Grid container spacing={24}>
          <Grid
            className={classes.timingsColumn}
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            xl={3}
          >
            <Typography variant="h5" gutterBottom>
              Gebetszeiten
            </Typography>
            {this.state.data ? (
              <React.Fragment>
                <Typography variant="body1" component="span" gutterBottom>
                  für den&nbsp;
                  <Moment unix format={`LL`}>
                    {this.state.data.date.timestamp}
                  </Moment>
                  &nbsp;
                  <span title="Anno Domini (Im Jahre des Herrn) - nach christlicher Zeitrechnung basierend auf dem gregorianischen Kalender">
                    {this.state.data.date.gregorian.designation.abbreviated}
                  </span>
                  &nbsp;
                  <Typography variant="caption" style={{ display: "inline" }}>
                    ({this.state.data.date.hijri.month.number}&nbsp;
                    <span title="{this.state.data.date.hijri.month.ar}">
                      {this.state.data.date.hijri.month.en}
                    </span>
                    &nbsp;
                    <span title="Anno Hegirae (Im Jahr der Hedschra) - nach islamischer Zeitrechnung basierend auf der Auswanderung des Propheten Mohammeds (saas) von Mekka nach Medina">
                      {this.state.data.date.hijri.designation.abbreviated}
                    </span>
                    )
                  </Typography>
                </Typography>
                <Typography variant="body1" paragraph gutterBottom>
                  in Landau (Pfalz), Deutschland
                </Typography>

                <Paper className={classes.tableWrapper}>
                  <Table className={classes.table}>
                    <TableBody>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Fajr (فجر)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Fajr}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Sonnenaufgang (شروق)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Sunrise}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Zhuhr (ظهر)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Dhuhr}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Asr (عصر)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Asr}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Maghrib (مغرب)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Maghrib}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Isha (عشاء)
                        </TableCell>
                        <TableCell>{this.state.data.timings.Isha}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell classes={{ root: classes.tableCell }}>
                          Mitternacht (الليل)
                        </TableCell>
                        <TableCell>
                          {this.state.data.timings.Midnight}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>

                <Typography variant="caption" paragraph gutterBottom>
                  Berechnung gemäß: Islamische Weltliga/Muslim World League
                  (MWL)
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CircularProgress
                  className={classNames(classes.progress, classes.center)}
                />
                <Typography
                  variant="body1"
                  className={classes.center}
                  paragraph
                  gutterBottom
                >
                  werden geladen...
                </Typography>
              </React.Fragment>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
            <Typography variant="h5" gutterBottom>
              Herzlich Willkommen
            </Typography>

            <Typography variant="subtitle2" paragraph>
              Völkerverständigung, Dialog und Vielfalt sind die gottgewollte
              Form der menschlichen Koexistenz.
            </Typography>

            <Typography variant="subtitle2">
              Im Koran 49:13 heißt es:
            </Typography>

            <Typography variant="subtitle2" paragraph>
              <i>
                „O ihr Menschen, Wir haben euch aus Mann und Frau erschaffen und
                euch zu Völkern und Stämmen gemacht, auf dass ihr einander
                kennen lernen möget.“
              </i>
            </Typography>

            <Typography variant="h4" gutterBottom style={{ direction: "rtl" }}>
              السلام عليكم ورحمة الله وبركاته
            </Typography>

            <Typography variant="h6" paragraph style={{ direction: "rtl" }}>
              التفاهم الدولي والحوار والتنوع هوشكل من أشكال التعايش بين البشر
            </Typography>

            <Typography variant="h6" style={{ direction: "rtl" }}>
              يقول اللة تعالي في قرأنية:
            </Typography>

            <Typography variant="h6" paragraph style={{ direction: "rtl" }}>
              "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى
              وَجَعَلْنَاكُمْ شُعُوباً وَقَبَائِلَ لِتَعَارَفُوا"
            </Typography>
          </Grid>
        </Grid>
        {this.state.photos.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Galerie
            </Typography>
            <div className={classes.sliderContainer}>
              <Slider {...settings} className={classes.slider}>
                {this.state.photos.map((photo, index) => (
                  <div key={index}>
                    <img key={index} alt="" src={photo} />
                  </div>
                ))}
              </Slider>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
