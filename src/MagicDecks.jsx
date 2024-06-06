import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import BasicTextFields from './components/TextFields';
import BasicButtons from './components/Button.jsx';
import { TextFields } from '@mui/icons-material';


function MagicDecks(props) {
    return (
        <div className="App">
            <h1 className='Header'>MTG Community Decks</h1>
            <div class="right-container">
                <p>Magic: The Gathering (MTG) is a collectible card game created by Richard Garfield and released by Wizards of the Coast in 1993. It is widely regarded as the first trading card game and has since grown into a global phenomenon with millions of players. In MTG, players act as powerful wizards, called Planeswalkers, battling each other using decks of cards that represent spells, creatures, and magical artifacts. The game combines strategic gameplay, deck-building, and fantasy lore, with cards featuring unique artwork and mechanics. MTG is played both casually and competitively, with a thriving tournament scene and a constantly evolving metagame. Expansions are released regularly, introducing new cards and storylines. The game has also expanded into digital formats, such as Magic: The Gathering Arena, making it accessible to a broader audience. MTG’s blend of strategy, creativity, and community continues to captivate players worldwide.</p>
                <p className='Input'><BasicTextFields></BasicTextFields></p>
                <p><BasicButtons></BasicButtons></p>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>

        </div>
    );
}

export default MagicDecks