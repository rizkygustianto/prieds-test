const { Visitor } = require('../models')

class VisitorController {
    static async getVisitor(req,res) {
        const visitors = await Visitor.findAll()
        res.status(200).json(visitors)
    }
    static async insertVisitor(req,res) {
        const params = {
            name: req.body.name,
            phone_number: req.body.phone_number
        }
        const visitor = await Visitor.create(params)
        res.status(201).json(visitor)
    }
    static async getLastVisitor(req,res) {
        const visitor = await Visitor.findAll({
            limit: 1,
            order: [['createdAt', 'DESC']]
        })
        res.status(200).json(visitor)
    }
}

module.exports = VisitorController