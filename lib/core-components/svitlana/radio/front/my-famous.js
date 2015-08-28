var DOMElement = FamousFramework.FamousEngine.domRenderables.DOMElement;
var Mesh = FamousFramework.FamousEngine.webglRenderables.Mesh;
var Material = FamousFramework.FamousEngine.webglMaterials.Material;


FamousFramework.attach('.sphere1', function(renderNode) {
	var mesh = new Mesh(renderNode);

	mesh.setGeometry('Sphere', { detail: 100 });

	mesh.setBaseColor(Material.image([], {
		texture: 'https://i.imgur.com/xn7lVCw.jpg'
	}));



});
