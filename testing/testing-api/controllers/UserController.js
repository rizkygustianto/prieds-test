const Visitor = require('../models/VisitorModel')
const SequenceModel = require('../models/SequenceModel')

class VisitorController {
    static async getVisitor(req,res) {
        const visitors = await Visitor.findAll()
        res.status(200).json(visitors)
    }
    static async insertVisitor(req,res) {
        const sequence = await SequenceModel.getNextSequenceValue('visitorNumber')
        const params = {
            name: req.body.name,
            phone_number: req.body.phone_number,
            queueNumber: sequence.value.sequence_value
        }
        const visitor = await Visitor.add(params)
        res.status(201).json(visitor)
    }
    static async getLastVisitor(req,res) {
        const visitor = await Visitor.getLastInserted()
        // console.log(visitor);
        res.status(200).json(visitor)
    }
}

module.exports = VisitorController