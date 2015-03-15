    var startingHealth:int  = 100;
    var currentHealth:int= 100; 
    var flashSpeed :int= 5f;
    var flashColour:Color = new Color(1f, 0f, 0f, 0.1f);
	var emptyTex:Texture2D ;
	var fullTex:Texture2D ;
	var bloodSplat:Texture2D ;  
    var isDead:boolean;
    var damaged:boolean;
    var alpha:float = 0;
    var bloodSplatActive:boolean = false;
    var timerCount:int=0;
	

function Start () {
 currentHealth = startingHealth;
}

function Update(){
        if(damaged)
        {
        bloodSplatActive = true;  
        timerCount=0;     
        }     
        damaged = false;
}

 
    function TakeDamage (amount:int)
    {
        damaged = true;
        currentHealth -= amount;
		if(currentHealth <= 0 && !isDead)
		{
			Death ();
		}
        
    }

	function OnGUI()
	{
		var left = 7*Screen.width / 10;
		var top = 10;
		var barWidth = Screen.width / 4;
		GUI.DrawTexture (new Rect (left, top, barWidth, 30), emptyTex, ScaleMode.ScaleAndCrop, true, 1);
		GUI.DrawTexture (new Rect (left,top,  (barWidth*currentHealth) / startingHealth, 30), fullTex, ScaleMode.StretchToFill, true, 1);
		
		if(bloodSplatActive ==true){
		timerCount++;
		if(timerCount<11){
		alpha += (timerCount)*0.05;
		}
		
		if(alpha>1){
		alpha=1;
		}
		if(timerCount>50){
		alpha = alpha - (timerCount-50)*0.05;
		}
		
		GUI.color.a = alpha;
		GUI.DrawTexture (new Rect (0,0, Screen.width,Screen.height), bloodSplat, ScaleMode.ScaleAndCrop, true, 1);	
		if(alpha<0){
		bloodSplatActive =false;
			}	
		}
		GUI.color.a = 1;
		
	}

    function Death ()
    {
        isDead = true;
		RestartLevel ();
   
    }


    function RestartLevel ()
    {
        Application.LoadLevel (Application.loadedLevel);
    }
    