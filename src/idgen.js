// let id = 0;

// export function resetID() {
//   id = 0;
// }

// export default function idgen() {
//   const oldId = id;
//   id += 1;
//   return oldId;
// }

import { v4 as uuidv4 } from 'uuid'; // Import the UUID v4 function

// Reset function is no longer needed, as UUIDs are unique per call
export function resetID() {
  // UUID doesn't need resetting, but this can be kept for future adjustments if needed
}

// Generate and return a unique UUID each time
export default function idgen() {
  return uuidv4(); // Generate and return a unique UUID
}
