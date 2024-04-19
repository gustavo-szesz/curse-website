import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface CardCoursesProps {
  title: string;
  description: string;
  image: React.ReactNode; // Define image as React.ReactNode
}

const CardCourses: React.FC<CardCoursesProps> = ({ title, description, image }) => {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card
        sx={{
          maxWidth: 345,
          border: '3px solid #00A6FB',
          marginLeft: 'auto', // Align the card to the right
          marginRight: 'auto', // Align the card to the right
          marginTop: '5vh',
          marginBottom: '5vh'
        }}
      >
        <CardMedia
          component="div" // Use a div as the component
          sx={{ height: 140 }} // Set the height
        >
          {image} {/* Render the image passed as a child */}
        </CardMedia>
        <CardContent
          className='gradient-card card container-card card-title card-description'
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions
          style={{ backgroundColor: '#051923' }}
        >
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CardCourses;
