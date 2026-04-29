const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let patients = [];

app.get('/api/patients', (req, res) => {
    res.json(patients);
});

app.post('/api/patients', (req, res) => {
    const patient = req.body;
    patients.push(patient);
    res.json(patient);
});

app.get('/api/patients/:id', (req, res) => {
    const patient = patients.find(p => p.id === req.params.id);
    res.json(patient);
});

app.put('/api/patients/:id', (req, res) => {
    const index = patients.findIndex(p => p.id === req.params.id);
    patients[index] = req.body;
    res.json(patients[index]);
});

app.delete('/api/patients/:id', (req, res) => {
    patients = patients.filter(p => p.id !== req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(port, () => {
    console.log(`MediTrack running on port ${port}`);
});
