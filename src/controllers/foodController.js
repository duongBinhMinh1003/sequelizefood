import mysql from 'mysql2';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js'; 

const model = initModels(sequelize);
const getFood = async (req, res) => {
    let data = await model.food.findAll();
    res.send(data);
}
const likeRes = async (req, res) => {
    const { userId, resId } = req.body;

    try {
        if (!userId) {
            throw new Error('Missing userId in request body');
        }

        
        const existingLike = await model.like_res.findOne({
            where: { user_id: userId, res_id: resId },
        });

        if (existingLike) {
           
            existingLike.date_time = new Date();
            await existingLike.save();
            res.status(200).json({ message: 'Updated like successfully.' });
        } else {
            
            await model.like_res.create({
                user_id: userId,
                res_id: resId,               
                date_time: new Date(),
            });
            res.status(200).json({ message: 'Liked restaurant successfully.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to like restaurant.' });
    }
};
const unlikeRes = async (req, res) => {
    const { userId, resId } = req.body;

    try {
       
        const existingLike = await model.like_res.findOne({
            where: { user_id: userId, res_id: resId },
        });

        if (existingLike) {
            
            await existingLike.destroy();
            res.status(200).json({ message: 'Unliked restaurant successfully.' });
        } else {
            
            res.status(404).json({ error: 'No existing like found for this user and restaurant.' });
        }
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Failed to unlike restaurant.' });
    }
};
const getLikesByRestaurantAndUser = async (req, res) => {
    const { userId, resId } = req.body;

    try {
       
        const likes = await model.like_res.findAll({
            where: { user_id: userId, res_id: resId },
        });

        res.status(200).json({ likes });
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch likes.' });
    }
};

const addReview = async (req, res) => {
    const { userId, resId, amount } = req.body;

    try {
        
        const existingReview = await model.rate_res.findOne({
            where: { user_id: userId, res_id: resId },
        });

        if (existingReview) {
         
            existingReview.amount = amount;
            existingReview.date_rate = new Date();
            await existingReview.save();
            res.status(200).json({ message: 'Updated review successfully.' });
        } else {
          
            await model.rate_res.create({
                user_id: userId,
                res_id: resId,
                amount: amount,
                date_rate: new Date(),
            });
            res.status(200).json({ message: 'Added review successfully.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add review.' });
    }
};

const getRatesByRestaurantAndUser = async (req, res) => {
    const { userId, resId } = req.body;

    try {
       
        const rates = await model.rate_res.findAll({
            where: { user_id: userId, res_id: resId },
        });

        res.status(200).json({ rates });
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch likes.' });
    }
};
const addOrder = async (req, res) => {
    const { userId, foodId, amount } = req.body; 
        const newOrder = await model.orders.create({
            user_id: userId,
            food_id: foodId,
            amount: amount,
        });
        res.status(201).json({ message: 'Order created successfully.', order: newOrder });
};





export { getFood,
        likeRes,
        unlikeRes,
        getLikesByRestaurantAndUser,
        addReview,
        getRatesByRestaurantAndUser,
        addOrder,
};
