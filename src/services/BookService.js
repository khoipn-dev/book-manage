import FirebaseConnect from "./../FirebaseConnect";
import { StorageService } from "./StorageService";

const db = FirebaseConnect.firestore();
const bookRef = db.collection("books");

const save = async book => {
  let images = [];
  let promise = Object.entries(book.book_images).map(async ([key, val]) => {
    try {
      const snapshot = await StorageService.saveImage(val);
      const url = await snapshot.ref.getDownloadURL();
      images.push(url);
    } catch (error) {
      return error;
    }
  });

  await Promise.all(promise);
  book.book_images = images;
  return bookRef.add(book);
};

const getAll = () => {
  return bookRef.get();
};

const getFirst = () => {
  return bookRef
    .orderBy("book_name")
    .limit(12)
    .get();
};

const getNext = lastVisible => {
  return bookRef
    .orderBy("book_name")
    .startAfter(lastVisible)
    .limit(8)
    .get();
};

const getById = id => {
  const docRef = bookRef.doc(id);
  return docRef.get();
};

export const BookService = {
  save,
  getAll,
  getById,
  getFirst,
  getNext
};
