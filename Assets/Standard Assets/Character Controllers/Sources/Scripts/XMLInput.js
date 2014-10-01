import System.Xml;
//#pragma strict
	public var asset:TextAsset;
	public var xmlDoc:System.Xml.XmlDocument = new XmlDocument();
public function Start () {

}

public function Update () {
xmlDoc.LoadXml(asset.text);
}
 var levelinfo:System.Xml.XmlNode; 	
   static var drunklevel:System.Xml.XmlNodeList;
   static var level:System.Xml.XmlNodeList;
   static var subLevel:System.Xml.XmlNodeList;
   static var countthree: System.Xml.XmlNodeList;
static var counttwo: System.Xml.XmlNodeList;
static var countone: System.Xml.XmlNodeList;
  var count:int;
  var show:boolean;
  var temp:System.String;
   var playerDialogueList: System.String[];
show=false;
playerDialogueList=new String[6];
function XmlRead()
{	

     xmlDoc.LoadXml(asset.text);
	 
	drunklevel = xmlDoc.GetElementsByTagName("DrunkLevel"); // array of the level nodes.
	
	for(var i:int=0;i<drunklevel.Count;i++)
	{
		//print(drunklevel.Count.ToString());
		level=drunklevel[i].ChildNodes;
		//print(level.Count);
		for(var j:int=0;j<level.Count;j++)
		{
		subLevel=level[j].ChildNodes;
		//print(subLevel.Count);
		
		countone=subLevel[0].ChildNodes;
counttwo=subLevel[1].ChildNodes;
countthree=subLevel[2].ChildNodes;
						//print(actorlist.Count);
		}
		}
	}
	
function ExtractString(drunklevel,count)
	{
	
	print("String Extraction"+drunklevel+""+count);
	subLevel=level[drunklevel].ChildNodes;
		print(count);
		
		countone=subLevel[0].ChildNodes;
counttwo=subLevel[1].ChildNodes;
countthree=subLevel[2].ChildNodes;
		playerDialogueList[0]=countone[0].ChildNodes[0].Value.ToString();
		playerDialogueList[1]=countone[1].ChildNodes[0].Value.ToString();
		playerDialogueList[2]=counttwo[0].ChildNodes[0].Value.ToString();
		playerDialogueList[3]=counttwo[1].ChildNodes[0].Value.ToString();
		playerDialogueList[4]=countthree[0].ChildNodes[0].Value.ToString();
		playerDialogueList[5]=countthree[1].ChildNodes[0].Value.ToString();
		

		
	
		//print(dialogues.ToString());
		//print(playerDialogueList[count]);
		//print(aiDialogueList[count]);
if(count<6)
			{	temp=playerDialogueList[count];}
			else
			{
			show=false;
			temp="";
			}
	//GUI.TextArea(new UnityEngine.Rect(20,0,900,100),playerDialogueList[count]);
		//return playerDialogueList[count];
	}
	
function OnGUI()
{
		if(count<6 && show==true){GUI.Box (Rect (100, Screen.height-100, 900, 100),temp);}

}		
