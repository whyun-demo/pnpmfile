const fs = require('fs');
const versionNode = Number(process.version.split('.')[0].substring(1));

function readPackage(pkg, context) {
    const { dependencies, devDependencies, peerDependencies } = pkg
    if (dependencies?.typescript) dependencies.typescript = '4.9.5'
    if (devDependencies?.typescript) peerDependencies.typescript = '4.9.5'
    if (peerDependencies?.typescript) peerDependencies.typescript = '4.9.5'
    return pkg
}

module.exports = {
    hooks: {
        readPackage,
    }
}