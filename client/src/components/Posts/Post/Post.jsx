import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import moment from 'moment';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();
    const dispatch = useDispatch();
    const initState = post?.likes?.find((like) => like === user?.result?._id);
    const [isLiked, setIsLiked] = useState(Boolean(initState));

    const likeHandler = (id) => {
        setIsLiked(!isLiked);
        dispatch(likePost(id));
    }

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Tooltip title='Редактировать'>
                    <Button disabled={user?.result?._id !== post.creator} style={{color: 'white'}} size='small' onClick={() =>  {
                        setCurrentId(post._id);
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
                <Button disabled={!user?.result?._id} size="medium" color="primary" onClick={() => likeHandler(post._id)} >
                    {
                        isLiked ? (
                            <>
                                <FavoriteIcon fontSize="medium" />
                                &nbsp;{post.likes?.length}
                            </>
                        ) : (
                            <>
                                <FavoriteBorderIcon fontSize="medium" />
                                &nbsp;{post.likes?.length}
                            </>
                        )
                    }
                </Button>
                <Tooltip title='Удалить'>
                    <Button disabled={user?.result?._id !== post.creator} size="medium" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="medium" />
                        {/* Удалить */}
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default Post;