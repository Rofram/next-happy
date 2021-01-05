import { MapContainer, Marker, TileLayer } from "react-leaflet";
import mapIcon from "../../utils/map/mapIcon";

interface MapCreateProps {
    position?: [ latitude: number, longitude: number ];
}


export default function MapCreate({ position }: MapCreateProps) {
    return (
        <MapContainer
        center={[-22.227077, -54.8025487]}
        style={{ width: "100%", height: "100%" }}
        zoom={15}
        >
        <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN}`}
        />

        {/* {position.latitude !== 0 && (
            <Marker
            interactive={false}
            icon={mapIcon}
            position={[position.latitude, position.longitude]}
            />
        )} */}
        </MapContainer>
    );
}
