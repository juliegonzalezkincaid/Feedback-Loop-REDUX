import  { useHistory } from 
'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header () {

    const history = useHistory();

    const nextPage = () => {
        event.preventDefault();
        history.push('/feelings');
    }
    
    
    return (
<>
      

        <AppBar position="static">
                <Toolbar>
                    <Typography 
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Activity Log
                    </Typography>
                 <Button onClick={nextPage}>Start</Button>
                </Toolbar>
            </AppBar>
        <h1>Activity Log</h1>
</>
    )
    
};


export default Header;