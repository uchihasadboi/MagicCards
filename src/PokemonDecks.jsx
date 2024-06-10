import PropTypes from 'prop-types';
import HoverRating from './components/feedback';


function PokemonDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Pokémon Community Decks</h1>
            <div class="right-container">
                <p>The Pokémon Trading Card Game (TCG), launched in 1996 by Nintendo, Game Freak, and Creatures, is a cornerstone of the Pokémon franchise and a beloved pastime for millions worldwide. In the Pokémon TCG, players assume the role of Trainers, using decks constructed from a vast array of cards representing different Pokémon, energy types, and trainer cards. The objective is to strategically outplay opponents by deploying Pokémon to battle, using energy cards to power attacks, and leveraging trainer cards for various advantages. With a continually expanding card pool featuring over 1,000 Pokémon species, the game offers deep strategic complexity and endless deck-building possibilities. Regularly updated through new sets and expansions, the Pokémon TCG maintains its freshness and competitive edge. The game's vibrant community and organized play events, ranging from local leagues to international championships, foster camaraderie and competition, solidifying its enduring appeal and legacy in the gaming world.</p>
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