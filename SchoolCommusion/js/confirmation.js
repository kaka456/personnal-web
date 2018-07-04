var btn = document.getElementById('btn');
var user = document.getElementById('user');
var paw = document.getElementById('eml');
var age = document.getElementById('pho');
var p = document.getElementsByTagName('p');
for(var i = 0; i < p.length; i++) {
	p[i].style.display = 'none';
}
btn.onclick = function() {

	if(user.value == '') {
		p[0].style.display = 'block';
	} else {
		p[0].style.display = 'none';
	}
	if(eml.value == '') {
		p[1].style.display = 'block';
	} else {
		p[1].style.display = 'none';
	}
	if(pho.value == '') {
		p[2].style.display = 'block';
	} else {
		p[2].style.display = 'none';
		
	}
	if(user.value!=''&&eml.value!=''&&pho.value!='')
	   window.location.href="student.html";
	
}