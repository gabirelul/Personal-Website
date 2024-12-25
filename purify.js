const purify = require("purify-css");
const fs = require("fs");

// Paths to your HTML and CSS files
const content = ["./**/*.html", "./**/*.js"]; // Include all HTML files in the directory and subdirectories
const css = ["./_style.css"]; // Adjust path as needed

// Options for PurifyCSS
const options = {
  output: "./purified-style.css", // Output file
  minify: false, // Disable minification for easier debugging
};

// Run PurifyCSS
purify(content, css, options, (purifiedCss) => {
  fs.writeFileSync(options.output, purifiedCss);
  console.log("Purified CSS written to " + options.output);
});