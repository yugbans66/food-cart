import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAllCards, upadateCards ,updateCardFavourite,addToCart} from '../../state/action-creators';


const cardData = [
    {
      "id": 1,
      "img": "https://picsum.photos/200",
      "title": "Delicious Autumn Dinner",
      "tags": ["Autumn", "Healthy", "Dinner"],
      "favourite":false
    },
    {
      "id": 2,
      "img": "https://picsum.photos/200",

      "title": "Scrumptious Spring Breakfast",
      "tags": ["Spring", "Egg free", "Breakfast"],
      "favourite":false
    },
    {
      "id": 3,
      "img": "https://picsum.photos/200",

      "title": "Warm Winter Healthy Dinner",
      "tags": ["Winter", "Healthy", "Dinner"],
      "favourite":false
    },
    {
      "id": 4,
      "img": "https://picsum.photos/200",

      "title": "Cozy Winter Egg-free Breakfast",
      "tags": ["Winter", "Egg free", "Breakfast"],
      "favourite":false
    },
    {
      "id": 5,
      "img": "https://picsum.photos/200",

      "title": "Fresh Spring Healthy Dinner",
      "tags": ["Spring", "Healthy", "Dinner"],
      "favourite":false
    },
    {
      "id": 6,
      "img": "https://picsum.photos/200",

      "title": "Autumn-inspired Egg-free Breakfast",
      "tags": ["Autumn", "Egg free", "Breakfast"],
      "favourite":false
    },


        {
          "id": 7,
      "img": "https://picsum.photos/200",

          "title": "Vibrant Spring Dinner Delight",
          "tags": ["Spring", "Healthy", "Dinner"],
          "favourite":false
        },
        {
          "id": 8,
      "img": "https://picsum.photos/200",

          "title": "Autumn Harvest Breakfast Bowl",
          "tags": ["Autumn", "Egg free", "Breakfast"],
          "favourite":false
        },
        {
          "id": 9,
      "img": "https://picsum.photos/200",

          "title": "Cozy Winter Comfort Food",
          "tags": ["Winter", "Healthy", "Dinner"],
          "favourite":false
        },
        {
          "id": 10,
      "img": "https://picsum.photos/200",

          "title": "Refreshing Spring Smoothie",
          "tags": ["Spring", "Egg free", "Breakfast"],
          "favourite":false
        },
        {
          "id": 11,
      "img": "https://picsum.photos/200",

          "title": "Light and Healthy Summer Dinner",
          "tags": ["Summer", "Healthy", "Dinner"],
          "favourite":false
        },
        {
          "id": 12,
      "img": "https://picsum.photos/200",

          "title": "Summer Fruits Granola Bowl",
          "tags": ["Summer", "Egg free", "Breakfast"],
          "favourite":false
        },

            {
              "id": 13,
      "img": "https://picsum.photos/200",

              "title": "Autumn Roasted Vegetables",
              "tags": ["Autumn", "Healthy", "Dinner"],
              "favourite":false
            },
            {
              "id": 14,
      "img": "https://picsum.photos/200",

              "title": "Spring Fresh Fruit Salad",
              "tags": ["Spring", "Egg free", "Breakfast"],
              "favourite":false
            },
            {
              "id": 15,
      "img": "https://picsum.photos/200",

              "title": "Hearty Winter Soup",
              "tags": ["Winter", "Healthy", "Dinner"],
              "favourite":false
            },
            {
              "id": 16,
      "img": "https://picsum.photos/200",

              "title": "Eggs Benedict Breakfast",
              "tags": ["Spring", "Egg free", "Breakfast"],
              "favourite":false
            },
            {
              "id": 17,
      "img": "https://picsum.photos/200",

              "title": "Grilled Summer Vegetables",
              "tags": ["Summer", "Healthy", "Dinner"],
              "favourite":false
            },
            {
              "id": 18,
      "img": "https://picsum.photos/200",

              "title": "Refreshing Summer Smoothie",
              "tags": ["Summer", "Egg free", "Breakfast"],
              "favourite":false
            }

          
      
  ];
  

const Card = () => {
  const reducer_redux = useSelector(state=> state.reducer);

  console.log(reducer_redux , "reducer====>");

    const cardItems = useSelector(state=> state.reducer.cardItems);
    const cart = useSelector(state=> state.reducer.cart);

 
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(setAllCards(cardData));
        dispatch(upadateCards(cardData))
        // dispatch(settingEmptyCart([]))

    },[])
    const handleAddToCart = (cardId) => {
      const cartItem = cardItems?.find((card) => card.id === cardId);
      if (cartItem && !cart?.includes(cardId)) {
        dispatch(addToCart(cardId));
      }
    };
    
    
    const handleFavoriteClick = (cardId) => {
      dispatch(updateCardFavourite(cardId));
    };  return (
      
      <>
      <div className='card-wrapper'>
        {cardItems?.map((card) => {
          const itemCountInCart = cart.filter((cartItem) => cartItem.id === card.id).length;
          return (
            <div className='card' key={card.id}>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <div className='button-container'>
                <button
                  className={card.favourite ? 'favourite-button favourited' : 'favourite-button'}
                  disabled={card.favourite}
                  onClick={() => handleFavoriteClick(card.id)}
                >
                  {card.favourite ? 'Favourited' : 'Favourite'}
                </button>
                <button className='cart-button' onClick={() => handleAddToCart(card.id)}>
                  Add To Cart
                  <span className='cart-item-count'>{itemCountInCart}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Card
