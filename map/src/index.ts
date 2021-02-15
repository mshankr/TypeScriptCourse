import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const customMap = new CustomMap('map');
const a = new User();
const b = new User();
const c = new Company();

customMap.addMarker(a)
customMap.addMarker(b)
customMap.addMarker(c)
