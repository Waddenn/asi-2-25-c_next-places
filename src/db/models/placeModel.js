import mongoose from "mongoose";
import { placeSchema } from "../schemas/placeSchema";

const PlaceModel =
  mongoose.models.Place || mongoose.model("Place", placeSchema);

export { PlaceModel };
