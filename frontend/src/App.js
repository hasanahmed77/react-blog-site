import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails/BlogDetails';
import { useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([
    {'title': 'One Piece', 'author': 'Oda', 'body': 'lorem impsum....', 'id': 1},
    {'title': 'Naruto', 'author': 'Kishimoto', 'body': 'lorem ipsum......', 'id': 2},
    {'title': 'Dragon Ball Z', 'author': 'Toriyama', 'body': 'lorem ipsum......', 'id': 3},
])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" >
          <Home blogs={blogs}/>
        </Route>
        <Route exact path="/create" >
          <div>Create</div>
        </Route>
        <Route exact path="/blogs/:id" >
          <BlogDetails blogs={blogs}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
