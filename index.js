const config = require('./config.json')

module.exports = function stopDismount(mod){

	let timeout = config.timeout,
		time = 0

	mod.hook('C_START_SKILL', "raw", () => { 
		if(Date.now()-time < timeout) return false
	})
	mod.hook('S_MOUNT_VEHICLE', "raw", () => { time=Date.now() })
}