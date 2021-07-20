const db = require('../db/dbConfig.js')

//index
const getAll = async () => {
    try{
        const allBodega = await db.any('SELECT * FROM bodega');
        return allBodega;
    }catch (err) {
        return err;
    }
};
//Show
const getItem = async (id) => {
    try{
        const oneItem = await db.one("SELECT * FROM bodega WHERE id=$1", id);
        return oneItem;
    }catch (err){
        return err;
    }
}
//create
const newItem = async (item) =>{
    try{
        const newItem = await db.one("INSERT INTO bodega (name, price, category, is_popular, img_link, reviews) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *",
        [item.name, item.price, item.category, item.is_popular, item.img_link, item.reviews]);
        return newItem;
    }
    catch (err){
        return err;
    }
}

//delete

//update

module.exports = {
    getAll,
    getItem,
    newItem,
}