const {StatusCodes}=require('http-status-codes')
const productlist=require('../model/productlist')

const createProductControllers = async (req,res)=>{
    const product = await productlist.create({...req.body});
    res.status(StatusCodes.CREATED).json({product})
}

module.exports={createProductControllers}