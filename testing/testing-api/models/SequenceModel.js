const db = require("../config/mongo");
const sequence = db.collection('sequence')

class SequenceModel {
    static async getNextSequenceValue(sequenceName){
        return sequence.findOneAndUpdate({ _id: sequenceName }, {$inc:{sequence_value:1}});
    }
}

module.exports = SequenceModel