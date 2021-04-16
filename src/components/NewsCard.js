import React from 'react';
import {
    Card,
    makeStyles,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    CardHeader,
    Avatar, IconButton
} from '@material-ui/core';
import moment from 'moment'
const todaysDate = moment().format('YYYY-MM-DD');

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
    },
    card: {
        maxWidth: '350px'
    }
}))

export default function NewsCard({ data: { title, author, url, urlToImage, description, publishedAt, source: { name } } }) {
    const classes = useStyles();

    const truncate = (str) => {
        return (str.length > 60) ? str.substr(0, 60 - 1) + '...' : str;
    };

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    title="Contemplative Reptile"
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            A
                         </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">

                        </IconButton>
                    }
                    title={name}
                    subheader={moment(publishedAt).format('Do MMM YYYY')}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h2">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            description ? truncate(description) : null
                        }

                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
}
