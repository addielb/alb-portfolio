import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/output.css';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));