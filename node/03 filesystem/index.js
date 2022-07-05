const { read, readdir } = require('fs');
const path = require('path');
const fs = require('fs').promises;

async function reddir(rootdir) {
    rootdir = rootdir || path.resolve(__dirname);

    const files = await fs.readdir(rootdir);
    walk(files, rootdir);
};


async function walk(files, rootdir) {
    
    for (let file of files) {
        const fileFullFile = path.resolve(rootdir, file);
        const stats = await fs.stat(fileFullFile);

        if(/\.git/g.test(fileFullFile)) continue;
        if(/node_modules/g.test(fileFullFile)) continue;

        if(stats.isDirectory()) {
            reddir(fileFullFile);
            continue
        }
        console.log(file, stats.isDirectory());
    }
}

reddir('/home/treinamento-06/git/Curso_JS');
