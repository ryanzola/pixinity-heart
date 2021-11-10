import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene'

export default class Walls {
  constructor() {
    this.experience = new MainThreeScene()
    this.scene = this.experience.scene
    this.modelLoader = new GLTFLoader()
    this.textureLoader = new THREE.TextureLoader()

    this.setMaterials()
    this.setModel()
  }

  setMaterials() {
    this.textures = {}

    this.textures.wall = this.textureLoader.load('/assets/textures/walls.png')
    this.textures.wall.flipY = false

    this.textures.floor = this.textureLoader.load('/assets/textures/floor.png')
    this.textures.floor.flipY = false

    this.materials = {}

    this.materials.wall = new THREE.MeshBasicMaterial({
      map: this.textures.wall
    })

    this.materials.floor = new THREE.MeshBasicMaterial({
      map: this.textures.floor
    })

    this.materials.cloud = new THREE.MeshBasicMaterial({
      color: 0xffffff
    })
  }

  setModel() {
    this.modelLoader.load('/assets/models/walls.glb', glb => {
      this.scene.add(glb.scene)

      const wallMesh = glb.scene.children.find(child => child.name === 'wall')
      wallMesh.material = this.materials.wall

      const floorMesh = glb.scene.children.find(child => child.name === 'floor')
      floorMesh.material = this.materials.floor

      const cloudMesh = glb.scene.children.find(child => child.name === 'cloud')
      cloudMesh.material = this.materials.cloud

      const cubesMesh = glb.scene.children.find(child => child.name === 'cubes')
      cubesMesh.material = this.materials.cloud

    })
  }
}