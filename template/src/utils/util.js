
export function generateQueryStr(obj = {}) {
    let str = ''
    const keys = Object.keys(obj)
    if (keys.length > 0) {
        const arr = []
        keys.forEach(k => {
            arr.push(`${k}=${encodeURIComponent(obj[k])}`)
        })
        str = `?${arr.join('&')}`
    }
    return str
}