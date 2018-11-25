import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import { 
  FaMoon, 
  FaMosque, 
  FaFileContract, 
  FaHandHoldingUsd, 
  FaHands
} from "react-icons/fa";
import EuroIcon from '@material-ui/icons/EuroSymbol';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationIcon from '@material-ui/icons/LocationOn';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Islam from './Islam';
import News from './News';
import Prophets from './Prophets';
import SenseOfLife from './SenseOfLife';
import WomenAndIslam from './WomenAndIslam';
import NobleQuran from './NobleQuran';
import Prayer from './Prayer';
import Donate from './Donate';
import Schedule from './Schedule';
import Location from './Location';
import Statute from './Statute';
import Imprint from './Imprint';
import './App.css';

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  icon: {
    fontSize: theme.typography.h6.fontSize
  },
  paragraph: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: "1.25rem",
    marginLeft: theme.spacing.unit / 2,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h4.fontSize,
    },
  }
});

class App extends React.Component {
  state = {
    open: true,
    categoryIslamOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    this.setState(state => ({ categoryIslamOpen: !state.categoryIslamOpen }));
  };
  
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <React.Fragment>
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, {
                    [classes.hide]: this.state.open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  component={Link}
                  to="/"
                  noWrap
                  style={{ textDecoration: "none" }}
                >
                  IMV-Landau e.V. - Islamischer multikultureller Verein Landau (الجمعية الاسلامية للثقافات المتعددة مسجد ابي بكر الصديق)
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open,
                }),
              }}
              open={this.state.open}
            >
              <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                  <ListItem button component={Link} to='/' key="Home">
                    <ListItemIcon>
                        <FaMosque className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Startseite" />
                  </ListItem>
                  
                  <ListItem button component={Link} to='/news/' key="News">
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="Neuigkeiten" />
                  </ListItem>
                  
                  <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                      <FaMoon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText inset primary="Islam" />
                    {this.state.categoryIslamOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.categoryIslamOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button component={Link} to='/islam/' className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Der Islam" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button component={Link} to='/prophets/' className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Die Propheten" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button component={Link} to='/sense-of-life/' className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Der Sinn des Lebens" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button component={Link} to='/women-and-islam/' className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Frauen im Islam" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button component={Link} to="/noble-quran/" className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Der edle Koran" />
                      </ListItem>
                    </List>
                  </Collapse>
    
                  <ListItem button component={Link} to="/prayer/" key="Prayer">
                    <ListItemIcon>
                      <FaHands className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Gebet" />
                  </ListItem>
    
                  <ListItem button component={Link} to="/donate/" key="Donate">
                    <ListItemIcon>
                      <React.Fragment>
                        <EuroIcon style={{ display: "none" }} />
                        <FaHandHoldingUsd className={classes.icon} />
                      </React.Fragment>
                    </ListItemIcon>
                    <ListItemText primary="Spenden" />
                  </ListItem>
    
                  <ListItem button component={Link} to="/schedule/" key="Activities">
                    <ListItemIcon><ScheduleIcon /></ListItemIcon>
                    <ListItemText primary="Aktivitäten" />
                  </ListItem>
              </List>
              <Divider />
              <List>
                  <ListItem button component={Link} to="/location/"  key="location">
                    <ListItemIcon>
                      <React.Fragment>
                        <LocationIcon />
                      </React.Fragment>
                    </ListItemIcon>
                    <ListItemText primary="Kontakt" />
                  </ListItem>
    
                  <ListItem button component={Link} to="/statute/" key="Statute">
                    <ListItemIcon>
                      <FaFileContract className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Satzung" />
                  </ListItem>
    
                  <ListItem button component={Link} to="/imprint/" key="Imprint">
                    <ListItemIcon><span className={classes.paragraph} >§</span></ListItemIcon>
                    <ListItemText primary="Impressum" />
                  </ListItem>
              </List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Route path="/" exact component={Home} />
              <Route path="/news/" component={News} />
              <Route path="/islam/" component={Islam} />
              <Route path="/prophets/" component={Prophets} />
              <Route path="/sense-of-life/" component={SenseOfLife} />
              <Route path="/women-and-islam/" component={WomenAndIslam} />
              <Route path="/noble-quran/" component={NobleQuran} />
              <Route path="/prayer/" component={Prayer} />
              <Route path="/donate/" component={Donate} />
              <Route path="/schedule/" component={Schedule} />
              <Route path="/location/" component={Location} />
              <Route path="/statute/" component={Statute} />
              <Route path="/imprint/" component={Imprint} />
            </main>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
