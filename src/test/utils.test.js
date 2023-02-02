import { checkTitle, getIconColor } from '../utils'

describe('checkTitle', () => {
  it('returns true if title includes the input', () => {
    const title = 'This is a test title'
    const input = 'test'
    expect(checkTitle(title, input)).toBe(true)
  })

  it('returns false if title does not include the input', () => {
    const title = 'This is a test title'
    const input = 'not here'
    expect(checkTitle(title, input)).toBe(false)
  })

  it('is case-insensitive', () => {
    const title = 'This is a test title'
    const input = 'TITLE'
    expect(checkTitle(title, input)).toBe(true)
  })

  it('trims the input', () => {
    const title = 'This is a test title'
    const input = ' test '
    expect(checkTitle(title, input)).toBe(true)
  })
})

describe('getIconColor', () => {
  it('returns green for OPEN state', () => {
    expect(getIconColor('OPEN')).toBe('green')
  })

  it('returns red for CLOSED state', () => {
    expect(getIconColor('CLOSED')).toBe('red')
  })
})
