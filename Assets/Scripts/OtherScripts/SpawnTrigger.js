var enemyManager:GameObject;
var script:EnemyManager;
var isTriggered:boolean = false;
var id:int=1;

function Start () {
    script = enemyManager.GetComponent(EnemyManager);
}

function OnTriggerEnter (other:Collider)
    {
        if(other.gameObject.tag == "Player"&& isTriggered==false)
        {   
            isTriggered = true;
			script.InvokingEnemy(id);
        }
    }