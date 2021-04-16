import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, getNewsByType } from '../redux/actions/NewsActions';
import {
    makeStyles,
    TextField,
    Container,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    Typography,
    Button
} from '@material-ui/core'
import NewsCard from './NewsCard';

const useStyles = makeStyles((theme) => ({
    rootDiv: {
        backgroundColor: '#eee',
        minHeight: '100vh',
        padding: '30px 0px'
    },
    formDiv: {
        maxWidth: '500px',
        with: '100%',
        margin: '0 auto'
    },
    cardsContainer: {
        margin: theme.spacing(3, 0)
    },
    formText: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

export default function Categories() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { news } = useSelector((state) => state.NewsReducer);

    const [countrySelected, setCountrySelected] = useState('in')
    const [newsType, setNewsType] = useState('');

    useEffect(() => {
        dispatch(getAllNews(countrySelected))
    }, [dispatch, countrySelected])

    const handleClick = () => {
        console.log("i am called")
        dispatch(getNewsByType(countrySelected, newsType))
    }

    return (
        <div className={classes.rootDiv}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.formText} >

                            <TextField
                                variant="outlined"
                                fullWidth
                                color="primary"
                                placeholder="eg. bitcoin, covid"
                                label="News category"
                                value={newsType}
                                onChange={(e) => setNewsType(e.target.value)}
                            />
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={handleClick}
                                size="large"
                            >Search</Button>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div >
                            <Select
                                SelectProps={{
                                    native: true,
                                }}
                                label="Type"
                                variant="outlined"
                                fullWidth
                                color="primary"
                                onChange={(e) => setCountrySelected(e.target.value)}
                                value={countrySelected}
                            >
                                <MenuItem value="in">India</MenuItem>
                                <MenuItem value="us">USA</MenuItem>
                                <MenuItem value="eu">Europe</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                </Grid>
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
