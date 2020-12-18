import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pokemons from './components/Pokemons';
import Home from './components/Home'
import classNames from 'classnames';
import Particles from 'react-particles-js'; 
import PokemonFight from './components/PokemonFight';

const useStyles =  makeStyles((theme) => ({
  gridMargin: {
      [theme.breakpoints.up('sm')]: {
          margin: '10px 50px'
      },
      [theme.breakpoints.down('sm')]: {
        margin: '10px 20px'
    }
    },
}))



const App = () => {
const [pokemons , setPokemons] = useState(null);
let history = useHistory();
console.log({pokemons: pokemons})
const classes = useStyles();

// Select 2 Pokemons 
const [ selectedPokemon, setSelectedPokemon ] = useState({player: null, opponent: null});
console.log({selectedPokemon})

useEffect (() => {
  if (selectedPokemon.player && selectedPokemon.opponent) {
    history.push ('/pokemonfight')
  }
}, [selectedPokemon])


useEffect (() => {
  fetch('/api/pokemon')
  .then(res => res.json())
  .then(data => setPokemons(data))
  .catch(err => console.log(err))
},[]);

  return (
    <div className="App" className={classNames(classes.gridMargin)} >
      <Particles className="particles" 
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "https://images8.alphacoders.com/770/770462.png",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover"
        }
      }}     /> 
<Switch>
        <Route path="/pokemons/:id?" render ={(props) => <Pokemons pokemons = {pokemons} {...props} onSelect ={ setSelectedPokemon } selectedPokemon = {selectedPokemon}/>} />
        <Route path="/pokemoninfo">Pokemon Info Page</Route>
        <Route path="/pokemonfight" ><PokemonFight pokemons = {pokemons} selectedPokemon = {selectedPokemon} /></Route>
        <Route exact path="/" render ={(props) => <Home pokemons = {pokemons} {...props}/>}></Route>
      </Switch>
    </div>
  );
}

export default App;
