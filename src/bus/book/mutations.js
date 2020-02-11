// Model
import {
  saveBook
} from './model';

export const mutations = {
  addBook: (_, { book }) => {
    const savedBook = saveBook(book);

    return savedBook;
  }
};
