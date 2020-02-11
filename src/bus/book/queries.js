// Core
import { ApolloError } from 'apollo-server-express';

// Model
import {
  getBooks
} from './model';

export const queries = {
  books: () => getBooks()
};
