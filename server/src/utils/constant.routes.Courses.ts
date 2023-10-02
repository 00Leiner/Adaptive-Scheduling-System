//Course
const create = "/create/newCourse/data";
const read = "/:course/view/data/:courseID";
const readAll = "/view/all/data";
const update = "/:course/update/data/:courseID";
const remove= "/:course/deleted/data/:courseID";

export default {create,read,readAll,update,remove};