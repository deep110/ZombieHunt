 var walkSpeed: float = 3; // regular speed
 var runSpeed: float = 8; // run speed
 
 private var chMotor: CharacterMotor;
 private var tr: Transform;
 
 function Start(){
     chMotor = GetComponent(CharacterMotor);
     tr = transform;
    // var ch:CharacterController = GetComponent(CharacterController);
 }
 
 function Update(){
 
    
     var speed = walkSpeed;
     
     if (chMotor.grounded && Input.GetKey("left shift") || Input.GetKey("right shift")){
         speed = runSpeed;
     }
     
     chMotor.movement.maxForwardSpeed = speed; // set max speed
   
 }