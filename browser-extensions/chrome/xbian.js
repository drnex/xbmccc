var XBian = function(host){
	this.time;
	var xbian = this;
	//Constructor
	this.service = new rpc.ServiceProxy(host+"/jsonrpc", {
		asynchronous: false,   //default: true
		sanitize: false,       //default: true
		methods: ['Application.SetVolume', 'Player.GetProperties'],   //default: null (synchronous introspection populates)
		protocol: 'JSON-RPC', //default: JSON-RPC
	}, false);
	//functions
	//volume: 0-100
	this.setVolume = function(volume){
		this.service.Application.SetVolume({volume:volume});
	};
	this.getTimeInSeconds = function(){
		return this.service.Player.GetProperties({playerid : 1, properties : ["time"]});
	};

	//Upate time
	rpc.setAsynchronous(this.service, true);
this.service.Player.GetProperties({params: {playerid : 1, properties : ["time"]},
	onSuccess: function(resp){
	console.log(resp);	
}});
};
