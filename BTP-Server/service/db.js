const mongoose=require("mongoose")






const chatSchema = new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member'
    },
    message: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('Chat', chatSchema);



 
// connection string
mongoose.connect("mongodb://localhost:27017/BicycleTrip",{
useNewUrlparser:true
})
// definig model
const BCT=mongoose.model('bct',{
   
    usname:String,
    email:String,

    
    password:String,
  
})
// module.exports={
//   BCT
// }

const Emplooye=mongoose.model('emplooyes',{
  place:String,
  time:String,
  title:String,
  content:String,
 
})
const Dp=mongoose.model('dp',{
dp:String,
})




module.exports={
  Emplooye,
  BCT,
  Dp
}

