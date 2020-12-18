const d = document
let gate = false

const lid = d.querySelector('#laptop-lid')

const btn = d.querySelector('button.lid-toggle')

const toggleClass = () => {
  if (gate) {
    // -76 is perpendicular to viewer's perspective
    lid.style.cssText = `
      transform: rotate3d(1,0,0,-90deg)
    `
    console.log("if true", gate);
    gate = false
    return gate
  } else {
    console.log("if false", gate);
    lid.style.cssText = ''
    lid.style.cssText = `
      transform: rotate3d(1,0,0,0deg)
    `
    gate = true
    return gate
  }
}