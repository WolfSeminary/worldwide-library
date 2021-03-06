import { Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalFunction({ open, onClose,freeBooks,borrowedBooks }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Library - Books Status
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Free Books:{freeBooks}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Borrowed Books:{borrowedBooks}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
