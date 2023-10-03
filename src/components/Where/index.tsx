import { Icon, LatLngLiteral } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import styles from "./index.module.css"
import "leaflet/dist/leaflet.css";
import React from 'react';


type Mark = LatLngLiteral & {
    key: number
    description?: string | React.ReactNode
    icon?: string
}

const positions: Mark[] = [
    {
        key: 1,
        lat: -20.84,
        lng: -41.12,
        description: <>Restaurante X. <br /> +1000 pessoas por dia.</>
    },
    {
        key: 2,
        lat: -20.85,
        lng: -41.11,
        description: <>Parceiro Y.</>
    },
    {
        key: 3,
        lat: -20.8473112,
        lng: -41.1171209,
        description: <>Mercado Z.</>
    },
]

function centralize(positions: LatLngLiteral[]): LatLngLiteral {
    const lat = positions.map((i: LatLngLiteral) => i.lat).reduce((p, c) => c + p) / positions.length
    const lng = positions.map((i: LatLngLiteral) => i.lng).reduce((p, c) => c + p) / positions.length
    return { lat, lng }
}

export function Where() {
    const dragging = window.innerWidth > 1024;
    return (
        <section className={styles.where}>
            <h2 className={styles.title}>Onde estamos?</h2>
            <span className={styles.description}>Veja onde já estamos divulgando</span>
            <MapContainer className={styles.map} center={centralize(positions)} zoom={15} scrollWheelZoom={false} dragging={dragging} style={{ height: 536 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {positions.map(position => (
                    <Marker key={position.key} position={position} >
                        {position.description && (
                            <Popup> {position.description} </Popup>
                        )}
                    </Marker>
                ))}
            </MapContainer>
        </section>
    )
}