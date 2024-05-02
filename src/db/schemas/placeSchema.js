import mongoose from "mongoose";

export const placeSchema = new mongoose.Schema({
  placeType: { type: String, required: true },
  placeName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  cuisineType: String,
  starRating: Number,
  averagePrice: String,
  artMovement: String,
  artType: String,
  freeOrPaid: String,
  price: Number,
  barType: String,
  parkType: String,
  publicOrPrivate: String,
});
