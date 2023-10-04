import pokedex from './Pokedex'
import Pokecard from './Pokecard'
function App() {
  return (
    <div>
      <Pokecard pokedex={pokedex} />
    </div>
  );
}

export default App;
