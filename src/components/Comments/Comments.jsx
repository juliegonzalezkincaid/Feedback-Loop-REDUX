
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Button from '@mui/material/Button';


function Comments () {

const dispatch =useDispatch();
const history = useHistory();
const comments = useSelector(store => store.comments)

const handleChange = (event) => {
    const action = { type: "SET_COMMENTS", payload: event.target.value };
    dispatch(action);
}

const nextPage =() => {
    const action = { type: 'CLEAR_FORMS' }
    dispatch (action);
    history.push('/');
}


    return(

        <>
        <ProgressBar currentStep={3} />
        <Button onClick={nextPage}></Button>
        </>
    )
}

export default Comments;