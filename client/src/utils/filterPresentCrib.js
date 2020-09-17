export default function filterPresentCrib(ageOfChildren) {
  for (const child of ageOfChildren) {
    if (child < 3) return true;
  }
}