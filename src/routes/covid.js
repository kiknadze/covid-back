const { Router } = require('express');
const request = require('request');

const router = Router();

router.get('/history', (req, res) => {

    request(
        'https://api.covidtracking.com/v2/us/daily.json',
        (err, response, body) => {
          if (err) return res.status(500).send({ message: err })
          return res.send(JSON.parse(body).data)
        }
      )
})

router.get('/last', (req, res) => {

  request(
      `https://api.covidtracking.com/v2/us/daily/${req.query.date}/simple.json`,
      (err, response, body) => {
        if (err) return res.status(500).send({ message: err })
        return res.send(JSON.parse(body).data)
      }
    )
})

router.get('/states/:state', (req, res) => {

    request(
        `https://api.covidtracking.com/v2/states/${req.params.state}/${req.query.date}/simple.json`,
        (err, response, body) => {
          if (err) return res.status(500).send({ message: err })
          return res.send(JSON.parse(body).data)
        }
      )
    
})



module.exports = router;