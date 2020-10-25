import React from 'react';
import './App.css';
import Money from './components/Money'
import Header from './components/Header'
import Container from '@material-ui/core/Container';
import BookForm from './components/BookForm'

function App() {
  return (
      <div className="App">
        <Header />
        <Container maxWidth="sm">
        <BookForm />
        <Money />
        </Container>
      </div>
  );
}

export default App;
