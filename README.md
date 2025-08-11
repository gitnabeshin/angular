# Angular Practice

## Reference URL

* `https://angular.jp/tutorials/first-app/01-hello-world`


![AppHome](./first-app_01-hello-world/src/assets/AppScreen.png)

## Setup for iMac

```
$ brew install node

nabeshin@iMacNabeshin-894 ~ % node -v
v24.5.0
nabeshin@iMacNabeshin-894 ~ % npm -v
11.5.1
nabeshin@iMacNabeshin-894 ~ % npm install -g @angular/cli

added 337 packages in 18s

66 packages are looking for funding
  run `npm fund` for details
npm notice
npm notice New patch version of npm available! 11.5.1 -> 11.5.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.2
npm notice To update run: npm install -g npm@11.5.2
npm notice
nabeshin@iMacNabeshin-894 ~ % ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 20.1.5
Node: 24.5.0
Package Manager: npm 11.5.1
OS: darwin x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.2001.5 (cli-only)
@angular-devkit/core         20.1.5 (cli-only)
@angular-devkit/schematics   20.1.5 (cli-only)
@schematics/angular          20.1.5 (cli-only)
    
nabeshin@iMacNabeshin-894 ~ % 
```

## Launch sample code

```
nabeshin@iMacNabeshin-894 Angular % mv ~/Downloads/first-app_01-hello-world ./
nabeshin@iMacNabeshin-894 Angular % cd first-app_01-hello-world 
nabeshin@iMacNabeshin-894 first-app_01-hello-world % ls
angular.json            package.json            tsconfig.app.json
package-lock.json       src                     tsconfig.json
nabeshin@iMacNabeshin-894 first-app_01-hello-world % npm install


nabeshin@iMacNabeshin-894 Angular % cd first-app_01-hello-world 
nabeshin@iMacNabeshin-894 first-app_01-hello-world % ng serve                   
Initial chunk files | Names         |  Raw size
main.js             | main          |   2.47 kB | 
styles.css          | styles        | 457 bytes | 
polyfills.js        | polyfills     |  95 bytes | 

                    | Initial total |   3.02 kB

Application bundle generation complete. [1.654 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
```

See `http://localhost:4200/` on browser.


## Create new project

```
nabeshin@iMacNabeshin-894 Angular % ng new my_project

Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   Yes

Thank you for sharing pseudonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable --global

Global setting: enabled
Local setting: No local workspace configuration file.
Effective status: enabled
✔ Do you want to create a 'zoneless' application without zone.js (Developer Preview)? Yes
✔ Which stylesheet format would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
CREATE my_project/README.md (1472 bytes)
CREATE my_project/.editorconfig (314 bytes)
CREATE my_project/.gitignore (587 bytes)
CREATE my_project/angular.json (2243 bytes)
CREATE my_project/package.json (1060 bytes)
CREATE my_project/tsconfig.json (992 bytes)
CREATE my_project/tsconfig.app.json (429 bytes)
CREATE my_project/tsconfig.spec.json (408 bytes)
CREATE my_project/.vscode/extensions.json (130 bytes)
CREATE my_project/.vscode/launch.json (470 bytes)
CREATE my_project/.vscode/tasks.json (938 bytes)
CREATE my_project/src/main.ts (222 bytes)
CREATE my_project/src/index.html (295 bytes)
CREATE my_project/src/styles.css (80 bytes)
CREATE my_project/src/app/app.css (0 bytes)
CREATE my_project/src/app/app.spec.ts (784 bytes)
CREATE my_project/src/app/app.ts (292 bytes)
CREATE my_project/src/app/app.html (20122 bytes)
CREATE my_project/src/app/app.config.ts (383 bytes)
CREATE my_project/src/app/app.routes.ts (77 bytes)
CREATE my_project/public/favicon.ico (15086 bytes)
⠋ Installing packages (npm)...(node:12605) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
(Use `node --trace-deprecation ...` to show where the warning was created)
✔ Packages installed successfully.
    Successfully initialized git.
nabeshin@iMacNabeshin-894 Angular % ls
first-app_01-hello-world        my_project
```
