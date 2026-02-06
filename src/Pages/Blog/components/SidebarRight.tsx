

import { Box, Typography, Paper, List } from '@mui/material';

const SidebarRight = () => {
    return (
        <Box sx={{ position: 'sticky', top: 100 }}>
            {/* TODO: INTEGRACIÓN CON BACKEND - Widget Personalizable 1 (Ej: Reglas, Info del Servidor) */}
            <Paper sx={{
                p: 3,
                bgcolor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 4,
                mb: 4
            }}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                    Espacio para Widgets del Sidebar
                    <br />
                    (Reglas, Discord, Eventos)
                </Typography>
            </Paper>

            {/* TODO: INTEGRACIÓN CON BACKEND - Widget Personalizable 2 (Ej: Top Usuarios) */}
            <Paper sx={{
                p: 3,
                bgcolor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 4
            }}>
                <List disablePadding>
                    {/* 
                        TODO: INTEGRACIÓN CON BACKEND
                        1. Obtener top usuarios/colaboradores de la API
                        2. Mapear respuesta a items de lista
                    */}

                    <Box sx={{ p: 2, textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                        <Typography variant="caption">Cargando datos...</Typography>
                    </Box>
                </List>
            </Paper>
        </Box>
    );
};

export default SidebarRight;
