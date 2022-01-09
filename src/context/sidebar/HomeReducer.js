export const sidebarReducer = (state, action) => {
  switch (action.type) {
    case 'MENU_OPEN':
      return { menuShow: !state.menuShow };
    case 'HANDLE_SHOW':
      return { ...state, active: true };
    case 'HANDLE_HIDE':
      return { ...state, active: false }
    default:
      return state;
  }
}