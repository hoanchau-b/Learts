const fs = require('fs');
const path = require('path');

const jsDir = __dirname;
const files = fs.readdirSync(jsDir);
for (const f of files) {
    if (f.endsWith('.tải xuống')) {
        const newName = f.replace('.tải xuống', '');
        fs.renameSync(path.join(jsDir, f), path.join(jsDir, newName));
        console.log(`Renamed: ${f} -> ${newName}`);
    }
}
console.log('Done!');
