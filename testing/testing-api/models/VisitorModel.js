const { ObjectID } = require("mongodb");
const db = require("../config/mongo");
const visitors = db.collection('visitors')

class Visitor {
    static findAll() {
        return visitors.find().toArray()
    }
    static add(payload) {
        return visitors.insertOne(payload)
    }
    static getById(id) {
        console.log(id);
        return visitors.findOne({ _id: ObjectID(id) })
    }
    static getLastInserted() {
        return visitors.find({}).sort({_id:-1}).limit(1).toArray();
    }
    static edit(id,params) {
        return visitors.replaceOne( { _id: ObjectID(id) }, params )
    }
    static delete(id) {
        return visitors.deleteOne( { _id: ObjectID(id) })
    }
}

module.exports = Visitor