import QARoute from "./QA.route.js"
import accountRoute from "./account.route.js"

 const initialRouter = (app) => {
    app.use("/QA",QARoute)
    app.use("/account",accountRoute)
}

export default initialRouter