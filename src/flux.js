import PhotoStore from './stores/photo-store';
import PhotoActions from './actions/photo-actions';
import { Flummox } from 'flummox';

class App extends Flummox {
  constructor() {
    super();

    this.createActions('photo', PhotoActions);
    this.createStore('photo', PhotoStore, this);
  }
}

export default App;