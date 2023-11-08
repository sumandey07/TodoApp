module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@config": "./src/config",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@context": "./src/context",
            "@navigation": "./src/navigation",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
