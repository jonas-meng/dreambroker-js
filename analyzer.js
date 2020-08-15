const textLength = (text) => {
    return {
        withSpace: text !== null ? text.length : 0,
        withoutSpaces: text !== null ? text.replace(/ /gi, '').length : 0
    };
}

const wordCount = (text) => {
    return text !== null ? (text.trim().length <= 0 ? 0 : text.trim().split(' ').length) : 0;
}


const charCount = (text) => {
    if (text.trim().length <= 0) {
        return [];
    }
    var chars = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    return Object.entries([...text]
        .map(x => x.toLowerCase())
        .filter(x => chars.has(x))
        .reduce((counter, char) => {
            counter[char] ? counter[char][char] += 1 : counter[char] = { [char]: 1 };
            return counter;
        }, {}))
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => x[1]);
}

exports.textLength = textLength;
exports.wordCount = wordCount;
exports.charCount = charCount;