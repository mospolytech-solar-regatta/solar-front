export default {

    async post(endpoint, data = {}) {
        if (data === undefined) data = []
        var request = JSON.stringify(data)
        return await fetch(endpoint, {
            method: "POST", body: request, headers: {'Content-Type': 'application/json'},
        }).then(function (response) {
            return response.json();
        })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    },

// eslint-disable-next-line no-unused-vars
    async get(endpoint, data = {}) {
        if (data === undefined) data = {}
        let search = new URLSearchParams(data).toString();
        return await fetch(endpoint + '?' + search, {
            method: "GET",
        }).then(function (response) {
            return response.json();
        })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    },

// eslint-disable-next-line no-unused-vars
    async del(endpoint, data = {}) {
        if (data === undefined) data = {}
        let search = new URLSearchParams(data).toString();
        return await fetch(endpoint + '?' + search, {
            method: "DELETE",
        }).then(function (response) {
            return response.json();
        })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    },

// eslint-disable-next-line no-unused-vars
    async put(endpoint, data = {}) {
        if (data === undefined) data = {}
        var request = JSON.stringify(data)
        return await fetch(endpoint, {
            method: "PUT", body: request, headers: {'Content-Type': 'application/json'},
        }).then(function (response) {
            return response.json();
        })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    },

}
