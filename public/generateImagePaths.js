const fs = require('fs');
const path = require('path');

const imageDirectory = "/homepage/resized";

function getImagePaths(directory) {
  const imagePaths = [];
  const files = fs.readdirSync(directory);
  var key = -1;

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        imagePaths.push({ key: key += 1, path: `/homepage/resized/${file}`});
      }
    }
  });

  return imagePaths;
}

const imagePaths = getImagePaths(imageDirectory);
res.status(200).json(imagePaths);
