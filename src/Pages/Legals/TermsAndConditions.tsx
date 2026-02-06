import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            bgcolor: '#0B0B0B',
            minHeight: '100vh',
            color: '#E0E0E0',
            py: 8,
            fontFamily: "'Cinzel', serif"
        }}>
            <Container maxWidth="md">
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(-1)}
                    sx={{ color: '#E0E0E0', mb: 4, '&:hover': { color: '#FFD700' } }}
                >
                    Volver
                </Button>

                <Paper elevation={3} sx={{
                    p: { xs: 3, md: 5 },
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: '#E0E0E0',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 2
                }}>
                    <Typography variant="h3" component="h1" sx={{ textAlign: 'center', mb: 4, color: '#FFD700', fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
                        TÉRMINOS Y CONDICIONES
                    </Typography>

                    <Box component="div" sx={{ typography: 'body1', '& h2': { color: '#EE8D9E', mt: 4, mb: 2, fontSize: '1.5rem', fontFamily: "'Cinzel', serif" }, '& p, & ul': { mb: 2, lineHeight: 1.7 }, '& strong': { color: '#fff' } }}>
                        <p><strong>Última actualización: 04 de Febrero de 2026</strong></p>

                        <h2>1. Definiciones</h2>
                        <p>A los efectos de estos Términos:</p>
                        <ul>
                            <li><strong>“Donación”</strong> significa cualquier aporte monetario realizado voluntariamente a <strong>MinecraftJapon</strong> a través de los canales habilitados.</li>
                            <li><strong>“Donante”</strong> es la persona natural o jurídica que realiza la Donación.</li>
                            <li><strong>“Plataforma”</strong> se refiere al servidor de Minecraft y sus servicios web asociados.</li>
                        </ul>

                        <h2>2. Naturaleza de la Operación</h2>
                        <p>Las aportaciones efectuadas a través de este sitio constituyen <strong>DONACIONES VOLUNTARIAS</strong> para el mantenimiento y desarrollo del servidor. <strong>NO constituyen una compra de bienes o servicios comerciales.</strong></p>
                        <ul>
                            <li>No se genera ninguna relación de compraventa ni obligación de entrega física.</li>
                            <li>Las "recompensas" o "rangos" otorgados son agradecimientos simbólicos y no productos garantizados.</li>
                        </ul>

                        <h2>3. Política de Reembolsos (FINAL e IRREVOCABLE)</h2>
                        <p>Salvo disposición legal imperativa en la jurisdicción local aplicable:</p>
                        <ul>
                            <li><strong>TODAS LAS DONACIONES SON NO REEMBOLSABLES.</strong></li>
                            <li>Al realizar una donación, el Donante renuncia a cualquier derecho de retracto, disputa o chargeback (contracargo) una vez procesada la transacción.</li>
                            <li>En casos excepcionales (error técnico comprobable de nuestra parte), <strong>MinecraftJapon</strong> se reserva la facultad de revisar el caso.</li>
                            <li>Cualquier intento de reembolso forzoso (chargeback) resultará en el bloqueo permanente (ban ip) del Donante en todas las plataformas de la comunidad.</li>
                        </ul>

                        <h2>4. Menores de Edad y Uso de Tarjetas</h2>
                        <p>La edad mínima para realizar donaciones sin autorización parental es <strong>18 años</strong>.</p>
                        <ul>
                            <li><strong>EXENCIÓN DE RESPONSABILIDAD:</strong> <strong>MinecraftJapon NO se hace responsable si un menor de edad utiliza una tarjeta de crédito/débito o cuenta de pago sin la autorización expresa de sus padres o tutores legales.</strong></li>
                            <li>Es responsabilidad exclusiva de los padres o tutores supervisar la actividad en línea de los menores a su cargo.</li>
                            <li>Si se verifica que una donación fue realizada por un menor sin consentimiento, nos reservamos el derecho de suspender la cuenta asociada, pero <strong>no estamos obligados a realizar reembolsos</strong> si los fondos ya han sido consumidos o procesados, salvo mandato judicial.</li>
                        </ul>

                        <h2>5. Consentimiento y Aceptación</h2>
                        <p>Al hacer clic en el botón de confirmación ("DONAR" o similar), el Donante declara bajo juramento:</p>
                        <ol>
                            <li>Ser el titular legítimo de los fondos y/o el método de pago utilizado.</li>
                            <li>Haber leído, entendido y aceptado estos TÉRMINOS Y CONDICIONES.</li>
                            <li>Que la transacción no proviene de actividades ilícitas.</li>
                        </ol>

                        <h2>6. Modificaciones</h2>
                        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio.</p>

                        <h2>7. Contacto</h2>
                        <p>Para dudas, aclaraciones o reportes de fraude, por favor contactar a: <strong>soporte@minecraftjapon.com</strong></p>

                        <hr style={{ margin: '40px 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                        <p><em>Descargo de responsabilidad: Este documento establece las normas de uso del servicio, pero no sustituye el asesoramiento legal profesional en su jurisdicción local.</em></p>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default TermsAndConditions;
