let initState = {
  count:0,
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, count:++state.count};
      break;
    case 'DECREASE':
      return {...state, count:--state.count};
      break;
    default:
      return {...state};
  }
}