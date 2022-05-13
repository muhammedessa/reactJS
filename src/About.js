import { useState } from "react";

const About = ()=>{

    // let firstname = 'Muhammed';
    const [firstname, setFirstname] = useState('Muhammed');
    const [secondname, setSecondname] = useState('Essa');
    const [age, setAge] = useState(37);


    const changeName = ()=>{
        setFirstname('Ahmed');
        setSecondname('Osama');
        setAge(40);
    }
    return(
        <div className="container">
            <h1>About page</h1>  
            <h1>{firstname}</h1>  <br />
            <h1>{secondname}</h1>  <br />
            <h1>{age}</h1>  <br />

            <button onClick={changeName} type="button" className="btn btn-primary">Primary</button> 
        </div>
     

    );
}

export default About;