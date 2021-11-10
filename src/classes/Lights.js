import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene';

export default class Lights {
  constructor() {
    this.bind()
    this.experience = new MainThreeScene()
    this.scene = this.experience.scene

    this.modelLoader = new GLTFLoader()

    this.setModel()
  }

  setModel() {
    this.modelLoader.load('/assets/models/lights.glb', glb => {
      this.scene.add(glb.scene)
    })
  }

  update() {

  }

  bind() {

  }
}