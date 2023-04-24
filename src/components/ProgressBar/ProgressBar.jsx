import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Feelings',
    'Understanding',
    'Support',
    'Comments',
    'Review',
    'Success!',
];

function ProgressBar({currentStep}) {

    return (
        <Stepper sx={{ marginTop: '30px' }}activeStep={currentStep}>
            {
                steps.map(label => (
            <Step key={label}>
            <StepLabel>
                {label}
               
            </StepLabel>
            </Step>
                ))
            }
        </Stepper>
    )
}

export default ProgressBar;
