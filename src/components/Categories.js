import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, getNewsByType } from '../redux/actions/NewsActions';
import {
    makeStyles,
    Container,
    Grid,
    Typography,
    Button,
    withStyles
} from '@material-ui/core'
import NewsCard from './NewsCard';

const useStyles = makeStyles((theme) => ({
    rootDiv: {
        backgroundColor: '#eee',
        minHeight: '100vh',
        padding: '30px 0px'
    },
    buttonHolder: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardsContainer: {
        margin: theme.spacing(3, 0)
    },
    formText: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));

const StyledButton = withStyles({
    root: {
        borderRadius: '20px'
    },

})(Button);

const buttonArray = ["bitcoin", 'usa', 'apple', 'techcrunch', 'Covid']

export default function Categories() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { news } = useSelector((state) => state.NewsReducer);

    useEffect(() => {
        dispatch(getAllNews())
    }, [dispatch])

    const handleClick = (text) => {
        console.log("i am called")
        dispatch(getNewsByType(text))
    }

    return (
        <div className={classes.rootDiv}>
            <Container>
                <div className={classes.buttonHolder}>
                    {
                        buttonArray.map((text, index) => (
                            <StyledButton
                                variant="outlined"
                                color="primary"
                                onClick={() => handleClick(text)}
                            >{text}</StyledButton>
                        ))
                    }
                </div>
                <Grid container className={classes.cardsContainer} spacing={3}>
                    {
                        news.length > 0 ?
                            news.map((item, index) => (
                                <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                                    <NewsCard data={item} />
                                </Grid>
                            )) : <Typography align="center" variant="subtitle1">No news to display</Typography>
                    }
                </Grid>
            </Container>
        </div>
    )
}
