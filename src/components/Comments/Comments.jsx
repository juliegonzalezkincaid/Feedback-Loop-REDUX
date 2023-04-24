
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Button from '@mui/material/Button';


function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const comments = useSelector(store => store.comments)

    const handleChange = (event) => {
        const action = { type: "SET_COMMENTS", payload: event.target.value };
        dispatch(action);
    }

    const nextPage = () => {
        const action = { type: 'CLEAR_FORMS' }
        dispatch(action);
        history.push('/review');
    }


    return (

        <>
            <ProgressBar currentStep={3} />
            <form>
                <h1>Please leave your comments here:</h1>
                <input
                    onChange={handleChange}
                    type="text"
                    value={comments}
                    placeholder="Thank you "
                ></input>
                <Button
                    onClick={nextPage}
                    type= "submit">Submit
                </Button>
            </form>
        </>
    )
}

export default Comments;