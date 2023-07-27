
const initialState = {
    cardItems:[],
    allCards:[],
    filters:[],
    cart: [],

    currentUser: null,
  isAuthenticated: false,

}
const reducer = (state = initialState,action )=>{
    if(action.type === "SET_CART"){
        return {...state, cart: action.payload }
    }else if (action.type === "SET_CARDS"){
        return {...state , cardItems: action.payload}
    }else if (action.type === "SET_ALL_CARDS"){
        return {...state , allCards: action.payload}
    }else  if (action.type === "SET_FILTERS"){
        return {...state , filters: action.payload}
    }else if (action.type === "SET_FAVOURITE"){
        return {
            ...state,
            cardItems: state.cardItems.map((card) =>
              card.id === action.payload ? { ...card, favourite: true } : card
            ),
          };

        
    }else if (action.type === "ADD_TO_CART"){
        const cardToAdd = state.cardItems.find((card) => card.id === action.payload);

        return {
            ...state,
            cart: [...state.cart, cardToAdd],
          };
    }else if (action.type === "REMOVE_FROM_CART"){
        const updatedCartItems = state.cart.filter(item => item.id!== action.payload);
        console.log(updatedCartItems , "updatedCartItemsupdatedCartItems");
      updatedCartItems.splice(action.payload, 1); // Remove 1 item at the given index
      return {
        ...state,
        cart: updatedCartItems,
      };
    }else if (action.type === "REGISTER_USER"){
        return {
            ...state,
            currentUser: action.payload,
            isAuthenticated: true,
          };
    }else if (action.type === "LOGIN_USER"){
        return {
            ...state,
            currentUser: action.payload,
            isAuthenticated: true,
          };
    }else if (action.type === "LOGOUT_USER"){
        return {
            ...state,
            currentUser: null,
            isAuthenticated: false,
          };
    }else{
        return state ; 
    }
}

export default reducer;


    