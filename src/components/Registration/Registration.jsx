import {
   Button,
   TextField,
   Grid
} from '@mui/material';
import styles from '@emotion/styled';
import { Avatar } from '../Avatar/Avatar';
import { Notification } from '../Notification/Notification';
import { Search } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

export const Registration = () => {

   const CssButton = styles(Button)(({ theme }) => ({
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      '&:hover': {
         boxShadow: `0 0 10px 1px ${theme.palette.primary.main}`,
      },
   }));

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const [isSuccess, setIsSuccess] = useState(false);
   const [error, setIsError] = useState();

   const onSubmit = async (formData) => {
      console.log(formData);

      try {
         const { data } = await axios.post('http://213.226.114.162/api/register', { ...formData });
         if (data.message) {
            setIsSuccess(true);
            reset();
         } else {
            setIsError('Что-то пошло не так');
         }
      } catch (e) {
         setIsError(e.message);
      }
   };

   return (<div className="content">
      <div className="content__header">
         <Sidebar />
         <Search />
         <Notification />
         <Avatar />
      </div>
      <h1>Регистрация</h1>
      <div className="content__main">
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column">
               <TextField
                  label="Email"
                  autoFocus
                  id="email"
                  {...register('email', {
                     required: 'required',
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Введённое значение не соответствует формату: example@mail.lo',
                     },
                  })}
                  type="email"
               />
               {errors.email && <span role="alert">{errors.email.message}</span>}

               <TextField
                  label="Пароль"
                  autoFocus
                  id="password"
                  {...register('password', {
                     required: 'required',
                     minLength: {
                        value: 5,
                        message: 'Минимальная длина пароля 5 символов',
                     },
                  })}
                  type="password"
               />
               {errors.password && <span role="alert">{errors.password.message}</span>}

               <CssButton type="submit">Зарегистрироваться</CssButton>

               {isSuccess && (
                  <div>
                     <div>Регистрация прошла успешно</div>
                  </div>
               )}
               {error && (
                  <div>
                     Что-то пошло не так, попробуйте обновить страницу
                  </div>
               )}
            </Grid>
         </form>
      </div>
   </div>

   );
};


