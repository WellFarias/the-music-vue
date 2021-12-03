import  Axios  from 'axios';
import Instrument from '@/models/instrument'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'InstrumentsModule', namespaced: true })

export class InstrumentsModule extends VuexModule {

    _instrument: Instrument = new Instrument()
    _instruments: Instrument[] = []

    get instrument() {
        return this._instrument
    }

    get instruments() {
        return this._instruments
    }

    @Mutation
    setInstrument(newInstrument: Instrument) {
        this._instrument = newInstrument
    }

    @Mutation
    addInstruments(newInstrument: Instrument) {
        this._instruments.push(newInstrument)
    }

    @Mutation
    setInstruments(instruments: Instrument[]) {
        this._instruments = instruments
    }

    @Action({commit: 'addInstruments'})
    save(newInstrument: Instrument) {
        return new Promise<Instrument>(((resolve, reject) => {
            Axios.post("http://localhost:8080/instruments", this.instrument).then( res => {
                resolve(res.data)
                return newInstrument
            }).catch(error => {
                reject(error)
                console.log(error)
            })
        }))
    }

    @Action({ commit:"setInstruments" })
    findAll() {
       return new Promise<Instrument>((( resolve, reject ) => {
         Axios.get("http://localhost:8080/instruments").then( res => {
           resolve( res.data )
           return res.data
         }).catch( error => {
           reject( error )
           console.log( error )
         })
       }))
    }

    @Action({ commit: "setInstrument" })
    findById( id: string ) {
        return new Promise<Instrument>((( resolve, reject ) => {
            Axios.get(`http://localhost:8080/instruments/${ id }`).then( res => {
                resolve( res.data )
                return res.data
            }).catch( error => {
                reject( error )
            })

        }))
    }

    @Action({ commit: "setInstrument" })
    delete( id: string ) {
        return new Promise<void>((( resolve, reject ) => {
            Axios.delete(`http://localhost:8080/instruments/${ id }`).then( () => {
                resolve()
            }).catch( error => {
                reject( error )
            })

        }))
    }
}

        