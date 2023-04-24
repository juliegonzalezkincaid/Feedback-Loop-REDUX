import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button'
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useHistory } from 'react-router-dom';

function Support () {
    const supportLevel = useSelector (store =>store.spport);
    const history = useHistory();
    const dispatch = useDispatch();

const handleChange = (event) => {
    const action = { type: 'SET_SUPPORT', payload: event.target.value };
    dispatch(action);
}

const nextPage = (event) => {
    event.preventDefault();
    if (supportLevel >= 0) {
        alert('Please pick a number greater than 0')
    }else {
       history.push('/review');
    } 
}

    return(

         <>
         <ProgressBar currentStep={2}/>
         <h2>Do you feel supported?</h2>
         <form onSubmit={nextPage}>
            <input
                id="support"
                value={supportLevel}
                onChange={handleChange}
                type="number"
                min={0}
                max={10}
                >
            </input>
            <Button onClick= {nextPage}>Next</Button>
         </form>
        
        </>
    )
}

export default Support;