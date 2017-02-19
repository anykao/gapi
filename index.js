const google = require('googleapis')
const urlshortener = google.urlshortener('v1')
const API_KEY = ''
const params = {
  auth: API_KEY,
  shortUrl: 'http://goo.gl/xKbRu3'
}

// get the long url of a shortened url
urlshortener.url.get(params, function (err, response) {
  if (err) {
    console.log('Encountered error', err)
  } else {
    console.log('Long url is', response.longUrl)
  }
})

