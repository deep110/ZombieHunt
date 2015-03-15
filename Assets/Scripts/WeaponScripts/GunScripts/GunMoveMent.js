
	public var DefaultPos : Vector3;
	public var NewGunPos : Vector3;
	 var MainCam:GameObject;
	var count:int =0;
	
function Start(){

	transform.localPosition = DefaultPos;
   // MainCam  = GameObject.findGameObjectWithTag("MainCamera");
}
	
	
function Update () {

	if(Input.GetButton("Fire2")){
	if(count==0){
	transform.localPosition = NewGunPos;
	count=1;
	MainCam.camera.fieldOfView = 40;
	}
	else{
	transform.localPosition = DefaultPos;
	count=0;
	MainCam.camera.fieldOfView = 60;
	}
	}
	
}