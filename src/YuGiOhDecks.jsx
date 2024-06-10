import PropTypes from 'prop-types';
import HoverRating from './components/feedback';


function YuGiOhDecks() {
    return (
        <div className="App">
            <h1 className='Header'>Yu-Gi-Oh Community Decks</h1>
            <div class="right-container">
                <p>Yu-Gi-Oh is a popular collectible card game and media franchise created by Kazuki Takahashi. Initially launched in 1996 as a manga series, it quickly expanded into an anime, trading card game (TCG), and various other merchandise. The game involves players, called Duelists, battling each other with decks of cards that represent monsters, spells, and traps. Players aim to reduce their opponent's life points to zero by strategically summoning creatures and using powerful effects. The Yu-Gi-Oh TCG, introduced by Konami in 1999, has become one of the best-selling trading card games in the world, boasting a complex set of rules and a vast array of cards. The franchise’s enduring popularity is fueled by constant updates, including new card sets, rule changes, and thematic expansions. The anime series has significantly contributed to the game's popularity, showcasing dramatic duels and evolving storylines. Yu-Gi-Oh’s blend of strategy, storytelling, and community engagement has solidified its place in gaming culture.</p>
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