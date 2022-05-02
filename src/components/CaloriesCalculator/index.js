import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { normNutrients, waterNormOFDay } from '../../store/CaloriesCalcilator/actions';
import {
   FormControl,
   FormLabel,
   RadioGroup,
   FormControlLabel,
   Radio,
   Grid,
   TextField,
   Button,
   Typography,
   DialogTitle,
   DialogContent,
} from '@mui/material';
import { selectNormNutrients, selectNormWater } from '../../store/CaloriesCalcilator/selectors';

export const CaloriesCalculator = () => {

   const caloriesNorm = useSelector(selectNormNutrients())
   const normWater = useSelector(selectNormWater())
   const dispatch = useDispatch();

   const defaultValues = {
      hight: 0,
      weight: 0,
      age: 0,
      gender: "",
      work: "",
      calorieNorm: 0,
      waterNorm: 0
   };

   const [formValues, setFormValues] = useState(defaultValues);

   const handleInputChange = (e) => {
      if (e.target.value < 1) {
         setFormValues({
            hight: 1,
            weight: 1,
            age: 1,
         });
      } else {
         const { name, value } = e.target;
         setFormValues({
            ...formValues,
            [name]: value,
         });
      }
   };

   const clearSubmit = () => {
      setFormValues({
         hight : 0,
         weight: 0,
         age: 0,
         gender: "",
         work: "",
         waterNorm: 0
      })
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
      calcolaFisicForm(parseInt(formValues.calorieNorm))
   }

   const calcolaFisicForm = (norm) => {
      if (formValues.work === "weakly") {
         formValues.calorieNorm = parseInt(norm * 1.2)
      } else if (formValues.work === "base") {
         formValues.calorieNorm = parseInt(norm * 1.375)
      } else if (formValues.work === "medium") {
         formValues.calorieNorm = parseInt(norm * 1.55)
      } else if (formValues.work === "strong") {
         formValues.calorieNorm = parseInt(norm * 1.725)
      } else if (formValues.work === "veryStrong") {
         formValues.calorieNorm = parseInt(norm * 1.9)
      }
      console.log(formValues.calorieNorm);
      clearSubmit();
      waterNormOfDay();
      dispatch(waterNormOFDay(formValues.waterNorm))
      dispatch(normNutrients(formValues.calorieNorm))
   }

   const waterNormOfDay = () => {
      formValues.waterNorm = (parseInt(formValues.weight) + parseInt(formValues.hight)) * 10
      console.log(formValues.waterNorm)
   }

   return (<>
      <form onSubmit={calcolaNorm}>
         <Grid container 
         alignItems="center" 
         justify="center" 
         direction="column">
            <Grid container justifyContent="center">
               <TextField
                  id="hight-input"
                  name="hight"
                  label="Рост"
                  type="number"
                  value={formValues.hight}
                  onChange={handleInputChange}
                  variant="filled"
               />
               <TextField
                  id="weight-input"
                  name="weight"
                  label="Вес"
                  type="number"
                  value={formValues.weight}
                  onChange={handleInputChange}
                  variant="filled"
               />
               <TextField
                  id="age-input"
                  name="age"
                  label="Возраст"
                  type="number"
                  value={formValues.age}
                  onChange={handleInputChange}
                  variant="filled"
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
                        control={<Radio size="medium" />}
                        label="Мужской"
                     />
                     <FormControlLabel
                        key="female"
                        value="female"
                        control={<Radio size="medium" />}
                        label="Женский"
                     />
                  </RadioGroup>
               </FormControl>
            </Grid>
            <Grid item>
               <FormControl>
                  <FormLabel>Физическая активность</FormLabel>
                  <RadioGroup
                     name="work"
                     value={formValues.work}
                     onChange={handeleRadioChange}
                     row
                  >
                     <FormControlLabel
                        key="weakly"
                        value="weakly"
                        control={<Radio size="medium" />}
                        label="Пассивный образ жизни"
                     />
                     <FormControlLabel
                        key="base"
                        value="base"
                        control={<Radio size="medium" />}
                        label="Тренируюсь 1-3 раза в неделю"
                     />
                     <FormControlLabel
                        key="medium"
                        value="medium"
                        control={<Radio size="medium" />}
                        label="Тренируюсь 3-5 раз в неделю"
                     />
                     <FormControlLabel
                        key="strong"
                        value="strong"
                        control={<Radio size="medium" />}
                        label="Тренируюсь каждый день"
                     />
                     <FormControlLabel
                        key="veryStrong"
                        value="veryStrong"
                        control={<Radio size="medium" />}
                        label="Тренируюсь каждый день больше одного раза в день"
                     />
                  </RadioGroup>
               </FormControl>
            </Grid>
                  <Button disabled={formValues === defaultValues} variant='contained' type='submit' size='medium'>Расчитать норму</Button>
         </Grid>
      </form>
      <Typography>Твоя суточная норма калорий: {caloriesNorm} </Typography>
      <Typography>Твоя суточная норма воды: {normWater} </Typography>

   </>
   )
}