const appInfo = [1, 3, 4, 5, 3, 3, 5]
// src/store/showcase/mutations.js
export const updateDrawerState = (state, opened) => {
  state.drawerState = opened
}

export const updateStep = (state, opened) => {
  let maxPage = appInfo[state.stage-1]
  if(opened <= maxPage) {
    state.step = opened
  } 
  else if(state.step == 0){
    state.step = 1
  }
  else {
    
    if(state.stage <7)
      state.stage++
    else
      state.stage = 1
    state.step = 1
  }
  
}

export const updateStage = (state, opened) => {
  if(opened <= 7){
    state.stage = opened
    state.step = 1
  }
  else {
    state.stage = 1
  }
  state.step = 1
}