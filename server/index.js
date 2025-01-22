import express, { json } from 'express'
import dotenv from 'dotenv'
import { tastRoutes } from './Routes/TaskRoutes.js';
import cors from 'cors'

dotenv.config();

const port = process.env.PORT

const app = express();

app.use(cors({
    origin: "http://localhost:3000/",
    credentials: true 
}))

app.use(json());
app.use('/', tastRoutes);


app.listen(port, () => {
    console.log("running server", port);

})