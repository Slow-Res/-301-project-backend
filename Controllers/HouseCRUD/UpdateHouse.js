const houseModel = require("../../Models/House");
let handelUpdate=(req,res)=>{
    let id=req.params.id
    let{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber,status}=req.body;
    console.log(req.body);
    houseModel.findByIdAndUpdate(id,{imgURL,ownerName,houseAddress,email,houseSize,numOfRoomse,isSold,price,phoneNumber,status},(err,result)=>{
  
        if(err) {
            console.log(err);
        }
        else {
            houseModel.find({id:id},(err,result)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                  console.log(result)
                    res.send(result);
                    
                }
            })
        }
    })
  
  }
  module.exports= handelUpdate