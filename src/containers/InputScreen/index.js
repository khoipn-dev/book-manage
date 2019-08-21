import React, { useState } from "react";
import { makeStyles, Container, TextField, Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    margin: theme.spacing(1)
  }
}));

export default function InputScreen() {
  const [bookDetail, setBookDetail] = useState({});
  const classes = useStyles();

  return (
    <div className="InputScreen">
      <Container maxWidth="md">
        <form noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Book Name"
            name="name"
            value={bookDetail.name}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Price"
            name="price"
            margin="normal"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Author"
            name="author"
            margin="normal"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-textarea"
            label="Description"
            name="description"
            multiline
            fullWidth
            rows={4}
            autoCapitalize="true"
            margin="normal"
            variant="outlined"
          />
          <Button
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
