import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const understandingLevel = useSelector(store => store.understandingLevel)

    const handleChange = (event) => {
        const action = { type: "SET_UNDERSTANDING", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = (event) => {
        if (understandingLevel >= 0) {
            alert(`Please enter a number greater than 0`)
        } else {
            history.push('/support');
        }
    }


    return (

        <>
            <ProgressBar currentStep={1} />
            <form>
                <br />
                <h1>How well are you being understood?</h1>
                <input
                    value={understandingLevel}
                    type="number"
                    placeholder="#"
                    onChange={handleChange}
                    min={1}
                    max={10}
                ></input>
                <br />
                <br />
                <Button
                    variant="contained"
                    onClick={nextPage}
                    type="submit"
                >Next
                </Button>

            </form>
        </>
    )






}
export default Understanding;