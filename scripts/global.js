(function() {
    var Q = function(id) {
        return document.getElementById(id);
    };
    var oBox = Q("transImageBox"), 
        oTrigger = Q("transImageTrigger").getElementsByTagName("a"), 
        lTrigger = oTrigger.length;
        
    if (oBox && lTrigger) {
        for (var i = 0; i<lTrigger; i+=1) {
            oTrigger[i].onclick = function() {
                var index = Number(this.href.replace(/.*#/g, "")) || 1;	
                oBox.style.marginLeft = (1 - index) * 200 + "px";
                return false;
            };	
        }
    }
})();

(function() {
    $(function(){
         $(".mask").mouseover(function(){
            var b=0,c=$(this),
            d=setInterval(function(){
                if(b>parseInt(c.width()+50)){clearInterval(d);}
                c.css({"-webkit-mask":"-webkit-gradient(radial, 100 100,"+b+", 100 100, "+(b+30)+", from(rgba(255, 255, 255,1)), color-stop(0.5,rgba(255, 255, 255, 0.2)), to(rgba(255, 255, 255,1)))"});
                b++;
           },0);
         });
    })
})();


console.log('' == '0'); //false
console.log(0 == '');//true;
console.log(0 == '0');//true
console.log(' \t\r\n '==0);//true
console.log([] == ![]);//true
var a = 0, b = {} ,c = [];
console.log(a==b);
if (b) {
    console.log('b');
}
if (c) {
    console.log('c');
}

var d = new Date();
d.setHours(08,35);
console.log(d);
console.log(d instanceof Date);

var a = new Date();
a.setHours(07,01);
console.log(a);
console.log(a instanceof Date);
