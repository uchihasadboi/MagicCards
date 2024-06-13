import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import CollapsibleTableYuGiOh from './YuGiOhDecksList';


function YuGiOhDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Yu-Gi-Oh Community Decks</h1>
            <div class="right-container">
                <p>Competitive Yu-Gi-Oh! TCG requires strategic deck building and a deep understanding of card interactions and metagame trends. Players create decks that balance offensive and defensive tactics, focusing on synergy and consistency. Success involves mastering top-performing archetypes, countering opponents' strategies, and adapting through effective side decking. Continuous playtesting and analysis are crucial for refining tactics and staying ahead in the ever-evolving competitive landscape. The game rewards adaptability, strategic thinking, and in-depth knowledge of both current trends and card mechanics.</p>
                <p className='Table'><CollapsibleTableYuGiOh></CollapsibleTableYuGiOh></p>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>

        </div>
    );
}

export default YuGiOhDecks