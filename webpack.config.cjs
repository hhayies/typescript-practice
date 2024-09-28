const path = require('path');

module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    entry: {
        bundle: './src/index.ts'
    },
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    output: {
        path: path.join(__dirname, 'dist'), // "__dirname"はファイルが存在するディレクトリ
        filename: '[name].js'  // [name]はentryで記述した名前（この設定ならbundle）
    },
    // import文でファイル拡張子を書かずに名前解決するための設定
    resolve: {
        extensions:['.ts', '.tsx', '.js'] // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // webpack-dev-serverの公開フォルダ
        },
        open: true // サーバー起動時にブラウザを開く
    },
    // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
                // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}
