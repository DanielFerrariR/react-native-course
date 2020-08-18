import { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'src/store'
import { createTrack } from 'src/store/tracks'
import { resetForm } from 'src/store/location'
import { useNavigation } from '@react-navigation/native'
import { ensure } from 'src/utils'

const useSaveTrack = (): ((
  setLoading: Dispatch<SetStateAction<boolean>>
) => Promise<void>)[] => {
  const location = useSelector((state) => state.location)
  const tracks = useSelector((state) => state.tracks)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const saveTrack = async (setLoading: Dispatch<SetStateAction<boolean>>) => {
    try {
      setLoading(true)

      await createTrack(location.name, location.locations, ensure(tracks))

      dispatch(resetForm(location))

      navigation.navigate('TrackList')
    } catch (error) {
      setLoading(false)

      console.log(error)
    }
  }

  return [saveTrack]
}

export default useSaveTrack
