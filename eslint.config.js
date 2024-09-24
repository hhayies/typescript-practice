import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
    {
        files: ["**/*.{js,ts}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2016,
            },
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
            }
        },
        rules: {}
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended, // TypeScriptでチェックされる項目をLintから除外する設定
    prettier, // prettierのextendsは他のextendsより後に記述する
]
