function go() {
    window.location = 'page.html';
}


function go1()
{
    window.location ='page1.html';
}

function go2()
{
    window.location ='page2.html';
}


function go3()
{
    window.location ='page3.html';
}

var x=0;
var shoe= function(des,url,name,price,price1)
{
    this.des=des;
    this.url=url;
    this.name=name;
    this.price=price;
    this.price1=price1;
}

var shoes=[
    
           new shoe("Black formal (sm-291) laced up shoes","res/prod/formal1.jpg","BLACK FORMAL","₹999","₹1999"),

           new shoe("Shoe mate sm-283 laced up shoe","res/prod/formal2.jpg","SHOE MATE","₹1099","₹1999"),
    
           new shoe("Wonker GAN-13 slip on Shoe","res/prod/formal3.jpg","WONKER","₹719","₹2999"),
    
           new shoe("Karrasa high ankle laced up shoe","res/prod/formal4.jpg","KARRASA","₹779","₹1999"),
           
          ];


function set(x)
{
     document.getElementById('des').innerHTML=shoes[x].des;
    document.getElementById('url').src=shoes[x].url;
    document.getElementById('name').innerHTML=shoes[x].name;
    document.getElementById('price').innerHTML=shoes[x].price;
    document.getElementById('price1').innerHTML=shoes[x].price1;
    
    }



function back()
{  
    if(x)x--;
    else return;
    
    set(x);
}

function forward()
{
    if(x===4)return;
    x++;
    
    set(x);
    
}

