import {getTaskInfo} from "./ejercicio1";

(async () => {
    const response = await getTaskInfo()
    console.log(response)
})()