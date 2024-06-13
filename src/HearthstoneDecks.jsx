import PropTypes from 'prop-types';
import HoverRating from './components/feedback';
import CollapsibleTableHearthstone from './HearthstoneDecksList';


function HearthstoneDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Hearthstone Community Decks</h1>
            <div class="right-container">
                <p>Competitive Hearthstone demands strategic deck building and mastery of card synergies to outmaneuver opponents. Players craft decks around key classes and themes, balancing aggressive, control, and combo strategies to adapt to the evolving metagame. Success hinges on understanding card interactions, countering popular archetypes, and anticipating opponents' moves. Effective deck refinement through continuous playtesting and analysis is essential, ensuring consistent performance and flexibility. The competitive landscape rewards those with strategic foresight, adaptability, and a deep knowledge of both card mechanics and current trends, pushing players to innovate and refine their tactics for a dynamic and challenging gameplay experience.</p>
                <p className='Table'><CollapsibleTableHearthstone></CollapsibleTableHearthstone></p>
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