import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Sample data structure for decks and cards
const sampleData = [
  {
    author: 'Duke',
    rating: 4.3,
    cardCount: 60,
    cards: [
      { name: 'Raffine, Scheming Seer', type: 'Creature', quantity: 4 },
      { name: 'Luminarch Aspirant', type: 'Creature', quantity: 4 },
      { name: 'Elite Spellbinder', type: 'Creature', quantity: 3 },
      { name: 'Skyclave Apparition', type: 'Creature', quantity: 4 },
      { name: 'Shadrix Silverquill', type: 'Creature', quantity: 4 },
      { name: 'Legion Angel', type: 'Creature', quantity: 3 },
      { name: 'The Wandering Emperor', type: 'Planeswalker', quantity: 3 },
      { name: 'Kaya the Inexorable', type: 'Planeswalker', quantity: 2 },
      { name: 'Thoughtseize', type: 'Spell', quantity: 4 },
      { name: 'Fatal Push', type: 'Spell', quantity: 4 },
      { name: 'Vanishing Verse', type: 'Spell', quantity: 2 },
      { name: 'Infernal Grasp', type: 'Spell', quantity: 2 },
      { name: 'The Meathook Massacre', type: 'Spell', quantity: 2 },
      { name: 'Wedding Announcement', type: 'Spell', quantity: 2 },
      { name: 'The Celestus', type: 'Artifact', quantity: 2 },
      { name: 'Watery Grave', type: 'Land', quantity: 4 },
      { name: 'Hallowed Fountain', type: 'Land', quantity: 4 },
      { name: 'Godless Shrine', type: 'Land', quantity: 4 },
      { name: 'Pathway lands', type: 'Land', quantity: 4 },
      { name: 'Field of Ruin', type: 'Land', quantity: 2 },
      { name: 'Swamp', type: 'Land', quantity: 2 },
    ],
  },
  {
    author: 'IZ NO GOBLIN',
    rating: 5.0,
    cardCount: 60,
    cards: [
      { name: 'Goblin', type: 'Creature', quantity: 40 },
      { name: 'Mountain', type: 'Land', quantity: 20 },
    ],
  },
];

function CollapsibleTableMagic() {
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

export default CollapsibleTableMagic;
