"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = void 0;
const util_1 = require("util");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const readFileAsync = (0, util_1.promisify)(fs.readFile);
const generateName = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fNameIndex = Math.floor(Math.random() * 5008);
        const lNameIndex = Math.floor(Math.random() * 150);
        const pathForName = path.resolve(__dirname, "../names.txt");
        const data = yield readFileAsync(pathForName, 'utf-8');
        if (data) {
            const Data = JSON.parse(data);
            const str = Data[0][fNameIndex] + "_" + Data[1][lNameIndex] + "_" + Math.floor(Math.random() * 10000);
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        }
    }
    catch (err) {
        console.error('Error reading file:', err);
    }
});
exports.generateName = generateName;
