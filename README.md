electron-go-picnic
==================

Package that contains tools for using Go programs with Electron.

Originally extracted from my [Who's Hacking product](https://liamz.co/blog/building-spotifys-whos-listening-for-hackers/), which used my program [gitmonitor](https://github.com/liamzebedee/gitmonitor) to monitor live git repo changes across the system.

## Functions

 - `getAppPath`, which gets the app path in development and production (when the app is unpacked from the archive).
 - `getExecutableName` which finds the correct executable for OS and CPU arch.
 - `getGOARCH` and `getGOOS`, which are used above.

## Usage

 1. Cross-compile your Go programs for all platforms at once (Windows/Linux/macOS) using `go-crosscompile.sh`. 
 2. Copy them to a directory in your Electron app. I advise `vendor/`.
 3. Make sure your executable is unpacked in production so it can be run. E.g. with electron-builder, modify `package.json` in the "build" section and add:
    ```
        "asarUnpack": [
            "vendor/"
        ]
    ```
 4. Then in your Electron code:

```
const spawn = require('child_process').spawn;
import { getAppPath, getExecutableName } from 'electron-go-picnic';

let cmd = path.join(getAppPath(), `/vendor/', getExecutableName('gitmon'));
spawn(cmd)
```
