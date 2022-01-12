import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function FormRow(props) {
  const arrBooks = props.arrBooks;
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>arrBooks[0]</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>arrBooks[1]</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>arrBooks[2]</Item>
      </Grid>
    </React.Fragment>
  );
}
export default function Books(props) {
  const allBooks = props.books;
  let sliceArrBook;
  let i = 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {allBooks.map((book, index) => {
          sliceArrBook = allBooks.slice(i, 3);
          i += 3;
          return (
            <Grid container item spacing={3}>
              <FormRow arrBooks={sliceArrBook} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}