import { createRoute } from "../../api/createRoute";
import { PlaceModel } from "../../db/models/placeModel"; // Changed 'LieuModel' to 'PlaceModel'

const sendResponse = (res, status, data) => res.status(status).json(data);

const handleGet = async (req, res) => {
  const { id } = req.query;
  const places = id ? await PlaceModel.findById(id) : await PlaceModel.find({}); // Changed 'LieuModel' to 'PlaceModel'
  if (!places) {
    return sendResponse(res, 404, { error: "Places not found" });
  }
  sendResponse(res, 200, places);
};

const handlePost = async (req, res) => {
  const place = new PlaceModel(req.body); 
  await place.save();
  sendResponse(res, 201, place); 
};

const handlePut = async (req, res) => {
  const { id } = req.query;
  const place = await PlaceModel.findByIdAndUpdate(id, req.body, { new: true }); 
  if (!place) {
    return sendResponse(res, 404, { error: "Place not found" });
  }
  sendResponse(res, 200, place); 
};

const handleDelete = async (req, res) => {
  const { id } = req.query;
  const place = await PlaceModel.findByIdAndDelete(id); 
  if (!place) {
    return sendResponse(res, 404, { error: "Place not found" });
  }
  res.status(204).end();
};

export default createRoute(async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
      break;
    case "PUT":
      await handlePut(req, res);
      break;
    case "DELETE":
      await handleDelete(req, res);
      break;
    default:
      sendResponse(res, 405, { error: "Method not allowed" });
  }
});
