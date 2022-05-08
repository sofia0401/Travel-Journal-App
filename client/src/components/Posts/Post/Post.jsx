import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Tooltip title='Редактировать'>
                    <Button style={{color: 'white'}} size='small' onClick={() =>  {
                        setCurrentId(post._id);
                        console.log(post._id);
                    }}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </Tooltip>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags?.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="default" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <FavoriteIcon fontSize="default" />
                    &nbsp;
                    {/* &nbsp;Понравилось&nbsp; */}
                    {post.likeCount}
                </Button>
                <Tooltip title='Удалить'>
                    <Button size="default" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="default" />
                        {/* Удалить */}
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default Post;