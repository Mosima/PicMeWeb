import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tab from '../components/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '1%'
  },
  InfoCard: {
    minWidth: 700,
    height: 700
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  ProfileCard: {
    maxWidth: 600,
    height: 700
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function Profile(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
    
  return (
      <div className="container">
    <div className={classes.root}  style={{ padding: '2%' }}>
      <Grid
        alignItems='center'
        direction='row'
        justify='center'
        container spacing={24}>

        <Grid item xs={12} sm={4}>
        <Card className={classes.ProfileCard}>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item xs={12} sm={8}>
            <Card className={classes.InfoCard}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary">
                Word of the Day
            </Typography>
            <Typography variant="headline" component="h2">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                adjective
            </Typography>
            <Typography component="p">
                well meaning and kindly.<br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12}>
            <Tab />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);