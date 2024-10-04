/**
 * Check if an URL is valid
 * to avoid an Open Redirect Vulnerability.
 * @param {string} pageURL URL of Page
 * @returns {boolean} Is URL valid or not
 */
export function isURLValid(pageURL) {
    const allowedRedirects = ["https://www.christian-schwanse.com", "http://www.christian-schwanse.com"];
    let isValid = false;

    for (const redirect of allowedRedirects) {
        if (pageURL.includes(redirect)) {
            isValid = true;
            break;
        }
    }

    return isValid;
}