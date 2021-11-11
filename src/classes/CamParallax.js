import MainThreeScene from './MainThreeScene'

export default class CamParallax {
  constructor() {
    this.bind()
    this.experience = new MainThreeScene()
    this.config = this.experience.config
    this.camera = this.experience.camera.instance
    this.initPos = this.camera.position.clone()

    this.active = true
    this.mousePos = { x: 0, y: 0 }
    this.params = {
        intensity: 0.01,
        ease: 0.1,
    }

    window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove(e) {
    this.mousePos.x = (e.clientX - this.config.width / 2) * this.params.intensity
    this.mousePos.y = (e.clientY - this.config.height / 2) * this.params.intensity
  }

  update() {
    if (!this.active) return

    this.camera.position.x +=  (this.initPos.x + this.mousePos.x - this.camera.position.x) * this.params.ease
    this.camera.position.y +=  (this.initPos.y + this.mousePos.y - this.camera.position.y) * this.params.ease
    this.camera.position.z += (this.initPos.z - this.camera.position.z) * this.params.ease
    this.camera.lookAt(4, 3, 6);
  }

  bind() {
    this.onMouseMove = this.onMouseMove.bind(this)
  }
}