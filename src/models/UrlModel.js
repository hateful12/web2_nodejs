const uuid = require('uuid').v4;

const storage = {
    1234: {
        fullUrl: 'https://google.com',
        created: Date.now()
    }
};

class UrlModel {
    constructor() {
        this.storage = storage;
        this.minifiedUrlPath = 'http://localhost:3000/api/url';
    }

    create(url) {
        const id = uuid();

        this.storage[id] = {
            fullUrl: url,
            created: Date.now()
        };

        return this.minifiedUrlPath.concat('/', id);
    }

    getById(id) {
        return this.storage[id] ? { ...this.storage[id], id } : new Error('Invalid url: '.concat(this.minifiedUrlPath, '/', id));
    }

    getAll() {
        const result = [];

        for (const key in this.storage) {
            result.push({
                id: key,
                url: this.minifiedUrlPath.concat('/', key),
                fullUrl: this.storage[key].fullUrl,
                created: new Date(this.storage[key].created).toUTCString().split('+')[0]
            })
        }

        return result;
    }

    updateById(id, newUrl) {
        if (!this.storage[id]) {
            return new Error('Invalid url: '.concat(this.minifiedUrlPath, '/', id))
        }

        this.storage[id].fullUrl = newUrl;
        this.storage[id].updated = Date.now();

        return this.storage[id];
    }

    deleteById(id) {
        if (!this.storage[id]) {
            return new Error('Invalid url: '.concat(this.minifiedUrlPath, '/', id))
        }

        delete this.storage[id];
    }
}

module.exports = { UrlModel, storage };
