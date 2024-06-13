// CollapsibleTable.jsx
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Sample data structure for decks and cards
const sampleData = [
  {
    author: 'Cynthia',
    rating: 4.6,
    cardCount: 60,
    cards: [
      { name: 'Comfey', type: 'Pokémon', quantity: 4 },
      { name: 'Giratina V', type: 'Pokémon', quantity: 3 },
      { name: 'Giratina VSTAR', type: 'Pokémon', quantity: 2 },
      { name: 'Cramorant', type: 'Pokémon', quantity: 1 },
      { name: 'Sableye', type: 'Pokémon', quantity: 2 },
      { name: 'Radiant Greninja', type: 'Pokémon', quantity: 1 },
      { name: 'Manaphy', type: 'Pokémon', quantity: 1 },
      { name: 'Colress’s Experiment', type: 'Trainer', quantity: 6 },
      { name: 'Mirage Gate', type: 'Trainer', quantity: 3 },
      { name: 'Battle VIP Pass', type: 'Trainer', quantity: 4 },
      { name: 'Scoop Up Net', type: 'Trainer', quantity: 4 },
      { name: 'Switch', type: 'Trainer', quantity: 2 },
      { name: 'Escape Rope', type: 'Trainer', quantity: 2 },
      { name: 'Boss’s Orders', type: 'Trainer', quantity: 3 },
      { name: 'Quick Ball', type: 'Trainer', quantity: 2 },
      { name: 'Ultra Ball', type: 'Trainer', quantity: 2 },
      { name: 'Ordinary Rod', type: 'Trainer', quantity: 2 },
      { name: 'Lost Vacuum', type: 'Trainer', quantity: 2 },
      { name: 'Temple of Sinnoh', type: 'Trainer', quantity: 2 },
      { name: 'Psychic', type: 'Energy', quantity: 4 },
      { name: 'Grass', type: 'Energy', quantity: 4 },
      { name: 'Water', type: 'Energy', quantity: 3 },
      { name: 'Capture', type: 'Energy', quantity: 3 },
    ],
  },
  {
    author: 'Ash',
    rating: 1.2,
    cardCount: 1,
    cards: [
      { name: 'Pikachu', type: 'Pokémon', quantity: 1 },
    ],
  },
  // Add more deck data as needed
];

function CollapsibleTablePokemon() {
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

export default CollapsibleTablePokemon;