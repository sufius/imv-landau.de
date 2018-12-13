import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import XYZ from "ol/source/XYZ";
import * as proj from "ol/proj";
import * as source from "ol/source";
import * as geom from "ol/geom";
import * as style from "ol/style";
import * as layer from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { defaults as defaultControls, FullScreen } from "ol/control.js";
import LayerSwitcher from "ol-layerswitcher";
import './Location.scss';
import "ol/ol.css";
import "ol-layerswitcher/src/ol-layerswitcher.css";

const styles = theme => ({
  root: {
    margin: `-${theme.spacing.unit * 3}px`
  },
  map: {
    maxHeight: "50vh",
    "& .ol-full-screen": {
      top: "4.5em",
      left: ".5em",
      right: "auto"
    },
    "& .layer-switcher": {
      top: "7em",
      left: ".5em",
      right: "auto"
    }
  },
  content: {
    margin: theme.spacing.unit * 3
  }
});

class Location extends React.Component {
  componentDidMount = () => {
    var marker = [
      8.142702,
      49.206401,
      "IMV-Landau, Danziger Platz 14, 76829 Landau"
    ];
    var markerSource = new source.Vector({});
    var markerFeature = new Feature({
      geometry: new geom.Point(
        proj.transform([marker[0], marker[1]], "EPSG:4326", "EPSG:3857")
      ),
      name: marker[2]
    });
    markerSource.addFeature(markerFeature);

    var markerStyle = new style.Style({
      image: new style.Icon({
        anchor: [0.5, 41],
        anchorXUnits: "fraction", // sets anchor to 50% of icon width on x-axis
        anchorYUnits: "pixels", // sets anchor to 41 pixels from top edge of icon on y-axis
        opacity: 1,
        src: "/images/marker-icon.png"
      })
    });

    var googleLayerHybrid = new layer.Tile({
      source: new source.TileImage({
        url: "http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
      })
    });

    var defaultLayer = new TileLayer({
      title: "Map/Satellite",
      source: new XYZ({
        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      })
    });

    var markerLayer = new layer.Vector({
      source: markerSource,
      style: markerStyle
    });

    new Map({
      controls: defaultControls().extend([
        new FullScreen(),
        new LayerSwitcher()
      ]),
      target: "map",
      layers: [googleLayerHybrid, defaultLayer, markerLayer],
      view: new View({
        center: proj.fromLonLat([8.142702, 49.206401]),
        zoom: 15
      })
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div id="map" className={classes.map} />
        <div className={classes.content}>
          <Typography variant="title" paragraph gutterBottom>
            Anfahrt
          </Typography>
          <Typography paragraph>
            <strong>Anschrift</strong>
            <br />
            Islamischer multikultureller Verein Landau e.V (IMV Landau e.V.)
            <br />
            Danziger Platz 14
            <br />
            76829 Landau in der Pfalz
          </Typography>
          <Typography paragraph>
            <strong>Telefon</strong>
            <br />
            +49 6341 5575698
          </Typography>
          <Typography paragraph>
            <strong>E-Mail</strong>
            <br />
            imv-landau@web.de
          </Typography>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Location);
