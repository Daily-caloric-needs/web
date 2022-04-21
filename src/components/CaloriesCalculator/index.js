import { React, useState } from 'react';
import {
   FormControl,
   FormLabel,
   RadioGroup,
   FormControlLabel,
   Radio,
   Grid,
   TextField,
   Button,
   Typography
} from '@mui/material';

export const CaloriesCalculator = () => {

   const defaultValues = {
      hight: 0,
      weight: 0,
      age: 0,
      gender: "",
      work: "",
      calorieNorm: 0
   };

   const [formValues, setFormValues] = useState(defaultValues);

   const handleInputChange = (e) => {
      if (e.target.value < 1) {
         setFormValues(1);
      } else {
         const { name, value } = e.target;
         setFormValues({
            ...formValues,
            [name]: value,
         });
      }
   };

   const clearSubmit = () => {
      setFormValues(
         defaultValues.age = 0,
         defaultValues.calorieNorm = 0,
         defaultValues.hight = 0,
         defaultValues.weight = 0)
   }

   const handeleRadioChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   }

   const calcolaNorm = (e) => {
      e.preventDefault()
      debugger
      if (formValues.gender === "male") {
         formValues.calorieNorm = ((13.75 * formValues.weight) + (5 * formValues.hight) - (6.76 * formValues.age) + 66)

         console.log(formValues.calorieNorm)
      } else {
         formValues.calorieNorm = ((9.56 * formValues.weight) + (1.85 * formValues.hight) - (4.68 * formValues.age) + 655)
         console.log(formValues.calorieNorm)
      }
      calcolaFisicForm(formValues.calorieNorm)
   }

   const calcolaFisicForm = () => {
      debugger
      if (formValues.work === "weakly") {
         formValues.calorieNorm = (formValues.calorieNorm * 1.2)
      } else if (formValues.work === "base") {
         formValues.calorieNorm = (formValues.calorieNorm * 1.375)
      } else if (formValues.work === "medium") {
         formValues.calorieNorm = (formValues.calorieNorm * 1.55)
      } else if (formValues.work === "strong") {
         formValues.calorieNorm = (formValues.calorieNorm * 1.725)
      } else if (formValues.work === "veryStrong") {
         formValues.calorieNorm = ((formValues.calorieNorm * 1.9))
      }
      console.log(formValues.calorieNorm);
      clearSubmit();
   }

   return (<>
      <form onSubmit={calcolaNorm}>
         <Grid container>
            <Grid item>
               <TextField
                  id="hight-input"
                  name="hight"
                  label="Рост"
                  type="number"
                  value={formValues.hight}
                  onChange={handleInputChange}
               />
            </Grid>
            <Grid item>
               <TextField
                  id="weight-input"
                  name="weight"
                  label="Вест"
                  type="number"
                  value={formValues.weight}
                  onChange={handleInputChange}
               />
            </Grid>
            <Grid item>
               <TextField
                  id="age-input"
                  name="age"
                  label="Возраст"
                  type="number"
                  value={formValues.age}
                  onChange={handleInputChange}
               />
            </Grid>
            <Grid item>
               <FormControl>
                  <FormLabel>Пол</FormLabel>
                  <RadioGroup
                     name="gender"
                     value={formValues.gender}
                     onChange={handeleRadioChange}
                     row
                  >
                     <FormControlLabel
                        key="male"
                        value="male"
                        control={<Radio size="small" />}
                        label="Мужской"
                     />
                     <FormControlLabel
                        key="female"
                        value="female"
                        control={<Radio size="small" />}
                        label="Женский"
                     />
                  </RadioGroup>
               </FormControl>
            </Grid>
            <Grid item>
               <FormControl>
                  <FormLabel>Пол</FormLabel>
                  <RadioGroup
                     name="work"
                     value={formValues.work}
                     onChange={handeleRadioChange}
                     row
                  >
                     <FormControlLabel
                        key="weakly"
                        value="weakly"
                        control={<Radio size="small" />}
                        label="Пассивный образ жизни"
                     />
                     <FormControlLabel
                        key="base"
                        value="base"
                        control={<Radio size="small" />}
                        label="Тренируюсь 1-3 раза в неделю"
                     />
                     <FormControlLabel
                        key="medium"
                        value="medium"
                        control={<Radio size="small" />}
                        label="Тренируюсь 3-5 раз в неделю"
                     />
                     <FormControlLabel
                        key="strong"
                        value="strong"
                        control={<Radio size="small" />}
                        label="Тренируюсь каждый день"
                     />
                     <FormControlLabel
                        key="veryStrong"
                        value="veryStrong"
                        control={<Radio size="small" />}
                        label="Тренируюсь каждый день больше одного раза в день"
                     />
                  </RadioGroup>
                  <Button disabled={formValues === defaultValues} variant='contained' type='submit'>Расчитать норму</Button>
               </FormControl>
            </Grid>
         </Grid>
      </form>
      <Typography>Твоя суточная норма калорий: {formValues.calorieNorm} </Typography>
   </>
   )
}