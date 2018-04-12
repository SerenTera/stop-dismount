const config = require('./config.json')

module.exports = function stopDismount(dispatch){

	let timeout = config.timeout //Change the time duration in config file.

	let time = 0

	dispatch.hook('C_START_SKILL', 'raw', () => { if(Date.now()-time < timeout) return false })
	dispatch.hook('S_MOUNT_VEHICLE', 'raw', () => { time=Date.now() })

}
