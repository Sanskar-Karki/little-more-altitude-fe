import fs from 'fs';
import path from 'path';

const trekkingsPath = path.resolve('src/data/trekkings.json');
const publicPath = path.resolve('public');

const trekkings = JSON.parse(fs.readFileSync(trekkingsPath, 'utf-8'));

trekkings.forEach((trek, index) => {
    const mainImages = trek.images?.mainImages || [];
    const overviewImages = trek.images?.overviewImages || [];

    [...mainImages, ...overviewImages].forEach((imgUrl) => {
        if (imgUrl.startsWith('/')) {
            const fullPath = path.join(publicPath, imgUrl);
            if (!fs.existsSync(fullPath)) {
                console.log(`MISSING: Trek [${index}] ${trek.title} -> ${imgUrl}`);
                // Find potential matches ignoring case
                const dir = path.dirname(fullPath);
                const base = path.basename(fullPath);
                if (fs.existsSync(dir)) {
                    const files = fs.readdirSync(dir);
                    const match = files.find(f => f.toLowerCase() === base.toLowerCase());
                    if (match) {
                        console.log(`  SUGGESTION: Found match with different case: ${path.join(path.dirname(imgUrl), match).replace(/\\/g, '/')}`);
                    } else {
                        console.log(`  WARNING: No file found even with case-insensitive search in ${dir}`);
                    }
                } else {
                    console.log(`  CRITICAL: Directory does not exist: ${dir}`);
                    // Search parent
                    let parent = path.dirname(dir);
                    let folderBase = path.basename(dir);
                    if (fs.existsSync(parent)) {
                         const dirs = fs.readdirSync(parent);
                         const matchDir = dirs.find(d => d.toLowerCase() === folderBase.toLowerCase());
                         if (matchDir) {
                             console.log(`  SUGGESTION: Found folder match with different case: ${matchDir}`);
                         }
                    }
                }
            }
        }
    });
});
