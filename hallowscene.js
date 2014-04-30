/*
 * Hallowscene - A Halloween-themed scene kit for Isomer
 * author: Bremen Braun
 */
function Hallowscene(iso) {
  this.iso = iso;
}
Hallowscene.prototype = {
  colors: {
    green: new Isomer.Color(0, 126, 9),
    orange: new Isomer.Color(255, 132, 0),
    brown: new Isomer.Color(71, 51, 7),
    grey: new Isomer.Color(136, 136, 136),
    yellow: new Isomer.Color(255, 255, 2),
    white: new Isomer.Color(255, 255, 255)
  },
  
  // Spooky elements
  addMoon: function(x, y, r) {
    var ctx = this.iso.canvas.ctx,
        drawCrater = function(x, y, r) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'grey';
          ctx.fill();
        };
    
    // moon body
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    
    // add craters
    //drawCrater(x+r/4, y+r/4, r/4);
  },
  addPumpkin: function(x, y, z) {
    var iso = this.iso;
    
    var body = Isomer.Shape.Prism(Isomer.Point(x, y, z)),
        stem = Isomer.Shape.Prism(Isomer.Point(x, y, z+1)).scale(Isomer.Point(x+.5, y+.5, z+1), 0.2, 0.2, 0.2);
        
    iso.add(body, this.colors.orange); // body
    iso.add(stem, this.colors.green); // stem
  },
  addJackolantern: function(x, y, z, isLit) {
    isLit = typeof isLit === 'undefined' ? false : isLit;
    
    this.addPumpkin(x, y, z);
    
    /*
    var leftEye,
        rightEye,
        nose,
        mouth;
    
    var color = isLit ? this.colors.yellow : this.colors.black;
    [leftEye, rightEye, nose, mouth].forEach(function(shape) {
      iso.add(shape, color);
    });
    */
  },
  addTombstone: function(x, y, z) {
    var iso = this.iso;
    
    var tombstone = Isomer.Shape.Prism(Isomer.Point(x, y, z)).scale(Isomer.Point(x, y, z), 0.2, 1, 1.8);
    iso.add(tombstone, this.colors.grey);
  },
  addDirtPatch: function(points) {
    var iso = this.iso;
    
    var isopoints = [];
    points.forEach(function(point) {
      isopoints.push(new Isomer.Point(point[0], point[1], point[2]));
    });
    
    iso.add(new Isomer.Path(isopoints), this.colors.brown);
  },
  addFence: function(x, y, z) {
  
  },
  addTree: function(x, y, z) {
  
  },
  addZombie: function(x, y, z) {
  
  }
};

