let APIURL = '';

console.log(window.location.host)
switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
        // this is the local host name of your API
        APIURL = 'http://localhost:3001/';
        break;
    // this is the deployed react application
    case 'hmdclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://hmdserver.herokuapp.com/'
        break;
    default: 
        APIURL = 'https://hmdserver.herokuapp.com/'
}

export default APIURL;