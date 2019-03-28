const fetch = require('node-fetch')
const baseApiUrl = require('../app')

const getAllLaunchPads = async () => {
  let data
  await fetch(baseApiUrl+'launchpads').then(
    res => (data = res.json())
  )
  return data
}

const getLaunchPad = async siteId => {
  let data
  await fetch(baseApiUrl+'launchpads/'+siteId).then(
    res => (data = res.json())
  )
  return data
}

module.exports = { getAllLaunchPads, getLaunchPad }