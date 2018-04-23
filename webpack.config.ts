import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './App/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/, // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
              loader: "ts-loader",
              exclude: /node_modules/
            }
        ]
      },
    mode: 'production'
};

export default config;