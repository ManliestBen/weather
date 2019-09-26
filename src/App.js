import { directive } from "@babel/types";

import React from 'react';
import Titles from '../src/components/titles';
import Form from '../src/components/form';
import Weather from '../src/components/weather';

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;