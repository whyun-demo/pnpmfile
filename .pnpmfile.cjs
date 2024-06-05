const fs = require('fs');
const versionNode = Number(process.version.split('.')[0].substring(1));

function readPackage(pkg, context) {
    const { dependencies, devDependencies } = pkg
    if (dependencies?.typescript) dependencies.typescript = '4.9.5'
    if (devDependencies?.typescript) devDependencies.typescript = '4.9.5'
    return pkg
}

module.exports = {
    hooks: {
        readPackage,
    }
}