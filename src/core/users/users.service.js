export async function getAllUser(req, res) {
  try {
    const user = [
      { id: 1, name: "John", age: 25 },
      { id: 2, name: "Jane", age: 30 },
      { id: 3, name: "Bob", age: 35 },
    ];
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
}
async function kutirish() {
  try{
    for (let i = 0; i < 100000; i++){
      console.log(i);
      
    }
  }catch(err){
    console.log(err.message);
    
  }
  
}

export async function regiterUser(req, res) {
  try {
    const body = await req.body
    // kutirish()
    
   console.log(body.email);
   res.json({message: 'okk'}).status(400)
   
  } catch (err) {
    res.send(err.message);
  }
}
