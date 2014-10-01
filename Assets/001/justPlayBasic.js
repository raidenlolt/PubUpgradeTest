#pragma strict

var triggerIdle : boolean;

var renderer1 : Renderer;
var player: GameObject;
function Start () {

	renderer1.enabled = false;
}

function Update () {
 
 
  if( Input.GetKeyDown(KeyCode.X))
  {
    

  }
  if( triggerIdle == true )
  {
   animation.CrossFadeQueued("drinkidle3",2);
  
  }
if( Input.GetKeyDown(KeyCode.Y))
  {
    animation.CrossFadeQueued("drink123");
    
  }  
  if( Input.GetKeyDown(KeyCode.Z))
  {
    animation.CrossFadeQueued("drinkpick2");
    renderer1.gameObject.SetActive(true);
  }  
  
    if( Input.GetKeyDown(KeyCode.CapsLock))
  {
  
//      animation.Stop();
//    	animation.Play("drinkpick2");
//    	animation["drinkpick2"].speed = -1;

   // renderer1.gameObject.SetActive(true);
  }  
  

   
 anims();
 
  if( AItrigger )
  {
 	actions();
   }
}


function anims()
{

  if( Input.GetKeyDown(KeyCode.CapsLock))
 {      
   		triggerIdle = false;
   		AItrigger = false;
  	    animation["drinkdrop"].layer = 20;
 	    animation.CrossFadeQueued("drinkdrop",2);
 	      	    //animation.Stop("drinkidle3");
        yield WaitForSeconds( animation["drinkdrop"].length/2 );

			animation.Stop("drinkidle3");


        yield WaitForSeconds( animation["drinkdrop"].length );
        renderer1.gameObject.SetActive(false); 
 }


}



var animCount: int;
var animationTimer : float;
var AItrigger : boolean;
function actions()
{

   animationTimer += Time.deltaTime;
   
   if( animationTimer > 1 && animCount == 0 )
   {
      	renderer1.enabled = true;

	    animation.CrossFadeQueued("drinkpick2");
	    triggerIdle = true;
	    
	    animCount+=1;
	    animationTimer = 0;
   }
  if( animCount > 0 && animationTimer > 4 && animCount < 3)
  {
     animCount+=1;
     drink();
     animationTimer = 0;
  }

}

function drink()
{
    animation["drink3"].layer = 10;
    animation.CrossFadeQueued("drink3",2);

}


function triggerPlayerAI()
{
  AItrigger = true;
//  Debug.Break();

 }