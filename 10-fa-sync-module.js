const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//same as
//const fs = require('fs')
//const first = fs.readFileSync('./content/first.txt','utf8')
//const second = fs.readFileSync('./content/second.txt','utf8')

console.log(first,second)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} // this flag append content to athe file. default would be to overwrite the oringinal content.
)

