1. tsconfig

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    // * fix `import *` considered require('react'). import _ from "lodash` will be consider require('lodash').default
    "esModuleInterop": true,
    // * use as above, come together
    "allowSyntheticDefaultImports": true,
    // strict rule checking for Typescript
    "strict": true,
    // strict import file name, uppercase and lowercase are different
    "forceConsistentCasingInFileNames": true,
    // error if not have `break` in switch case
    "noFallthroughCasesInSwitch": true,
    // generate module code, esnext. es6, es2015 is newer -> yusing for react typescript
    "module": "esnext",
    // many different types such as native and non-native(import * as) -> solve it
    "moduleResolution": "node",
    // able to import json file
    "resolveJsonModule": true,
    // Typescript will produce JS based on Babel -> will isolate module to import
    // every code JS/TS files need to export or import something, otherwise get errors
    "isolatedModules": true,
    "noEmit": false,
    // will affect to jsx in source map as well -> should not use `react-jsx`
    "jsx": "react" // support jsx in .tsx file ~ mean can write jsx code
  },
  "include": ["src"]
}
```

EsNext using `export const, import`-> the new code

- Most modern browser supports now
- if using Typescript with nodejs or react -> using `esnext` -> it will transpile to .mjs
  commonjs using `exports.hello, requre`
- using nodejs only -> should use `commonjs` because it's transpiled to js code

2. prettier

```json
{
  "semi": true, // semicolon at the end of line
  "trailingComma": "all", // comma in object (all is for every line)
  "singleQuote": false, // using single quote
  "printWidth": 70,
  "endOfLine": "auto" // add \n at the end of line
}
```

3. .babelrc
"@babel/preset-typescript" | superset of Javascript help to transpiling Typescript to JS, example `const game: number ="Call of Duties"`
    