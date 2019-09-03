import React, { useState, useEffect, useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";

import BookItem from "../../components/BookItem/BookItem";
import { BookService } from "../../services/BookService";
import { LoaderContext } from "./../../contexts/LoaderContext";
import Loading from "../../components/Loading/Loading";
import LoadMoreIcon from "../../components/LoadMoreIcon/LoadMoreIcon";

import "./HomeScreen.css";

export default function HomeScreen({ match }) {
  const [books, setBooks] = useState([]);

  const loaderContext = useContext(LoaderContext);

  let lastVisible = null;

  useEffect(() => {
    loaderContext.setLoading(true);
    BookService.getFirst()
      .then(documentSnapshots => {
        lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        setBooks(documentSnapshots.docs);
        loaderContext.setLoading(false);
      })
      .catch(() => {
        loaderContext.setLoading(true);
      });
  }, []);

  const loadMore = () => {
    BookService.getNext(lastVisible).then(documentSnapshots => {
      lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      setBooks(books.concat(documentSnapshots.docs));
    });
  };

  return (
    <div className="HomeScreen" onClick={loadMore}>
      {loaderContext.loading && <Loading loading={loaderContext.loading} />}

      {!loaderContext.loading && (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true}
          loader={<LoadMoreIcon />}
        >
          <Container maxWidth="md">
            <Grid container spacing={3}>
              {books.map((book, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  {console.log(book.data())}
                  <BookItem match={match} bookDoc={book} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </InfiniteScroll>
      )}
    </div>
  );
}
