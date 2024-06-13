import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import CollapsibleTablePokemon from './PokemonDecksList';


function PokemonDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Pokémon Community Decks</h1>
            <div class="right-container">
                <p>Competitive Pokémon TCG involves strategic deck building, focusing on synergy between Pokémon, Trainer, and Energy cards. Players construct decks around key Pokémon with powerful abilities or attacks, balancing them with supportive Trainer cards and the right Energy types. Success requires understanding the metagame, countering popular decks, and adapting through effective side decking. Continuous playtesting and refinement are crucial for maintaining consistency and optimizing strategies. The competitive scene rewards players who can anticipate trends, exploit weaknesses, and adapt their tactics, showcasing a blend of strategic foresight and in-depth knowledge of the game’s mechanics and current meta.</p>
                <p className='Table'><CollapsibleTablePokemon></CollapsibleTablePokemon></p>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>

        </div>
    );
}

export default PokemonDecks