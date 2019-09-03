import React, { useEffect, useState, useContext } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Fab
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import NavigationIcon from "@material-ui/icons/Navigation";

import { BookService } from "../../services/BookService";
import Banner from "../../components/Banner/Banner";
import { CartContext } from "../../contexts/CartContext";
import { LoaderContext } from "./../../contexts/LoaderContext";
import Loading from "../../components/Loading/Loading";

import "./BookDetailScreen.css";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function BookDetailScreen({ match }) {
  const [bookData, setBookData] = useState(null);
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext.setLoading(true);
    BookService.getById(match.params.id)
      .then(doc => {
        if (doc.exists) {
          setBookData({ ...doc.data(), id: doc.id });
          loaderContext.setLoading(false);
        } else {
          loaderContext.setLoading(false);
          console.log("Not found!");
        }
      })
      .catch(err => {
        console.log("Has error", err);
      });
  }, [match.params.id]);

  const classes = useStyles();
  return (
    <div className="BookDetail">
      {loaderContext.loading && <Loading />}

      {!loaderContext.loading && (
        <Container maxWidth="lg" className="container">
          {bookData && (
            <Grid container spacing={2}>
              <Grid className="Banner" item sm={12} md={4}>
                <Banner images={bookData.book_images} />
              </Grid>
              <Grid item sm={12} md={8}>
                <div className="Info">
                  <Typography variant="h5">{bookData.book_name}</Typography>

                  <Typography variant="inherit">
                    Author: {bookData.book_author}
                  </Typography>
                  <Rating value={4} readOnly={true} />
                </div>
                <Grid container className="Action">
                  <Grid item xs={12}>
                    <Typography style={{ color: "red" }} variant="h6">
                      Price: {bookData.book_price} ₫
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Fab
                          variant="extended"
                          color="secondary"
                          aria-label="add"
                          className={classes.margin}
                          onClick={() => addToCart(bookData)}
                        >
                          <NavigationIcon className={classes.extendedIcon} />
                          Add to cart
                        </Fab>
                      )}
                    </CartContext.Consumer>
                  </Grid>
                </Grid>
              </Grid>

              <Grid className="Description" sx={12}>
                <Typography variant="inherit">{bookData.book_description}</Typography>
              </Grid>
            </Grid>
          )}
        </Container>
      )}
    </div>
  );
}
