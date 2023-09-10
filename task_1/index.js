import express from "express";
import 'dotenv/config'


const app = express();

const PORT = parseInt(`${process.env.PORT}`) || 5000
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get('/api', (req, res)=>{
    const slack_name = req.query.slack_name
    const track = req.query.track
    const utcTime = new Date(Date.now()).toISOString().slice(0, -5) + 'Z'

    const date = new Date()
    const day = date.getDay()
    const current_day = days[day]
res.status(200).json({
    slack_name,
  current_day,
  utc_time: utcTime,
  track,
  github_file_url: "https://github.com/pedroski121/HNG/blob/main/task_1/index.js",
  github_repo_url: "https://github.com/pedroski121/HNG",
  status_code: 200
    })
})
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`) 
})


