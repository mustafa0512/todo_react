import * as React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MediaCard({name, img, id, removeCard, handleOpen}) {
  return (
    <Card sx={{ maxWidth: 270, marginTop: '20px' }}>
      <CardMedia
        sx={{ height: "150px", objectFit: 'contain' }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: "12px"}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeCard(id)} sx={{ fontSize: '12px'}} variant="outlined" startIcon={<DeleteIcon />} size="small">delete</Button>
        <Button onClick={() => handleOpen(id, name)}  sx={{ fontSize: '12px'}} variant="outlined" startIcon={<ModeEditOutlineIcon />} size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}

