const { UrlModel } = require('../models/UrlModel');


class RootController {
    constructor() {
        this.model = new UrlModel();
    }

    getAll(req, res) {
        const urls = this.model.getAll();
        return res.render('index', { urls });
    }

    createNew(req, res) {
        return res.render('add')
    }

    edit(req, res) {
        const id = req.params.id;

        const url = this.model.getById(id);
        return res.render('edit', { url })
    }
}

module.exports = RootController;
