import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Achievements API',
            version: '1.0.0',
            description: 'API for achievements management',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/achievements', 
            },
        ],
    },
    apis: ['./routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default function swaggerSetup(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
