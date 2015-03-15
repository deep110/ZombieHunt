using UnityEngine;
using System.Collections;
using System.Collections.Generic;


public class MapView : MonoBehaviour {

	public Texture2D texture;
	public Texture2D texture2;
	public Texture2D texture3;

	List<Vector3> list = new List<Vector3>();
	Vector3 playerpos;
	// Use this for initialization
	void Start () {
		GameObject[] enemies;
		enemies = GameObject.FindGameObjectsWithTag("Respawn");
		//Debug.Log ("hello bc");
		
		foreach (GameObject enemy in enemies)
		{
			if(enemy != null)
			{
				list.Add(enemy.transform.position);
				
			}
		}
	}
	
	// Update is called once per frame
	void Update () {

		GameObject[] player = GameObject.FindGameObjectsWithTag ("Player");
		playerpos = player[0].transform.position;

	}
	void OnGUI()
	{
		var left = 0;
		var top = 65*Screen.height/100;
		var MapWidth = Screen.width / 4;
		GUI.DrawTexture (new Rect (left, top, MapWidth, Screen.height), texture, ScaleMode.ScaleAndCrop, true, 1);
		GUI.DrawTexture (new Rect (((playerpos.z-243)*MapWidth)/1177, (top+((playerpos.x-1090)*MapWidth)/480), 2, 2), texture3);
		foreach (Vector3 location in list)
		{
			if(location != null)
			{//Debug.Log("drawTexturecalled");
				GUI.DrawTexture (new Rect (((location.z-243)*MapWidth)/1177, (top+((location.x-1090)*MapWidth)/480), 2, 2), texture2);

			}
		}
		
	}
}
