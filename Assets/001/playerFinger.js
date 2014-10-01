#pragma strict

var canAttach : boolean;
var player : GameObject;
function Start () {

}

function Update () {
// print( this.gameObject.transform.parent.root );


}

function OnTriggerEnter( other : Collider )
{

	 if( ( other.gameObject.tag == "glass") )//&& (player.gameObject.animation["drinkpick2"].enabled == true)
	 {
		  if(canAttach)
		  {   //other.gameObject.transform.sca = Vector3(1.44,1.44,1.44);
				other.gameObject.transform.parent = null;
				//	 var temp : Transform = other.gameObject.transform;
			
			    other.gameObject.transform.parent = this.gameObject.transform;
			   // temp.localScale = Vector3(10,10,10);;
			   canAttach= false;
			   
			     //other.gameObject.SendMessage( "activateTrigger" );
			   
			    print("boooooooooooo");
		  }
		  //other.gameObject.transform.eulerAngles = Vector3(0,0,0);
		// Debug.Break();
	 }




}

function activateAttach()
{

 canAttach = true;

}