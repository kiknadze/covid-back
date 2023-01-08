const express = require('express');
const cors = require('cors');

const covidRouter = require('./routes/covid');
const stateRouter = require('./routes/states');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/covid', covidRouter);
app.use('/states', stateRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

