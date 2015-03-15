var enemy:GameObject;
var script:EnemyManager;
var isTriggered:boolean = false;
var id:int=1;
var scriptenabled:boolean = false;

function Start () {
   // enemy = GameObject.FindWithTag("Enemy");
    script = enemy.GetComponent(EnemyManager);
    if(script!=null)scriptenabled=true;
   // Debug.Log("anything");
}

function OnTriggerEnter (other:Collider)
    {
        if(other.gameObject.tag == "Player"&& isTriggered==false)
        {   // Debug.Log("called");
            isTriggered = true;
			script.InvokingEnemy(id);
        }
    }