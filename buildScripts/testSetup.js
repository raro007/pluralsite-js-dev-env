//This file isnt transpiled, so must use CommonJS and ES5

//Register babel to trsanspile before our tests run.
require('babel-register')();//eslint-disable-line

//disable webpack features tht Mocha doesnt understand.
require.extensions['.css']=function(){};//if you see .css, treat it like an empty function

//--reporter is used to display the report style of your code