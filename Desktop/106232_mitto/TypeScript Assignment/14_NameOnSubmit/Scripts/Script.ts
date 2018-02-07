function getFormvalue()
{
    let fname:string=(document.getElementsByName("fname")[0] as HTMLInputElement).value;
    let lname:string=(document.getElementsByName("lname")[0] as HTMLInputElement).value;

   
    document.write("Name Entered by you <br>");
    document.write("First Name : "+fname+"<br>");
    document.write("Last Name : "+lname+"<br>");

}