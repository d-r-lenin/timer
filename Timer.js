
class Timer{
	constructor(inputEl,startEl,pauseEl,callbacks){
		this.inputEl=inputEl;
		this.startEl=startEl;
		this.pauseEl=pauseEl;
		if(callbacks){
			this.onStart=callbacks.onStart;
			this.onRun=callbacks.onRun;
			this.onEnd=callbacks.onEnd;
		}
		this.startEl.addEventListener('click',this.start);
		this.pauseEl.addEventListener('click',this.pause);
		
	}
	start=()=>{
		clearInterval(this.intervalId);
		if(this.onStart){this.onStart(this.inputEl.value);}
		this.time=this.inputEl.value;
		this.run();
		this.intervalId=setInterval(this.run,50);
	}
	
	pause=()=>{
		if(this.onEnd){this.onEnd();}
		clearInterval(this.intervalId);
	}
	run=()=>{
		if(this.inputEl.value<=0){
			this.pause();
		}else{
	this.inputEl.value=(this.inputEl.value-.05).toFixed(2);
		}
		if(this.onRun){this.onRun(this.inputEl.value);}
	}
	
	
}
