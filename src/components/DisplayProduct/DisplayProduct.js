import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ProductCard from "../ProductCard"
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: theme.spacing(5, 1)
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const DisplayProduct = ({ products }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={2}>
                    {
                        products.map((product) => <ProductCard key={product.productId} {...product} />)
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default DisplayProduct;