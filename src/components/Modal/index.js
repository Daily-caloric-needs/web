import './style.scss';
import { Dialog } from '@mui/material';
import styled from '@emotion/styled';

const CssDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 10,
  },
  '& .MuiDialogTitle-root': {
    color: '#fff',
    backgroundColor: 'coral',
    minWidth: '400px',
  },
  '& .MuiDialogActions-root': {
    padding: '0 24px 24px 20px',
  },
});

export const Modal = ({ showModal, closeModal, children }) => {
  return (
    <CssDialog open={showModal} onClose={closeModal}>
      {children}
    </CssDialog>
  );
};
