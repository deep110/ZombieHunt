#pragma strict

public var footsteps : AudioSource;
public var waterWade : AudioSource;
private var waterWalk:boolean;
private var play:int = 0;


function LateUpdate () {
//Check whether the user is moving the player
     if(Input.GetAxis("Vertical") || Input.GetAxis("Horizontal"))
     {

// if the audio is not playing then play - this stops it playing multiple clips at thye same time
          if(play==1){
        if(!waterWalk){
        if (!footsteps.isPlaying){
        footsteps.Play(); 
        }
        }else{
        if (!waterWade.isPlaying){
        waterWade.Play(); 
        }
        }
        
        }
     }else{
        footsteps.Stop();
        waterWade.Stop(); 
        play=0;
     }
}
function OnControllerColliderHit (floor : ControllerColliderHit)
{


     if (floor.gameObject.tag == "floor")
     {
          play=1;
          //print("Wooden Floor");
     }
     if (floor.gameObject.tag == "water")
     {
          play=1;
          //print("Wooden Floor");
     }
     
     }
