var hallowscene = new Isomer(document.getElementById("hallowscene"));
hallowscene.colors = {
  green: new Isomer.Color(0, 126, 9),
  orange: new Isomer.Color(255, 132, 0),
  brown: new Isomer.Color(71, 51, 7),
  grey: new Isomer.Color(136, 136, 136)
};
hallowscene.addPumpkin = function(x, y, z) {
  var iso = this;
  
  iso.add(Isomer.Shape.Prism(Isomer.Point(x, y, z)), iso.colors.orange); // body
  iso.add(Isomer.Shape.Prism(Isomer.Point(x, y, z+1)).scale(Isomer.Point(x + .5, y + .5, z+1), 0.2, 0.2, 0.2), iso.colors.green); // stem
};
hallowscene.addTombstone = function(x, y, z) {
  var iso = this;
  
  var tombstone = Isomer.Shape.Prism(Isomer.Point(x, y, z)).scale(Isomer.Point(x, y, z), 0.2, 1, 1.8);
  iso.add(tombstone, iso.colors.grey);
};
hallowscene.addDirtPatch = function(points) {
  var isopoints = [];
  points.forEach(function(point) {
    isopoints.push(new Isomer.Point(point[0], point[1], point[2]));
  });
  
  this.add(new Isomer.Path(isopoints), this.colors.brown);
};

hallowscene.add(Isomer.Shape.Prism(Isomer.Point.ORIGIN, 8, 8, 1), hallowscene.colors.green); // platform

// Graveyard
hallowscene.addTombstone(1, 8, 0);
hallowscene.addTombstone(3, 8, 0);
hallowscene.addTombstone(5, 8, 0);
hallowscene.addTombstone(7, 8, 0);
hallowscene.addTombstone(1, 6, 0);
hallowscene.addTombstone(3, 6, 0);
hallowscene.addTombstone(5, 6, 0);
hallowscene.addTombstone(7, 6, 0);
hallowscene.addTombstone(1, 4, 0);
hallowscene.addTombstone(3, 4, 0);
hallowscene.addTombstone(5, 4, 0);
hallowscene.addTombstone(7, 4, 0);

// Pumpkin patch
hallowscene.addPumpkin(8, 1, 0);
hallowscene.addPumpkin(8, 3, 0);
hallowscene.addPumpkin(7, 2.2, 0);
hallowscene.addPumpkin(6, 1, 0);

