import { DogDoorSimulator } from "../DogDoorSimulator";



describe('DogDoorSimulator Test', () => {
  it('execute', () => {
    const jestSpyOn = jest.spyOn(DogDoorSimulator, 'simular')

    DogDoorSimulator.simular()

    expect(jestSpyOn).toHaveBeenCalledTimes(1)
  })
})
