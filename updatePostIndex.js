const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'public/Blog/post');
const indexFile = path.join(__dirname, 'public/Blog/post_index.json');

function updatePostIndex() {
    fs.readdir(postsDir, (err, files) => {
        if (err) {
            console.error('Error reading posts directory:', err);
            return;
        }

        const posts = files.filter(file => file.endsWith('.md')).map(file => {
            const filePath = path.join(postsDir, file);
            const stats = fs.statSync(filePath);
            return {
                title: path.basename(file, '.md'),
                time: stats.mtime.toISOString().slice(0, 13),
                file: file
            };
        });

        fs.writeFile(indexFile, JSON.stringify(posts, null, 2), err => {
            if (err) {
                console.error('Error writing index file:', err);
            } else {
                console.log('Post index updated successfully.' + new Date());
            }
        });
    });
}

//init
updatePostIndex();

//update time
setInterval(updatePostIndex, 60000);