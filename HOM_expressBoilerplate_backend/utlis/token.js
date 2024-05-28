import jwt from "jsonwebtoken"
export let generateToken =async (info,secretKey,expiryInfo)=>{
    let token=await jwt.sign(info,secretKey,expiryInfo)
    return token;
}

export let verifyToken=async(token,secretKey)=>{
  let info=await jwt.verify(token,secretKey)
  return info;
}