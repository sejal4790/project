import mongoose from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  ingredients: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Sweet', 'Savory'],
  },
  ingredients: [{
    type: String,
    required: true,
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);