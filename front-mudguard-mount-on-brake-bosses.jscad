// title      : Front mudguard mount on brake-bosses.
// author     : Ruslan Ibragimov
// license    : GPLv3
// revision   : 0.001
// tags       : Mudguard,Brakeboss
// file       : front-mudguard-mount-on-brake-bosses.jscad

function main () {
  return [
    brakeBoss(-50, -50, 0),
    brakeBoss(50, 50, 0),
    translate([47, 40, 0], rotate([90, 0, 30], cube([6, 30, 50])))
  ];
}

var config = {
    quality: 128
};

function brakeBoss(x, y, z) {
  var height = 30;    
    
  var v1 = difference(
    cylinder({r: 12, h: height, fn: config.quality}),
    cylinder({r:  8, h: height, fn: config.quality})
  );
  
  return translate([x, y, z], difference(
    v1,
    cylinder({r: 10, h:  2})
  ));
}
