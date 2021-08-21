import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    height: 350,
    cursor: "pointer"
  },
  media: {
    height: 200,
    backgroundPosition: "top",
    backgroundSize: "cover"
  },
  title: {
    fontSize: 14,
  },
  product: {
    fontSize: "14px",
    display: 'block',
    width: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    margin: theme.spacing(1,0)
  },
  price: {
    textDecoration: "line-through"
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [raise, setRaised] = useState(0);
  return (
    <Grid item xs={12} sm={3} spacing={5}>
      <Card
        className={classes.root}
        elevation={raise}
        onMouseOver={() => setRaised(3)}
        onMouseOut={() => setRaised(0)}
      >
        <CardMedia
          className={classes.media}
          image={props.searchImage}
          title={props.productName}
        />
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {props.brand}
          </Typography>
          <Typography className={classes.product} color="textSecondary">
            {props.productName}
          </Typography>
          <Typography variant="body2" component="p">
            {`Rs.${props.price}`}
            &nbsp;
            {props.price !== props.mrp && <Typography className={classes.price} variant="body2" component="span">{`Rs.${props.mrp}`}</Typography>}&nbsp;
            <Typography style={{color: "orange"}} variant="body2" component="span">{props.discountDisplayLabel}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}