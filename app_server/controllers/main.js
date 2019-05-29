/*GET HomePage */
const index=(req, res)=>{
    res.render('index',{title:'Nazdeeki'});
};
module.exports={
    index
};