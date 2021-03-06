import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

function App() {
  return (
    <section className="Main">
        <section className="col-lg-9 MainSection">
            <Weather/>
            <div className="mt-3 text-light text-center">
                <h4>This project was coded by Melika Tofighi and is open-sourced on <a className="text-light text-decoration-none" href="https://github.com/melikatfi/react-weather-app">GitHub</a> and hosted on <a className="text-light text-decoration-none" href="https://www.netlify.com">Netlify</a></h4>
            </div>
        </section>
    </section>
  );
}

export default App;
