//Schedule
const create = "/create/newSchedule/data";
const read = "/:scheduleID/:program-:block/view/data";
const readAll = "/view/all/data";
const update = "/:scheduleID/:program-:block/update/data";
const remove= "/:scheduleID/:program-:block/deleted/data";

export default {create,read,readAll,update,remove};