#pragma strict


var dart : Transform;


var darTarget: GameObject;

var cannotUpdateTracker : boolean;


var b_followDart : boolean;

//var dart : GameObject;

var dartPlayer1   : GameObject;

var newPosition : Vector2;

function Start () {

}

function Update () {


//  this.gameObject.transform.position.y = 4.86;
 //   this.gameObject.transform.position.x = -10;


 followDart();
 raycast(); 

}

function followDart()
{

 



 if( Input.GetMouseButtonUp(0))
 {
		b_followDart = true;
		var temp  = dartPlayer1.gameObject.GetComponent( dartPlayer ).i;
		 dart =  dartPlayer1.gameObject.GetComponent( dartPlayer ).clone[temp].transform;
		  //print( dartPlayer1.gameObject.GetComponent( dartPlayer ).clone[0] );  // .GetComponent( dartPlayer ).clone[0];   //GameObject.FindGameObjectWithTag("dart").transform;
		  
    	newPosition = Random.insideUnitCircle * 0.01;
    	cannotUpdateTracker = true;
		//	transform.position.x = newPosition.x;
		//	transform.position.y = newPosition.y;  
 }
 if( b_followDart )
 {
   yield WaitForSeconds(0.85);
   
   
 
   var distance = Vector3.Distance( this.gameObject.transform.position, dart.position);
       if( distance > 5 && b_followDart )
      {
            transform.position = Vector3.Lerp (transform.position,darTarget.transform.position,Time.deltaTime * 2);
            print("1222222222222");
      }

  }
  
  
  
  
  
  
  if( Input.GetKeyDown(KeyCode.Space))
  {
	b_followDart = false;

    this.gameObject.transform.parent = null;
    
   resetPos();
   cannotUpdateTracker = false;
  
  
  }
  
}


function resetPos()
{

	b_followDart = false;


  this.gameObject.transform.position      = Vector3(-10.02335,4.863334,24.17675 );
    this.gameObject.transform.eulerAngles = Vector3(0,180,0 );
	

}



function raycast()
{
//var newPosition = Random.insideUnitCircle * 0.001;
  
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
		if (Physics.Raycast (ray, hit, 100)) {
			Debug.DrawLine (ray.origin, hit.point);
		//	print( hit.point);
			if( !cannotUpdateTracker )
			{
		
				darTarget.transform.position = hit.point + newPosition ;
			//print(hit.point );
			}
		}



}