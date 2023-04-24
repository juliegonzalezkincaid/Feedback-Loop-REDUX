
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Button from '@mui/material/Button';


function Success() {

    const dispatch = useDispatch();
    const history = useHistory();

    const newFeedback = () => {
        const action = { type: 'CLEAR_FORMS' }
        dispatch(action);
        history.push('/feelings');
    }

    return (
        <>
             <ProgressBar currentStep={5} />
             <br />
             <br />
             <br />
                <h1>Thank you!</h1>
                <br />
                <br />
                <br />
            
            <Button 
            
            onClick={newFeedback}
            variant="contained"
            >Submit New Feedback</Button>
            <br />
            <br />
        </>
    )
}

export default Success;