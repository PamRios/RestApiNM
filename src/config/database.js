import mongoose, { mongo } from "mongoose";
import constants from "./constants";

mongoose.Promise = global.Promise;

try {
    mongoose.connect(constants.MOGO_URL)
} catch (err) {
    mongoose.createConnection(constants.MONGO_URL)
}
mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
    throw e;
})