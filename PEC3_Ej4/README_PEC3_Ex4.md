### Com s'ha realitzat la transpilació?

- Hem fet servir la comanda <ins>*tsc*</ins> per transpilar tot el projecte.
```typescript
tsc
```
- Al no voler instal·lar altres dependències externes, per valorar si funcionava o no, hem emprat <ins>*live server*</ins> de **Visual Studio Code* amb el *index.html*, on aquest apuntava als arxius transpilats dins del directori *./dist*, asegurant així que faci la feina amb els arxius transpilats a JavaScript.

### Configuració de Webpack

- Creem el <ins>*package.json*</ins>
```typescript
npm init -y
```
- Instal·lem *webpack*, client i servidor
```typescript
npm install -D webpack webpack-cli ts-loader webpack-dev-server
```
- Creem el fitxer <ins>*webpack.config.js*</ins> amb el següent codi
```typescript
const path = require('path');

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
```
- Afegim dos <ins>*scripts*</ins> al *package.json*
```json
"develop": "webpack-dev-server --mode development",
"build" : "webpack --mode production"
```

- Ara ja podem corre els *scripts* per veure si funciona webpack
```bash
npm run develop
npm run build
```

![Develop](https://user-images.githubusercontent.com/14861253/284437083-2cda34ae-b3e9-4d93-b083-15c588e18a49.png)
![Build](https://user-images.githubusercontent.com/14861253/284437192-b570241a-5409-4d21-9e83-63e6992e8570.png)

- Podem veure que tot ha funcionat i tenim el <ins>*bundle.js*</ins> creat
- Per últim, instal·larem <ins>*HtmlWebpackPlugin*</ins>

```bash
npm install html-webpack-plugin --save-dev
```

- I afegirem aquestes línies al <ins>*webpack.config.js*</ins> (*stats* era per ignorar sub-classes amb el mateix nom, ja que em donava error)
```typescript
 plugins: [
    new HtmlWebpackPlugin({
        title: 'pec4', 
        template: 'index.html' }) 
   ],
  stats: {
    children: true
  }
```