import { promisify } from 'util';
import fs from 'fs'
import { resolve } from 'path'
const readFileAsync = promisify(fs.readFile);

export const generateName = async () => {
    try {
        const fNameIndex = Math.floor(Math.random() * 5008);
        const lNameIndex = Math.floor(Math.random() * 150);
        const path = resolve(__dirname,"../names.txt")
        const data = await readFileAsync(path, 'utf-8');
        if (data) {
            const Data = JSON.parse(data);
            return Data[0][fNameIndex] + "_" + Data[1][lNameIndex] + "_" + Math.floor(Math.random() * 10000);
        }
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

generateName()