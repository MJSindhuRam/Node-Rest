const express = require('express');
const app = express();

app.get('/sum/:num1/:num2',function(req,res){
    //var num1 = parseInt(req.params.num1);
    //var num2 = parseInt(req.params.num2);
    res.status(200).json({
        sum: parseInt(req.params.num1)+parseInt(req.params.num2)  
});
});
module.exports = app;

 