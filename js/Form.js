

class Form {

  constructor() {
    this.jew=createElement('h4');
    this.button=createButton("PRESS1");

    this.oil=createElement('h4');
    this.button1=createButton("PRESS");

    
    this.re=createButton("RELOAD");

    this.title = createElement('h2');
    
  }
 hide(){
   this.jew.hide();
   this.oil.hide();
   this.button.hide();
   this.button1.hide();
 }
  display(){
    
    
    
    this.re.position(1000,0);
    this.title.html("Commodity Trading");
    this.title.position(window.innerWidth/2 - 50, 50);
    this.jew.html("Jewellery Rate");
    this.jew.position(windowWidth/2-50,windowHeight/2+50);
    this.button.position(windowWidth/2-50,windowHeight/2+50);
    this.oil.position(500,500);
    this.button1.position(400,550);
    
   
   
    
    this.re.mousePressed(()=>{
      location.reload();
    });

    this.button.mousePressed(()=>{
    this.jew.hide();
   this.oil.hide();
   this.button.hide();
   this.button1.hide();
      jew1=new Jewellery();
    });

    this.button1.mousePressed(()=>{
      this.jew.hide();
   this.oil.hide();
   this.button.hide();
   this.button1.hide();
      oil1=new Oil();
    });

  }
}
