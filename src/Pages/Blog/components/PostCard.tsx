
import { Box, Typography, Card, CardContent, CardActions, Avatar, IconButton, Chip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';

interface PostCardProps {
    avatarColor?: string;
    username: string;
    role?: string;
    timeAgo: string;
    title: string;
    previewText: string;
    image?: string;
    tags: string[];
    likes: number;
    comments: number;
}

const PostCard = ({ avatarColor = '#8B1E1E', username, role, timeAgo, title, previewText, image, tags, likes, comments }: PostCardProps) => {
    return (
        <Card sx={{
            bgcolor: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 3,
            mb: 3,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                border: '1px solid rgba(238, 141, 158, 0.3)', // Pinkish border on hover
                bgcolor: 'rgba(255,255,255,0.04)',
            }
        }}>
            <CardContent>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: avatarColor, width: 40, height: 40, mr: 2 }}>{username[0]}</Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold' }}>
                                {username}
                            </Typography>
                            {role === 'Admin' && <VerifiedIcon sx={{ color: '#F4C41A', fontSize: 16 }} />}
                            {role && (
                                <Box sx={{
                                    bgcolor: role === 'Admin' ? '#F4C41A22' : '#EE8D9E22',
                                    border: `1px solid ${role === 'Admin' ? '#F4C41A' : '#EE8D9E'}`,
                                    color: role === 'Admin' ? '#F4C41A' : '#EE8D9E',
                                    borderRadius: 1, px: 0.5, fontSize: '0.6rem', fontWeight: 'bold'
                                }}>
                                    {role}
                                </Box>
                            )}
                        </Box>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                            {timeAgo}
                        </Typography>
                    </Box>
                    <IconButton sx={{ color: 'rgba(255,255,255,0.4)' }}>
                        <MoreHorizIcon />
                    </IconButton>
                </Box>

                {/* Content */}
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, lineHeight: 1.6 }}>
                    {previewText}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    {tags.map(tag => (
                        <Chip
                            key={tag}
                            label={`#${tag}`}
                            size="small"
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.05)',
                                color: '#EE8D9E',
                                border: '1px solid rgba(238, 141, 158, 0.2)'
                            }}
                        />
                    ))}
                </Box>

                {/* Image (Optional) */}
                {image && (
                    <Box sx={{
                        width: '100%',
                        height: { xs: 200, md: 300 },
                        borderRadius: 2,
                        overflow: 'hidden',
                        mt: 2,
                        mb: 2,
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <img src={image} alt="Post content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                )}
            </CardContent>

            {/* Actions */}
            <CardActions sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', px: 2, py: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: '#FF4444' } }}>
                        <FavoriteBorderIcon fontSize="small" />
                        <Typography variant="caption" fontWeight="bold">{likes}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: '#EE8D9E' } }}>
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <Typography variant="caption" fontWeight="bold">{comments}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>
                        <ShareIcon fontSize="small" />
                        <Typography variant="caption" fontWeight="bold">Compartir</Typography>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};

export default PostCard;
