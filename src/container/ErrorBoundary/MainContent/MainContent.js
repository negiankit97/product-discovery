import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DisplayProduct from "../../../components/DisplayProduct/DisplayProduct";
import { fetchProducts } from "../../../actions";
import { connect } from "react-redux";
import FilterList from "../../../components/Filter/Filter";
import Loader from "../../../components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
    root: {
        //   marginTop: theme.spacing(7,0)  
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const MainContent = props => {
    const classes = useStyles();

    const { loading, products, fetchProducts, filteredProducts, isActiveFilter } = props;

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            {loading && <Loader />}
            <Grid item xs={12} sm={3}>
                <FilterList />
            </Grid>
            <Grid item xs={12} sm={9}>
                <DisplayProduct products={isActiveFilter ? filteredProducts : products} activeFilter={isActiveFilter} />
            </Grid>
        </>
    )
}

const mapDispatchToProps = state => ({
    products: state.products,
    loading: state.loading,
    filteredProducts: state.filteredProducts,
    isActiveFilter: state.isActiveFilter
})

export default connect(mapDispatchToProps, { fetchProducts })(MainContent);