//Schedule
const create = "/create/newSchedule/data";
const read = "/:program-:block/view/data/:scheduleID";
const readAll = "/view/all/data";
const update = "/:program-:block/update/data/:scheduleID";
const remove= "/:program-:block/deleted/data/:scheduleID";

export default {create,read,readAll,update,remove};