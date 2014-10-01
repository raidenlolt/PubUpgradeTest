var targetLocations : Transform[];

private var agent: NavMeshAgent;

var i : int;
var locationTimer: float;

public var locationReached : boolean;


var canMove : boolean;

var drinkTimer : float;
var drinkAction1 : boolean;
var drinkAction2 : boolean;
var drinkAction3 : boolean;
var actionCount : int;

var canDrink : boolean;

var stopAllActions : boolean;

var dartMode     : boolean;
var dartModeInitiated : boolean;


var lookAtDartBoard : boolean;
var AIdartBoard     : Transform;

var dartIdle        : boolean;
var dartGameObject  : GameObject[];
var dart 			: GameObject;
var j 				: int;
function Start () 
{
		agent = GetComponent.<NavMeshAgent>();
		
		i = Random.Range(0,8);
		//i = 8;
		canMove = true;
}

function Update () 
{
//	print(agent.velocity.magnitude);
	
	
	
	if( dartModeInitiated == false )
	{
		if( canMove ) 
		{
			agent.SetDestination(targetLocations[i].position);
			
			if( i != 8 )
			{
				randomLocation();
			}
		}
		
		actions();
	}
		anims();

	
	if( dartMode )
	{
	  setDartPlayLocation();
	  dartModeInitiated = true;
	}
	if( Input.GetKeyDown(KeyCode.Backslash)) {
	
		dartMode = true;
	}
	if( dartModeInitiated )
	{
	  dartAnims();
	 
	  
	  
	}
}


function dartAnims()
{

 if( (i == 9) && ( !lookAtDartBoard) && (locationReached)  ) {
	  
			this.gameObject.transform.eulerAngles = Vector3(0,180,0);
			dartIdle = true;
			yield WaitForSeconds(0.5);
			dartGameObject[j] = Instantiate( dart ,  transform.position, transform.rotation);
			dartGameObject[j].transform.parent = GameObject.FindGameObjectWithTag( "AIdartParent" ).transform;
		     dartGameObject[j].transform.localPosition = Vector3(0.11,0.02,-0.03);
		     dartGameObject[j].transform.localEulerAngles = Vector3(339.59,357.80,348.73);

			lookAtDartBoard = true;	    

	  }
	  if( dartIdle && (!animation.IsPlaying("dart_throw")) )
	  {
			animation.CrossFade("dart_idle", 0.2);
	  }
	  
 if( Input.GetKeyDown(KeyCode.RightShift) )
 {

  			animation.Play("dart_throw");

     dartGameObject[j].SendMessage("triggerFire");
		 	j+=1;
  
 }



}

 function setDartPlayLocation() {
 	 dartMode = false;
 	 agent.Stop();
 	  i = 9;
 	agent.SetDestination(targetLocations[i].position);
		yield WaitForSeconds(0.5);
 	agent.SetDestination(targetLocations[i].position);

 }

function lookAtDartBoardOnce()  {

   

}








function actions()
{
    if( Input.GetKeyDown(KeyCode.V))
    {
       stopAllActions = true;
       drinkTimer = 0;
	   animation["drinkplacedown"].layer = 16;
         // animation.CrossFade("drinkplacedown");
       animation.Play("drinkplacedown", PlayMode.StopAll);

    
    	//      animation["standup"].layer = 11;
       //   animation.CrossFadeQueued("standup",2);
               
        // yield WaitForSeconds( animation["standup"].length );
 			
 		//	  animation["idle"].layer = 12;
        //  animation.CrossFadeQueued("idle",2);
    }

    if( stopAllActions )
    {
    	animation.Stop("sitidle");
        animation["standup2"].layer = 18;
    	animation.Stop("sitstart2");
  	    	      
          yield WaitForSeconds( animation["drinkplacedown"].length );

          animation.Play("standup2",1);

  	    	
        //  	animation.Play("standup2", PlayMode.StopAll);
      yield WaitForSeconds( animation["standup2"].length );
 			this.gameObject.transform.eulerAngles.y = 270;
//     
//     


    	canDrink = true;
		stopAllActions = false;
		
		//animation.Play("idle");
    }



	
	if( i==8 )
	{
	
		yield WaitForSeconds(1);
		if( !lookAtOnce && locationReached && !playOnce )
		{ 
	  	  	  	  lookAtOnce = true;
		 }

	}

  if( lookAtOnce )
  {
		transform.rotation = Quaternion.Slerp(transform.rotation, targetLocations[i].rotation, 5 * Time.deltaTime);
		yield WaitForSeconds(0.3);
		
		if( !playOnce )
		{
		 if( !drinkAction1 && !drinkAction2 && !drinkAction3)
     	{
			//animation.Pla("sitstart2");    // sit
			    	animation.Play("sitstart2", PlayMode.StopAll);

			yield WaitForSeconds(animation["sitstart2"].length);
		}
		   lookAtOnce = false;
   		   playOnce = true;

		}

  }
 if( !lookAtOnce && playOnce && !stopAllActions)
 {
     if(actionCount == 0 && drinkTimer <5)
     {
     //	anim("sitidle");  // sitIdle3
    	animation.Play("sitidle", PlayMode.StopAll);

     	//print( "boooooooooooooo");
      }	
      if( actionCount ==1 && drinkTimer <5  )
      {
      //     	anim("glassidle");
           	animation.CrossFadeQueued("drinkidle",2);
           				    //	animation.Play("drinkidle", PlayMode.StopAll);

      }
      if( actionCount ==2)
      {
     // 
                 	animation.CrossFadeQueued("drinkidle",2);
           				    //	animation.Play("drinkidle", PlayMode.StopAll);

      }
   if ( !canDrink )
   {   
    drinkTimer += Time.deltaTime;
   } 
   else{
	    animation["idle"].layer = 35;
      	animation.Stop("drink");
    	animation.Stop("drinkidle");
      	animation.Stop("drinkidle");
      	animation.Stop("drinkpick");
      	animation.Stop("drinkplacedown");
  	 	animation.Stop("idle180");
    	animation.Stop("sitidle");
      	animation.Stop("sitstart");
      	animation.Stop("sitstart2");
      	animation.Stop("standup");
      	animation.Stop("standup2");


     animation["drink"].enabled = false;
     animation["drinkidle"].enabled = false;
     animation["drinkpick"].enabled = false;
     animation["drinkplacedown"].enabled = false;
     animation["idle180"].enabled = false;
     animation["sitidle"].enabled = false;
     animation["sitstart"].enabled = false;
     animation["sitstart2"].enabled = false;
     animation["standup"].enabled = false;
     animation["standup2"].enabled = false;
     animation["walk"].enabled = false;
     animation["drink"].enabled = false;
   if( animation["sitidle"].enabled == true)
   {
    Debug.Break();
   }
if( animation["drinkidle"].enabled == true)
   {
    Debug.Break();
   }if( animation["sitstart"].enabled == true)
   {
    Debug.Break();
   }if( animation["sitstart2"].enabled == true)
   {
    Debug.Break();
   }if( animation["sitidle"].enabled == true)
   {
    Debug.Break();
   }


   
   	    animation["sitidle"].layer = -20;
	    animation["drinkidle"].layer = -10;
	    animation["sitstart"].layer = -10;
	    animation["isitstart2dle"].layer = -10;

   	    animation["idle"].layer = 40;

    	animation.Play("idle", PlayMode.StopAll);
        //animation.Play("idle");
   
   }
 	if( drinkTimer >5 && actionCount ==0)
 	{
    //   anim("drinkpick");//glasspick
    	animation.Play("drinkpick", PlayMode.StopAll);

     	actionCount += 1 ;
     	drinkTimer = 0;
 	}

 	if( drinkTimer >5 && actionCount ==1 )
 	{
 	     //	anim("drink"); //glassdrink
 	    	animation.Play("drink", PlayMode.StopAll);

 	     	actionCount = 2 ;
        	drinkTimer = 0;
 	}		
	if( drinkTimer >10 &&actionCount == 2 )
	{
     	actionCount = 1 ;
        	drinkTimer = 0;
	 
	  } 
 	
 }
 







}


function anim( other: String)
{
///	animation.Stop();
	
	animation[other].layer = 5;
	animation.PlayQueued(other,2);//, QueueMode.PlayNow);

}


var playOnce : boolean;
var lookAtOnce : boolean;
function randomLocation()
{

   
   if( locationReached )
   {
      locationTimer += Time.deltaTime;

	   if( locationTimer > 10 )
	   {
	       i = Random.Range(0,8);
	       locationTimer = 0;
	   }
   }
	
}


function anims()
{

 if( agent.velocity.magnitude>0.3)
	{
	 if( !drinkAction1 && !drinkAction2 && !drinkAction3)
     	{
			animation["walk"].layer = 0;   // idel
    		animation.Play("walk", PlayMode.StopAll);
		  	locationReached = false;
		}
	}
	else{
	
			 if( !drinkAction1 && !drinkAction2 && !drinkAction3)
		     	{
					   
 	
 					if((!animation.IsPlaying("sitidle")) && (animation["sitidle"].enabled == false) && (animation["walk"].enabled == false ) && (animation["dart_idle"].enabled == false )&& (!animation.IsPlaying("dart_idle"))&&(!animation.IsPlaying("dart_throw")))
 					{
						locationReached = true;
						animation["idle"].layer = 0;   // was -10 @ 13-Sep
			    		animation.CrossFadeQueued("idle");
			    							print("idleeeeeeeeeeeeeeeeeeeeee");

 					}
				//	animation["idle"].layer = -10;   // idel
				//	animation.CrossFadeQueued("idle");          // idel
				}
				
		
	}
}


function stopForInteraction()
{
	 agent.Stop();
	 canMove = false;
	this.transform.LookAt(GameObject.FindGameObjectWithTag("Player").transform.position);

}

function resumeWalking()
{
 canMove = true;
	agent.Resume();

}

function findTheChair()
{
     i = 8;
	agent.SetDestination(targetLocations[i].position);

}