const fetch = require('node-fetch')
const Handlebars = require('handlebars')
const path = require('path')
const express = require('express')
const app = express()

const baseApiUrl = 'https://api.spacexdata.com/v3/'

app.use(express.static(path.join(__dirname, '/public')))
const getAllLaunches = async () => {
  let data
  await fetch(baseApiUrl+'launches').then(
    res => (data = res.json())
  )
  return data
}
  
const getFlight = async flightNumber => {
  let data
  await fetch(baseApiUrl+'launches/'+flightNumber).then(
    res => (data = res.json())
  )
  return data
}

const getLatestLaunch = async () => {
  let data
  await fetch(baseApiUrl+'launches/latest').then(
    res => (data = res.json())
  )
  return data
}

const getNextLaunch = async () => {
  let data
  await fetch(baseApiUrl+'launches/next').then(
    res => (data = res.json())
  )
  return data
}
    
const getAllRockets = async () => {
  let data
  await fetch(baseApiUrl+'rockets').then(
    res => (data = res.json())
  )
  return data
}

const getRocket = async rocketName => {
  let data
  await fetch(baseApiUrl+'rockets/'+rocketName).then(
    res => (data = res.json())
  )
  return data
}

const getAllMissions = async () => {
  let data
  await fetch(baseApiUrl+'missions').then(
    res => (data = res.json())
  )
  return data
}
  
const getMission = async missionId => {
  let data
  await fetch(baseApiUrl+'missions/'+missionId).then(
    res => (data = res.json())
  )
  return data
}


// HELPER FUNCTIONS
Handlebars.registerHelper('splitDate', function(input) {
  const date = input.data.launch_date_utc.split('T')[0]
  const temp = input.data.launch_date_utc.split('T')[1]
  const time = temp.split('.')[0]

  return date + ' ' + time
})


// // MOCK DATA UNDER
// const latestLaunchMock = require('./mockData/latestLaunchMock')
// const mockMissionData = require('./mockData/mission')

// const getLatestLaunchMock = () => {
//   return latestLaunchMock
// }

// const getMissionMock = () => {
//   return mockMissionData
// }


module.exports = { 
  app, 
  baseApiUrl,
  getAllLaunches,
  getLatestLaunch, 
  getNextLaunch,
  getAllMissions, 
  getMission,
  getFlight,
  getAllRockets,
  getRocket
}
