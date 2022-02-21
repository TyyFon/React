import shortid from 'shortid'
import { strContains } from '../utils/strContains.js';

// selectors
export const getFilteredFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);
  export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// actions
const createActionName = actionName => `app/card && favorite/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCardAction = payload => ({ type: ADD_CARD, payload });
export const toggleCardToFavoriteAction = payload => ({type: TOGGLE_CARD_FAVORITE, payload});
export const removeCardAction = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card);
        case REMOVE_CARD:
            return statePart.filter(card => card.id !== action.payload.id)
    default:
        return statePart;
    }
  }
  
  export default cardsReducer