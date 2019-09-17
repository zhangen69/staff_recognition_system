import schedule, { Job } from 'node-schedule';
import Jobs from './task-schedules/monthly-give-points';
import express from 'express';

// import middlewares
import startup from './middlewares/startup';
// initialize app
const app = express();
const port = process.env.PORT || 3000;

app.use(startup); // apply startup configurations

// schedule.scheduleJob('* * * * *', () => {
//     console.log('Node Schedule is runnning in every minutes');
// });

// const demoJob = Jobs.demoJob;

// Jobs.demoJob.invoke();
Jobs.monthlyGivePointJob.invoke();

app.listen(port, () => {
    console.log(`Listenning on: http://localhost:3000`);
});
