import React, { useContext } from "react";
import {
  makeStyles,
  Container,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  CardMedia
} from "@material-ui/core";

import "./CartScreen.css";
import { CartContext } from "../../contexts/CartContext";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  image: {
    width: 100,
    height: 100
  }
}));

export default function CartScreen({ match }) {
  let cartContext = useContext(CartContext);
  let cart = cartContext.cart;

  const classes = useStyles();
  return (
    <div className="Cart">
      <Container maxWidth="lg">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Book name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(item => (
                <TableRow key={item.id}>
                  <TableCell align="left" component="th" scope="row">
                    <CardMedia
                      className={classes.image}
                      component="img"
                      alt={item.book_name}
                      image={item.book_images[0]}
                      title={item.book_name}
                    />
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    {item.book_name}
                  </TableCell>
                  <TableCell align="center">{item.book_price}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
}
