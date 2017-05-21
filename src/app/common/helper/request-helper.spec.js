import RequestHelper from './request-helper'

let chai = require('chai')
let expect = chai.expect
let spies = require('chai-spies')
chai.use(spies)

describe('RequestHelper', () => {
  var serv, httpClient, getter, query, post, send, put
  beforeEach(() => {
    query = {
      end: (cb) => {
        return cb(null, 'myres')
      }
    }
    send = {
      end: (cb) => {
        return cb(null, 'myres')
      }
    }
    getter = {
      query: () => {
        return query
      }
    }
    post = {
      send: () => {
        return send
      }
    }
    put = {
      send: () => {
        return send
      }
    }
    httpClient = {
      get: () => {
        return getter
      },
      post: () => {
        return post
      },
      put: () => {
        return put
      }
    }
    serv = new RequestHelper()
    serv.httpClient = httpClient
  })

  describe('get', () => {
    it('Expect to return a promise', () => {
      expect(serv.get('uri', 'queryParams')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call get method', (done) => {
      const spy = chai.spy.on(serv.httpClient, 'get')
      serv.get('uri', 'queryParams').then(() => {
        expect(spy).to.have.been.called.with('uri')
        done()
      })
    })

    it('Expect to have call query method', (done) => {
      const spy = chai.spy.on(getter, 'query')
      serv.get('uri', 'queryParams').then(() => {
        expect(spy).to.have.been.called.with('queryParams')
        done()
      })
    })

    it('Expect to have call end method', (done) => {
      const spy = chai.spy.on(query, 'end')
      serv.get('uri', 'queryParams').then(() => {
        expect(spy).to.have.been.called.once
        done()
      })
    })

    it('Expect to reject if err', (done) => {
      query = {
        end: (cb) => {
          cb('myerr', null)
        }
      }
      serv.httpClient = httpClient
      serv.get('uri', 'queryParams').then(null, err => {
        expect(err).to.equals('myerr')
        done()
      })
    })

    it('Expect to resolve if no err', (done) => {
      query = {
        end: (cb) => {
          cb(null, 'myres')
        }
      }
      serv.httpClient = httpClient
      serv.get('uri', 'queryParams').then(res => {
        expect(res).to.equals('myres')
        done()
      })
    })
  })

  describe('post', () => {
    it('Expect to return a promise', () => {
      expect(serv.post('uri', 'body')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call post method', (done) => {
      const spy = chai.spy.on(serv.httpClient, 'post')
      serv.post('uri', 'body').then(() => {
        expect(spy).to.have.been.called.with('uri')
        done()
      })
    })

    it('Expect to have call send method', (done) => {
      const spy = chai.spy.on(post, 'send')
      serv.post('uri', 'body').then(() => {
        expect(spy).to.have.been.called.with('body')
        done()
      })
    })

    it('Expect to have call end method', (done) => {
      const spy = chai.spy.on(send, 'end')
      serv.post('uri', 'body').then(() => {
        expect(spy).to.have.been.called.once
        done()
      })
    })

    it('Expect to reject if err', (done) => {
      send = {
        end: (cb) => {
          cb('myerr', null)
        }
      }
      serv.httpClient = httpClient
      serv.post('uri', 'body').then(null, err => {
        expect(err).to.equals('myerr')
        done()
      })
    })

    it('Expect to resolve if no err', (done) => {
      send = {
        end: (cb) => {
          cb(null, 'myres')
        }
      }
      serv.httpClient = httpClient
      serv.post('uri', 'body').then(res => {
        expect(res).to.equals('myres')
        done()
      })
    })
  })

  describe('put', () => {
    it('Expect to return a promise', () => {
      expect(serv.put('uri', 'body')).to.be.an.instanceof(Promise)
    })

    it('Expect to have call put method', (done) => {
      const spy = chai.spy.on(serv.httpClient, 'put')
      serv.put('uri', 'body').then(() => {
        expect(spy).to.have.been.called.with('uri')
        done()
      })
    })

    it('Expect to have call send method', (done) => {
      const spy = chai.spy.on(put, 'send')
      serv.put('uri', 'body').then(() => {
        expect(spy).to.have.been.called.with('body')
        done()
      })
    })

    it('Expect to have call end method', (done) => {
      const spy = chai.spy.on(send, 'end')
      serv.put('uri', 'body').then(() => {
        expect(spy).to.have.been.called.once
        done()
      })
    })

    it('Expect to reject if err', (done) => {
      send = {
        end: (cb) => {
          cb('myerr', null)
        }
      }
      serv.httpClient = httpClient
      serv.put('uri', 'body').then(null, err => {
        expect(err).to.equals('myerr')
        done()
      })
    })

    it('Expect to resolve if no err', (done) => {
      send = {
        end: (cb) => {
          cb(null, 'myres')
        }
      }
      serv.httpClient = httpClient
      serv.put('uri', 'body').then(res => {
        expect(res).to.equals('myres')
        done()
      })
    })
  })
})
