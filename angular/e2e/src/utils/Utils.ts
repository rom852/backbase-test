const getLastSegmentFromUrl = (url: string) => {
    const splitQuery = url.split('?');
    const fullUrl = splitQuery[0];
    // Get the last path:
    const splitSegments = fullUrl.split('/');
    return splitSegments[splitSegments.length - 1];
};

const randomString = (length, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};

export {getLastSegmentFromUrl, randomString};
