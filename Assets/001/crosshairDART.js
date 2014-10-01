#pragma strict

function Start () {
		//	Screen.showCursor = false;
}
var timer : float;
var timer1 : float;

var speed = 0.5;
var target : Vector3;

var mouseXY  : Vector2;

var mouse1:GameObject;

var follow : boolean;

var rand : int;

var player : GameObject;
function Update ()
{

  // Screen.showCursor = false;

    if( !follow )
    {
    	transform.position = Vector3(Input.mousePosition.x/Screen.width,Input.mousePosition.y/Screen.height,0);
    }

   if( Input.GetMouseButtonDown(0))
   {
    this.transform.position.y -= 0.3;
    rand = Random.Range(0,2);
    print(rand );
   }
   
   if( Input.GetMouseButton(0))
   {
      follow  = true;
		mouse();
   }
   else{
         follow  = false;
		timer = 0;
   }

  if(  Input.GetMouseButtonUp(0))
  {
     player.SendMessage("triggerFire");
  }
 // 
 
 
  if( follow )
  {
   autoMovement();
  
  }
 
 
}

function autoMovement()
{
   // timer += Time.deltaTime;



  

//	 if( rand == 0 )
//	 {
//	    this.transform.position.y += 0.3 * Time.deltaTime;
//	    if( timer < 0.5)
//	    this.transform.position.x -= 0.1 * Time.deltaTime;
//	    if( timer > 0.5 && timer < 1.5)
//	    this.transform.position.x += 0.1 * Time.deltaTime;
//	 	if( timer > 1.5 && timer < 2)
//	    this.transform.position.x -= 0.1 * Time.deltaTime;
//	    if( timer > 2 && timer < 3)
//	    timer = 0;
//	 }
//	 else{
//	    this.transform.position.y += 0.3 * Time.deltaTime;
//	    if( timer < 0.5)
//	    this.transform.position.x += 0.1 * Time.deltaTime;
//	    if( timer > 0.5 && timer < 1.5)
//	    this.transform.position.x -= 0.1 * Time.deltaTime;
//	 	if( timer > 1.5 && timer < 2)
//	    this.transform.position.x += 0.1 * Time.deltaTime;
//	    if( timer > 2 && timer < 3)
//	    timer = 0;
//	 
//	 }
}

function mouse()
{
   // 	var newPosition = Random.insideUnitCircle * 1;


		//dar.transform.position.x += newPosition.x * Time.deltaTime;



   timer1 += Time.deltaTime;
   
   if( timer1 < 3)
   {
    // this.transform.position.x = Input.mousePosition.x/Screen.width  * Time.deltaTime * timer1;

   }
    if( timer1 > 3 && timer1 < 6)
   {
       // this.transform.position.x += Input.mousePosition.x/Screen.width;// -0.1 * Time.deltaTime;

   }
  if( timer1 > 6 )
  {
  timer1 = 0;
  }
  



}