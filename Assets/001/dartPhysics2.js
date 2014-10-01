#pragma strict

var dartBoard : GameObject;
var dartPoint : GameObject;

var fired     : boolean;
function Start () {


 dartBoard = GameObject.FindGameObjectWithTag("dartBoard");
 dartPoint = GameObject.FindGameObjectWithTag("dartTarget");


}

function Update () {



	this.transform.position.z = Mathf.Clamp(transform.position.z,15.11, 30.0); //14.92068

  // Time.timeScale = 0.3;

 functions();
}

function functions()
{


  if( fired )
  {
   yield WaitForSeconds(0.75);//0.78
  this.gameObject.rigidbody.isKinematic = false;
	  this.transform.parent = null;
    this.rigidbody.AddForce(this.transform.forward * 3000 * Time.deltaTime);
   }

 if( fired )
   {
     time += Time.deltaTime;
    
      if( time < 0.2 )
      {
                this.gameObject.transform.LookAt( dartPoint.transform );

      }

   }

}

var time : float;
function triggerFire()
{
  //Debug.Break();
 fired = true;
}

function OnTriggerEnter( other : Collider ) 
{
  if( other.gameObject.tag == "dartBoard" )
    {
 //   Debug.Break();
 	   time = 0;
       fired = false;
       this.gameObject.rigidbody.constraints = RigidbodyConstraints.FreezePosition ;

       this.gameObject.rigidbody.velocity = Vector3.zero;
     // this.gameObject.rigidbody.isKinematic = true;
       //Debug.Break();

    }

 

}