import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Props } from "../components/DishRow";

export interface CounterState {
    items: any[]
}

const initialState: CounterState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<Props>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
            // state.value -= 1
            const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id);
            const newBasket = [...state.items];

            if (index >= 0) {
                // The item exists in the basket
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as its not in basket!`
                )
            }

            state.items = newBasket;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, incrementByAmount } = basketSlice.actions
export const selectBasketItems = (state: any) => state.basket.items;
export const selectBasketItemsWithId = (state: any, id: string) => state.basket.items.filter((item: any) => item.id === id);
export const selectBasketTotal = (state: any) => state.basket.items.reduce((total: number, item: any) => total + item.price, 0);
export default basketSlice.reducer;