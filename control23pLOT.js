const scene = new THREE.Scene(); //Creating an abject scene
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
); // Creacting an object camera

const renderer = new THREE.WebGLRender();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({color:0x0000ff})

const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(10,0,10));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry,material);
scene.add(line);

camera.position.z = 20;

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

