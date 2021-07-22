const input=document.querySelector('#input');
const startBtn=document.querySelector('#start');
const pauseBtn=document.querySelector('#pause');
const circle=document.querySelector('circle');
 let offset=2*Math.PI*circle.r.baseVal.value;
let timeDue;
const a=new Timer(input,startBtn,pauseBtn,callbacks={
				   onStart(t){
					   timeDue=t;
						   circle.setAttribute('stroke-dasharray',offset);
					   circle.setAttribute('stroke-dashoffset',offset);
				},

				   onRun(time){
					   if(offset>0){
					 circle.setAttribute('stroke-dashoffset',(offset*time)/timeDue-offset)  
					   }
					console.log('onRun');
				},

  });
