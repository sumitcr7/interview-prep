let user ={
  name: "Sumit Nimbarte",
  address: {
    personal: {
      city: "Pune",
      state: "Maharashtra",
      area: "PMC",
    },
    office: {
      city: "Pune",
      area: {
        landmark: "EON",
      }
    }
  }
}
let finalObj = {};
const flattenObject = (obj, parent)=>{
    for(let key in obj){
        if(typeof obj[key] === "object"){
            flattenObject(obj[key], parent + "_" + key)
        }else{
            finalObj[parent + "_" + key] = obj[key]
        }
        
    }
}

flattenObject(user, "user")

console.log(finalObj)
