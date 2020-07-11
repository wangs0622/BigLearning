import React, { Component } from 'react';
import * as THREE from 'three';

export default class CubeScene extends Component {

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5, false);
    document.getElementById("threeScene").appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const points = [
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(10, 0, 0),
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10 * Math.sin(Math.PI / 8), 10),
      new THREE.Vector3(0, 10 , 0),
      new THREE.Vector3(0, 10 * Math.sin(Math.PI / 8), 10),
      new THREE.Vector3(10, 0, 0),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add( line );

    camera.position.set( 0, -50, 10 );
    camera.lookAt( 0, 0, 0 );
    
    renderer.render(scene, camera);
  }

  render() {
    return (
      <div id="threeScene"></div>
    );
  }
}