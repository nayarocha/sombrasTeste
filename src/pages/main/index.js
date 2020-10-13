import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  card:{
    borderRadius:4,
    border: "none",  
},
});


const shadows = makeStyles({
    root:{
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        border: "none",
        
    },


    ///* MOBI -Shadow / Smallest | 2 */
    card2:{
        boxShadow: '0px 2px 4px rgba(51, 51, 51, 0.1)',
        border: "none",
    },

    //airbnb 79
    card3:{
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        border: "none",
    },

    //10er.app
    card4:{
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
        border: "none",
    },

    //box-shadows.co
    card5:{
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        border: "none",
    },


    //sombra customizada
    card6:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        border: "none",
    },

    //stripe #19
    card7:{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        border: "none",
    },

    //3drops
    card8:{
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        border: "none",
    },

    //TailWind 36
    card9:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
    },
});


export default function ImgMediaCard() {
  const classes = useStyles();
  const sombras = shadows();

  return (
    <Container >
        <Grid container spacing={4}>
            <Grid container item xs>
                <Card className={classes.root} elevation={1}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="184"
                        image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Fiat Mobi 2020
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            1.0 Like Aut. (flex  )
                        </Typography>
                    

                        <Badge color="#006B5D" >
                             <Typography>  Material IO - elevation 1</Typography>
                        </Badge>


                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                        <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                    </CardActions>
                </Card>
            </Grid>

            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root} elevation={2}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Material IO - elevation 2
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.root} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               Shadow Teste
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>

            



            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card2} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                    MOBI DS - Shadow / Smallest | 2 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>

            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card3} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   Shadow AIRBNB example
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card4} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   Shadow //10er.app
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>

            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card5} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   box-shadows.co
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card6} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   Shadow Teste
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card7} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   Stripe #19
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card8} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   3drops
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>


            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card9} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                //TailWind 36
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>

            <Grid container item xs={3} spacing={2}>
                <Card className={classes.root,sombras.card9} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="184"
                            image="https://media.gazetadopovo.com.br/2019/10/04121639/renault-kwid-novo-subcompacto-5-660x372.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fiat Mobi 2020
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                1.0 Like Aut. (flex  )
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                //TailWind 36
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body3" color="textSecondary">São Paulo-SP</Typography>
                            <Typography variant="body3" color="textSecondary">há 10km de você</Typography>
                        </CardActions>
                    </Card>
            </Grid>



            
        </Grid>

    </Container>
    
  );
}