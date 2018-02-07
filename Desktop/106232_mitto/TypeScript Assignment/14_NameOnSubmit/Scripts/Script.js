function getFormvalue() {
    let fname = document.getElementsByName("fname")[0].value;
    let lname = document.getElementsByName("lname")[0].value;
    document.write("Name Entered by you <br>");
    document.write("First Name : " + fname + "<br>");
    document.write("Last Name : " + lname + "<br>");
}
