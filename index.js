//Dependencies
const Fs = require("fs")

//Variables
const Modules = Fs.readdirSync("./modules", "utf8")

//Main
for( i in Modules ){
    require(`./modules/${Modules[i]}`)
}
