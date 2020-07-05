/*eslint-disable */
import express from 'express';
import path from 'path';
 import open from 'open';
  import config from '../webpack.config.dev'  
import webpack from 'webpack';
const compiler=webpack(config);

    const port=3000;
    const app=express();
  
    

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}))
app.get("/",(req,res)=>{
       res.sendFile(path.join(__dirname,"../src/index.html"))
    })

    app.listen(port, function(err){
        if(err){
        console.log(err)}

        console.log("started")
        open('http://localhost:'+ port)
    })