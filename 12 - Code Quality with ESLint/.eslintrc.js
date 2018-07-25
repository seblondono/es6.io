module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended",
    // "parserOptions": {
    //     "sourceType": "module"
    // },
    "airbnb",
    "prettier",
    "prettier/react"],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "no-unused-vars": 1
        // "prettier/prettier": [
        // "error",
        // {
        //     "trailingComma": "es5",
        //     "singleQuote": true,
        //     "printWidth": 120
        // }
        // ]
    }
};