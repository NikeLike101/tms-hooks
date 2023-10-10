import React from 'react';
import MainContext from "./store";
import Todo from "./pages/todo";

function App() {

    return (
        <MainContext>
                <Todo/>
        </MainContext>
  );
}

export default App;
