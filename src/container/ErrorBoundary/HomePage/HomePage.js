import React, { PureComponent } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "../../../components/Header/Header";
import MainContent from "../MainContent/MainContent";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const HomePage = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={12} spacing={3}>
                    <Header />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <MainContent />
                </Grid>
            </Grid>
        </div>
    )
};

export default HomePage;