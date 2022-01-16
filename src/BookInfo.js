import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BookInfo = (props) => {
  function fetchDifferentBooks(){
    React.useEffect(()=>{
      fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json()).then(setBooks(res))
    },[])
  }
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={fetchDifferentBooks}>
          Back to Books
        </Button>s,eqkleko
      </Stack>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Book Info
      </Typography>
      <CardContent>
        <label>Title: </label>{props.title}
        <label>Author: </label>{props.authors}
        <label>Publisher: </label>{props.publisher}
        <label>Published Date: </label>{props.publishedDate}
        <label>Description: </label>{props.description}
        <label>Num Of Pages: </label>{props.pageCount}
        <label>Language : </label>{props.language}
      </CardContent>
    </Card>)
}
export default BookInfo;