// Decompiled with JetBrains decompiler
// Type: aiCup
// Assembly: Assembly-UnityScript, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: A72BB521-944F-4FD0-ADA0-07632BEDCF78
// Assembly location: E:\Windows User Content\Desktop\WinBuild\ProjectPub-18-sep-2013_Data\Managed\Assembly-UnityScript.dll


using System;
using System.Collections;
using UnityEngine;

[Serializable]
public class aiCup : MonoBehaviour
{
  public bool triggerOnce;

  public virtual void Start()
  {
  }

  public virtual void Update()
  {
//    this.StartCoroutine_Auto(this.manager());
  }

 /* public virtual IEnumerator manager()
  {
    // ISSUE: object of a compiler-generated type is created
    // ISSUE: reference to a compiler-generated method
    return (IEnumerator) new aiCup.\u0024manager\u002450(this).GetEnumerator();
  }
	 */
	
  public virtual void OnTriggerEnter(Collider other)
  {
    if (other.collider.gameObject.tag == "stand" && this.triggerOnce)
    {
      this.gameObject.transform.parent = (Transform) null;
      this.gameObject.transform.eulerAngles = new Vector3(0.0f, 0.0f, 0.0f);
    }
    MonoBehaviour.print((object) "111111111111");
  }

  public virtual void OnTriggerStay(Collider other)
  {
  }

  public virtual void OnTriggerExit(Collider other)
  {
    if (other.gameObject.name == "AIcupstand")
    {
      this.triggerOnce = true;
      Debug.Break();
    }
    MonoBehaviour.print((object) other.gameObject.name);
    MonoBehaviour.print((object) "222222222222");
  }

  public virtual void Main()
  {
  }
}
