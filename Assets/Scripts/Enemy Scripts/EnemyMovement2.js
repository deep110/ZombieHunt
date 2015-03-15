#pragma strict

var target : Transform; 
var moveSpeed = 1.5; 
var rotationSpeed = 5; 
var myTransform : Transform; 
var follow:int=0;
var y:float;


function Awake() {
	myTransform = transform; 
}

function Start() {

	target = GameObject.FindWithTag("Player").transform; 
	 y = myTransform.position.y;
}

function Update () {
   
   var y1:float = myTransform.position.y;
   if((y1-y)>=0){follow++;
   }
    
    y=myTransform.position.y;
    
    if(follow>18){
     myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime); 
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    }
    
}

