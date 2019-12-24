// title      : Thermometer holder
// author     : Ruslan Ibragimov
// license    : GPLv3
// revision   : 0.001
// tags       : Thermometer,Holder
// file       : thermometer-holder.jscad

// all in mm

var quality = 128;

var base = {
    radius: 50,
    thickness: 4
};

var holder = getHolderParams();

function getHolderParams() {
    var build = {
        height: 55,
        thickness: 2,
        innerRadius: 9
    };

    build.outerRadius = build.innerRadius + build.thickness;
    build.palletRadius = build.innerRadius - 1;
    build.palletHeight = build.thickness + 2;

    return build;
}

function main() {
    return union(
        union(buildHolder(), addCone()),
        buildBase()
    );
}

function addCone() {
    return difference(
        cylinder({
            start: [0, 0, base.thickness],
            end: [0, 0, holder.height + base.thickness - 30],
            r1: base.radius - 30,
            r2: holder.outerRadius,
            fn: quality
        }),
        translate([0, 0, base.thickness], cylinder({r: holder.outerRadius, h: holder.height, fn: quality}))
    )
}

function buildHolder() {
    var figure = union(
        union(
            difference(
                cylinder({r: holder.outerRadius, h: holder.height, fn: quality}),
                cylinder({r: holder.innerRadius, h: holder.height, fn: quality})
            ),
            cylinder({r: holder.outerRadius, h: holder.thickness, fn: quality})
        ),
        difference(
            cylinder({r: holder.outerRadius, h: holder.palletHeight, fn: quality}),
            cylinder({r: holder.palletRadius, h: holder.palletHeight, fn: quality})
        )
    );

    return translate([0, 0, base.thickness], figure);
}

function buildBase() {
    var figure = cylinder({r: base.radius, h: base.thickness, fn: quality});

    var holeSize = 4;
    var hole = cylinder({r: holeSize, h: base.thickness, fn: quality});

    var holeRadius = ((base.radius - holder.outerRadius) / 2) + 4;

    figure = difference(
        figure,
        translate([holeRadius, holeRadius, 0], hole)
    );

    figure = difference(
        figure,
        translate([-holeRadius, -holeRadius, 0], hole)
    );

    return translate([0, 0, 0], figure);
}

