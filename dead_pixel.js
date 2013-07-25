function deadPixel(size) {
  if (!size) { size=1 }
  var colors = ["#F00","#0F0","#00F","#000"];
  var p = document.createElement('div');
  p.style.position = "fixed";
  p.style.zIndex = "2147483647";
  p.style.top = Math.random()*100+"%";
  p.style.left = Math.random()*100+"%";
  p.style.backgroundColor = colors[new Date().valueOf()%3]
  p.className = "deadPixel";
  p.style.width = size+"px";
  p.style.height = size+"px";
  document.body.appendChild(p);
}