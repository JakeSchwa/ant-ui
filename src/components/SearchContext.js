import { createContext } from 'react';

const searchContext = createContext({
    books: [],
    searchBooks: () => {},
})

export default searchContext