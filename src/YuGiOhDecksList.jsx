import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Sample data structure for decks and cards
const sampleData = [
  {
    author: 'Yugi',
    rating: 2.3,
    cardCount: 40,
    cards: [
      { name: 'La Jinn the Mystical Genie of the Lamp', type: 'Monster', quantity: 3 },
      { name: 'Battle Ox', type: 'Monster', quantity: 3 },
      { name: 'Gemini Elf', type: 'Monster', quantity: 3 },
      { name: 'Vorse Raider', type: 'Monster', quantity: 3 },
      { name: 'Goblin Attack Force', type: 'Monster', quantity: 2 },
      { name: 'Dark Elf', type: 'Monster', quantity: 2 },
      { name: 'Kycoo the Ghost Destroyer', type: 'Monster', quantity: 2 },
      { name: 'Man-Eater Bug', type: 'Monster', quantity: 2 },
      { name: 'Raigeki', type: 'Spell', quantity: 1 },
      { name: 'Dark Hole', type: 'Spell', quantity: 1 },
      { name: 'Monster Reborn', type: 'Spell', quantity: 1 },
      { name: 'Pot of Greed', type: 'Spell', quantity: 1 },
      { name: 'Change of Heart', type: 'Spell', quantity: 1 },
      { name: 'Heavy Storm', type: 'Spell', quantity: 1 },
      { name: 'Mystical Space Typhoon', type: 'Spell', quantity: 1 },
      { name: 'Axe of Despair', type: 'Spell', quantity: 1 },
      { name: 'Fissure', type: 'Spell', quantity: 1 },
      { name: 'Swords of Revealing Light', type: 'Spell', quantity: 1 },
      { name: 'The Forceful Sentry', type: 'Spell', quantity: 1 },
      { name: 'Snatch Steal', type: 'Spell', quantity: 1 },
      { name: 'Mirror Force', type: 'Trap', quantity: 1 },
      { name: 'Trap Hole', type: 'Trap', quantity: 1 },
      { name: 'Magic Cylinder', type: 'Trap', quantity: 1 },
      { name: 'Torrential Tribute', type: 'Trap', quantity: 1 },
      { name: 'Call of the Haunted', type: 'Trap', quantity: 1 },
      { name: 'Seven Tools of the Bandit', type: 'Trap', quantity: 1 },
      { name: 'Dust Tornado', type: 'Trap', quantity: 1 },
      { name: 'Sakuretsu Armor', type: 'Trap', quantity: 1 },
    ],
  },
  {
    author: 'Kaiba',
    rating: 5.0,
    cardCount: 40,
    cards: [
      { name: 'Blue Eyes White Dragon', type: 'Creature', quantity: 35 },
      { name: 'Pot of Greed', type: 'Spell', quantity: 5 },
    ],
  },
];

function CollapsibleTableYuGiOh() {
  const [openRow, setOpenRow] = useState(null);

  const handleClick = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Author</TableCell>
            <TableCell align="right">Average Rating</TableCell>
            <TableCell align="right">Card Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((deck, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleClick(index)}
                  >
                    {openRow === index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{deck.author}</TableCell>
                <TableCell align="right">{deck.rating}</TableCell>
                <TableCell align="right">{deck.cardCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                  <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="cards">
                        <TableHead>
                          <TableRow>
                            <TableCell>Card Name</TableCell>
                            <TableCell align="left">Card Type</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {deck.cards.map((card, cardIndex) => (
                            <TableRow key={cardIndex}>
                              <TableCell component="th" scope="row">{card.name}</TableCell>
                              <TableCell align="left">{card.type}</TableCell>
                              <TableCell align="right">{card.quantity}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTableYuGiOh;