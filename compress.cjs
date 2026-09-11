const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets');

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

async function processImages() {
  const files = getAllFiles(dir);
  for (const filePath of files) {
    if (filePath.match(/\.(png|jpe?g)$/i)) {
      const oldSize = fs.statSync(filePath).size;
      // Only process files larger than 1MB
      if (oldSize > 1024 * 1024) {
        const tempPath = filePath + '.tmp';
        
        try {
          let s = sharp(filePath);
          s = s.resize(800, null, { withoutEnlargement: true }); // Aggressive resize
          
          if (filePath.toLowerCase().endsWith('.png')) {
            s = s.png({ quality: 60, compressionLevel: 9, palette: true });
          } else {
            s = s.jpeg({ quality: 60, mozjpeg: true });
          }
          
          await s.toFile(tempPath);
          const newSize = fs.statSync(tempPath).size;
          
          fs.renameSync(tempPath, filePath);
          console.log(`✅ Aggressively Compressed ${path.basename(filePath)}: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB`);
        } catch (err) {
          console.error(`❌ Error on ${path.basename(filePath)}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

processImages();
