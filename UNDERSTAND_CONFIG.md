```json
{
  "compilerOptions": {
    "target": "es5", 
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext", // generate module code, esnext. es6, es2015 is newer
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx" // support jsx in .tsx file ~ mean can write jsx code
  },
  "include": ["src"]
}
``` 

EsNext using `export const, import`-> the new code 
  * Most modern browser supports now
  * if using Typescript with nodejs or react -> using `esnext` -> it will transpile to .mjs
commonjs using `exports.hello, requre`
  * using nodejs only -> should use `commonjs` because it's transpiled to js code

