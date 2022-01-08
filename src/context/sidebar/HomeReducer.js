export const sidebarReducer = (state, action) => {
  switch (action.type) {
    case 'MENU_OPEN':
      return { menuShow: !state.menuShow }
    default:
      return state;
  }
}