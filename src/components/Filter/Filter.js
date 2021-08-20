import React, { PureComponent, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { formConfig } from "./config";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Radio, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { filterProducts } from "../../actions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: theme.pallete
    }
}));

const FilterList = props => {
    const classes = useStyles();

    const [categories, setCategories] = useState([]);
    const [gender, setGender] = useState(null);
    const [brands, setBrands] = useState([]);

    const { filterProducts } = props;

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        let filteredCategories, filteredBrands, genderChange;
        
        if (checked) {
            if (name === "categories") {
                filteredCategories = [...categories, value];
                setCategories(filteredCategories);
            } else if (name === "brand") {
                filteredBrands = [...brands, value];
                setBrands(filteredBrands);
            } else {
                genderChange=value;
                setGender(genderChange);
            }
        } else {
            if (name === "categories") {
                filteredCategories = categories.filter(category => category !== value);
                setCategories(filteredCategories);
            } else if (name === "brand") {
                filteredBrands = brands.filter(category => category !== value);
                setBrands(filteredBrands);
            }
        }
    }

    useEffect(() => {
        filterProducts({ gender, categories, brands });
    }, [gender, categories, brands, filterProducts]);

    const Field = props => {
        return (
            <Grid item xs={12} spacing={2}>
                <FormControlLabel
                    control={
                        props.type === "radio"
                            ?
                            <Radio checked={gender === props.value} onChange={handleChange} value={props.value} name={props.name} />
                            :
                            <Checkbox checked={props.name === "categories" ? categories.includes(props.value) : brands.includes(props.value)} onChange={handleChange} value={props.value} name={props.name} />
                    } label={props.label} />
            </Grid>
        );
    };
    return (
        <div className={classes.root}>
            <Typography variant="h5">Filter</Typography>
            <Grid container spacing={2}>
                {
                    formConfig.map(node => (
                        <Grid key={node.name} item xs={12} spacing={2}>
                            <Typography variant="h6">{node.label}</Typography>
                            <Grid container spacing={2}>
                                {node.child.map(input => (
                                    <Grid container item xs={12} justifyContent="center">
                                        <FormGroup key={input.label}>
                                            <Field {...input} name={node.name} />
                                        </FormGroup>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default connect(null, { filterProducts })(FilterList);