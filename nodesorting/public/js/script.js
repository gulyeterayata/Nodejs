const size = document.getElementById("size-button");
size.onclick = function(){
    document.getElementById("sizeguide-popup").style.display="block";
}

const close = document.getElementById('span-x');
close.onclick = function(){
    document.getElementById("sizeguide-popup").style.display='none';
}

