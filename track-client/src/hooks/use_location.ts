import { useState, useRef, useCallback } from 'react'
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { useFocusEffect } from '@react-navigation/native'

const useLocation = (
  callback: (location: Geolocation.GeoPosition) => void
): string[] => {
  const [message, setMessage] = useState('')
  const watchId = useRef<number>()

  const verifyLocationPermission = async () => {
    try {
      const accessFineLocation = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (accessFineLocation === PermissionsAndroid.RESULTS.GRANTED) {
        return true
      }
      return false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const startWatch = async () => {
    const hasLocationPermission = await verifyLocationPermission()

    if (hasLocationPermission) {
      watchId.current = Geolocation.watchPosition(
        (position) => {
          callback(position)
        },
        (error) => {
          console.log(error.code, error.message)
        },
        { enableHighAccuracy: true, interval: 1000, distanceFilter: 10 }
      )
    } else {
      setMessage('Please enable location services')
    }
  }

  useFocusEffect(
    useCallback(() => {
      const asyncCallback = async () => {
        if (watchId.current !== undefined) {
          Geolocation.clearWatch(watchId.current)
        }

        await startWatch()
      }

      asyncCallback()

      return () => {
        if (watchId.current !== undefined) {
          Geolocation.clearWatch(watchId.current)
        }
      }
    }, [callback])
  )

  return [message]
}

export default useLocation
