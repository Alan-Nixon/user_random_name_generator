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
exports.generateName = void 0;
const util_1 = require("util");
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const readFileAsync = (0, util_1.promisify)(fs_1.default.readFile);
const generateName = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fNameIndex = Math.floor(Math.random() * 5008);
        const lNameIndex = Math.floor(Math.random() * 150);
        const path = (0, path_1.resolve)(__dirname, "../names.txt");
        console.log(path);
        const data = yield readFileAsync(path, 'utf-8');
        if (data) {
            const Data = JSON.parse(data);
            return Data[0][fNameIndex] + "_" + Data[1][lNameIndex] + "_" + Math.floor(Math.random() * 10000);
        }
    }
    catch (err) {
        console.error('Error reading file:', err);
    }
});
exports.generateName = generateName;
(0, exports.generateName)();
