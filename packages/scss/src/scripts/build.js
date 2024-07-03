const Fs = require('fs');
const { get } = require('http');
const Path = require('path');
const Sass = require('sass');

const getComponents = () => {
    let allComponents = [];
    const types = ['atoms', 'molecules', 'organisms'];

    types.forEach(type => {
        const allFiles = Fs.readdirSync(Path.resolve('src', type)).map(file => ({
            input: Path.resolve('src', type, file),
            output: Path.resolve('src', 'lib', file.replace('.scss', '.css'))
        }))

        allComponents = [...allComponents, ...allFiles];
    })
    return allComponents;
}

const compile = (path, fileName) => {
    const result = Sass.renderSync({
        data: Fs.readFileSync(Path.resolve(path)).toString(),
        outputStyle: 'expanded',
        includePaths: [Path.resolve('src')]
    }).css.toString();

    Fs.writeFileSync(Path.resolve(fileName), result?.css?.toString() ? result.css.toString() : result);
}


compile('src/global.scss', 'src/lib/global.css');
getComponents().forEach(({ input, output }) => compile(input, output));