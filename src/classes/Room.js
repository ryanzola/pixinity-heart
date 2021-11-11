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
    this.textures.clouds = this.textureLoader.load('/assets/textures/clouds.png')

    for(const texture in this.textures) {
      this.textures[texture].flipY = false
    }
  }

  setMaterials() {
    this.materials = {}

    this.materials.wall = new THREE.MeshBasicMaterial({
      map: this.textures.wall
    })

    this.materials.brick = new THREE.MeshBasicMaterial({
      map: this.textures.brick
    })

    this.materials.floor = new THREE.MeshBasicMaterial({
      map: this.textures.floor
    })

    this.materials.cloud = new THREE.MeshBasicMaterial({
      map: this.textures.clouds
    })
  }

  setModel() {
    this.modelLoader.load('/assets/models/walls.glb', glb => {
      this.scene.add(glb.scene)

      const wallMesh = glb.scene.children.find(child => child.name === 'wall')
      wallMesh.material = this.materials.wall

      const brickMesh = glb.scene.children.find(child => child.name === 'brick')
      brickMesh.material = this.materials.brick

      const floorMesh = glb.scene.children.find(child => child.name === 'floor')
      floorMesh.material = this.materials.floor

      const cloudMesh = glb.scene.children.find(child => child.name === 'cloud')
      cloudMesh.material = this.materials.cloud
    })
  }
}