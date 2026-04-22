import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../assets/ramEvents');
const outputDir = path.join(__dirname, '../assets/ramEventsOptimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
);

console.log(`🚀 Found ${files.length} images to optimize...`);

async function optimizeImages() {
    let totalSaved = 0;

    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        
        try {
            const stats = fs.statSync(inputPath);
            const originalSize = stats.size / (1024 * 1024);
            
            console.log(`\n📸 Optimizing: ${file} (${originalSize.toFixed(2)} MB)`);

            await sharp(inputPath)
                .rotate() // Automatically rotate based on EXIF orientation
                .resize(1920, 1920, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ 
                    quality: 80, 
                    progressive: true,
                    mozjpeg: true 
                })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            const newSize = newStats.size / (1024 * 1024);
            const saved = originalSize - newSize;
            totalSaved += saved;

            console.log(`✅ Done: ${newSize.toFixed(2)} MB (Saved ${(saved).toFixed(2)} MB)`);
        } catch (err) {
            console.error(`❌ Error optimizing ${file}:`, err);
        }
    }

    console.log(`\n✨ Finished! Total memory saved: ${totalSaved.toFixed(2)} MB`);
    console.log(`👉 Optimized images are in: src/assets/ramEventsOptimized`);
}

optimizeImages();
