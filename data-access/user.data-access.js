"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crud Create - Read - Update - Delete
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
// Create
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.UserModel.create(user);
});
// Read
const getUser = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const pipeline = [];
    if (!(userInfo === null || userInfo === void 0 ? void 0 : userInfo._id) && !(userInfo === null || userInfo === void 0 ? void 0 : userInfo.identifier)) {
        return null;
    }
    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo._id) {
        pipeline.push({
            $match: {
                _id: new mongoose_1.default.Types.ObjectId(userInfo._id)
            }
        });
    }
    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.email) {
        pipeline.push({
            $match: {
                email: userInfo.email
            }
        });
    }
    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) {
        pipeline.push({
            $match: {
                username: userInfo.username
            }
        });
    }
    if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.identifier) {
        pipeline.push({
            $match: {
                $or: [
                    { username: userInfo.identifier },
                    { email: userInfo.identifier },
                    { phone: userInfo.identifier }
                ]
            }
        });
    }
    return yield models_1.UserModel.aggregate(pipeline).exec();
});
// Update
const updateUser = (userId, updatedUserDTO) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.UserModel.findByIdAndUpdate(userId, updatedUserDTO, { new: true }).exec();
});
// Delete
exports.default = {
    createUser,
    updateUser,
    getUser
};
