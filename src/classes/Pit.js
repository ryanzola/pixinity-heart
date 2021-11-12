import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene';

export default class Pit {
  constructor() {
      this.bind()

      this.experience = new MainThreeScene()
      this.scene = this.experience.scene;

      this.modelLoader = new GLTFLoader()
      this.textureLoader = new THREE.TextureLoader()

      this.setMaterial()
      this.setModel()
  }

  setMaterial() {
    this.texture = this.textureLoader.load('/assets/textures/pit.png')
    this.texture.flipY = false
    this.texture.encoding = THREE.sRGBEncoding

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
    })
  }

  setModel() {
    this.modelLoader.load('/assets/models/pit.glb', glb => {
      this.scene.add(glb.scene)

      glb.scene.children[0].material = this.material
    })
  }

  update() {

  }

  bind() {
    this.update = this.update.bind(this)
  }
}