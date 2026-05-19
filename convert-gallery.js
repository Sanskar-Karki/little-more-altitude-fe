const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const galleryDir = path.join(__dirname, 'public', 'gallery');

async function convertHeicToJpg() {
    console.log('Starting HEIC to JPG conversion inside:', galleryDir);

    if (!fs.existsSync(galleryDir)) {
        console.error(`Error: Gallery directory "${galleryDir}" does not exist.`);
        process.exit(1);
    }

    const files = fs.readdirSync(galleryDir);
    const heicFiles = files.filter(file => file.toLowerCase().endsWith('.heic'));

    if (heicFiles.length === 0) {
        console.log('No HEIC files found in the gallery folder.');
        return;
    }

    console.log(`Found ${heicFiles.length} HEIC files to process.`);

    for (let i = 0; i < heicFiles.length; i++) {
        const file = heicFiles[i];
        const inputPath = path.join(galleryDir, file);
        
        // Output file will have the same name but with .jpg extension
        const outputFileName = file.substring(0, file.lastIndexOf('.')) + '.jpg';
        const outputPath = path.join(galleryDir, outputFileName);

        console.log(`[${i + 1}/${heicFiles.length}] Checking: ${file} ...`);

        if (fs.existsSync(outputPath)) {
            console.log(`  -> Already converted: ${outputFileName} (Skipping)`);
            continue;
        }

        console.log(`  -> Converting: ${file} to ${outputFileName} (This may take a moment...)`);
        const startTime = Date.now();

        try {
            const inputBuffer = fs.readFileSync(inputPath);
            const outputBuffer = await heicConvert({
                buffer: inputBuffer,
                format: 'JPEG',
                quality: 0.85 // High quality, well-optimized for web loading speed
            });

            fs.writeFileSync(outputPath, outputBuffer);
            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(`  -> Success! Saved to ${outputFileName} in ${duration}s`);
        } catch (error) {
            console.error(`  -> Failed to convert ${file}:`, error.message);
        }
    }

    console.log('\nHEIC to JPG conversion process completed!');
}

convertHeicToJpg().catch(err => {
    console.error('Unhandled error during conversion:', err);
});
