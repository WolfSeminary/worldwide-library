import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const FilterBorrowedBooks = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Get only free books" />
    </FormGroup>
  );
}
export default FilterBorrowedBooks;
