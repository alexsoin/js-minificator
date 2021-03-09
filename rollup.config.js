import { terser } from "rollup-plugin-terser";


const fs = require('fs');
const scriptsDir = "./src/";
const scripts = fs.readdirSync(scriptsDir).filter(elem => elem.endsWith('.js')).map(elem => scriptsDir + elem);

export default {
  input: scripts,
  output: {
		entryFileNames: '[name].min.js',
    dir: 'dist',
    format: "cjs", 
    plugins: [
      terser()
    ]
  }
};
