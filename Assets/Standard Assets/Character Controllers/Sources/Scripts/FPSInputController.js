private var motor : CharacterMotor;


var player : GameObject;
// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
	
	canControl = true;

	
	
}

// Update is called once per frame
function Update () {
	// Get the input vector from kayboard or analog stick
	
	if( canControl)
	{
		var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	}
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector * Time.deltaTime;
	motor.inputJump = Input.GetButton("Jump");
	
	
	interaction();
	runonce=true;
	if(this.dialogueTriggered==true && runonce==true)
	{
	this.gameObject.GetComponent("XMLInput").XmlRead();
	runonce=false;
	}

	  
}



var XbuttonTexture : GUITexture;
//var AIspeak : GUITexture;
//var AItextures : Texture[];

var dialogueTriggered : boolean;
public var dialogueCount : int;
var runonce:boolean;


var t_playerLoc 		: Transform;
var t_playerStandLoc    : Transform;

var t_AI        : Transform;


var b_moveToChair : boolean;
var cinematicActionTriggered : boolean;
var cinematicStage2          : boolean;

var triggerDrinking : boolean;
var drunkcount:int;

var standUpSequence         : boolean;

var canControl : boolean;

function Start()
{

 	XbuttonTexture.enabled = false;
 	drunkcount=1;
 	dialogueCount=1;
}



private var updateOnce:boolean;				// updates the location to make the character sit 
function moveToChair()
{
  
 transform.position.x = Mathf.MoveTowards(transform.position.x, t_playerLoc.position.x,Time.deltaTime);
 transform.position.z = Mathf.MoveTowards(transform.position.z, t_playerLoc.position.z,Time.deltaTime);

 this.gameObject.transform.LookAt( t_playerStandLoc);
 this.gameObject.GetComponent( "MouseLook").enabled = false;
 
 
 yield WaitForSeconds(3);
 
 if( !updateOnce )
 {
 	t_playerLoc = GameObject.FindGameObjectWithTag("playerPos2").transform;
 	print("+++++++++++++++");
	updateOnce = true;
  }
  Camera.main.transform.position.y = Mathf.MoveTowards(Camera.main.transform.position.y, t_playerLoc.position.y+ 0.1669,Time.deltaTime);
  Camera.main.transform.position.x = Mathf.MoveTowards(Camera.main.transform.position.x, t_playerLoc.position.x+0.5 ,Time.deltaTime);
 GameObject.Find("ai").collider.enabled=false;
}



function chairTrigger123()
{
  cinematicActionTriggered = true;
	 
	  Camera.main.SendMessage("alphaFill");
	  Camera.main.SendMessage("fadeIn");
	  GameObject.Find("ai").SendMessage("findTheChair",null,UnityEngine.SendMessageOptions.DontRequireReceiver);
	 b_moveToChair = true;



}

function interaction()
{
 if( Input.GetKeyDown("8"))
 {
	  cinematicActionTriggered = true;
	 
	  Camera.main.SendMessage("alphaFill");
	  Camera.main.SendMessage("fadeIn");
	  
	 b_moveToChair = true;
 
 }
	 if( b_moveToChair )
	 {
	 	  
		  moveToChair();
		  yield WaitForSeconds(4);
		  seatedCinematicRelaxPlayerMovement();
		  
		  cinematicStage2 = true;
  		  b_moveToChair = false;

	 }
	 if( cinematicStage2 )
	 {
	 	seatedInteraction();
	 	if(GameObject.Find("ai").GetComponent("AI1").locationReached)
	 	{GameObject.Find("ai").collider.enabled=true;
	 	//GameObject.Find("First Person Controller").GetComponent("Attach Glass").enabled=true;
	 	}
	 }

//  if(XbuttonTexture.active == true && !chairTrigger && !chairTriggerOnce)
//     {
//		this.gameObject.GetComponent( CharacterMotor).enabled = false;           
//	       restrictPlayerMovement();
//	       
//	       XbuttonTexture.enabled = false;
//	       dialogueTriggered = true;
//	        yield WaitForSeconds(0.5);
//	       AIspeak.gameObject.active= true;
//
//     }
     
      if( Input.GetKeyDown("5"))
 		{
 		    b_moveToChair = false;
      		standUpSequence = true;
        }
       if( standUpSequence )
       {
           standUpSeq();
       		 yield WaitForSeconds(2);
      		relaxPlayerMovement();

			standUpSequence = false;
        } 
        
        
 if ( Input.GetKeyDown(KeyCode.Space ))
 {					
     if(XbuttonTexture.activeSelf == true && !chairTrigger && !chairTriggerOnce)
     {
     
	       restrictPlayerMovement();
	       
	       XbuttonTexture.enabled = false;
	       dialogueTriggered = true;
	       
	       //xml.XmlRead();
	      //SendMessage("XmlRead",this,UnityEngine.SendMessageOptions.DontRequireReceiver);
	        yield WaitForSeconds(0.5);
//	       AIspeak.gameObject.active= true;

     }
     if(XbuttonTexture.activeSelf == true && chairTrigger && !chairTriggerOnce)
     {
        chairTrigger123();
        chairTriggerOnce = true;
        yield WaitForSeconds(10);
        
       XbuttonTexture.enabled = true;
}
     //   player.gameObject.SendMessage("triggerPlayerAI");
     }
     if( XbuttonTexture.activeSelf == true &&  Input.GetKeyDown(KeyCode.Space ) && cinematicStage2 && !triggerDrinking  )//&&   this.gameObject.GetComponent( CharacterMotor).canControl == false
     { 
  	//   Debug.Break();
      yield WaitForSeconds(2);
	   triggerDrinking = true;
  	   player.gameObject.SendMessage("triggerPlayerAI");
  	          XbuttonTexture.enabled = false;
  	          	this.gameObject.GetComponent( "MouseLook").enabled = false;

  	          this.transform.eulerAngles.y = 85;
			//yield WaitForSeconds(8);
			  	         // 	this.gameObject.GetComponent( "MouseLook").enabled = true;
        // Debug.Break();
     }
     
     if( triggerDrinking )
     {
     
      this.transform.eulerAngles.y = 85;

     }
   if( Input.GetKeyDown(KeyCode.Z))
   {
   //Debug.Break();
   
   }
 

    if( dialogueTriggered )
    {
//     if( AIspeak.gameObject.active ==true)
     //var cnt:int;
     this.gameObject.GetComponent("XMLInput").show=true;
     GameObject.Find("ai").collider.enabled=false;
     this.gameObject.GetComponent("XMLInput").ExtractString(drunkcount-1,dialogueCount-1);
if(Input.GetKeyDown(KeyCode.Space))
{
dialogueCount+=1;
}
print(dialogueCount);

	}	
     /*switch(dialogueCount%2)
     {
     case 0: 
     this.gameObject.GetComponent("XMLInput").ExtractString(drunkcount-1,dialogueCount-1,true);
     print(cnt.ToString());
	 if(Input.GetKeyDown(KeyCode.Space))
	 {dialogueCount+=1;}
	 //cnt--;
	 break;
     //if(Input.GetKeyUp(KeyCode.Space)|| Input.GetKeyDown(KeyCode.Space))
     //yield WaitForSeconds(3.0);
     case 1:
     this.gameObject.GetComponent("XMLInput").ExtractString(drunkcount-1,dialogueCount-1,false);
       if(Input.GetKeyDown(KeyCode.Space))
         {dialogueCount+=1;}
        break;
        //print(dialogueCount.ToString());
 //         AIspeak.gameObject.SetActive(false);
           */             
       }

  
  

 
 
   
   
 
 
 
 
 
 

function seatedInteraction()			
{
 
 



}
function standUpSeq()
{

 transform.position.x = Mathf.MoveTowards(transform.position.x, t_playerStandLoc.position.x,Time.deltaTime);
 transform.position.z = Mathf.MoveTowards(transform.position.z, t_playerStandLoc.position.z,Time.deltaTime);
 transform.position.y = Mathf.MoveTowards(transform.position.y, t_playerStandLoc.position.y,Time.deltaTime);

if( Camera.main.transform.localPosition.y < 0.9)
 Camera.main.transform.position.y += 0.5 * Time.deltaTime;

}


private var temp_trigger    : boolean; 
 var actionInitiated : boolean;
private var startedTalking  : boolean;
 var chairTrigger    : boolean;
 var chairTriggerOnce : boolean;
 
 function OnTriggerEnter( other : Collider )
 {
 
 
	  if( other.collider.tag == "Finish" )//&& dialogueCount<3 )
	 {
	 
	   if( !dialogueTriggered )
	   {
	 	    XbuttonTexture.gameObject.SetActive(true);
	    	other.gameObject.SendMessage("stopForInteraction");
	    }
	 
	 }
 
 
 
 }
 
 
 
function OnTriggerStay( other : Collider )
{
	if( other.collider.tag == "chair" && !chairTriggerOnce)
	{
	 	XbuttonTexture.enabled = true;
     	chairTrigger = true;
	
	
	}
//print(other.gameObject.name);
 if( other.collider.tag == "Finish" )//&& dialogueCount<3 )
 {

	  if( !dialogueTriggered &&   !actionInitiated && !cinematicActionTriggered )//
	  {
	    XbuttonTexture.enabled = true;
	  }
		else
		{
			 if( !temp_trigger && !cinematicActionTriggered  && !actionInitiated)
			   {
			         this.gameObject.transform.LookAt( other.gameObject.transform.position);

			    	other.gameObject.SendMessage("stopForInteraction");
			        temp_trigger = true;   
			    }
	     } 
	      if( dialogueCount > 6 )
 		 {
 		 //this.dialogueTriggered=false;
 		     other.gameObject.SendMessage("findTheChair");
 		     
 		 }
 }

  if( dialogueCount > 6 )
  {
   yield WaitForSeconds(0.5);
   GameObject.Find("ai").collider.enabled=false;
     //AIspeak.gameObject.SetActive(false);
	relaxPlayerMovement();
   dialogueTriggered=false;
     dialogueCount = 1;
    actionInitiated =true;
  }

}


function OnTriggerExit( other : Collider )
{
	if( other.collider.tag == "chair")
	{
	 	XbuttonTexture.enabled = false;
	 	     	chairTrigger = false;

	}
if( other.collider.tag == "Finish" )
 {
 		    XbuttonTexture.enabled = false;
		   	other.gameObject.SendMessage("resumeWalking");

	 if( dialogueTriggered )
	 {
		   // dialogueTriggered = false;
			temp_trigger = false;
			dialogueCount = 1;
			//actionInitiated = false;
	  }
 }



}
function restrictPlayerMovement()               // during dialogue
{
    this.gameObject.GetComponent( CharacterMotor).canControl = false;
	this.gameObject.GetComponent("MouseLook").minimumX = this.gameObject.transform.eulerAngles.y - 15.0f;
	this.gameObject.GetComponent( "MouseLook").maximumX = this.gameObject.transform.eulerAngles.y + 15.0f;
	this.gameObject.GetComponent( "MouseLook").minimumY = -10.0f;
	this.gameObject.GetComponent( "MouseLook").maximumY =  10.0f;
	canControl = false;
}

function relaxPlayerMovement()
{
          	this.gameObject.GetComponent( "MouseLook").enabled = true;

   this.gameObject.GetComponent( CharacterMotor).canControl = true;
	this.gameObject.GetComponent( "MouseLook" ).minimumX = -10000F;
	this.gameObject.GetComponent("MouseLook"  ).maximumX =  100000F;
	this.gameObject.GetComponent( "MouseLook" ).minimumY = -60.0f;
	this.gameObject.GetComponent( "MouseLook" ).maximumY =  60.0f;
	canControl = true;
}

function seatedCinematicRelaxPlayerMovement()
{
	this.gameObject.GetComponent( "MouseLook").enabled = true;
//   this.gameObject.GetComponent( CharacterMotor).enabled = false;
      this.gameObject.GetComponent( CharacterMotor).canControl = false;
	canControl = false;
	this.gameObject.GetComponent("MouseLook").minimumX = 90 - 5.0f;
	this.gameObject.GetComponent( "MouseLook").maximumX = 90+ 5.0f;
	this.gameObject.GetComponent( "MouseLook").minimumY = -10.0f;
	this.gameObject.GetComponent( "MouseLook").maximumY =  10.0f;

//  yield WaitForSeconds(0.1);
//	this.gameObject.GetComponent( "MouseLook").enabled = false;


}


// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")


