/**
 * Removes falsy types: `undefined`, `null` and `false` types.
 * @param argument - The variable
 * @param message - The optional error message
 * Default: 'This value was promised to be there.'
 * @returns The argument without falsy values
 */
const ensure = <T>(
  argument: T | undefined | null | false,
  message = 'This value was promised to be there.'
): T => {
  if (!argument) {
    throw new TypeError(message)
  }

  return argument
}

export default ensure
