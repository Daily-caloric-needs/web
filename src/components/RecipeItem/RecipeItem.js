import "./style.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const RecipeItem = () => {

    return (
        <Accordion className='recipes'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='recipes__item'>
            <div className='recipes__item__info'>
                <h2>Манная каша</h2>
            <ul>
              <li>Молоко - <span>300мл</span></li>
              <li>Вода - <span>100мл</span></li>
              <li>Крупа манная - <span>50г</span></li>
              <li>Сахар - <span>5г</span></li>
              <li>Соль - <span>1г</span></li>
              <li>Масло сливочное - <span>10г</span></li>
            </ul>
            </div>
            <div className='recipes__item__calories'>
              <p>63Ккал</p>
              <span>Второе блюдо</span>
            </div>
            <div className='recipes__item__photo'></div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Налейте в ковш воду и молоко.
          Добавьте в молоко ложку сахара и щепотку соли.
           Добавленная соль с одной стороны оттеняет вкус сахара,
            но с другой стороны подчеркивает сладость каши. 
            Затем добавьте в холодное молоко манную крупу. 
            Перемешайте и поставьте ковш на огонь.
            При постоянном помешивании доведите все до кипения.
             При закипании каша постепенно станет густая. 
             Проварите её, буквально, 20-30 секунд и снимите с огня. 
             Горячую кашу без комочков дополните небольшим количеством 
             сливочного масла или свежими ягодами. Приятного аппетита!
          </Typography>
        </AccordionDetails>
      </Accordion>
    )

}