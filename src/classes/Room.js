import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene'

export default class Room {
  constructor() {
    this.experience = new MainThreeScene()
    this.scene = this.experience.scene
    this.modelLoader = new GLTFLoader()
    this.textureLoader = new THREE.TextureLoader()

    this.setTextures()
    this.setMaterials()
    this.setModel()
  }

  setTextures() {
    this.textures = {}

    this.textures.wall = this.textureLoader.load('/assets/textures/walls.png')
    this.textures.brick = this.textureLoader.load('/assets/textures/brick.png')
    this.textures.floor = this.textureLoader.load('/assets/textures/floor.png')
    this.textures.cloud = this.textureLoader.load('/assets/textures/clouds.png')
    this.textures.pipe = this.textureLoader.load('/assets/textures/pipe.png')
    this.textures.cubes = this.textureLoader.load('/assets/textures/cubes.png')

    for(const texture in this.textures) {
      this.textures[texture].flipY = false
      this.textures[texture].encoding = THREE.sRGBEncoding
    }
  }

  setMaterials() {
    this.materials = {}

    for(const texture in this.textures) {
      this.materials[texture] = new THREE.MeshBasicMaterial({
        map: this.textures[texture]
      })
    }
  }

  setModel() {
    this.modelLoader.load('/assets/models/walls.glb', glb => {
      this.scene.add(glb.scene)

      for(const material in this.materials) {
        const mesh = glb.scene.children.find(child => child.name === material)
        mesh.material = this.materials[material]
      }
    })
  }
}