const path = require('path') // importação de arquivos pelo node deve ser feita com o require()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { pathToFileURL } = require('url')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada (principal)
    output: { // gera o arquivo convertido pelo webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], // indica as extensões de arquivos que podem ser lidas
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: { // aqui ficam as configurações de como a aplicação vai se comportar quando eu tiver importando cada um dos tipos de arquivos
        rules: [ // array de regras
            {
                test: /\.jsx$/, // expressão regular que verificar se o arquivo termina com .jsx
                exclude: /node_modules/,
                use: 'babel-loader' // integração entre o babel e o webpack
            },
            {
                test: /\.scss$/, // expressão regular que verificar se o arquivo termina com .scss
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // loader que será usado pra permitir a importação de arquivos css
            }
        ]
    }
}