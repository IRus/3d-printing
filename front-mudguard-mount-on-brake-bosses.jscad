// Work in Progress!!!
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
  var height = 22;

  var innerHeight = 5;
  var innerRadius = 10.5;

  var outer = difference(
    cylinder({r: 12, h: height, fn: config.quality}),
    cylinder({r:  8.5, h: height, fn: config.quality})
  );
  
  var withInner = difference(
      outer,
      cylinder({r: innerRadius, h: innerHeight, fn: config.quality})
  );

  return translate([x, y, z], difference(
    withInner,
    cylinder({r: 10, h:  2})
  ));
}
