import PropTypes from 'prop-types';
import HoverRating from './components/feedback';


function HearthstoneDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Hearthstone Community Decks</h1>
            <div class="right-container">
                <p>Hearthstone, developed by Blizzard Entertainment and released in 2014, is a digital collectible card game set in the Warcraft universe. Players choose a hero from one of ten classes, each with unique abilities and themed card sets, to construct decks and compete in strategic, turn-based battles. Hearthstone's gameplay is both accessible and deep, featuring mechanics like mana crystals for resource management and a vast array of minions, spells, and weapons. The game is known for its polished, animated graphics and engaging sound design, enhancing the immersive experience. Regular expansions and updates introduce new cards and mechanics, keeping the metagame dynamic and exciting. Hearthstone's blend of strategic depth, ease of play, and rich lore has cultivated a large, active community and a robust esports scene, with tournaments and championships drawing competitive players from around the globe, solidifying its status as a leading title in digital card gaming.</p>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>

        </div>
    );
}

export default HearthstoneDecks