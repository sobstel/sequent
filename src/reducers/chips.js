
let initialState = []
for (var i = 0; i < 16; i++) {
  initialState.push({
    id: i,
    number: i + 1
  })
}

export default function reducer (state = initialState, action = {}) {  
  return state
}
