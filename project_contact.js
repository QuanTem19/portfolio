let selectHome = document.getElementById(home)
let selectAbout = document.getElementById(about)
let selectWhatIdo = document.getElementById(whatIdo)
let selectResume = document.getElementById(resume)
let selectContact = document.getElementById(contact)

selectHome.addEventListener("click",first)
function first(){
  window.location.href = "http://127.0.0.1:5500/portfolio/index.html"
}
selectAbout.addEventListener("click",second)
 function second(){
   window.location.href = "http://127.0.0.1:5500/portfolio/project_about.html"
 }
 
selectWhatIdo.addEventListener("click",third)
 function third(){
  window.location.href = "http://127.0.0.1:5500/portfolio/project_whatIdo.html"
 }
 selectResume.addEventListener("click", fourth)
 function fourth(){
  window.location.href = ""
 }
selectContact.addEventListener("click",fifth)
 function fifth(){
  window.location.href = "http://127.0.0.1:5500/portfolio/project_contact.html"
 }