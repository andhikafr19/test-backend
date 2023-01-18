import jwt from "jsonwebtoken";
import { where } from "sequelize";
import Profile from "../models/ProfileModel.js";
 
export const getProfile = async(req, res) => {
    try {
        const profile = await Profile.findAll({
            attributes:['id','first_name','last_name','address','gender','image']
        });
        res.json(profile);
    } catch (error) {
        console.log(error);
    }
}
 
export const postProfile = async(req, res) => {
    const { first_name,last_name,address,gender,image } = req.body;
    try {
        await Profile.create({
            first_name: first_name,
            last_name: last_name,
            address: address,
            gender: gender,
            image: image
        });
        res.json({msg: "Profile Berhasil Di Tambah"});
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async(req, res) => {
    const profileId = await Profile.findOne({
        where:{
            id : req.params.id
        }
    });

    const { first_name,last_name,address,gender,image } = req.body;
    try {
        await Profile.update({
            first_name: first_name,
            last_name: last_name,
            address: address,
            gender: gender,
            image: image
        },{
            where:{
                    id: req.params.id
            }
        });
        res.json({msg: "Profile Berhasil Di Update"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteProfile = async(req, res) => {
    const profileId = await Profile.findOne({
        where:{
            id : req.params.id
        }
    });
    try {
        await Profile.destroy({
            where:{
                    id: req.params.id
            }
        });
        res.json({msg: "Profile Berhasil Di Hapus"});
    } catch (error) {
        console.log(error);
    }
}

