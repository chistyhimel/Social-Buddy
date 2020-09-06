import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsContainer from "./Components/PostsContainer/PostsContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetails from "./Components/PostDetails/PostDetails";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      
        <Switch>
        <Route path="/home">
             <PostsContainer></PostsContainer>
          </Route>

          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>

          <Route exact path="/">
             <PostsContainer></PostsContainer>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
