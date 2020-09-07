import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
        <div className="app">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  };
}

export default App;
