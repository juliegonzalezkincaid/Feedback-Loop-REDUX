import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';

function Review () {


    //keeps track of where the user has been 
    // send info to store
const history = useHistory();
const dispatch = useDispatch();

    //retreive values of each variables  from the store 
const feelings = useSelector(store => store.feelings);
const understanding = useSelector ( store => store.understanding);
const support = useSelector (store => store.support);
const comments = useSelector ( store => store.comments);


//=> means that this function doesn't need any input parameters, but it will return some output when it's done running.
// '/feedback specifies the server endpoint where the data will be sent and after the endpoint is the data that will be sent including: 
const sendFeedback = () => {
    axios.post('/feedback', { 
        feelings: feelings,
        understanding: understanding,
        support: support,
        comments: comments
    }).then(response => {
        console.log(response);
        // Clear inputs
        dispatch({ type: 'CLEAR_FORM' });
        // back to start page
        history.push('/')
    }).catch(error => {
        console.log(error);
    })
}

const nextPage = (event) => {
    
        history.push('/success');
    }


    return(

        <>
        <ProgressBar currentStep={4} />
        <br />
        <br />
        <h1>Please review your Feedback </h1>
        <h3>Feelings: {feelings}</h3>
        <h3>Understanding: {understanding}</h3>
        <h3>Support: {support}</h3>
        <h3>Comments: {comments}</h3>
        <Button 
        onClick={sendFeedback}
        variant="contained"
        >Save</Button>
        <br />
        <br />
        <Button 
            onClick={nextPage}
            variant="contained"
            >Submit!</Button>
        </>
    )
}

export default Review;