import { Client } from 'appwrite';

const client = new Client();

try {
    // Log environment variables (will be undefined if not set)
    console.log('Environment Variables:', {
        projectId: process.env.REACT_APP_PROJECT_ID,
        endpoint: process.env.REACT_APP_API_ENDPOINT
    });

    if (!process.env.REACT_APP_PROJECT_ID) {
        throw new Error('Project ID is not defined in environment variables');
    }

    if (!process.env.REACT_APP_API_ENDPOINT) {
        throw new Error('API Endpoint is not defined in environment variables');
    }

    client
        .setEndpoint(process.env.REACT_APP_API_ENDPOINT)
        .setProject(process.env.REACT_APP_PROJECT_ID);
    
    console.log('Appwrite client configured successfully with:', {
        endpoint: process.env.REACT_APP_API_ENDPOINT,
        projectId: process.env.REACT_APP_PROJECT_ID,
        origin: window.location.origin
    });
} catch (error) {
    console.error('Error configuring Appwrite client:', error.message);
    throw error; // Re-throw to make sure the error is not silently caught
}

export default client;

