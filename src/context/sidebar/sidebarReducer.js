export const sidebarReducer = (state, action) => {
  switch (action.type) {
    case 'SIDEBAR_OPEN':
      return { sidebarOpen: !state.sidebarOpen }
    default:
      return state;
  }
}