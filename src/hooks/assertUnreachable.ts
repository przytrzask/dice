export function assertUnreachable(x: never): never {
  throw new Error(`${x} is not handled`)
}
