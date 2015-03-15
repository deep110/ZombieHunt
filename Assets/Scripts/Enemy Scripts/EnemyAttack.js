    var timeBetweenAttacks :float = 0.5f;
    var  attackDamage :int= 10;
    var playerInRange:boolean;
    var player:GameObject;
    var playerHealth:PlayerHealth;  
    var timer:float ;
	var  someObject:GameObject;
	var script:EnemyMovement2;
	private var count:int = 0;
	


function Awake() {
        player = GameObject.FindGameObjectWithTag ("Player");
        playerHealth = player.GetComponent (PlayerHealth);
		someObject = gameObject;
		script=someObject.GetComponent(EnemyMovement2);
    }
    
    function OnTriggerEnter (other:Collider)
    {
        if(other.gameObject.tag == "Player")
        {
            playerInRange = true;
			script.enabled = false;
		
			
        }
    }


    function OnTriggerExit (other:Collider)
    {
        if(other.gameObject.tag == "Player")
        {
            playerInRange = false;
			script.enabled = true;
			
        }
    }


    function Update () {
        timer += Time.deltaTime;
        if(timer >= timeBetweenAttacks && playerInRange){       
          //  Attack ();
        timer = 0f;
        if(playerHealth.currentHealth > 0){       
            playerHealth.TakeDamage (attackDamage);
          //  playerInRange = false;
            
        }
        }
        
        
    }

    

    

    

