import  express  from "express";
import morgan from "morgan";
import cors from "cors";

const app=express();

app.use(morgan("dev"));
app.use(cors());
app.get("/",(req,res) => {
    console.log("Hola mundo");
    res.send("Hola mundo");
})

app.listen(6505,() => {
    console.log("Server on port 6505");
});