const timeout=100  //Change the time duration where you cannot use dismount skills after mounting.

module.exports = function stopdismount(dispatch){
	let time
	
	dispatch.hook('C_START_SKILL', 'raw', () => {		
		if(Date.now()-time < timeout) return false
	})
	
	dispatch.hook('S_MOUNT_VEHICLE', 'raw', () => { time=Date.now() })
}