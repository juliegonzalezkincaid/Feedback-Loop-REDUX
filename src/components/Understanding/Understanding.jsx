import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const understandingLevel = useSelector(store => store.understanding)

    const handleChange = (event) => {
        const action = { type: "SET_UNDERSTANDINGLEVEL", payload: event.target.value };
        dispatch(action);
    }
     
    const nextPage = (event) => {
        if (understandingLevel >= 0){
            return history.push('/support');
        }else {
            alert(`Please enter a number greater than 0`)
        }
    } 
    console.log(understandingLevel);
    return (

        <>
        <form>
        <h2>Are you Understanding?</h2>
          <input
            value = {understandingLevel}
            type= "number"
            placeholder="1-10"
            onChange = {handleChange}>
        </input>
        <Button onClick= {nextPage}>Next</Button>
        </form>
        </>
    )






}
export default Understanding;