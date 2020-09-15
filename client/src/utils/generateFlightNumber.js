export function generateFlightNumbers() {
  return (
    Array(3)
      .fill(0)
      .map((item) => String.fromCharCode(65 + Math.random() * 25))
      .join("") + Math.floor(Math.random() * 2000)
  );
}
