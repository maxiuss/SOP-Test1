import request from 'supertest';
import app from '../../src/app';

describe('Integration Tests for AI Training Platform', () => {
    it('should return a 200 status for the main API endpoint', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
    });

    it('should process SOPs and return training modules', async () => {
        const response = await request(app)
            .post('/api/sop/process')
            .send({ sopContent: 'Sample SOP content' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('trainingModules');
    });

    it('should authenticate user and return 200 status', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});