import Route from './Route/index'
import { BrowserRouter} from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
