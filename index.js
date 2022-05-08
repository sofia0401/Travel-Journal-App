import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: "./client/build/"});
        // res.sendFile('/../client/build/index.html');
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api running');
    });
}
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.error(error.message));

// mongoose.set('useFindAndModify', false);

