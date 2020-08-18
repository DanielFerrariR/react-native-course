const DESTROY_SESSION = 'DESTROY_SESSION'

interface DestroySessionAction {
  type: typeof DESTROY_SESSION
}

export type DestroySessionActionTypes = DestroySessionAction

export const destroySession = (): DestroySessionAction => {
  return {
    type: DESTROY_SESSION
  }
}
