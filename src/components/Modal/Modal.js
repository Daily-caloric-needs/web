import './style.scss';
import { Dialog } from '@mui/material';
import styled from '@emotion/styled';

export const CssDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 10,
  },
  '& .MuiDialogTitle-root': {
    color: '#fff',
    fontWeight: 700,
    backgroundColor: theme.palette.primary.main,
    minWidth: '400px',
  },
  '& .MuiDialogContentText-root': {
    color: theme.palette.text.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  '& .MuiDialogActions-root': {
    padding: '0 24px 24px 20px',
  },
}));

export const Modal = ({ showModal, closeModal, children, fullWidth }) => {
  return (
    <CssDialog open={showModal} onClose={closeModal} fullWidth={fullWidth}>
      {children}
    </CssDialog>
  );
};
