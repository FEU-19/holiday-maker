export default function filterChildrenByAge(children) {
  return children
    .filter(child => typeof child === 'number')
    .filter(child => child >= 3)
}