$(document).ready(function()
{
  $.get("nav.html", function(html_string)
   {
      document.getElementById("navPanel").insertAdjacentHTML("afterbegin", html_string);
      document.getElementById("nav").innerHTML = html_string;
   },'html');
});