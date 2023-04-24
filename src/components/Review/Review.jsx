import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';

function Review () {


    //keeps track of where the user has been 
const history = useHistory();

    //retreives values of each variables  from the store 
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
    }).catch(error => {
        console.log(error);
    })
}

    return(

        <>
        <ProgressBar currentStep={4} />
        <h2>Please review your Feedback </h2>
        <h3>Feelings: {feelings}</h3>
        <h3>Understanding: {understanding}</h3>
        <h3>Support: {support}</h3>
        <h3>Comments: {comments}</h3>
        <Button onClick={sendFeedback}>Thank you!</Button>
        </>
    )
}

export default Review;