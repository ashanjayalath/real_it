import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     itemData: {},
//     selectedItemData:[{
//         _id:"",
//         ItemName:"",
//         ItemType:"",
//         ItemUnit:"",
//         ItemSalesInfo:{
//             SellingPrice:"",
//             Account:"",
//             Description:"",
//         },
//         ItemPurchaseInfo:{
//             PurchasePrice:"",
//             Account:"",
//             Description:"",
//         }
//     }]
// }


const itemSlice = createSlice({
    name:'item',
    initialState:{itemData:[] , selectedItemData:[]},
    reducers: {
        setItemData: (state, action) => {
            // const { itemData } = action.payload
            state.itemData = action.payload
        },
        setSelectedDataSet: (state,action) => {
            state.selectedItemData = action.payload
        }
    },
})

export const { setItemData , setSelectedDataSet } = itemSlice.actions

export default itemSlice.reducer

export const selectCurrentData = (state: { item: { itemData: any } }) => state.item.itemData
export const selectCurrenSelectedDataSet = (state: { item: { selectedItemData: any } }) => state.item.selectedItemData
