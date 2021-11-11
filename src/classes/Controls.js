import { Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import MainThreeScene from './MainThreeScene'

export default class Controls {
  constructor(_options) {
    this.experience = new MainThreeScene()
    this.renderer = this.experience.renderer
    this.camera = this.experience.camera

    this.bind()
    this.setControls()
  }

  setControls() {
		this.controls = new OrbitControls(this.camera.instance, this.renderer.instance.domElement)
		this.controls.enabled = true
		this.controls.maxDistance = 25
		this.controls.minDistance = 5
    this.controls.enableDamping = true
    this.controls.target = new Vector3(0, 5, 0)
    this.controls.update()
  }

  update() {
    this.controls.update()
  }

  destroy() {
    this.controls.destroy()
  }

  bind() {
    this.update = this.update.bind(this)
    this.destroy = this.destroy.bind(this)
  }
}