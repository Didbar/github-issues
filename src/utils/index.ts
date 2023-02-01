export function checkTitle(title: string, input: string): boolean {
  return title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
}
