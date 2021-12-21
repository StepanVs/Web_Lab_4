var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://StepanVs:09012001$sS@cluster0.vcwfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;
