import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feelings () {
    const dispatch = useDispatch();
    const history = useHistory();

const feelingLevel = useSelector( store => store.feelinglevel)

const handleChange =(event) => {
    const action = {type : 'SET_FEELING', payload: event.target.value};
    dispatch(action);
}

const nextPage =() => {
    event.preventDefault();
    if (feelingLevel > 0) {
        return history.push('/understanding');
    }else {
        alert(`Please enter a number greater than 0 `);
    }
}
 console.log(feelingLevel);

    return(
<>
        <h2>How are you feeling?</h2>
        <form> 

            <input 
                value = {feelingLevel}
                type="number"
                placeholder= "1-10"
                onChange={handleChange}>
            </input>
            <button onClick={nextPage}>Next</button>

        </form>
    


</> 
    )

    
   
}

export default Feelings;