import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ProductCard from "../ProductCard"
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(15, 1)
    },
    mssg: {
        height: "100%",
        paddingTop: theme.spacing(6)
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
}));

const DisplayProduct = ({ products, activeFilter }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container item spacing={3} alignItems="center">
                {activeFilter && !products.length && <Typography className={classes.mssg} variant="h4" component="p">No products found for the active filter.</Typography>}
                {!!products.length && (<Grid container item xs={12} spacing={1}>
                    <Paper className={classes.paper} variant="outlined" elevation={0}>
                        {
                            products.map((product) => <ProductCard key={product.productId} {...product} />)
                        }
                    </Paper>
                </Grid>
                )}
            </Grid>
        </div>
    )
}

export default DisplayProduct;