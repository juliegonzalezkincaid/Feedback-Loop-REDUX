import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button'
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useHistory } from 'react-router-dom';

function Support() {

    const history = useHistory();
    const dispatch = useDispatch();
    const supportLevel = useSelector(store => store.supportLevel);
    const handleChange = (event) => {
        const action = { type: 'SET_SUPPORT', payload: event.target.value };
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (supportLevel >= 0) {
            alert('Please pick a number greater than 0')
        } else {
            history.push('/comments');
        }
    }

    return (

        <>
            <ProgressBar currentStep={2} />
            <br />
            <br />
            <h1>From 1-10, how well are you supported?</h1>
            <form onSubmit={nextPage}>
                <input
                    id="support"
                    value={supportLevel}
                    onChange={handleChange}
                    type="number"
                    min={0}
                    max={10}>
                </input>
                <br />
                <br />
                <Button
                    onClick={nextPage}
                    variant="contained"
                >Next</Button>
            </form>

        </>
    )
}

export default Support;