import request from 'superagent'

/**
 * RequestHelper class
 * An HTTP request client
 */
class RequestHelper {

  /**
   * Create a RequestHelper
   */
  constructor () {
    /** @type {Object}*/
    this.httpClient = request
  }

  /**
   * GET method
   * @param  {string}  uri              The uri to consume
   * @param  {Object}  queryParams              The query params
   * @return {Object}                   A promise to resolve
   */
  get (uri, queryParams) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(uri)
      .query(queryParams) // query string
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  /**
   * POST method
   * @param  {string}  uri              The uri to consume
   * @param  {Object}  body              The body to send
   * @return {Object}                   A promise to resolve
   */
  post (uri, body) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .post(uri)
      .send(body)
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}

RequestHelper.deps = []

/** Export the service */
export default RequestHelper
