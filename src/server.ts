import createCylinder from '@gabriel/cylinder';
import jwt from 'jsonwebtoken';
import express from 'express';
import helmet from 'helmet';

import { users } from './users';
import authJwt from './authJwt';

const app = express();
app.use(express.json());
app.use(helmet());
const PORT = 3001;

app.get('/cylinder', authJwt, async (req, res) => {
    const diameter: number = +(req.query?.diameter?.toString() || 1);
    const depth: number = +(req.query.depth?.toString() || 1);

    const cylinder = createCylinder(diameter, depth);

    const data = {
        diameter: cylinder.diameter,
        depth: cylinder.depth,
        area: cylinder.area(),
        volume: cylinder.volume()
    }

    res.setHeader('Content-type', 'application/json');
    return res.status(200).send(data);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => {
        return user.username === username &&
        user.password === password
    });

    if (user) {
        const accessToken = jwt.sign({
            username: user.username
        }, 'Acc3ssT0k3nS3cr3t');
        res.json({ accessToken }); 
    }
    else {
        res.sendStatus(401);
    }
}); 

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) });