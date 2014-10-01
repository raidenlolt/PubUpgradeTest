#pragma strict

function Start () {

}

function Update () {

}
var runOnce    : boolean;
var canTrigger : boolean;
var count      : int;


function OnTriggerEnter( other : Collider )
{
   print(other.gameObject.tag + "TRIGGER ENTER");

	 if( other.gameObject.tag == "cupStand" )
	 {  
	 

	 
		 if( canTrigger )
		 {
			 print(other.gameObject.tag + " TRIGGER ENTER ");
			// Debug.Break();
				if( count == 1  )
			 	{  
			 			print("************");
				    this.gameObject.transform.parent = null;
			    }
			    
			    if( !runOnce )
			    {
			     count +=1;
			     runOnce = true;
			    }
	     }
	 }





 //	print("************");
 	

}

function OnTriggerExit( other : Collider )
{
    print( other.gameObject.tag ) ;
   			 		//Debug.Break();
	 if( other.gameObject.tag == "cupStand" )
	 {  
  		 canTrigger = true;
	 }
}

function activateTrigger()
{
 yield WaitForSeconds(2);
 canTrigger = true;

}

