import { User } from './User'
import { Company } from './Company'

export interface Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable): void {
        let infowindow = new google.maps.InfoWindow({
            content: `<h1>${mappable.name}</h1>`
        })

        let marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
            title: mappable.name
        })

        marker.addListener('click', () => {
            infowindow.open(this.googleMap, marker)
        })
    }
}