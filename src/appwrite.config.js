import { Client } from 'appwrite';

const client = new Client();

try {
    client
        .setEndpoint(process.env.REACT_APP_API_ENDPOINT)
        .setProject(process.env.REACT_APP_PROJECT_ID);
    
    console.log('Appwrite client configured with:', {
        endpoint: process.env.REACT_APP_API_ENDPOINT,
        projectId: process.env.REACT_APP_PROJECT_ID
    });
} catch (error) {
    console.error('Error configuring Appwrite client:', error);
}

export default client;

