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
  image: string; 
}

const CardCourses: React.FC<CardCoursesProps> = ({ title, description, image }) => {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card
        sx={{
          maxWidth: 345,
          border: '3px solid #00A6FB',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5vh',
          marginBottom: '5vh',
          display: 'flex',
          flexDirection: 'column' // Stack children vertically
        }}
      >
        <div>
          <CardMedia
            component="div"
            sx={{ height: 140, width: 100 }}
          >
            <img src={image} alt={title} />
          </CardMedia>

          <CardContent className=' container-card  card-description'>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </div>

        <CardActions style={{ backgroundColor: '#051923', marginTop: 'auto' }}>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}


export default CardCourses;
