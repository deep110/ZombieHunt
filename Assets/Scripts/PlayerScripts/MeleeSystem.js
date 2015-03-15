 var Range = 5.0;
 var Axe : GameObject;
// var AttackAnimName = "AnimName";
 var damage = 50;
 var Distance:float;
 var axeSwingAudio:AudioSource;
 var ZombieDying:AudioSource;
 var BloodSplater:GameObject;
 //var Axe:GameObject;
 
 
 function axeRayShoot () {
         var Hit : RaycastHit;
         var DirectionRay = transform.forward;
       
         Axe.Animator.animPlay=true;;
         //if(h){Debug.Log("animation played");}
         axeSwingAudio.Play();
         if(Physics.Raycast(transform.position, DirectionRay, Hit, Range))
         {
         Distance = Hit.distance;
         if(Hit.transform.tag == "Enemy")
         {
         var splash:GameObject = Instantiate (BloodSplater,Hit.point+(Hit.normal*0.001f), transform.rotation) as GameObject;
          splash.transform.LookAt(Hit.point+Hit.normal);
          splash.transform.parent=Hit.transform;
         Hit.transform.SendMessage("ApplyDamage",damage,SendMessageOptions.DontRequireReceiver);
         ZombieDying.Play();
         }else{
         Distance=-1;
         }
         }
 }
 
 function Update () {
 if(Input.GetButtonDown("Fire1")){
 axeRayShoot ();
 }
 
 }