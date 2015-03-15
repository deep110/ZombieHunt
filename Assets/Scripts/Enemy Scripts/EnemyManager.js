    var enemy:GameObject ;
    var spawnTime:float = 3f;
    var spawnPoints:Transform[];
	var Totalcount:int = 90;
    var counters:int[];
   // var player:GameObject;
    var script:DirectionArrow;
	
	function Start(){
//	player = GameObject.FindWithTag("Player"); 
	script = gameObject.GetComponent(DirectionArrow);
	}
    function SpawnOne ()
    {   // Debug.Log("SpawnOne called");
        var spawnPointIndex:int = Random.Range (0,4);
		if (counters[0] > 0) {
			Instantiate (enemy, spawnPoints [spawnPointIndex].position, spawnPoints [spawnPointIndex].rotation);
			counters[0]--;
		}else if(counters[0]==-1){
		script.locationChange();
		}
    }
	function SpawnTwo ()
	{
		//Debug.Log("SpawnTwo called"/*+counters[1]*/);
		var spawnPointIndex:int = Random.Range (4, 8);
		if (counters[1] > 0) {
			Instantiate (enemy, spawnPoints [spawnPointIndex].position, spawnPoints [spawnPointIndex].rotation);
			counters[1]--;
		}else if(counters[1]==-1){
		script.locationChange();
		}
	}
	function SpawnThree ()
	{
		//Debug.Log("SpawnThree called"+counters[2]);
		var spawnPointIndex:int = Random.Range (6, spawnPoints.Length);
		if (counters[2] > 0) {
			Instantiate (enemy, spawnPoints [spawnPointIndex].position, spawnPoints [spawnPointIndex].rotation);
			counters[2]--;
		}else if(counters[2]==-1){
		script.locationChange();
		}
	}

	function InvokingEnemy(a:int){
	    //Debug.Log("invoking called with parameter "+a);
		if (a == 1) {
			InvokeRepeating ("SpawnOne", spawnTime, spawnTime);
				}
		if (a == 2) {
			InvokeRepeating ("SpawnTwo", spawnTime, spawnTime);
		}
		if (a == 3) {
			InvokeRepeating ("SpawnThree", spawnTime, spawnTime);
		}
		}

