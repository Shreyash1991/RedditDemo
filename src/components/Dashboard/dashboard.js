import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CardList from '../Fc/CardList';
import { DialogBox } from '../Fc/Dialog';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        width: 400,
        height: 250

    },
});

class Dashboard extends React.Component {
    state = {
        open: false,
        dialogOpen: false,
        selectedInfo: {},
        reddit_options: [
            {
                data: "alternativeart",
                label: "Alternative Art"
            },
            {
                data: "pics",
                label: "Pics"
            },
            {
                data: "gifs",
                label: "Gifs"
            },
            {
                data: "adviceanimals",
                label: "Advice Animals"
            },
            {
                data: "cats",
                label: "Cats"
            },
            {
                data: "images",
                label: "Images"
            },
            {
                data: "photoshopbattles",
                label: "Photoshop Battles"
            },
            {
                data: "hmmm",
                label: "Hmmm"
            },
            {
                data: "all",
                label: "All"
            },
            {
                data: "aww",
                label: "Aww"
            }
        ],

    };

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.infoHandler = this.infoHandler.bind(this);
    }

    componentWillMount() {
        this.props.requestReddits('pics');
    }

    clickHandler(item) {    
        this.props.requestReddits(item.data);
        this.handleDrawerClose();
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    infoHandler = (info) => {
       
        this.setState({ dialogOpen: true, selectedInfo: info });
    }

    render() {
        const { classes, theme, result } = this.props;
        const { dialogOpen, open, reddit_options, selectedInfo } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Reddits
            </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {reddit_options.map((obj, index) => (
                            <ListItem button key={obj.data} onClick={() => this.clickHandler(obj)}>
                                <ListItemText primary={obj.label} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <CardList classes={classes} tileData={result} infoHandler={this.infoHandler} />
                </main>
                <DialogBox open={dialogOpen}
                    handleClose={this.handleClose}
                    info={selectedInfo} classes={classes} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);