import express from "express";
import bodyParser from "body-parser";
import users from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))


