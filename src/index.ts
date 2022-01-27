import createCylinder from 'cylinder';
import express from 'express';

const app = express();
const PORT = 3001;

app.get('/cylinder', async (req, res) => {
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

app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) });