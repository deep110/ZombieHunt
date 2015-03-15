
 var health : int = 100;
 
 
 
 //var scoremanager: ScoreManager;
 function Update () {
     
     if(health < 1){
    // scoremanager.score++;  
        Destroy (gameObject,0.3);
     } 
 }
 
 function ApplyDamage(dmg : int){
     health -= dmg;
 }
 
 