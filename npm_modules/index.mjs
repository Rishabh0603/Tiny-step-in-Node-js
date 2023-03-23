import chalk from 'chalk'
import validator from 'validator';
console.log(chalk.blue("hello") )
 const check = validator.isEmail("rishabhtrivedilko.5.com");
 console.log(check? chalk.greenBright.inverse(check) : chalk.redBright.inverse(check))
console.log(check)
