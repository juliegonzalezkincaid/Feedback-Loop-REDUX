import { useHistory } from
    'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Stack } from '@mui/material';

function Header() {




    return (
        <>


            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Stack spacing={30} direction="row" justify-content="center">
                            <Link href="/#/feelings" sx={{ color: "teal" }} underline="hover">Feelings</Link>
                            <Link href="/#/understanding" sx={{ color: "teal" }} underline="hover">Understanding</Link>
                            <Link href="/#/support" sx={{ color: "teal" }} underline="hover">Support</Link>
                            <Link href="/#/comments" sx={{ color: "teal" }} underline="hover">Comments</Link>
                            <Link href="/#/review" sx={{ color: "teal" }} underline="hover">Review</Link>
                        </Stack>
                    
                    </Typography>

                </Toolbar>
            </AppBar>
            
        </>
    )

};


export default Header;