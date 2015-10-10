var spawnPointBullet : GameObject;
var bulletPrefab : GameObject;
var gunShot:AudioSource;
var v3LookPoint : Vector3;
var hit : RaycastHit;
var gunFired:boolean = false;
var ZombieDying:AudioSource;
var BloodSplater:GameObject;
var drawBlood:boolean = false;
var damage:int = 50;


function Update () {

var ray : Ray = GetComponent.<Camera>().main.ViewportPointToRay(Vector3(0.5, 0.5, 0));
Debug.DrawRay (ray.origin, ray.direction * 50, Color.red);
   if (Physics.Raycast(ray, hit, 100))
    {
         v3LookPoint = hit.point;
    }
    else{
         v3LookPoint = ray.GetPoint(100);
    }
spawnPointBullet.transform.LookAt(v3LookPoint);

if(Input.GetButtonDown("Fire1")){
var fireBullet = Instantiate(bulletPrefab, spawnPointBullet.transform.position,spawnPointBullet.transform.rotation);
         fireBullet.GetComponent.<Rigidbody>().AddRelativeForce (Vector3.forward * 1000);
         gunShot.Play();
         gunFired=true;
        // particleSystem.Play();
}
if(gunFired){
var ray1 : Ray = GetComponent.<Camera>().main.ViewportPointToRay(Vector3(0.5, 0.5, 0));
if (Physics.Raycast(ray1, hit, 100)){
         if(hit.transform.tag == "Enemy"){
         ZombieDying.Play();
         drawBlood = true;
         hit.transform.SendMessage("ApplyDamage",damage,SendMessageOptions.DontRequireReceiver);
}
        if(drawBlood){
          var splash:GameObject = Instantiate (BloodSplater,hit.point+(hit.normal*0.001f), transform.rotation) as GameObject;
          splash.transform.LookAt(hit.point+hit.normal);
          splash.transform.parent=hit.transform;
          drawBlood = false;
        }
}
gunFired = false;
    }
 
}