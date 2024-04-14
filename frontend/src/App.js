import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import BlogDetails from './components/BlogDetails/BlogDetails';
import NewBlog from './components/NewBlog/NewBlog';
import useFetch from './hooks/useFetch';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import MyBlogs from './pages/MyBlogs';

function App() {
  const { data: blogs, isPending } = useFetch("http://localhost:3001/api/blogs")

  const { user } = useAuthContext()

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" >
              { user ? <Home blogs/> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/create" >
              <NewBlog/>
            </Route>

            <Route exact path="/blogs/:id" >
              { blogs && <BlogDetails /> }
            </Route>

            <Route exact path="/myBlogs/:id" >
              { blogs && <BlogDetails /> }
            </Route>


            <Route exact path="/signup" >
            { !user ? <Signup /> : <Redirect to="/"/> }
            </Route>

            <Route exact path="/login" >
              { !user ? <Login /> : <Redirect to="/"/> }
            </Route>

            <Route exact path="/myBlogs" >
              {/* { user ? <MyBlogs/> : <Redirect to="/"/> } */}
              <MyBlogs />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
