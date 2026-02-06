
import { Box, Typography, Modal, TextField, Button, Avatar, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface CreatePostModalProps {
    open: boolean;
    onClose: () => void;
}

const CreatePostModal = ({ open, onClose }: CreatePostModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="create-post-modal"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', md: 600 },
                maxHeight: '90vh',
                overflowY: 'auto',
                bgcolor: '#111',
                border: '1px solid #333',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
                color: 'white'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Crear Publicación
                    </Typography>
                    <CloseIcon sx={{ cursor: 'pointer', color: '#666', '&:hover': { color: 'white' } }} onClick={onClose} />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Avatar sx={{ bgcolor: '#8B1E1E' }}>U</Avatar>
                    <Box sx={{ width: '100%' }}>
                        <TextField
                            placeholder="Título interesante..."
                            fullWidth
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { fontSize: '1.2rem', fontWeight: 'bold', color: 'white' } }}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            placeholder="Comparte tu experiencia..."
                            fullWidth
                            multiline
                            rows={4}
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { color: 'rgba(255,255,255,0.8)' } }}
                        />
                    </Box>
                </Box>

                <Paper sx={{
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px dashed rgba(255,255,255,0.2)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    mb: 3,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                    <ImageOutlinedIcon sx={{ mr: 1, color: '#EE8D9E' }} />
                    <Typography variant="body2" color="rgba(255,255,255,0.6)">Agregar Imagen / Video</Typography>
                </Paper>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button onClick={onClose} sx={{ color: 'rgba(255,255,255,0.6)' }}>Cancelar</Button>
                    <Button variant="contained" sx={{ bgcolor: '#EE8D9E', '&:hover': { bgcolor: '#F48FB1' }, fontWeight: 'bold', px: 4 }}
                        onClick={() => {
                            // TODO: INTEGRACIÓN CON BACKEND
                            // 1. Recolectar datos del formulario (título, cuerpo, imagen)
                            // 2. Enviar petición POST a la API:
                            //    fetch('TU_ENDPOINT_API/publicaciones', {
                            //      method: 'POST',
                            //      body: JSON.stringify({ ...data })
                            //    })
                            onClose();
                        }}
                    >
                        Publicar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CreatePostModal;
