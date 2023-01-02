import mongoose from 'mongoose';

const carsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    fuelType: {type: String, required: true},
    bookedTimeSlots: {type: [String], default: []},
    capacity: {type: Number, required: true},
},{
    timestamps: true
});

const Cars = mongoose.model("Cars", carsSchema);
export default Cars;