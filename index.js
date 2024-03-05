const express=require('express');
const app=express();
const PORT=8083;

let resorts = [
    {id:1, name:"Ocean Hotel", location: "Petőfi Sándor utca 1.", cost: 500}
]

app.use(express.json())

app.get('api/resorts', (req, res) => {
    res.json(resorts);
});

app.get('/api/resorts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resort = resorts.find(r => r.id === id);
    if (!resort) {
        return res.status(404).json({ message: 'Resort not found' });
    }
    res.json(resort);
});

app.post('/api/resorts', (req, res) => {
    const { id, name, location, cost } = req.body;
    const newResort = { id, name, location, cost };
    resorts.push(newResort);
    res.status(201).json(newResort);
});

app.listen(
    PORT,
    () => console.log(`it is alive on http://localhost:${PORT}`)
)