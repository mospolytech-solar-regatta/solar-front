async function post(endpoint, data = {}) {
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
}

async function get(endpoint, data = {}) {
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
}

async function del(endpoint, data = {}) {
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
}

async function put(endpoint, data = {}) {
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
}
