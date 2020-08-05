import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Router from "react-router-dom";
import BookList from './components/Book/BookList';
import { AddBook } from './components/Book/AddBook';


function App() {
  return (
    <div className="App">
      <br />
      <h1>
        Welcome to Library
    </h1>
      <br />
      <br /><br /><br />
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStnvzyEVX9-L1oxmgxEnblIPizXSioEXA_Iw&usqp=CAU" className="App-logo" alt="logo" /> 

      {/* <Router>
       <Route exact path="/" component={AddBook}/>
       <Route eaxct path="/view" component={BookList}/>
     </Router> */}
       {/* <div className="background" >
     <h1>hello</h1>
         </div>  */}
    </div>
  );
}

export default App;
