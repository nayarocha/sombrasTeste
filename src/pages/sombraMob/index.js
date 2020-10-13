import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const shadows = makeStyles({
    

    ///* MOBI -Shadow / Smallest | 2 */
    card2:{
        boxShadow: '0px 2px 4px rgba(51, 51, 51, 0.1)',
        border: "none",
    },

    mobiSmall3:{
        border: "none",
    },  boxShadow: '0px 4px 8px 0px 51,51,51,0,1',


    //airbnb 79
    card3:{
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        border: "none",
    },

    airbnb78:{
        boxSshadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
        border: "none",
    },  

    airbnb76:{
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
    },




    

    /* Shadow 1dp - material IO - ORIGINAL */
    shad1dp:{
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
        border: "none",
    },

    /*Shadow 1dp - material IO - suavizando e*/
    testeshad1dp:{
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.12), 0 2px 1px -1px rgba(0,0,0,0.10), 0 1px 3px 0 rgba(0,0,0,0.18)',
        border: "none"
    },

    // suavizando mais a partir do shadow 1dp
    testeshad1dp2:{
        boxShadow: '0px 2px 4px  rgba(0,0,0,0.16), 0px 2px 4px rgba(0,0,0,0.10)',
        border: "none",
    },

    //box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.001), 0px 4px 2px rgba(0, 0, 0, 0.0016);
    shad2dp:{
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },

   

    mobishadowSmall:{
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.08)',
        border: "none",
    },

    
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const sombras = shadows();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
         
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.card2}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mobiauto 
                        </Typography>
                        <Typography>
                            box-ShadowSmallest-2 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.mobiSmall3}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mobiauto
                        </Typography>
                        <Typography>
                            box-ShadowSmall-3
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.shad1dp}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          MAterial design
                        </Typography>
                        <Typography>
                         shadow 1DP - ORIGINAL
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.shad2dp}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          MAterial design
                        </Typography>
                        <Typography>
                         shadow 2DP
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.card3}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                           Airbnb
                        </Typography>
                        <Typography>
                        Airbnb 79
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.testeshad1dp}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                           Material 1dp
                        </Typography>
                        <Typography>
                        Exemplo 1 : Suavizando a shadow 1dp. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.airbnb76}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                           Airbnb 
                        </Typography>
                        <Typography>
                        Airbnb 76
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.airbnb78}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                           Airbnb 
                        </Typography>
                        <Typography>
                        Airbnb 78
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card, sombras.testeshad1dp2}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                           Material  
                        </Typography>
                        <Typography>
                        Suavizando ainda mais a shadow partindo de 1dp
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                        São Paulo-SP
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
          </Grid>


       
        </Container>
      </main>
    
    </React.Fragment>
  );
}