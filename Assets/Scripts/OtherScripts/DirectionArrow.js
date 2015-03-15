//var compass: Texture2D; // compass image
 var destinationTransform:Transform[];
 var player:Transform;
 var needle: Texture2D; // needle image (same size of compass)
  var r = Rect(10, 10, 100, 100); // rect where to draw compass 
  var angle: float; // angle to rotate the needle
  var change:int =0; 
  


function Start(){
player = GameObject.FindWithTag("Player").transform; 

}

function locationChange(){
 change++;
 Debug.Log("change");
}
function OnGUI(){

var dirVector = destinationTransform[change].position - player.position;
    dirVector.y = 0; // remove the vertical component, if any
    var rot = Quaternion.FromToRotation(player.transform.forward, dirVector);
     // angle is what we want
   // var axis: Vector3; // but an axis variable must be provided as well
    angle = rot.eulerAngles.y;
    //rot.ToAngleAxis(angle, axis); // get the angle
 
// GUI.DrawTexture(r, compass); // draw the compass...
 var p = Vector2(r.x+r.width/2,r.y+r.height/2); // find the center
 var svMat: Matrix4x4 = GUI.matrix; // save gui matrix
 GUIUtility.RotateAroundPivot(angle,p); // prepare matrix to rotate
 GUI.DrawTexture(r,needle); // draw the needle rotated by angle
 GUI.matrix = svMat; // restore gui matrix
 
 }
 
 