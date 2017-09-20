import { Component, OnInit } from '@angular/core';

import * as THREE from 'three'
//declare var THREE:any;
//ng build --prod --base-href "https://weiserhei.github.io/angular-threejs-test/dist/"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges() 
    var camera, scene, renderer;
    var mesh;

    init();
    animate();
    function init() {
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.z = 400;
      scene = new THREE.Scene();
      var texture = new THREE.TextureLoader().load( './assets/textures/sprite-2x2.jpg' );
      var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
      var material = new THREE.MeshBasicMaterial( { map: texture } );
      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      //
      window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function animate() {
      requestAnimationFrame( animate );
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
  }

}
