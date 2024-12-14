module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], // Use babel-preset-expo with NativeWind
      "nativewind/babel", // NativeWind preset
    ],
    plugins: [
      "react-native-reanimated/plugin", // Keep this for react-native-reanimated
      ['module:react-native-dotenv', { moduleName: '@env', path: '.env', }],
    ],
  };
};
