import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

//hooks
// dipatch variable  sends messages to Redux store
// history variable helps to navigate to a new page when the user clicks the Next button
function Feelings() {
    const dispatch = useDispatch();
    const history = useHistory();

    //gets the value of feelingLevel from the store
    const feelingLevel = useSelector(store => store.feelingLevel)


    //handle change gets called whenever someone types a number into the input field. creates an action that we want to change the feelingLevel value in store to whatever is typed in. then sends that to the store using dispatch function
    const handleChange = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value };
        dispatch(action);
    }

    // prevents default action of submitting a form then checks if the feelingLevel is greater than 0. if it is then use history function to take us to the next page understanding  if not it creates an alert
    const nextPage = (event) => {
       
        if (feelingLevel >= 0) {
            alert(`Please enter a number greater than 0 `)
        } else {
           history.push('/understanding'); 

        }
    }
    

    //return creates the form
    return (
        <>
<ProgressBar currentStep={0}/>
<br />
<br />
            <form onSubmit= {nextPage}>
                <h1>How are you feeling on a scale from 1-10? </h1>
                <input
                    value={feelingLevel}
                    type="number"
                    placeholder="#"
                    onChange={handleChange}
                    min={0}
                    max={10} >   
                </input>
                <br />
                <br />
                <Button 
                onClick={nextPage}
                type="submit"
                variant="contained"
                >Next</Button>

            </form>



        </>
    )



}

export default Feelings;