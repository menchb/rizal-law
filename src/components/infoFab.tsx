import * as React from 'react';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Fab, Box, Button, Link, Dialog, DialogContent, DialogContentText, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function InfoFab() {
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '72px 0' }}>
                <Fab size="large"
                    aria-label="open dialog"
                    sx={{ mr: 2 }}
                    onClick={toggleDialog}>
                    <InfoIcon fontSize='large' />
                </Fab>
            </Box>

            <Dialog fullScreen={fullScreen} open={open} onClose={handleDialogClose}>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <Typography variant='body1'>Developer:</Typography>
                            <Typography variant='h2' color='darkSlateGrey'>Menchie Belarmino</Typography>
                            <Typography variant='h4'>BS Information Technology 4 - A</Typography>
                        </div>
                        
                        <div>
                            <Button variant='outlined' sx={{ mt: 2 }}>
                                <Link href='https://www.linkedin.com/in/menchiebelarmino/'>LinkedIn</Link>
                            </Button>
                        </div>
                        
                        <div>
                            <Typography variant='body1' sx={{ marginTop: '24px' }}>GEC 19 - Life and Works of Rizal</Typography>
                            <Typography variant='body1'>Exercise 1.1.1 The Rizal Law</Typography>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
