var arr=[3,8,7,6,5,-1,2];
document.getElementById("lblGivenArray").innerHTML=arr.toString();

function addToArray()
{
    let val:number=Number((document.getElementById("txtInput") as HTMLInputElement).value);
    arr.push(val);
    document.getElementById("lblGivenArray").innerHTML=arr.toString();
    (document.getElementById("txtInput") as HTMLInputElement).value="";

}

function sortingArray()
{    
    var a =arr;
   
    for(let i=0;i<a.length-1;i++)
    {
        for(let j=0;j<a.length-1;j++)
        {
            if(a[j]>a[j+1])
            {

              let temp=a[j+1];
              a[j+1]=arr[j];
              a[j]=temp;
            }
        }
        document.getElementById("lblSortedArray").innerHTML=a.toString();
    }
}