import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

const textureLoader = new THREE.TextureLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); // Create a renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enablePan = false; // Menonaktifkan fitur drag
controls.minDistance = 15; // Jarak minimum yang dapat di-zoom
controls.maxDistance = 100; // Jarak maksimum yang dapat di-zoom


camera.position.set(20, 40, 340);

//sphere 
const sphereGeometry1 = new THREE.SphereGeometry(5, 32, 32);
const sphereGeometry2 = new THREE.SphereGeometry(12, 32, 32);
const sphereGeometry3 = new THREE.SphereGeometry(9, 32, 32);
const sphereGeometry4 = new THREE.SphereGeometry(7, 32, 32);
const sphereGeometry5 = new THREE.SphereGeometry(3, 32, 32);
const sphereGeometry6 = new THREE.SphereGeometry(300, 300, 300);


///sphere1
const texture1 = textureLoader.load('blue.png');
const sphereMaterial1 = new THREE.MeshBasicMaterial({ map: texture1 });
const sphere1 = new THREE.Mesh(sphereGeometry2, sphereMaterial1);
scene.add(sphere1);

//sphere2
const texture2 = textureLoader.load('pinkerton.jpeg');
const sphereMaterial2 = new THREE.MeshBasicMaterial({ map: texture2 });
const sphere2 = new THREE.Mesh(sphereGeometry5, sphereMaterial2);
sphere2.position.set(25, 0, 0);
scene.add(sphere2);

//sphere3
const texture3 = textureLoader.load('green.png');
const sphereMaterial3 = new THREE.MeshBasicMaterial({ map: texture3 });
const sphere3 = new THREE.Mesh(sphereGeometry5, sphereMaterial3);
sphere3.position.set(50, 0, 0);
scene.add(sphere3);

//sphere4
const texture4 = textureLoader.load('Maladroit.jpg');
const sphereMaterial4 = new THREE.MeshBasicMaterial({ map: texture4 });
const sphere4 = new THREE.Mesh(sphereGeometry1, sphereMaterial4);
sphere4.position.set(75, 0, 0);
scene.add(sphere4);

//sphere5
const texture5 = textureLoader.load('black.jpg');
const sphereMaterial5 = new THREE.MeshBasicMaterial({ map: texture5 });
const sphere5 = new THREE.Mesh(sphereGeometry1, sphereMaterial5);
sphere5.position.set(100, 0, 0);
scene.add(sphere5);

//sphere6
const texture6 = textureLoader.load('red.jpg');
const sphereMaterial6 = new THREE.MeshBasicMaterial({ map: texture6 });
const sphere6 = new THREE.Mesh(sphereGeometry3, sphereMaterial6);
sphere6.position.set(125, 0, 0);
scene.add(sphere6);

//sphere7
const texture7 = textureLoader.load('raditude.png');
const sphereMaterial7 = new THREE.MeshBasicMaterial({ map: texture7 });
const sphere7 = new THREE.Mesh(sphereGeometry3, sphereMaterial7);
sphere7.position.set(150, 0, 0);
scene.add(sphere7);

//sphere8
const texture8 = textureLoader.load('hurley.png');
const sphereMaterial8 = new THREE.MeshBasicMaterial({ map: texture8 });
const sphere8 = new THREE.Mesh(sphereGeometry4, sphereMaterial8);
sphere8.position.set(175, 0, 0);
scene.add(sphere8);

//sphere9
const texture9 = textureLoader.load('everything.jpg');
const sphereMaterial9 = new THREE.MeshBasicMaterial({ map: texture9 });
const sphere9 = new THREE.Mesh(sphereGeometry4, sphereMaterial9);
sphere9.position.set(200, 0, 0);
scene.add(sphere9);

//sphere10
const texture10 = textureLoader.load('space.jpeg');
const sphereMaterial10 = new THREE.MeshBasicMaterial({ map: texture10, side: THREE.DoubleSide });
const sphere10 = new THREE.Mesh(sphereGeometry6, sphereMaterial10);
sphere10.position.set(0, 0, 0);
scene.add(sphere10);


// Pusat orbit (0, 0, 0)
const orbitCenter = new THREE.Vector3(0, 0, 0);
// Jari-jari orbit
//const orbitRadius = 10

const timeCoefficientSphere2 = 0.8; // Koefisien waktu untuk sphere2 (ubah sesuai keinginan)
const timeCoefficientSphere3 = 0.7; // Koefisien waktu untuk sphere3 (ubah sesuai keinginan)
const timeCoefficientSphere4 = 0.6; // Koefisien waktu untuk sphere4 (ubah sesuai keinginan)
const timeCoefficientSphere5 = 0.5; // Koefisien waktu untuk sphere5 (ubah sesuai keinginan)
const timeCoefficientSphere6 = 0.4; // Koefisien waktu untuk sphere6 (ubah sesuai keinginan)
const timeCoefficientSphere7 = 0.3; // Koefisien waktu untuk sphere7 (ubah sesuai keinginan)
const timeCoefficientSphere8 = 0.2; // Koefisien waktu untuk sphere8 (ubah sesuai keinginan)
const timeCoefficientSphere9 = 0.1; // Koefisien waktu untuk sphere9 (ubah sesuai keinginan)

// Create an animation function
function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001; // Waktu berdasarkan detik
  const orbitRadiusSphere2 = 20; // Radius orbit untuk sphere2
  const orbitRadiusSphere3 = 30;
  const orbitRadiusSphere4 = 40;
  const orbitRadiusSphere5 = 50;
  const orbitRadiusSphere6 = 60;
  const orbitRadiusSphere7 = 80;
  const orbitRadiusSphere8 = 90;
  const orbitRadiusSphere9 = 100;
  
  // Menghitung posisi bola untuk masing-masing bola berdasarkan koefisien waktu
const xSphere2 = orbitCenter.x + Math.cos(time * timeCoefficientSphere2) * orbitRadiusSphere2;
const zSphere2 = orbitCenter.z + Math.sin(time * timeCoefficientSphere2) * orbitRadiusSphere2;

const xSphere3 = orbitCenter.x + Math.cos(time * timeCoefficientSphere3) * orbitRadiusSphere3;
const zSphere3 = orbitCenter.z + Math.sin(time * timeCoefficientSphere3) * orbitRadiusSphere3;

const xSphere4 = orbitCenter.x + Math.cos(time * timeCoefficientSphere4) * orbitRadiusSphere4;
const zSphere4 = orbitCenter.z + Math.sin(time * timeCoefficientSphere4) * orbitRadiusSphere4;

const xSphere5 = orbitCenter.x + Math.cos(time * timeCoefficientSphere5) * orbitRadiusSphere5;
const zSphere5 = orbitCenter.z + Math.sin(time * timeCoefficientSphere5) * orbitRadiusSphere5;

const xSphere6 = orbitCenter.x + Math.cos(time * timeCoefficientSphere6) * orbitRadiusSphere6;
const zSphere6 = orbitCenter.z + Math.sin(time * timeCoefficientSphere6) * orbitRadiusSphere6;

const xSphere7 = orbitCenter.x + Math.cos(time * timeCoefficientSphere7) * orbitRadiusSphere7;
const zSphere7 = orbitCenter.z + Math.sin(time * timeCoefficientSphere7) * orbitRadiusSphere7;

const xSphere8 = orbitCenter.x + Math.cos(time * timeCoefficientSphere8) * orbitRadiusSphere8;
const zSphere8 = orbitCenter.z + Math.sin(time * timeCoefficientSphere8) * orbitRadiusSphere8;

const xSphere9 = orbitCenter.x + Math.cos(time * timeCoefficientSphere9) * orbitRadiusSphere9;
const zSphere9 = orbitCenter.z + Math.sin(time * timeCoefficientSphere9) * orbitRadiusSphere9;


  // Menetapkan posisi bola untuk sphere2 dan sphere3
  sphere2.position.set(xSphere2, 1, zSphere2);
  sphere3.position.set(xSphere3, 1, zSphere3);
  sphere4.position.set(xSphere4, 1, zSphere4);
  sphere5.position.set(xSphere5, 1, zSphere5);
  sphere6.position.set(xSphere6, 1, zSphere6);
  sphere7.position.set(xSphere7, 1, zSphere7);
  sphere8.position.set(xSphere8, 1, zSphere8);
  sphere9.position.set(xSphere9, 1, zSphere9);

  //rotasi
  // sphere1
  sphere1.rotation.y += 0.01;
  // sphere2
  sphere2.rotation.y += 0.01;
  // sphere3
  sphere3.rotation.y += 0.001;
  // sphere4
  sphere4.rotation.y += 0.05;
  // sphere3
  sphere5.rotation.y += 0.05;
  // sphere3
  sphere6.rotation.y += 0.1;
  // sphere3
  sphere7.rotation.y += 0.09;
  // sphere3
  sphere8.rotation.y += 0.06;
  // sphere3
  sphere9.rotation.y += 0.06;



  controls.update();

  renderer.render(scene, camera);
}

animate();
