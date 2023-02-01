export function checkTitle(title: string, input: string): boolean {
  return title.toLocaleLowerCase().includes(input.trim().toLocaleLowerCase())
}

export const getIconColor = (state: string): string => {
  return state === 'OPEN' ? 'green' : 'red'
}
