import React, { useState, useRef } from "react";
import { makeStyles, Container, TextField, Button } from "@material-ui/core";

import { Save } from "@material-ui/icons";
import PreviewImage from "../../components/PreviewImage/PreviewImage";
import { BookService } from "../../services/BookService";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    margin: theme.spacing(1)
  },
  previewImage: {
    maxHeight: 400
  }
}));

export default function InputScreen() {
  const defaultBookDetail = {
    book_name: '',
    book_author: '',
    book_price: '',
    book_description: '',
    book_images: null
  };
  const [bookDetail, setBookDetail] = useState(defaultBookDetail);
  const fileInput = useRef(null);

  const handleOnChange = event => {
    setBookDetail({
      ...bookDetail,
      [event.target.name]: event.target.value
    });
  };

  const handleOnChangeImage = () => {

    const files = fileInput.current.files;
    setBookDetail({...bookDetail, book_images: files})
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    BookService.save(bookDetail)
      .then(
        () => {
          setBookDetail(defaultBookDetail);
          console.log("Upload done");
        }
      )
      .catch(
        (err) => {
          setBookDetail(defaultBookDetail);
          console.log("Error", err)
        }
      );  
  };

  const classes = useStyles();

  return (
    <div className="InputScreen">
      <Container maxWidth="md">
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Book Name"
            name="book_name"
            value={bookDetail.book_name}
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={handleOnChange}
          />

          <TextField
            className={classes.textField}
            value={bookDetail.book_price}
            required
            id="outlined-required"
            label="Price"
            name="book_price"
            margin="normal"
            variant="outlined"
            onChange={handleOnChange}
          />

          <TextField
            className={classes.textField}
            value={bookDetail.book_author}
            required
            id="outlined-required"
            label="Author"
            name="book_author"
            margin="normal"
            variant="outlined"
            onChange={handleOnChange}
          />

          <TextField
            className={classes.textField}
            value={bookDetail.book_description}
            required
            id="outlined-textarea"
            label="Description"
            name="book_description"
            multiline
            fullWidth
            rows={6}
            autoCapitalize="true"
            margin="normal"
            variant="outlined"
            onChange={handleOnChange}
          />

          <input
            accept="image/*"
            className={classes.input}
            // value={bookDetail.book_images}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            ref={fileInput}
            onChange={handleOnChangeImage}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
          { bookDetail.book_images && <PreviewImage className={classes.previewImage} images={bookDetail.book_images} />}
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            <Save className={classes.icon} />
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
}
