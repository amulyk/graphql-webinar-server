// Model
import {
  removeBook,
  saveBook, updateBook
} from './model';

export const mutations = {
  addBook: (_, { book }) => {
    const savedBook = saveBook(book);

    return savedBook;
  },
  removeBook: (_, { id }) => {
    return removeBook(id);
  },
  updateBook: (_, { id, book }) => {
    const updatedBook = updateBook(id, book);

    return updatedBook;
  }
};
