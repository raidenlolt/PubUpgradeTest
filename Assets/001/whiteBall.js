#pragma strict


var lineRend : LineRenderer;
var cueStick : GameObject;


var cycle : boolean;
var cycle2 : boolean;

var fire1 : boolean;
var fireOnce : boolean;
var startTimer : boolean;
var shootTimer : float;


var speedText:GUIText;

var pointer : GameObject;
var pointerSpeed1 : boolean;
var pointerSpeed2 : boolean;
var pointerTrigger : boolean;
function Start () {

// this.transform.rigidbody.AddForce(Vector3.forward,ForceMode.Impulse);

			Screen.lockCursor = true;

}

function Update () {

 if( this.gameObject.rigidbody.velocity.magnitude > 0.2)
 {
	 cueStick.SetActive(false);
	 lineRend.enabled = false;
 }
 else{
	 cueStick.SetActive(true);
	 lineRend.enabled = true;

 }
 
			Screen.lockCursor = true;



  if( this.gameObject.rigidbody.velocity.magnitude < 0.2 )
  {
  this.gameObject.rigidbody.velocity = Vector3.zero;
  
  }
  
  if(( Input.GetMouseButtonDown(0)) &&  this.gameObject.rigidbody.velocity.magnitude < 0.1 )
    {
	  if( !startTimer )
	  {
	   startTimer  = true;
	   pointerTrigger = true;
	   return;
      }
	 	if( startTimer )
	    {
	    	  cycle = true;
		   fireOnce = false;

	    }
    }
 
    
     if( startTimer && !cycle&& !cycle2 )
     {
         shootTimer += Time.deltaTime;

//      if( shootTimer < 3 )
//      {
//      }
//       if( shootTimer > 3)
//      {
//      shootTimer -= Time.deltaTime;
//      }
     
       if( shootTimer >3 )
       {
        shootTimer = 0;
       }
       speedText.text = shootTimer.ToString();
     
     }
     
    
    if( pointerTrigger)
     {
      triggerSpeed();
     
     }
    if( pointerSpeed1 )
    {
          triggerSpeed2();

    }
    
    
    
    
    
    
    
    
    if( cycle )
    {
      triggerShoot();
    }
    if( cycle2 )
    {
      triggerShoot1();
       // yield WaitForSeconds(1);
    }
    if( fire1 )
    {
   //  fire();
     fire1 = false;
    }
    
}


function triggerSpeed()
{
		pointer.transform.position.y += 0.3 * Time.deltaTime;
      yield WaitForSeconds(1);
     pointerSpeed1 = true;
	pointerTrigger = false;	
}
function triggerSpeed2()
{
		pointer.transform.position.y -= 0.3 * Time.deltaTime;
      yield WaitForSeconds(1);
	pointerTrigger = true;
	pointerSpeed1 = false;
}

function triggerShoot()
{

      cueStick.transform.Translate(Vector3.forward * -0.5 * Time.deltaTime);
      yield WaitForSeconds(0.3);
        cycle = false;
        cycle2 = true;
}
function triggerShoot1()
{
	if( cycle2 )
	{
	pointer.transform.position.y -= 0.2 * Time.deltaTime;

	    cueStick.transform.Translate(Vector3.forward * 0.5 * Time.deltaTime);
	      yield WaitForSeconds(0.3);
          cycle2 = false;
          fire();
	}
}

function fire()
{
    if( !fireOnce )
    {
		this.transform.rigidbody.AddForce(cueStick.transform.forward * shootTimer * 9,ForceMode.Impulse);
		print(cueStick.transform.forward * shootTimer * 10);
		fireOnce = true;
		shootTimer = 0;
		startTimer = false;
		
    }
}