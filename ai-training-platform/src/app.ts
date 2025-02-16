import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './api/routes/index';
import { authMiddleware } from './api/middleware/auth';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(authMiddleware);

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});