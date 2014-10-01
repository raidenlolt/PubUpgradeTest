#pragma strict


var dart     	 : GameObject;
var dartBoard 	 : GameObject;

var dartPrefab	 : GameObject;
var clone     	 : GameObject[];
var i         	 : int;


function Start () {

 	createClone();

}

function Update () {
//  dart.gameObject.transform.LookAt( dartBoard.transform);
 
  animation.PlayQueued("dartidle");
 // animation.PlayQueued("dartidle");

 
 trigger();
 
// if( Input.GetKeyDown(KeyCode.Space))
// {
//   
//   if( clone != null )
//   {
//   yield WaitForSeconds(0.1);
//     Destroy( clone );
//   }
//		if( clone == null )
//		{
//		     clone = Instantiate( dartPrefab, transform.position, transform.rotation );
//		 
//		     clone.transform.parent = GameObject.FindGameObjectWithTag( "dartParent").transform;
//		     clone.transform.localPosition = Vector3(0.11,-0.03,-0.1507639);
//		     clone.transform.localEulerAngles = Vector3(351.1602,50.27921,168.4428);
//		
//		
//		}
// }
 
 
 
}

function trigger()
{

 if( Input.GetKeyDown(KeyCode.U))
 {
   animation.Play("darthrow2");

     clone[i].SendMessage("triggerFire");
 }


 if( Input.GetKeyDown(KeyCode.Space))
 {
//   
//   if( clone != null )
//   {
//  	 yield WaitForSeconds(0.5);
//     Destroy( clone );
//   	 yield WaitForSeconds(0.5);
 	createClone();

   }

 
 

}
function createClone()
{
 //Debug.Break();
	  if( clone[i] == null )
		{
		      clone[i] = Instantiate( dartPrefab, transform.position, transform.rotation );
		 
		     clone[i].transform.parent = GameObject.FindGameObjectWithTag( "dartParent" ).transform;
		     clone[i].transform.localPosition = Vector3(0.11,-0.03,-0.1507639);
		     clone[i].transform.localEulerAngles = Vector3(351.1602,50.27921,168.4428);

		}

}
function triggerFire()
{
   animation.Play("darthrow2");

     clone[i].SendMessage("triggerFire");
		 	i+=1;

}