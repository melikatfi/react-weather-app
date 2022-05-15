import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <section className="Main">
        <section className="col-lg-9 MainSection">
            <Search/>
            <Weather Name="Paris" Temp={14}/>
        </section>
    </section>
  );
}

export default App;
