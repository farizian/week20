import { Component } from 'react';
import Route from './Route/index'
import { BrowserRouter} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
