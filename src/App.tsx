import React from 'react';
import MainContext from "./store";
import TodoPage from "./router/pages/todoPage";
import Router from "./router/Router";

function App() {

    return (

        <MainContext>
            <Router/>
        </MainContext>
  );
}

export default App;
