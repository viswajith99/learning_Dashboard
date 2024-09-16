import mongoose from 'mongoose';

// Define the Cart schema
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
}, { timestamps: true }); // Add timestamps option here

// Create the Cart model
export const Cart = mongoose.model('Cart', cartSchema);


