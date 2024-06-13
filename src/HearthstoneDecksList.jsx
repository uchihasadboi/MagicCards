import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Sample data structure for decks and cards
const sampleData = [
  {
    author: 'Gregory',
    rating: 4.9,
    cardCount: 60,
    cards: [
      { name: 'Death Knight (Blood)', type: 'Hero', quantity: 1 },
      { name: 'Blood Boil', type: 'Spell', quantity: 2 },
      { name: 'Heart Strike', type: 'Spell', quantity: 2 },
      { name: 'Hematurge', type: 'Spell', quantity: 2 },
      { name: 'Obliterate', type: 'Spell', quantity: 2 },
      { name: 'Vampiric Blood', type: 'Spell', quantity: 2 },
      { name: 'Death Strike', type: 'Spell', quantity: 2 },
      { name: 'Corpse Explosion', type: 'Spell', quantity: 2 },
      { name: 'Deathchiller', type: 'Spell', quantity: 2 },
      { name: 'Patchwerk', type: 'Spell', quantity: 2 },
      { name: 'Alexandros Mograine', type: 'Spell', quantity: 2 },
      { name: 'Hematurge', type: 'Utility', quantity: 2 },
      { name: 'School Teacher', type: 'Utility', quantity: 2 },
      { name: 'Gnome Muncher', type: 'Utility', quantity: 2 },
      { name: 'Blood Boil Brute', type: 'Minion', quantity: 2 },
      { name: 'Lady Deathwhisper', type: 'Minion', quantity: 2 },
      { name: 'Sylvanas the Accused', type: 'Minion', quantity: 2 },
      { name: 'Theotar, the Mad Duke', type: 'Greater Minion', quantity: 1 },
      { name: 'Prince Renathal', type: 'Greater Minion', quantity: 1 },
    ],
  },
];

function CollapsibleTableHearthstone() {
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

export default CollapsibleTableHearthstone;