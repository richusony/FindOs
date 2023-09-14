import os from 'os'
import express from 'express'

const app = express();
const PORT = 80;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{osResult:''});
})

app.get('/os',(req,res)=>{
    const osResults = {
        osName:os.type(),
        osUserInfo:os.userInfo(),
        osTotalMem:Math.ceil(os.totalmem()/(1024 * 1024)),
        osRelease:os.release(),
        osPlatform:os.platform(),
        osFreeMem:Math.ceil(os.freemem()/(1024 * 1024)),
        osArchitectue:os.arch(),
        osCpu:os.cpus()
    }
    res.render('index',{osResult:osResults});

})

app.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`);
})
