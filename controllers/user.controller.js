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
const http_status_codes_1 = require("http-status-codes");
const data_access_1 = __importDefault(require("../data-access/"));
const utils_1 = __importDefault(require("../utils"));
const getUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const users = yield data_access_1.default.userDataAccess.getUser({ _id: userId });
    if (users === null || users === void 0 ? void 0 : users.length) {
        const user = users === null || users === void 0 ? void 0 : users.pop();
        user === null || user === void 0 ? true : delete user.password;
        return res.status(http_status_codes_1.StatusCodes.OK).json(user);
    }
    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: "User not found"
    });
});
const getUserDetailsWithToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const tokenInfo = utils_1.default.authUtils.getJWTInfo(((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "");
    if (tokenInfo) {
        const { _id: userId } = tokenInfo;
        const users = yield data_access_1.default.userDataAccess.getUser({ _id: userId });
        if (users === null || users === void 0 ? void 0 : users.length) {
            const user = users === null || users === void 0 ? void 0 : users.pop();
            user === null || user === void 0 ? true : delete user.password;
            if (user) {
                return res.status(http_status_codes_1.StatusCodes.OK).json(user);
            }
        }
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User not found"
        });
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User not found"
        });
    }
});
const updateContactInformations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const tokenInfo = utils_1.default.authUtils.getJWTInfo(((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]) || "");
    if (tokenInfo) {
        const { _id: userId } = tokenInfo;
        const users = yield data_access_1.default.userDataAccess.getUser({ _id: userId });
        if (users === null || users === void 0 ? void 0 : users.length) {
            const user = users === null || users === void 0 ? void 0 : users.pop();
            user === null || user === void 0 ? true : delete user.password;
            if (user) {
                const contactInformations = req.body;
                const tempUser = Object.assign(Object.assign({}, user), { contactInformations });
                const updatedUser = yield data_access_1.default.userDataAccess.updateUser(user._id, tempUser);
                return res.status(http_status_codes_1.StatusCodes.OK).json(updatedUser);
            }
        }
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User contact infos could not updated!"
        });
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "User not authorized!"
        });
    }
});
const updatePersonalInformations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const tokenInfo = utils_1.default.authUtils.getJWTInfo(((_c = req.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(" ")[1]) || "");
    if (tokenInfo) {
        const { _id: userId } = tokenInfo;
        const users = yield data_access_1.default.userDataAccess.getUser({ _id: userId });
        if (users === null || users === void 0 ? void 0 : users.length) {
            const user = users === null || users === void 0 ? void 0 : users.pop();
            user === null || user === void 0 ? true : delete user.password;
            if (user) {
                const personalInformations = req.body;
                const tempUser = Object.assign(Object.assign({}, user), { personalInformations });
                const updatedUser = yield data_access_1.default.userDataAccess.updateUser(user._id, tempUser);
                return res.status(http_status_codes_1.StatusCodes.OK).json(updatedUser);
            }
        }
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User updatePersonalInformations infos could not updated!"
        });
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "User not authorized!"
        });
    }
});
const updateAddressInformations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const tokenInfo = utils_1.default.authUtils.getJWTInfo(((_d = req.headers.authorization) === null || _d === void 0 ? void 0 : _d.split(" ")[1]) || "");
    if (tokenInfo) {
        const { _id: userId } = tokenInfo;
        const users = yield data_access_1.default.userDataAccess.getUser({ _id: userId });
        if (users === null || users === void 0 ? void 0 : users.length) {
            const user = users === null || users === void 0 ? void 0 : users.pop();
            user === null || user === void 0 ? true : delete user.password;
            if (user) {
                const addressInformations = req.body;
                console.log("addressInformations", addressInformations);
                const tempUser = Object.assign(Object.assign({}, user), { addressInformations });
                const updatedUser = yield data_access_1.default.userDataAccess.updateUser(user._id, tempUser);
                return res.status(http_status_codes_1.StatusCodes.OK).json(updatedUser);
            }
        }
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User updatePersonalInformations infos could not updated!"
        });
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User updateAddressInformations infos could not updated!"
        });
    }
});
// 
// 
exports.default = {
    getUserDetails,
    getUserDetailsWithToken,
    updateContactInformations,
    updatePersonalInformations,
    updateAddressInformations,
};
