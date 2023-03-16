import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "450px",
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
    color: 'red',
};

export default function MediaModal({ handleClose, open, data, editCard }) {

    const [value, setValue] = useState()

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <form >
                        <TextField onKeyUp={(e) => setValue(e.target.value)} placeholder={data?.name} sx={{ width: "300px", height: '30px', marginLeft: "20px", borderRadius: '20px', color: 'red' }} label="Let's change " variant="standard" name='name' />
                        <Button onClick={() => editCard({ id: data?.id, changeText: value })} variant="outlined" startIcon={<ModeEditOutlineIcon />} sx={{ height: "46px", marginLeft: "20px" }}  >edit</Button>
                    </form>
                </Box>
            </Modal>
        </div >
    );
}