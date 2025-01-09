export function getCoupletNumber(str: string | number): string {
  return String(str).replace(/(\d+)(\.)?/, (_, n, dot) => {
    const result = parseInt(n, 10) - 1
    return dot ? `${result}.` : `${result}`
  })
}
