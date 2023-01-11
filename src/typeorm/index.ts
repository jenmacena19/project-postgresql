
import { AgenteLocal } from "./agentelocal.entity";
import { Authorization } from "./authorization.entity";
import { Device } from "./device.entity";
import { Group } from "./group.entity";
import { Request } from "./request.entity";
import { ResponseTime } from "./responsetime.entity";
import { SwHouse } from "./SwHouse.entity";
import { Users } from "./user.entity";

const entities = [Users, AgenteLocal, ResponseTime, Request, Device, Group, SwHouse, Authorization];

export {Users, AgenteLocal, ResponseTime, Request, Device, Group, SwHouse, Authorization};
export default entities;