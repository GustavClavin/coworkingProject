import { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

interface Props {
    lat: number,
    lng: number
}
const Map = (props: Props) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY ?? "",
    })
    
    const center = useMemo(() => ({lat: props.lat, lng: props.lng}), [])
    if (!isLoaded) return (
        <>
            <h1>LOADING.....</h1>
        </>
    )
    else {
        return (
            <GoogleMap zoom={13} center={center} mapContainerClassName="map">
                <MarkerF position={center} icon={undefined}/>
            </GoogleMap> 
            
        )
    }
    
  }
  
  export default Map 