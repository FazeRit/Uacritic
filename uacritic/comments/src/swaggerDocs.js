import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Comments API',
            version: '1.0.0',
            description: 'API for comments management',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/comments', 
            },
        ],
    },
    apis: ['./routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default function swaggerSetup(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
