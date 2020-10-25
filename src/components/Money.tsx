import React from 'react'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetBooks {
      books {
          title
      }
  }
`;

function Money() {

    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.books)


    return data.books.map((book: any) => {
        return (<div>
            {book.title}
        </div>)
    })
}

export default Money
