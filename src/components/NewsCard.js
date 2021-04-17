import React from 'react';
import {
    makeStyles,
    Typography,
} from '@material-ui/core';
import moment from 'moment'
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({

    card: {
        maxWidth: '350px',
        borderRadius: '5px',
        backgroundColor: '#fafafa',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    mediaHolder: {
        height: '150px',
        borderRadius: '3px',
        '& img': {
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
        }
    },
    cardContent: {
        padding: theme.spacing(2, 2)
    },
    cardTitle: {
        fontSize: '17px',
        paddingBottom: '10px',
        color: '#000'
    },
    cardDesc: {
        fontSize: '15px',
        color: theme.palette.grey[600]
    },
    cardFooter: {
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(1, 2),
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px'
    },
    authorText: {
        fontSize: '15px'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    footerText: {
        fontSize: '14px',
        color: theme.palette.grey[500]
    }
}))

export default function NewsCard({ data: { title, author, url, urlToImage, description, publishedAt, source: { name } } }) {
    const classes = useStyles();

    const truncate = (str) => {
        return (str.length > 100) ? str.substr(0, 100 - 1) + '...' : str;
    };
    const truncateTitle = (str) => {
        return (str.length > 70) ? str.substr(0, 70 - 1) + '...' : str;
    };

    return (
        <a href={url} target="_blank">
            <div className={classes.card}>
                <div className={classes.mediaHolder}>
                    {
                        urlToImage ? <img src={urlToImage} alt={title} width="100%" height="100%" /> :
                            <Skeleton variant="rect" width="100%" height='100%' />
                    }
                </div>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardTitle}>{title ? truncateTitle(title) : null}</Typography>
                    <Typography className={classes.cardDesc}>{description ? truncate(title) : null}</Typography>
                </div>
                <div className={classes.cardFooter}>
                    <Typography className={classes.authorText} color="primary">{author}</Typography>
                    <div className={classes.cardActions}>
                        <Typography className={classes.footerText}>{moment(publishedAt).format("Do MMM YYYY")}</Typography>
                        <Typography className={classes.footerText}>More...</Typography>
                    </div>
                </div>
            </div>
        </a>
    )
}
