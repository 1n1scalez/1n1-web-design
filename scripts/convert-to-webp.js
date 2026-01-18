
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetDirs = ['public', 'Images', 'Logo'];

async function convertDir(dirName) {
    const dirPath = path.join(rootDir, dirName);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i)) {
            const inputPath = path.join(dirPath, file);
            const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');

            console.log(`Converting ${file} to WebP...`);
            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`✓ Created ${outputPath}`);
            } catch (err) {
                console.error(`✗ Failed to convert ${file}:`, err);
            }
        }
    }
}

async function main() {
    for (const dir of targetDirs) {
        await convertDir(dir);
    }
}

main();
