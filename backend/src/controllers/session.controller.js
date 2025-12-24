
//--------------------------------------------------------------------------------
export const login= (req,res) => {
    res.cookie('cookieUS', req.user.token,{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    }).status(200).send({
        success:true,
        message:"Login success",
        email:req.user.email
    });
}