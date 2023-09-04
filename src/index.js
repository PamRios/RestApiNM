import express from "express";
import constants from "../src/config/constants";
import "../src/config/database";
import middlewaresConfig from "../src/config/middlewares";
import apiRoutes from "../src/modules";
const app = express();
middlewaresConfig(app);
app.get('/', (req, res) =>{
    res.send('Hello world!');
});
apiRoutes(app);
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