import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import "./style.css";


const useStyles = makeStyles({
    root: {
        maxWidth: 175,
    },
    media: {
        height: 200,
    },
});

export default function ImgMediaCard({ database, handleSubmit }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} container spacing={3}>

            {
                database.map(card => {
 
                    return (
                        <Grid item xs={3} spacing={3}>

                            <Card className={classes.root} >

                                <CardMedia className={classes.media}
                                    component="img"
                                    alt={card.alt}
                                    image={card.img} onClick={() => {
                                        handleSubmit(card.id)
                                    }

                                    } />

                            </Card>


                        </Grid>
                    )
                })

            }


        </Grid>
    );
}




{/* <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Hermoine"
                            image="/assets/images/hermione.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Ron"
                            image="/assets/images/ron.png" height="200px"/>
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Dumbledore"
                            image="/assets/images/dumbledore.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>
        
            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="McGonagall"
                            image="/assets/images/mcgonagall.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Hagrid"
                            image="/assets/images/hagrid.png" height="200px"/>
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Snape"
                            image="/assets/images/snape.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Sirius"
                            image="/assets/images/sirius.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Ginny"
                            image="/assets/images/ginny.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Luna"
                            image="/assets/images/luna.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Draco"
                            image="/assets/images/draco.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Remus"
                            image="/assets/images/remus.png" height="200px"/>
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Neville"
                            image="/assets/images/neville.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Bellatrix"
                            image="/assets/images/bellatrix.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Myrtle"
                            image="/assets/images/myrtle.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>

            <Box
                boxShadow={3}
                style={{ width: '8rem', height: '5rem', backgroundColor: "transparent" }}
            >
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Trelawney"
                            image="/assets/images/trelawney.png" height="200px" />
                    </CardActionArea>
                </Card>
            </Box>   */}