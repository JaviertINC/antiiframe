var a, b;
a = window.location.href;
b = a.indexOf("token=");
if(b==-1) {
  if (top.location != self.location) { top.location = self.location; } 
}
