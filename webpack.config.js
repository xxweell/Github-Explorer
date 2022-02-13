const path = require('path') // importação de arquivos pelo node deve ser feita com o require()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { pathToFileURL } = require('url')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // arquivo de entrada (principal)
    output: { // gera o arquivo convertido pelo webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // indica as extensões de arquivos que podem ser lidas
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: { // aqui ficam as configurações de como a aplicação vai se comportar quando eu tiver importando cada um dos tipos de arquivos
        rules: [ // array de regras
            {
                test: /\.(j|t)sx$/, // expressão regular que verificar se o arquivo termina com .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // integração entre o babel e o webpack
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                test: /\.scss$/, // expressão regular que verificar se o arquivo termina com .scss
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // loader que será usado pra permitir a importação de arquivos css
            }
        ]
    }
}