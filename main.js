
var scene;
var camera;
var renderer;

var cube;


var init = function () {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    this.criarCubo();

    camera.position.z = 5;

    this.render();

};

var render = function () {
    requestAnimationFrame(render);

    this.animarCubo();

    renderer.render(scene, camera);
};

var criarCubo = function () {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
};

var animarCubo = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};

//controle de camera
window.onkeydown = function(e){
    keydown[e.key]=true
}

window.onkeyup = function(e){
    keydown[e.key]=false
}

var animate = function(){
    resquestAnimationFrame(animate);
    if(keydown["ArrowUp"])camera.position.z -= 0.1;
    if(keydown["ArrowDown"])camera.position.z -= 0.1;
    if(keydown["ArrowRigth"])camera.position.x -= 0.1;
    if(keydown["ArrowLeft"])camera.position.x -= 0.1;
}
window.onload = this.init;
