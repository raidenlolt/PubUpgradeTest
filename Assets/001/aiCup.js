#pragma strict


var triggerOnce : boolean;
function Start () {

}

function Update () {

	
    //print(this.gameObject.transform.parent );

    manager();
 
}

function manager()
{
	if( this.gameObject.transform.parent.name != null )
    {
		print(this.gameObject.transform.parent.name );
			if( this.gameObject.transform.parent.name == "AIHAND")
			    {
			       yield WaitForSeconds(2);
			    	triggerOnce = true;
			    }
	}


}

function OnTriggerEnter ( other : Collider )
{
	if( other.collider.gameObject.tag == "stand")
	{
	//  this.gameObject.transform.parent = GameObject.FindGameObjectWithTag("aiHand").transform;
	 if( triggerOnce )
	 {
	    this.gameObject.transform.parent = null;
	    this.gameObject.transform.eulerAngles = Vector3(0,0,0);
      } 
	}
    print("111111111111");
//    print(other.gameObject.tag );
}

function OnTriggerStay ( other : Collider )
{

    //print(other.gameObject.name );


}
function OnTriggerExit ( other : Collider )
{
  if( other.gameObject.name == "AIcupstand")
	{
		triggerOnce = true;
		Debug.Break();
	}

    print(other.gameObject.name );

	    print("222222222222");


}