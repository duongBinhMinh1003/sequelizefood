import express from 'express'
import { addOrder, addReview, getFood, getLikesByRestaurantAndUser, getRatesByRestaurantAndUser, likeRes, unlikeRes } from '../controllers/foodcontroller.js'
const foodRouter = express.Router();

foodRouter.get("/get-food",getFood)
foodRouter.post("/like-res",likeRes)
foodRouter.post("/unlike-res",unlikeRes)
foodRouter.get("/getlike-by-res-user",getLikesByRestaurantAndUser)
foodRouter.post("/add-review",addReview)
foodRouter.get("/getrate-by-user",getRatesByRestaurantAndUser)
foodRouter.post("addOrder",addOrder)
export default foodRouter;