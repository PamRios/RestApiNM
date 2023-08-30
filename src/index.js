import express from "express";
import constants from "../src/config/constants";
import "../src/config/database";
import middlewareConfig from "../src/config/middleware";
const app = express();
middlewareConfig(app);
app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`Server running on port: ${constants.PORT} Running on ${process.env.NODE_ENV} Make something great!`)
    }
});
// app.listen(PORT, err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(`Server running on port: $ {
//             PORT
//         }-- - Running on $ {
//             process.env.NODE_ENV
//         }-- - Make something great!`)
//     }
// });