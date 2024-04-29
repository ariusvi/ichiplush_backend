import express from 'express';
const router = express.Router();

//-----USER ROUTES-----
//todo esto es una ruta de ejemplo para exportar userRoutes a server.ts
router.get('/', (req, res) => {
    res.send('List of users');
});

//-----export router-----
export default router;
