import React, {useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Pokemons from './components/Pokemons';

const App = () => {
const { pokemons , setPokemons} = useState(null);

useEffect (() => {
 fetch('/pokemon')
 .then(res => res.json())
 .then(data => console.log(data[0]))
//  .then(res => setPokemons(res[0]))
 .catch(err => console.log(err))
  },[]);

  return (
    <div className="App">
      { pokemons && <p>{pokemons[0].id}</p>}
      {/* <Link to='/'>Home</Link>
      <Link to='/pokemons'>Pokemeons Page</Link>
      <Link to='/pokemoninfo'>Pokemon Info Page</Link>
      <Link to='/pokemonfight'>Pokemon Fight Page</Link> */}

      <Switch>
    <Route path="/pokemons/:id?" component={Pokemons}></Route>
        <Route path="/pokemoninfo">Pokemon Info Page</Route>
        <Route path="/pokemonfight">Pokemon Fight Page</Route>
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>

      <h1>Hello World!!!!</h1>
    </div>
  );
}

export default App;
