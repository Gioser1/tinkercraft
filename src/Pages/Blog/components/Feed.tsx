import { Box } from '@mui/material';
// import PostCard from './PostCard'; // Uncomment when mapping data

const Feed = () => {
    // TODO: INTEGRACIÓN CON BACKEND
    // 1. Crear un estado para almacenar las publicaciones: const [posts, setPosts] = useState([]);
    // 2. Obtener publicaciones de la API en useEffect:
    //    useEffect(() => {
    //      fetch('TU_ENDPOINT_API/publicaciones')
    //        .then(res => res.json())
    //        .then(data => setPosts(data));
    //    }, []);
    // 3. Mapear el estado 'posts' para renderizar los componentes PostCard

    return (
        <Box>
            {/*
                TODO: Mapear publicaciones aquí
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        username={post.author.username}
                        title={post.title}
                        ... 
                    />
                ))}
            */}

            {/* Placeholder for empty state or loading */}
            <Box sx={{ p: 4, textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                Esperando conexión con el servidor...
            </Box>
        </Box>
    );
};

export default Feed;
