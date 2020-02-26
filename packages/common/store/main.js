
import { decorate, observable } from "mobx"

const main = {
    id : Math.random(),
    title : "",
    finished :false
}
decorate(main, {
    title: observable,
    finished: observable
})

export default main