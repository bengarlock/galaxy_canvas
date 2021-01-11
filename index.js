

window.addEventListener("load", () => {
    const root = document.getElementById("root")
    const c = root.getContext('2d')
    root.style.backgroundColor = "black"
    root.style.position = "absolute"
    root.height = window.innerHeight
    root.width = window.innerWidth


    function Cirlce(x, y, dx, dy, radius) {

        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius

        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.strokeStyle = "white"
            c.stroke()
        }

        this.update = function () {
            if (this.x + this.radius > window.innerWidth ||
                this.x - this.radius < 0) {
                this.dx = -this.dx
            }

            if (this.y + this.radius > window.innerHeight ||
                this.y - this.radius < 0) {
                this.dy = -this.dy
            }
            this.x += this.dx
            this.y += this.dy
            this.draw()
        }
    }


    let circleArray = []

    for (let i = 0; i < 100; i++) {
        let radius = 2
        let x = Math.random() * (window.innerWidth - radius * 2) + radius
        let y = Math.random() * (window.innerHeight - radius * 2) + radius
        let dx = (Math.random() - 0.5) * 1
        let dy = (Math.random() - 0.5) * 1

        circleArray.push(new Cirlce(x, y, dx, dy, radius))
    }

    const animate = () => {
        requestAnimationFrame(animate)
        c.clearRect(0,0,window.innerWidth, window.innerHeight)

        for (let i=0; i < circleArray.length; i++) {
            circleArray[i].update()
        }
    }

    animate()

    window.addEventListener('resize', () => {
        root.height = window.innerHeight
        root.width = window.innerWidth
    })


})