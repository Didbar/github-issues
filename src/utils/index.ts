export function checkTitle(title: string, input: string): boolean {
  return title.toLocaleLowerCase().includes(input.trim().toLocaleLowerCase())
}

export const getStatusColor = (state: string): string => {
  return state === 'OPEN' ? 'green' : 'red'
}
