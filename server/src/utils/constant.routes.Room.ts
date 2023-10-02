//Room
const create = "/create/newRoom/data";
const read = "/:room/view/data/:roomID";
const readAll = "/view/all/data";
const update = "/:room/update/data/:roomID";
const remove= "/:room/deleted/data/:roomID";

export default {create,read,readAll,update,remove};