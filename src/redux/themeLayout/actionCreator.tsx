const changeMenuMode = (value: any) => {
  return (dispatch: any) => {
    try {
      dispatch(changeMenuBegin())
      dispatch(changeMenuSuccess(value))
    } catch (err) {
      dispatch(changeMenuErr(err))
    }
  }
}

const changeMenuCollapse = (value: any) => {
  return (dispatch: any) => {
    try {
      dispatch(collapseMenuBegin())
      dispatch(collapseMenuSuccess(value))
    } catch (err) {
      dispatch(collapseMenuErr(err))
    }
  }
}

export { changeLayoutMode, changeDirectionMode, changeMenuMode, changeMenuCollapse }
