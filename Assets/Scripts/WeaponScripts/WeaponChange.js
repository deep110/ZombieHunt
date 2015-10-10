 var gun : GameObject;
 var axe : GameObject;
 var MainCam:GameObject;
 private var fieldOfView:int;
var WeaponChange:AudioSource;
 
 function Start(){
  gun.SetActiveRecursively(true);
  axe.SetActiveRecursively(false);
 }
 
 function Update(){
 if(Input.GetKeyDown("c")){
 SwapWeapons();
   WeaponChange.Play();
 }
   
 }
 
 function SwapWeapons(){
 if (gun.active == true) {
 fieldOfView = MainCam.GetComponent.<Camera>().fieldOfView;
 if(fieldOfView==40)MainCam.GetComponent.<Camera>().fieldOfView=60;
 gun.SetActiveRecursively(false);
 axe.SetActiveRecursively(true);
 } else {
 if(fieldOfView==40)MainCam.GetComponent.<Camera>().fieldOfView=40;
 gun.SetActiveRecursively(true);
 axe.SetActiveRecursively(false);
 }
 }