import QARoute from "./QA.route.js"
import accountRoute from "./account.route.js"
import topicRoute from "./topic.route.js"
import userAnswerRoute from "./userAnswer.route.js"
 const initialRouter = (app) => {
    app.use("/QA",QARoute)
    app.use("/account",accountRoute)
    app.use("/topic",topicRoute)
    app.use("/userAnswer",userAnswerRoute)
}

export default initialRouter