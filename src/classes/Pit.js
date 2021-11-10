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

      this.setModel()
  }

  setModel() {
    this.texture = this.textureLoader.load('/assets/textures/pit.png')
    this.texture.flipY = false

    this.modelLoader.load('/assets/models/pit.glb', glb => {
      this.model = glb.scene.children[0]

      glb.scene.children[0].material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: this.texture,
      })

      this.scene.add(glb.scene.children[0])
    })
  }

  update() {

  }

  bind() {
    this.update = this.update.bind(this)
  }
}