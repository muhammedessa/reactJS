const Home = ()=>{

    

const clickMe = (e)=>{
    console.log(e.target);
}

const clickWithParams = (firstname,e)=>{
    console.log('First name is ' + firstname + e);
}
const clickWithTwoParams = (firstname, secondName) => {
    console.log('First name is ' + firstname + ' And second name is ' + secondName);
    }

    return(
        <div className="container">
            <h1>Home page</h1><br/>
            <button type="button" onClick={clickMe} className="btn btn-primary">Primary</button><br />

            <button type="button" onClick={ (e) => clickWithParams('Muhammed',e) } className="btn btn-danger">Danger</button>

            <button type="button" onClick={() => clickWithTwoParams('Muhammed', 'Essa')} className="btn btn-info">Danger</button>

        </div>
    );
}

export default Home;