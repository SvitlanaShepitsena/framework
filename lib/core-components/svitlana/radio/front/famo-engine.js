'use strict'
var DOMElement = FamousFramework.FamousEngine.domRenderables.DOMElement;
var Mesh = FamousFramework.FamousEngine.webglRenderables.Mesh;
var Material = FamousFramework.FamousEngine.webglMaterials.Material;


FamousFramework.attach('#sphere', function(renderNode) {
	var mesh = new Mesh(renderNode);

	mesh.setGeometry('Sphere', { detail: 100 });

	mesh.setBaseColor(Material.image([], {
		texture: 'https://s3-us-west-2.amazonaws.com/svet.com/radio/radio-logo-dark.png'
	}));



});

