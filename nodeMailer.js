const express=require("express")
const app=express()
const nodemailer=require("nodemailer")

app.get("/",(req,res)=>{
    res.end("i am a server")
})

app.get("/mail",async (req,res)=>{
    //let testAccount = await nodemailer.createTestAccount();
    // connect with smtp
    let transporter=await nodemailer.createTransport({
       // host: "smtp.ethereal.email",
       service: "gmail",
       // port: 587,
        
        auth: {
            user: 'kanuri.sravanthi66@gmail.com',
            pass: 'qkbshpjkymcevvhh'
        },

    })

    let info=await transporter.sendMail({
        from: 'kanuri.sravanthi66@gmail.com', // sender address
        to: "kanuri.sravanthi66@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "hi", // plain text body
       
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info)
})


app.listen(3006)
