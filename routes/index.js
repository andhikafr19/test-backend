import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { deleteProduct, getProducts, postProduct, updateProduct } from "../controllers/Products.js";
import { deleteProfile, getProfile, postProfile, updateProfile } from "../controllers/Profile.js";
 
const router = express.Router();

// Users
router.get('/users', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Profile
router.get('/profile', getProfile);
router.post('/profile', postProfile);
router.put('/profile/:id', updateProfile);
router.delete('/profile/:id', deleteProfile);

// Product
router.get('/products', getProducts);
router.post('/products', postProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);



export default router;