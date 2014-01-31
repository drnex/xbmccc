var XBian = function(host){
	this.time;
	var xbian = this;
	//Constructor
	this.asyncService = new rpc.ServiceProxy(host+"/jsonrpc", {
		asynchronous: true,   
		sanitize: false,      
		methods: ['Application.SetVolume', 'Player.GetProperties'],   
		protocol: 'JSON-RPC', 
	}, false);
	this.service = new rpc.ServiceProxy(host+"/jsonrpc", {
		asynchronous: false, 
		sanitize: false,     
		methods: ['Application.SetVolume', 'Player.GetProperties', 'Player.GetActivePlayers', 'JSONRPC.Ping'],   
		protocol: 'JSON-RPC',
	}, false);
	//functions
	//volume: 0-100
	this.ping = function(){
		return this.service.JSONRPC.Ping();
	}
	this.setVolume = function(volume){
		this.service.Application.SetVolume({volume:volume});
	};
	this.isActive = function(){
		if(this.service.Player.GetActivePlayers().length>0){
			return true;
		}else{
			return false;		
		}		
	}
	//Upate time
	this.setTime = function(){
		if(!this.isActive()){
			clearInterval(this.interval);	
			$("span#time").html("--:-- / --:--");
			$("div#time").slider({value: 0});
			//TODO neuer interval in größeren abstand, pruefen obs weiter geht, denn wieder kurzen interval starten		
		}else{
			this.asyncService.Player.GetProperties({params: {playerid : 1, properties : ["time", "percentage", "totaltime"]},
				onSuccess: function(resp){
					$("span#time").html((resp.time.hours*60+resp.time.minutes).addZero()+":"+resp.time.seconds.addZero()+" / "+(resp.totaltime.hours*60+resp.totaltime.minutes).addZero()+":"+resp.totaltime.seconds.addZero());		
					$("div#time").slider({value: resp.percentage});	
				}
			});	
		}
	}
	this.interval = setInterval(function(){xbian.setTime()}, 1500);	
};
