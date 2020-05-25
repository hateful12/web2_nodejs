const Response = require('../utils/Response');
const { UrlModel } = require('../models/UrlModel');


class UrlController {
    constructor() {
        this.model = new UrlModel();
    }

    create(req, res) {
        const url = req.body.url
        if(!UrlController.isValidUrl(url)) {
            return new Response(400, 'Invalid url: '.concat(url));
        }

        this.model.create(url);

        return res.redirect('/');
    }

    getById(req, res) {
        const id = req.params.id;

        const result = this.model.getById(id);

        if (result instanceof Error) {
            return new Response(400, result.message);
        }

        return res.redirect(result.fullUrl)
    }

    getAll() {
        return new Response(200, this.model.getAll());
    }

    updateById(req ,res) {
        const id = req.params.id;
        const newUrl = req.body.fullUrl;

        if(!UrlController.isValidUrl(newUrl)) {
            return res.status(400).json({message: 'Invalid url: '.concat(newUrl)});
        }

        const result = this.model.updateById(id, newUrl);

        if (result instanceof Error) {
            return res.status(400).json({message: result.message});
        }

        return res.redirect('/');
    }

    deleteById(req, res) {
        const id = req.params.id;
        const result = this.model.deleteById(id);

        if (result instanceof Error) {
            return res.status(400).json({message: result.message});
        }

        return res.redirect('/');
    }

    static isValidUrl(url) {
        try {
            new URL(url);
        } catch (_) {
            return false;
        }

        return true;
    }
}

module.exports = UrlController;