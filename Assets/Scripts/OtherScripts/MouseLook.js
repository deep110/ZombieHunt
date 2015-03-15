var sensibility : float;
function Start () {
 
}
 
function Update () {
        transform.Rotate(Vector3(0,Input.GetAxis("Mouse X")*sensibility,0), Space.World);
        transform.Rotate(Vector3(-Input.GetAxis("Mouse Y")*sensibility,0,0));
 
}