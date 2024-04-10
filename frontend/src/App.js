import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails/BlogDetails';
import { useEffect, useState } from 'react';
import NewBlog from './components/NewBlog/NewBlog';
import useFetch from './hooks/useFetch';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const { data: blogs, isPending } = useFetch("http://localhost:3001/api/blogs")

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" >
              <Home blogs/>
            </Route>

            <Route exact path="/create" >
              <NewBlog/>
            </Route>

            <Route exact path="/blogs/:id" >
              { blogs && <BlogDetails /> }
            </Route>

            <Route exact path="/signup" >
              <Signup />
            </Route>

            <Route exact path="/login" >
              <Login />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
