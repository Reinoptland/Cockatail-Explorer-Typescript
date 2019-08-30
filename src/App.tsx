import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import CocktailList from './components/containers/CocktailList.tsx'
import CocktailDetails from './components/containers/CocktailDetails.tsx'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/' exact component={CocktailList} />
          <Route path='/cocktails/:id' component={CocktailDetails} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
