import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <section className="Main">
        <section className="col-lg-9 MainSection">
            <Search/>
            <Weather Name="Paris" Temp={14}/>
            <div className="row justify-content-evenly">
                <Forecast Temp={14}/>
                <Forecast Temp={16}/>
                <Forecast Temp={18}/>
                <Forecast Temp={20}/>
                <Forecast Temp={16}/>
                <Forecast Temp={14}/>
            </div>
        </section>
    </section>
  );
}

export default App;
