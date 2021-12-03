export default class Instrument {

    public id: string
    public name: string
    public brand: string
    public category: string
    public year: number
    public description: string
    public isUsed: boolean
    public color: string
    public from: string
    public delivery: boolean
    public price: string
    public plots: string
    public picture: string

    constructor() {
        this.id = ""
        this.name = ""
        this.brand = ""
        this.category = ""
        this.year = 0
        this.description = ""
        this.isUsed = false
        this.color = ""
        this.from = ""
        this.delivery = false
        this.price = ""
        this.plots = ""
        this.picture = ""
    }
}