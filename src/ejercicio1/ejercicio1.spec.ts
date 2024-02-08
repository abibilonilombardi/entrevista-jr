import { getTaskInfo } from "./ejercicio1";

test('#ejercicio1', async () => {
    const taskInfo = await getTaskInfo()
    console.log(taskInfo)
})