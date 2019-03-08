import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '90%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

export const CardList = ({ classes, tileData, infoHandler }) => {
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={200} spacing={12} cols={4}>
                {tileData.result && tileData.result.map((tile, index) => (
                    <GridListTile key={index}>
                        <img src={tile.bigimage} alt={tile.title} />
                        <GridListTileBar
                            title={tile.author}
                            subtitle={<span>by: {tile.description}</span>}
                            actionIcon={
                                <IconButton className={classes.icon} onClick={() => infoHandler(tile)}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

CardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);