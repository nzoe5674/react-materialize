import { v4 as uuidv4 } from 'uuid';

export function resetID() {}

export default function idgen() {
  return uuidv4();
}
