import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import BasicTextFields from './components/TextFields';
import BasicButtons from './components/Button.jsx';
import { TextFields } from '@mui/icons-material';
import CollapsibleTableMagic from './MagicDecksList.jsx';


function MagicDecks() {
    return (
        <div className="App">
            <h1 className='Header'>MTG Community Decks</h1>
            <div class="right-container">
                <p>
                Magic the Gathering deck building involves a understanding of game mechanics, metagames, and card synergies. Successful decks balance mana curves, card types, and win conditions, ensuring consistency and resilience. Players often analyze the current meta to counter popular strategies, such as aggro, control, or combo decks, tailoring their choices to gain an edge. Card selection hinges on efficiency, versatility, and synergy, aiming for optimal performance under competitive rules and formats like Standard, Modern, or Legacy. Continuous testing and refinement are key, with feedback from playtesting guiding tweaks to card choices and strategies. Ultimately, building a competitive deck in MTG is an iterative process that blends creativity, analysis, and adaptability, pushing players to innovate while mastering the evolving landscape of the game.</p>
                <p className='Table'><CollapsibleTableMagic></CollapsibleTableMagic></p>
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