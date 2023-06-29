let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000'
        break;

    case 'pernclient-production.up.railway.app':
        APIURL = 'https://pernserver.up.railway.app'
}

export default APIURL