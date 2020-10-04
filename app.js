const fs = require('fs');
const path = require('path');

const ReadFile = () => {
    let pathFile = path.resolve(__dirname, 'hola.txt');
    if (fs.existsSync(pathFile)) {
        let texto = fs.readFileSync(pathFile, { encoding: "base64" });
        let newBuffer = Buffer.from(texto, 'base64');
        console.log(newBuffer);
    } else {
        throw new Error('Error en ruta de archivo');
    }
}

ReadFile();