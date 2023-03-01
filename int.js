function uniTotal (string) {
let x = 0
for ( let i = 0; i < string.length; i++){
  x += string.charCodeAt(i)
}
  return x
}
