import express from 'express';
import mongoose from 'mongoose';
import carRouter from './routes/carsRoutes.js';
import seedRouter from './routes/seedRoute.js';

const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

app.use('/api/seed/',seedRouter);
app.use('/api/cars/',carRouter);

mongoose.set('strictQuery', true)
.connect("mongodb+srv://BAravind:jKC69Nt2w3H1PjN1@cluster0.fq4pskd.mongodb.net/CarBooking")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err));

 app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on ${process.env.PORT || 5000} port`);
 })