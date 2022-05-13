import { BrowserRouter,Link,Route,Routes } from "react-router-dom";

import Home from './Home';
import Posts from './Posts';
import About from './About'; 
import PostInfo from './PostInfo';
import Create from './Create';
import Edit from './Edit';
import Search from './Search';

const Navbar = ()=>{
    return(
<div>
    <BrowserRouter>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active"  >Home</Link>
                            </li>
                            <li className="nav-item">
                                 <Link to="/posts" className="nav-link"  >Posts</Link>
                            </li> 
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link"  >Create</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/search" className="nav-link"  >Search</Link>
                                </li> 
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"  >About</Link>
                            </li> 
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
                <Routes>
                    <Route path="/" element={<Home /> }></Route>
                    <Route path="/posts" element={<Posts />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/create" element={<Create />}></Route>
                    <Route path="/posts/:id" element={<PostInfo />}></Route>
                    <Route path="/edit/:id" element={<Edit />}></Route>
                    <Route path="/about" element={<About />}></Route>

                </Routes>

   </BrowserRouter>
</div>
    
    );
}

export default Navbar;