import React, { useCallback } from 'react'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { Typography, Box, Paper, ActivityIndicator } from 'src/components/atoms'
import { useLocation } from 'src/hooks'
import { useSelector, useDispatch } from 'src/store'
import { setCurrentLocation, setLocations } from 'src/store/location'
import { useTheme } from 'react-native-paper'

const Map: React.FC = () => {
  const theme = useTheme()
  const location = useSelector((state) => state.location)
  const dispatch = useDispatch()
  const callback = useCallback(
    (currentLocation) => {
      dispatch(setCurrentLocation(currentLocation))

      if (location.recording) {
        dispatch(setLocations(currentLocation))
      }
    },
    [location.recording]
  )
  const [error] = useLocation(callback)

  return (
    <>
      <Paper borderRadius={4} overflow="hidden" height={300}>
        {!location.currentLocation ? (
          <Box
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height={1}
          >
            <ActivityIndicator animating size="large" />
          </Box>
        ) : (
          <MapView
            style={{ height: 300 }}
            region={{
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
              ...location.currentLocation.coords
            }}
          >
            <Circle
              center={{
                ...location.currentLocation.coords
              }}
              radius={30}
              strokeColor={theme.colors.custom.userLocationStroke}
              fillColor={theme.colors.custom.userLocationFill}
            />
            <Polyline
              coordinates={location.locations.map((each) => each.coords)}
            />
          </MapView>
        )}
      </Paper>
      {error ? <Typography>{error}</Typography> : null}
    </>
  )
}

export default Map
