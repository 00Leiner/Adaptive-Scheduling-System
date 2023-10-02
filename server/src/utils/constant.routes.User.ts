//User
const create = "/create/newUser/data";
const read = "/:user/view/data/:userID";
const readAll = "/view/all/data";
const update = "/:user/update/data/:userID";
const remove= "/:user/deleted/data/:userID";

export default {create,read,readAll,update,remove};