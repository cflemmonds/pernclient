let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000'
        break;

    case 'firelogger-cf-client.herokuapp.com':
        APIURL = 'pernclient-production.up.railway.app'
}

export default APIURL