
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const SidebarLeft = () => {
    return (
        <Box sx={{ position: 'sticky', top: 100, color: 'white' }}>
            {/* TODO: INTEGRACIÓN CON BACKEND - Lista de Filtros/Feeds */}
            {/* Aquí puedes mapear las categorías o filtros que vengan de tu base de datos */}
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', px: 2 }}>
                Navegación
            </Typography>
            <List>
                <ListItemButton sx={{ borderRadius: 2, mb: 0.5, bgcolor: 'rgba(238, 141, 158, 0.1)' }}>
                    <ListItemIcon sx={{ color: '#EE8D9E' }}><WhatshotIcon /></ListItemIcon>
                    <ListItemText primary="Inicio" primaryTypographyProps={{ fontWeight: 'bold' }} />
                </ListItemButton>

                {/* Ejemplo de item dinámico:
                {categorias.map(cat => (
                    <ListItemButton ... >
                        <ListItemText primary={cat.nombre} />
                    </ListItemButton>
                ))} 
                */}
            </List>

            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

            {/* TODO: Más secciones si son necesarias */}
        </Box>
    );
};

export default SidebarLeft;
