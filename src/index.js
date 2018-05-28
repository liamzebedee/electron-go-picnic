const os = require('os');
const path = require('path');

export function getExecutableName(name) {
    let arch = getGOARCH();
    let os = getGOOS();
    return `${name}-${os}-${arch}`;
}

export function getAppPath() {
    let appPath = electron.app.getAppPath()

    if(process.env.ELECTRON_ENV == 'development') {
        return appPath;
    } else {
        return appPath.replace('app.asar', 'app.asar.unpacked')
    }
}

export function getGOARCH() {
    switch(require('arch')()) {
    case 'x86':
        return '386';
    case 'x64':
        return 'amd64';
    }
    throw new Error("couldnt get arch")
}

export function getGOOS() {
    switch(os.type()) {
    case 'Windows_NT':
        return 'windows';
    case 'Darwin':
        return 'darwin';
    case 'Linux':
        return 'linux';
    }
    throw new Error("couldnt get os")
}