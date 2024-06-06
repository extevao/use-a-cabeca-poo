import { DogDoor } from "./DogDoor";
import { Remote } from "./Remote";
import { pularLinha } from "./utils/pular-linha";


export class DogDoorSimulator {
  static simular() {
    const dogDoor = new DogDoor()
    const remote = new Remote(dogDoor)

    console.log('Fido barks to go outside...')
    remote.pressButton()

    pularLinha()

    console.log('Fido has gone outside...')
    remote.pressButton()

    pularLinha()

    console.log(`Fido's all done..`)
    remote.pressButton()

    pularLinha()

    console.log(`Fido's back inside...`)
    remote.pressButton()
  }
}


init()

function init() {
  DogDoorSimulator.simular()
}


