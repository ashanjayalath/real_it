import { UserRoutes, InvoiceRoutes, ItemsRoutes } from "ApiLinks/allLinks";
import { authMidleSlice } from '../redux/features/authMidleSlice'
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = authMidleSlice.injectEndpoints({
    endpoints: builder => ({


        userLogin: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: UserRoutes.USER_LOGIN_URL,
                    method: "POST",
                    body,
                };
            }
        }),
        //user update Query
        userUpdate: builder.mutation({
            query: (body: any) => {
                return {
                    url: UserRoutes.USER_UPDATE,
                    method: "POST",
                    body
                };
            },
        }),
        //user forget password Query
        userForgetPassword: builder.mutation({
            query: (body: any) => {
                return {
                    url: UserRoutes.USER_FORGET_PASSWORD,
                    method: "PUT",
                    body
                };
            },
        }),
        //user otp send
        userOtpSend: builder.mutation({
            query: (body: any) => {
                return {
                    url: UserRoutes.USER_OTP,
                    method: "POST",
                    body
                };
            },
        }),
        //user otp verify
        userOtpVerify: builder.mutation({
            query: (body: any) => {
                return {
                    url: UserRoutes.USER_OTP_VERIFY,
                    method: "POST",
                    body
                };
            },
        }),


        //Invoice save
        invoiceCreate: builder.mutation({
            query: (body: any) => {
                return {
                    url: InvoiceRoutes.INVOICE_CREATE,
                    method: "POST",
                    body,
                };
            },
        }),
        //Invoice update
        invoiceUpdate: builder.mutation({
            query: (body: any) => {
                return {
                    url: InvoiceRoutes.INVOICE_UPDATE,
                    method: "PUT",
                    body,
                };
            },
        }),
        //Invoice delete one by one
        invoiceDeleteOne: builder.mutation({
            query: (body: any) => {
                return {
                    url: InvoiceRoutes.INVOICE_DELETE_ONE,
                    method: "DELETE",
                    body,
                };
            },
        }),
        //Invoice delete all
        invoiceDeleteAll: builder.mutation({
            query: (body: any) => {
                return {
                    url: InvoiceRoutes.INVOICE_DELETE_ALL,
                    method: "DELETE",
                    body,
                };
            },
        }),
        //Invoice select one
        invoiceGetOne: builder.mutation({
            query: (body: any) => {
                return {
                    url: InvoiceRoutes.INVOICE_GET_ONE,
                    method: "GET",
                    body,
                };
            },
        }),
        //Invoice select all
        invoiceGetAll: builder.mutation({
            query: () => InvoiceRoutes.INVOICE_GET_ALL,
        }),


        //Item select all
        itemGetAll: builder.mutation({
            query: () => ItemsRoutes.ITEM_GET_ALL,
        }),
        //Item add
        itemAdd: builder.mutation({
            query: (body:any) => {
                return {
                    url: ItemsRoutes.ITEM_CREATE,
                    method: "POST",
                    body,
                };
            }
        }),
        //Item update
        itemUpdate: builder.mutation({
            query: ({body,id}) => {
                return {
                    url: `${ItemsRoutes.ITEM_UPDATE}/${id}`,
                    method: "PUT",
                    body,
                };
            }
        }),
        //Item delete
        itemDelete: builder.mutation({
            query: (id) => {
                return {
                    url: `${ItemsRoutes.ITEM_DELETE_ONE}/${id}`,
                    method:"DELETE"
                };
            }
        }),
        //Item Delete bulk
        itemDeleteBulkWithId: builder.mutation({
            query: (body:any) => {
                return {
                    url: ItemsRoutes.ITEM_DELETE_ALL_WITH_ID,
                    method:"DELETE",
                    body
                };
            }
        }),

    })
})

export const {
    useUserLoginMutation,
    useUserUpdateMutation,
    useUserForgetPasswordMutation,
    useUserOtpSendMutation,
    useUserOtpVerifyMutation,

    useItemGetAllMutation,
    useItemAddMutation,
    useItemUpdateMutation,
    useItemDeleteMutation,
    useItemDeleteBulkWithIdMutation,

    useInvoiceCreateMutation,
    useInvoiceDeleteAllMutation,
    useInvoiceDeleteOneMutation,
    useInvoiceGetAllMutation,
    useInvoiceGetOneMutation,
    useInvoiceUpdateMutation,
} = apiSlice