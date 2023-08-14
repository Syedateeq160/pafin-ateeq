import  express  from "express";
import cors from "cors";


const app = express();
const PORT = process.env.port || 4000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


// Setting up Route to Middleware


const UserRouter = require("./routes/user.route")
app.use("/",UserRouter)

app.listen(PORT,()=> console.log(`Server running on ${PORT}`))