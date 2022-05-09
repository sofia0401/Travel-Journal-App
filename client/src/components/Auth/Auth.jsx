import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';

function Auth() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        // handleShowPassword(false);
        setShowPassword(false);
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Регистрация' : 'Авторизация'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstName' label='Имя' handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label='Фамилия' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Электронная почта' handleChange={handleChange} type='email' />
                        <Input name='password' label='Пароль' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignUp && <Input name='confirmPassword' label='Подтвердите пароль' handleChange={handleChange} type='password' /> }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignUp ? 'Зарегистрироваться' : 'Войти'}
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Войти в существующий аккаунт' : 'Создать аккаунт' }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth