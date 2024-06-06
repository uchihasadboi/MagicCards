import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './Card.jsx'

let cards = {
  magicCards: [
    {
      cardName: "Magic the Gathering",
      cardDescription: "Magic: The Gathering (MTG) is a collectible card game created by Richard Garfield and released by Wizards of the Coast in 1993. It is widely regarded as the first trading card game and has since grown into a global phenomenon with millions of players. In MTG, players act as powerful wizards, called Planeswalkers, battling each other using decks of cards that represent spells, creatures, and magical artifacts. The game combines strategic gameplay, deck-building, and fantasy lore, with cards featuring unique artwork and mechanics. MTG is played both casually and competitively, with a thriving tournament scene and a constantly evolving metagame. Expansions are released regularly, introducing new cards and storylines. The game has also expanded into digital formats, such as Magic: The Gathering Arena, making it accessible to a broader audience. MTG’s blend of strategy, creativity, and community continues to captivate players worldwide.",
      cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg",
      cardLink: <a href="MagicDecks">Check out our community decks!</a>,
      cardLink2: <a href="InputDecks">Input your deck</a>
    },
    {
      cardName: "Yu-Gi-Oh",
      cardDescription: "Yu-Gi-Oh is a popular collectible card game and media franchise created by Kazuki Takahashi. Initially launched in 1996 as a manga series, it quickly expanded into an anime, trading card game (TCG), and various other merchandise. The game involves players, called Duelists, battling each other with decks of cards that represent monsters, spells, and traps. Players aim to reduce their opponent's life points to zero by strategically summoning creatures and using powerful effects. The Yu-Gi-Oh TCG, introduced by Konami in 1999, has become one of the best-selling trading card games in the world, boasting a complex set of rules and a vast array of cards. The franchise’s enduring popularity is fueled by constant updates, including new card sets, rule changes, and thematic expansions. The anime series has significantly contributed to the game's popularity, showcasing dramatic duels and evolving storylines. Yu-Gi-Oh’s blend of strategy, storytelling, and community engagement has solidified its place in gaming culture.",
      cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg",
      cardLink: <a href="YuGiOhDecks">Check out our community decks!</a>,
      cardLink2: <a href="InputDecks">Input your deck</a>
    },
    {
      cardName: "Pokémon",
      cardDescription: "The Pokémon Trading Card Game (TCG), launched in 1996 by Nintendo, Game Freak, and Creatures, is a cornerstone of the Pokémon franchise and a beloved pastime for millions worldwide. In the Pokémon TCG, players assume the role of Trainers, using decks constructed from a vast array of cards representing different Pokémon, energy types, and trainer cards. The objective is to strategically outplay opponents by deploying Pokémon to battle, using energy cards to power attacks, and leveraging trainer cards for various advantages. With a continually expanding card pool featuring over 1,000 Pokémon species, the game offers deep strategic complexity and endless deck-building possibilities. Regularly updated through new sets and expansions, the Pokémon TCG maintains its freshness and competitive edge. The game's vibrant community and organized play events, ranging from local leagues to international championships, foster camaraderie and competition, solidifying its enduring appeal and legacy in the gaming world.",
      cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
      cardLink: <a href="PokemonDecks">Check out our community decks!</a>,
      cardLink2: <a href="InputDecks">Input your deck</a>
    },
    {
      cardName: "Hearthstone",
      cardDescription: "Hearthstone, developed by Blizzard Entertainment and released in 2014, is a digital collectible card game set in the Warcraft universe. Players choose a hero from one of ten classes, each with unique abilities and themed card sets, to construct decks and compete in strategic, turn-based battles. Hearthstone's gameplay is both accessible and deep, featuring mechanics like mana crystals for resource management and a vast array of minions, spells, and weapons. The game is known for its polished, animated graphics and engaging sound design, enhancing the immersive experience. Regular expansions and updates introduce new cards and mechanics, keeping the metagame dynamic and exciting. Hearthstone's blend of strategic depth, ease of play, and rich lore has cultivated a large, active community and a robust esports scene, with tournaments and championships drawing competitive players from around the globe, solidifying its status as a leading title in digital card gaming.",
      cardImage: "https://youre.outof.games/media/uploads/da/9a/da9a58f5-9823-444d-8303-5165190a4c91/cardback_158.png",
      cardLink: <a href="HearthstoneDecks">Check out our community decks!</a>,
      cardLink2: <a href="InputDecks">Input your deck</a>
    }
  ]
}

function App() {
  return (
    <div className="App">
      <h1 className='Header'>Games List</h1>
      <div class="right-container">
        {
          cards.magicCards.map((c) => { return <Card key={c.cardName} cardName={c.cardName} cardDescription={c.cardDescription} cardImage={c.cardImage} cardLink={c.cardLink} cardLink2={c.cardLink2}></Card> })
        }
      </div>
      <div className='Footer'>
        <a href="/">Back to Home</a>
        <p>Astral Studios 2024</p>
      </div>

    </div>
  );
}

export default App
