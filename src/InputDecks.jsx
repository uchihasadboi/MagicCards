import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import BasicTextFields from './components/TextFields';
import BasicButtons from './components/Button.jsx';
import { TextFields } from '@mui/icons-material';


function InputDecks(props) {
    return (
        <div className="App">
            <h1 className='Header'>Input Your Deck!</h1>
            <div class="right-container">
                <p className='DeckInput'><BasicTextFields></BasicTextFields></p>
                <p className='button'><BasicButtons></BasicButtons></p>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>

        </div>
    );
}

export default InputDecks