#pragma strict

var canFire : boolean;
var trackBoard : boolean;




var targetPos : Vector3;

var dartBoard : GameObject;
var dartPoint : GameObject;


function Start () {


 dartBoard = GameObject.FindGameObjectWithTag("dartBoard");
 dartPoint = GameObject.FindGameObjectWithTag("dartTarget");


}



function Update () {
	
	//if( !trackBoard )
	//	this.transform.LookAt( dartBoard.transform.position );


	//  if( Input.GetKeyDown(KeyCode.P))
	//  {
	//  triggerFire();
	//  this.gameObject.rigidbody.isKinematic = false;
	//  this.transform.parent = null;
	//  }



 trig();
 // Time.timeScale = 0.2;

	this.transform.position.z = Mathf.Clamp(transform.position.z,15.11, 30.0); //14.92068

}

function trig()
{
 if( canFire )
 { 
 yield WaitForSeconds(0.75);//0.78
  this.gameObject.rigidbody.isKinematic = false;
	  this.transform.parent = null;
    this.rigidbody.AddForce(this.transform.forward * 2000 * Time.deltaTime);
     trackBoard = true;

  }

if( trackBoard )
{ //0.78
	this.transform.LookAt( dartPoint.transform.position );
	yield WaitForSeconds(0.05);
	trackBoard = false;

} 	


 
}


//function OnTriggerEnter( other : Collider)
//{
// if( other.collider.gameObject.name == "DARTBOARD" )
// {
//		Debug.Break();
//		
//		canFire = false;
// 		trackBoard = false;
// 		  // this.gameObject.rigidbody.isKinematic = true;
//
//  }
//}


function OnCollisionEnter( other : Collision )
{

//canFire = false;
 // Debug.Break();
 if( other.collider.gameObject.name == "DARTBOARD" )
 {
 	//	trackBoard = false;
		this.gameObject.rigidbody.isKinematic = true;
		 this.gameObject.collider.isTrigger = true;
	  		   Destroy( this);

  var contact = other.contacts[0];


 ////  this.gameObject.transform.rotation.x = 0;
 //  this.gameObject.collider.isTrigger = true;//.isKinematic = true;

 //  this.gameObject.rigidbody.isKinematic = true;
  // this.gameObject.transform.rotation.x = 0;
  // rigidbody.constraints = RigidbodyConstraints.FreezePosition ;
  //   rigidbody.constraints = RigidbodyConstraints.FreezeRotation ;

   //rigidbody.constraints = RigidbodyConstraints.FreezeRotationY ;
  //    rigidbody.constraints = RigidbodyConstraints.FreezeRotationZ;

//Debug.Break();
  //this.transform.eulerAngles  = Vector3(359.52,170.62,9.41);//contact.normal ;

 }
 // 
//
}

function OnCollisionStay( other : Collision )
{

 if( other.collider.gameObject.name == "DARTBOARD" )
 {
  // this.gameObject.rigidbody.isKinematic = true;


	}


}


function triggerFire()
{
  //Debug.Break();
 canFire = true;
 
}