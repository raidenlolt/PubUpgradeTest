#pragma strict

function Start () {

}
private var y = 0.0;


var clueStick : GameObject;

var distance : float;
var rayBar   : GameObject;

var lineRen   : LineRenderer;

var whiteBall : GameObject;
var pointer: GameObject;

function Update () {

     this.transform.eulerAngles.y = clueStick.transform.eulerAngles.y;
    this.transform.position = whiteBall.transform.position;



	  var up = transform.TransformDirection(Vector3.forward);
      var hit : RaycastHit;    


    if(Physics.Raycast(transform.position, up, hit, 50))
      {
	   //   Debug.Log(hit.distance);    
	      //   Debug.DrawRay(transform.forward, hit.point, Color.red);
	      Debug.DrawRay(transform.position, up * hit.distance, Color.green);
	   
	      if( hit.collider.gameObject.tag == "ball")
	      {
    		   lineRen.SetPosition(2,hit.point);
               lineRen.SetPosition(3,hit.point - hit.normal);
		 }
		 else{
		         	lineRen.SetPosition(2,hit.point);
	 			 lineRen.SetPosition(3,hit.point);
	 			
		 }
      }
     
      rayBar.transform.localScale.z = hit.distance/100;
        
        
       lineRen.SetPosition(0,this.transform.position);
               lineRen.SetPosition(1,hit.point);






  
}