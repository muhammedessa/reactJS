import './App.css';
import Home from './Home';
import Navbar from './Navbar';  
import About from './About';  
import Posts from './Posts';

function App() {

const name = "Ahmed Essa Hameed";
const age = 38;
const salary = 3008;
const mywebsite = "facebook.com"
  return (
    <div className="App">

      <Navbar />
      {/* <Posts /> */}

      {/* <Home /> */}
      
      {/* <h1>  {name}  </h1>
      <p> { age }</p>
      <p> {salary}</p>
      <p> {[11,22,33,44]}</p>
      <a href={mywebsite}> Facebook</a><br/> */}
      {/* <About /> */}

     
    </div>
  );
}

export default App;
