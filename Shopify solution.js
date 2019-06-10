var hold = "";
var curr = 0;
var num = 0;
var arr = [];
$('input[type=search]').on("input", function () {
	if (document.getElementById("title").value.length == 0)
    $("#list").html("");
	hold = "";
});

function search() {
$(document).ready(function() {
$("#list").html("");
var input = document.getElementById("title").value;
 $.ajax({
				
				url: "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000",
                dataType: 'jsonp',
				success: function(send){	
				 
				 for (var i = 0; i < send.length; i++) {
				 var x = send[i].keywords.split(",");
				 for (var j = 0; j < x.length; j++) {
				     if (x[j].includes(input)  || send[i].title.includes(input))
					 {
					  var a = send[i].body;					  
					  if (send[i].title != curr && input !== ""){
					  hold += "<button onclick = add(" + num + ")><img src=http://www.clker.com/cliparts/2/4/T/f/0/4/star-grey-hi.png height=20 id =" 
					  + num + "></button>" 
					  + " " + send[i].title + htmlDecode(a);
					  arr[num] = send[i].title + htmlDecode(a);
					  num++;
					  }
					  curr = send[i].title;
					 }
				 }				 
				 }
					
				    document.getElementById("list").innerHTML = hold;
					function htmlDecode(a) {
					 var doc = new DOMParser().parseFromString(a, "text/html");
					 return doc.documentElement.textContent;
					}
				}				
				});

});
}
function add(i) {
	 document.getElementById(i).src = "http://www.clker.com/cliparts/X/P/3/N/F/z/star-green-hi.png";
	 document.getElementById("fav").innerHTML +=
	 "<div id=val" + i +">" + "<button onclick = remove(" + i + ") id = num" + 
	 i + "><img src=http://www.clker.com/cliparts/X/P/3/N/F/z/star-green-hi.png height=20></button>" 
	 + " " + arr[i] + "</div>";
				}
function remove(x) {
	 document.getElementById("val"+x).innerHTML = "";
	 document.getElementById(x).src = "http://www.clker.com/cliparts/2/4/T/f/0/4/star-grey-hi.png";
}
