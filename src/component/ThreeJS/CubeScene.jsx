import React, { Component } from 'react';
import * as THREE from 'three';

export default class CubeScene extends Component {

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5, false);
    document.getElementById("threeScene").appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };
    animate();
  }

  render() {
    return (
      <div id="threeScene"></div>
    );
  }
}