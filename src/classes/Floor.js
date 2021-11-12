import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene'

export default class Floor {
  constructor() {
    this.experience = new MainThreeScene()
    this.scene = this.experience.scene
    this.modelLoader = new GLTFLoader()
    this.textureLoader = new THREE.TextureLoader()

    this.setMaterial()
    this.setModel()
  }

  setMaterial() {
    this.texture = this.textureLoader.load('/assets/textures/floor.png')
    this.texture.flipY = false
    this.texture.encoding = THREE.sRGBEncoding

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture
    })
  }

  setModel() {
    this.modelLoader.load('/assets/models/floor.glb', glb => {
      this.scene.add(glb.scene)

      const floorMesh = glb.scene.children.find(child => child.name === 'Floor')
      floorMesh.material = this.material
    })
  }
}