#pragma strict

var animationTransform : Transform;

function Start () {

}
var runOnce : boolean;

function Update () {
//transform.lossyScale
}

function OnTriggerEnter( other : Collider )
{
 //print(this.gameObject.transform.root.animation.IsPlaying("sitstart2"));
 
 	print (transform.lossyScale);
 if( other.gameObject.tag == "glass" )
 {
   if( animationTransform.animation.IsPlaying("sitstart2") == false)
   {
	   if( !runOnce )
	   {
	 	    other.gameObject.transform.parent = null;
	   		other.gameObject.transform.parent = this.gameObject.transform;

		 	other.gameObject.transform.localPosition = Vector3(0.716,-0.69,-3.4);
			other.gameObject.transform.localEulerAngles  = Vector3(13.37,3.45,92.32);
			other.gameObject.transform.localScale = Vector3(76.32,7.69,29.53);

	   		//this.gameObject.transform.loss =  Vector3.one ;
	   		runOnce = true;
	   	}
   			print("++++++++++++++"  );
   }
   //Debug.Break();
 }



}

//
//function OnTriggerStay ( other : Collider )
// {
//  if( other.gameObject.tag == "glass" )
// {
//   if( this.gameObject.transform.root.animation.IsPlaying("sitstart2") == false)
//   {
// 
//      other.gameObject.transform.position = this.gameObject.transform.position;
// 
// 	}
// }
// 
// 
// }