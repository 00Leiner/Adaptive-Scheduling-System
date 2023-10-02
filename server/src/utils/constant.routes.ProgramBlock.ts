//ProgramBlock
const create = "/create/newProgramBlock/data";
const read = "/:program-:block/view/data/:programBlockID";
const readAll = "/view/all/data";
const update = "/:program-:block/update/data/:programBlockID";
const remove= "/:program-:block/deleted/data/:programBlockID";

export default {create,read,readAll,update,remove};