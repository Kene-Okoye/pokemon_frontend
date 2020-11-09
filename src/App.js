import React, {useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
//import axios from 'axios';
import Pokemons from './components/Pokemons';

const App = () => {
const [pokemons , setPokemons] = useState(null);
console.log({pokemons: pokemons})

useEffect (() => {
  fetch('/pokemon')
  .then(res => res.json())
  .then(data => setPokemons(data))
  .catch(err => console.log(err))
},[]);

  return (
    <div className="App">
      {/* { pokemons && <p>{pokemons[0].id}</p>}
      <Link to='/'>Home</Link>
      <Link to='/pokemons'>Pokemeons Page</Link>
      <Link to='/pokemoninfo'>Pokemon Info Page</Link>
      <Link to='/pokemonfight'>Pokemon Fight Page</Link> */}

      <Switch>
        <Route path="/pokemons/:id?" render ={(props) => <Pokemons pokemons = {pokemons} {...props}/>} />
        <Route path="/pokemoninfo">Pokemon Info Page</Route>
        <Route path="/pokemonfight">Pokemon Fight Page</Route>
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
