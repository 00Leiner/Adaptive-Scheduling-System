//Teacher
const create = "/create/newTeacher/data";
const read = "/:teacher/view/data/:teacherID";
const readAll = "/view/all/data";
const update = "/:teacher/update/data/:teacherID";
const remove= "/:teacher/deleted/data/:teacherID";

export default {create,read,readAll,update,remove};