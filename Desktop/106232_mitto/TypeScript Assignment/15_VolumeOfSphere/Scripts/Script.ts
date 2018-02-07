function calculateSphereVolume()
{
    let r:number=Number((document.getElementById("txtRadius") as HTMLInputElement).value);
    let p:number=Math.PI;
    let volume=((4/3)*p*(r*r*r)).toFixed(4);

   
    (document.getElementById("txtVolume") as HTMLInputElement).value=volume.toString();

}