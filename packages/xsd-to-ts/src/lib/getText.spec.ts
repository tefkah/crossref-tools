import { getText } from './getText'

describe('getText', () => {
  it('should return the text of raw', async () => {
    const text = await getText('bruh\nbruh')
    expect(text).toBe('bruh\nbruh')
  })
  it('should return the text of a url', async () => {
    const text = await getText('https://pokeapi.co/api/v2/pokemon/charmander')
    expect(text?.name).toBe('charmander')
  })
  it('should return the text of a filepath', async () => {
    const text = await getText(new URL('./fixtures/text.txt', import.meta.url).pathname)
    expect(text).toEqual('bruh')
  })
})
