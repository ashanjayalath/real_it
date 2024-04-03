import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    InvoCustomerName: "",
    InvoID: "",
    InvoOrderNumber: "",
    InvoDate: "",
    InvoTerms: "",
    InvoDueDate: "",
    InvoSalesperson: "",
    InvoSubject: "",
    InvoItemsTable:{},
    InvoCustmoerNotes: "",
    InvoTermCondition: "",
    InvoDocument:{}
}


const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: initialState,
    reducers: {
        setInvoiceCredentials: (state, action) => {
            const { 
                InvoCustomerName,InvoID,InvoOrderNumber,InvoDate,InvoTerms,InvoDueDate,InvoSalesperson,
                InvoSubject,InvoItemsTable,InvoCustmoerNotes,InvoTermCondition,InvoDocument 
            } = action.payload
        
            state.InvoCustomerName = InvoCustomerName
            state.InvoID = InvoID
            state.InvoOrderNumber = InvoOrderNumber
            state.InvoDate = InvoDate
            state.InvoTerms = InvoTerms
            state.InvoDueDate = InvoDueDate
            state.InvoSalesperson = InvoSalesperson
            state.InvoSubject = InvoSubject
            state.InvoItemsTable = InvoItemsTable
            state.InvoCustmoerNotes = InvoCustmoerNotes
            state.InvoTermCondition = InvoTermCondition
            state.InvoDocument = InvoDocument
        }
    },
})

export const { setInvoiceCredentials } = invoiceSlice.actions

export default invoiceSlice.reducer

// export const selectCurrentUser = (state: { auth: { user: any } }) => state.auth.user
// export const selectCurrentToken = (state: { auth: { token: any } }) => state.auth.token