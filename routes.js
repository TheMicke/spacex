const { 
  getAllMissions, 
  getLatestLaunch, 
  getNextLaunch,
  getMission,
  getAllLaunches,
  getAllRockets,
  getRocket,
  getFlight
} = require('./app')

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/latest', async (req, res) => {
    const data = await getLatestLaunch()
    res.render('launch_details', { data })
  })

  app.get('/next', async (req, res) => {
    const data = await getNextLaunch()
    res.render('launch_details', { data })
  })

  app.get('/launches', async (req, res) => {
    const data = await getAllLaunches()
    res.render('all_launches', { data })
  })

  app.get('/rockets', async (req, res) => {
    const data = await getAllRockets()
    res.render('all_rockets', { data })
  })
  
  app.get('/rocket/:rocketName', async (req, res) => {
    const data = await getRocket(req.params.rocketName)
    res.render('rocket_details', { data })
  })
  
  app.get('/missions', async (req, res) => {
    const data = await getAllMissions(req.params.id)
    res.render('all_missions', { data })
  })

  app.get('/launch/:number', async (req, res) => {
    const data = await getFlight(req.params.number)
    res.render('launch_details', { data })
  })

  app.get('/mission/:missionId', async (req, res) => {
    const data = await getMission(req.params.missionId)
    res.render('mission_details', { data })
  })

}
