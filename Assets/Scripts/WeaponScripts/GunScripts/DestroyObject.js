 var delay = 2.0; //This implies a delay of 2 seconds.

 function Awake ()

{
     Destroy(gameObject, delay);
}
function OnCollisionEnter (hit : Collision)

{
     if(hit.gameObject.tag == "Enemy"){
     Destroy(gameObject);
     }
     
}
