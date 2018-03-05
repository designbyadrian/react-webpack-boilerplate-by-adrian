# Code Quality

After your initial installation (`$ yarn install`), two code checkers are activated:

* ESlint
* SASS lint

## ESlint

Based on hard ⚔️ but ⚔️ fair rules by AirBnB, eslint gives great commentary on your React code. If you want to modify the rules, please see `package.json`. Alternatively, drop a file in the project root named `.eslintrc`.

> ***Note:*** *You might need some extra plugins depending on your code editor. Please find documentation regarding "eslint" for your editor of choice.*

## SASS lint

You'll also be warned for errors when writing CSS. Fore more readable CSS, you're advised to follow the property order decided by the good old SMACSS rules. If you want to modify any rule, please see a file in the project root named `.sass-lint.yml`.

> ***Note:*** *You might need some extra plugins depending on your code editor. Please find documentation regarding "sass lint" for your editor of choice.*
