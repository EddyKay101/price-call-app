module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@models': './src/models',
                    '@images': './src/images',
                    '@contexts': './src/contexts',
                    '@themes': './src/themes',
                    '@hooks': './src/hooks'
                }
            }
        ],
        ["module:react-native-dotenv", {
            "envName": "APP_ENV",
            "moduleName": "@env",
            "path": ".env",
            "safe": false,
            "allowUndefined": true,
            "verbose": false
        }]
    ]
};

