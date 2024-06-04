const fs = require('fs');
const versionNode = Number(process.version.split('.')[0].substring(1));

function readPackage(pkg, context) {
    console.log('before',JSON.stringify(pkg))
    console.log()
    if (pkg.name === 'typescript') {
        pkg.version = '4.9.5';
        pkg.devDependencies['typescript'] = '4.9.5';
    }
    console.log('after',JSON.stringify(pkg))
    return pkg;
}

module.exports = {
    hooks: {
        readPackage,
    }
}