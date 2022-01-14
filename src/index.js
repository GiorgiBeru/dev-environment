import * as Logger from "./logger.js";
import * as Utils from "./utils.js";
import { isFriday, isMonday } from "date-fns";


console.log('is today Friday?' + isFriday(new Date()));
console.log('is todayMonday?' + isMonday(new Date()));


Logger.log('my message');
Utils.currentDate();