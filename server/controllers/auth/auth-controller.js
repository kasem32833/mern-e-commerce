




const userRegister = async(req, res)=>{
    const {userName, email} = req.body
    console.log(userName, email);

    try {
        
        res.status(200).json({
            success: true,
            message: "User Registre Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}


module.exports = {userRegister}