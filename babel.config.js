module.exports = {

  //we does these configurations to make jest compatible with react, because jest by default doesn't know react syntax
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [
      "@babel/preset-react", { runtime: "automatic" }
    ],
  ],
};
