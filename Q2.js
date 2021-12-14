function func(){
    document.getElementById("ins").style.display="table";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://reqres.in/api/users", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function fn() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var myData= myObj.data;
        var x="";
        for(var i=0; i<myData.length; i++){
            x=x+"<tr>"+"<td>"+ myData[i].id +"</td>"+"<td>"+ '<img src="'+myData[i].avatar+'">' +"</td>"+"<td>"+ myData[i].email +"</td>"+"<td>"+ myData[i].first_name +"</td>"+"<td>"+ myData[i].last_name +"</td>"+"</tr>";
        }
        document.getElementById("ins").innerHTML+=x;
      }
    };
}

