
export const upadateCards = (item)=>{
    return (dispatch) =>{
        dispatch({
            type: 'SET_CARDS',
            payload: item
        })
    }
    }
    export const setAllCards = (item)=>{
        return (dispatch) =>{
            dispatch({
                type: 'SET_ALL_CARDS',
                payload: item
            })
        }
        }
        export const setFilters = (item)=>{
            return (dispatch) =>{
                dispatch({
                    type: 'SET_FILTERS',
                    payload: item
                })
            }
            }
            export const updateCardFavourite = (item)=>{
                return (dispatch) =>{
                    dispatch({
                        type: 'SET_FAVOURITE',
                        payload: item
                    })
                }
                }
                export const settingEmptyCart = (item)=>{
                    return (dispatch) =>{
                        dispatch({
                            type: 'SET_CART',
                            payload: item
                        })
                    }
                    }
                export const addToCart = (item)=>{
                    console.log("add=>>>");
                    return (dispatch) =>{
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: item
                        })
                    }
                    }
                    export const removeFromCart = (item)=>{
                        console.log("removed==>>");
                        return (dispatch) =>{
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: item
                            })
                        }
                        }
                        export const registerUser = (item)=>{
                            return (dispatch) =>{
                                dispatch({
                                    type: 'REGISTER_USER',
                                    payload: item
                                })
                            }
                            }
                            export const loginUser = (item)=>{
                                return (dispatch) =>{
                                    dispatch({
                                        type: 'LOGIN_USER',
                                        payload: item
                                    })
                                }
                                }
                                export const logoutUser = ()=>{
                                    return (dispatch) =>{
                                        dispatch({
                                            type: 'LOGOUT_USER',

                                        })
                                    }
                                    }


            