import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const readFileAsync = promisify(fs.readFile);

export const generateName = async () => {
    try {
        const fNameIndex = Math.floor(Math.random() * 5008);
        const lNameIndex = Math.floor(Math.random() * 150);
        const pathForName = path.resolve(__dirname,"../names.txt")
        const data = await readFileAsync(pathForName, 'utf-8');
        if (data) {
            const Data = JSON.parse(data);
            const str = Data[0][fNameIndex] + "_" + Data[1][lNameIndex] + "_" + Math.floor(Math.random() * 10000);
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        }
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
