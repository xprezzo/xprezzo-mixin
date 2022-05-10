module.exports = function (baseObject) {
    let nCount, singleArgument, element

    for (let nCount = 1; nCount < arguments.length; nCount++) {
        let singleArgument = arguments[nCount]
        for (let element in singleArgument) {
            if (Object.prototype.hasOwnProperty.call(singleArgument, element)) {
                baseObject[element] = singleArgument[element]
            }
        }
    }
    return baseObject
}
