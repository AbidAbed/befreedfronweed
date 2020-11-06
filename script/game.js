function check()
{
  var grade=0;
  if(document.getElementById("Q1A1").checked)
  {
++grade;
alert("#### Question Number 1 Is Correct!! ####");
  }
  if(document.getElementById("Q2A2").checked)
  {
++grade;
alert("#### Question Number 2 Is Correct!! ####");
  }
   if(document.getElementById("Q3A3").checked)
  {
++grade;
alert("#### Question Number 3 Is Correct!! ####");
  }
   if(document.getElementById("Q4A2").checked)
  {
++grade;
alert("#### Question Number 4 Is Correct!! ####");
  }
   if(document.getElementById("Q5A2").checked)
  {
++grade;
alert("####Question Number 5 Is Correct!!#### ");
  }
 
alert("#### Your Grade Is : "+grade+" ####");
}