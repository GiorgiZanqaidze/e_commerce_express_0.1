import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes'; // Import user routes
import dotenv from 'dotenv'; // For environment variables
import logger from './middleware/logger';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT from environment or default to 3000

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(logger);

const router = express.Router();

// Routes
app.use('/api/users', userRoutes); // Mount user routes at /api/users

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
