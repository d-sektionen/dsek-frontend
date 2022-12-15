import { buildConfig } from 'payload/config';
import Users from './collections/Users';

export default buildConfig({
    serverURL: 'http://localhost:4000',
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- D-Sektionen',
        }
    },
    collections: [
        Users,
        // Add Collections here
        // Examples
    ],
});
