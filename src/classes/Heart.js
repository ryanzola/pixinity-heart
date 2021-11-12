import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import MainThreeScene from './MainThreeScene'

export default class Heart {
  constructor() {
    this.experience = new MainThreeScene()
    this.scene = this.experience.scene
    this.modelLoader = new GLTFLoader()
    this.textureLoader = new THREE.TextureLoader()

    this.setMaterials()
    this.setModel()
  }

  setMaterials() {
    // textures
    this.textures = {}
    
    this.textures.heart = this.textureLoader.load('/assets/textures/heart.png')
    this.textures.heart.flipY = false
    this.textures.heart.encoding = THREE.sRGBEncoding

    this.textures.wings = this.textureLoader.load('/assets/textures/wings.png')
    this.textures.wings.flipY = false
    this.textures.wings.encoding = THREE.sRGBEncoding

    // materials
    this.materials = {}

    // heart
    this.materials.heart = new THREE.MeshBasicMaterial({
      map: this.textures.heart
    })

    this.materials.wings = new THREE.MeshBasicMaterial({
      map: this.textures.wings
    })
  }

  setModel() {
    this.modelLoader.load('/assets/models/heart.glb', glb => {
      this.scene.add(glb.scene)

      const heartMesh = glb.scene.children.find(child => child.name === 'heart')
      const wingEmissionMesh =  glb.scene.children.find(child => child.name === 'wingsemission')
      const wingSideMesh = glb.scene.children.find(child => child.name === 'wingsside')

      heartMesh.material = this.materials.heart
      wingEmissionMesh.material = this.materials.wings
      wingSideMesh.material = this.materials.wings
    })
  }
}