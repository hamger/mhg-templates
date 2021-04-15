import { generateQueryStr } from './util'

export function get(apiPath, data) {
    if (data) {
        apiPath = `${apiPath}${generateQueryStr(data)}`
    }
    return new Promise(function (resolve, reject) {
        fetch(apiPath)
            .then(res => res.json())
            .then(resp => {
                resolve(resp);
            })
            .catch(e => {
                reject(e);
            })
    });
}

export function post(apiPath, data) {
    const args = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }
    return new Promise < any > (function (resolve, reject) {
        fetch(apiPath, args)
            .then(d => d.json())
            .then(resp => {
                resolve(resp);
            })
            .catch(e => {
                reject(e);
            })
    });
}