
//const MAIN_URL = 'http://localhost:3008';
const MAIN_URL = 'https://real-solution-backend.vercel.app'
//database configuration
const MONGODB_URL = 'mongodb+srv://shanjayalath225:Ku3lqFWA4hlND82T@cybercluster.lqr2nw4.mongodb.net/CyberBack?retryWrites=true&w=majority'


//cloud configuration
const CloudinaryPath = {
    CLOUD_NAME: 'ddtcaswoj',
    API_KEY: 326952851697733,
    API_SECRET: 'B3fDKc-W51KiND7qqmdK-CMQGPU',
    CLOUDINARY_URL: 'cloudinary://326952851697733:B3fDKc-W51KiND7qqmdK-CMQGPU@ddtcaswoj',
}

const UserRoutes = {
    USER_LOGIN_URL: '/api/admin/login',
    USER_LOG_OUT: '/api/admin/logout',
    USER_REFRESH_TOKEN: '/api/admin/refresh',
    USER_UPDATE: '/api/admin/update/', //you must pass the id in user
    USER_FORGET_PASSWORD: '/api/admin/forgetPassword',
    USER_PASSWORD_UPDATE: '/api/admin/update/pwd/', //you must pass the id in user
    USER_DELETE: '',
    USER_AVATOR_UPDATE: '/api/admin/image/upload/', //you must pass the id in user
    USER_AVATOR_DELETE: '/api/admin/image/delete/', //you must pass the image id in user
    USER_OTP: '/api/admin/otp',
    USER_OTP_VERIFY: '/api/admin/otpVerify',
}

const InvoiceRoutes = {
    INVOICE_CREATE: '/api/invoice/save',
    INVOICE_UPDATE: '/api/invoice/update', //you must pass the id in user
    INVOICE_DELETE_ONE: '/api/invoice/delete', //you must pass the id in user
    INVOICE_DELETE_ALL: '/api/invoice/delete_bulk',
    INVOICE_GET_ALL: '/api/invoice/get_all',
    INVOICE_GET_ONE: '/api/invoice/get' //you must pass the id in user
}

const EstimateRoutes = {
    ESTIMATE_CREATE: '/api/invoice/save',
    ESTIMATE_UPDATE: '/api/invoice/update', //you must pass the id in user
    ESTIMATE_DELETE_ONE: '/api/invoice/delete', //you must pass the id in user
    ESTIMATE_DELETE_ALL: '/api/invoice/delete_bulk',
    ESTIMATE_GET_ALL: '/api/invoice/get_all',
    ESTIMATE_GET_ONE: '/api/invoice/get' //you must pass the id in user
}
const ItemsRoutes = {
    ITEM_CREATE: '/api/item/add',
    ITEM_UPDATE: '/api/item/update', //you must pass the id in user
    ITEM_DELETE_ONE: '/api/item/delete', //you must pass the id in user
    ITEM_DELETE_ALL: '/api/item/delete_bulk',
    ITEM_GET_ALL: '/api/item/get_all',
    ITEM_GET_ONE: '/api/item/get' //you must pass the id in user
}

const GOOGLE_CLIENT_ID = "";
const GOOGLE_CLIENT_SECRET = "";

export {
    UserRoutes,
    MAIN_URL,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
    InvoiceRoutes,
    EstimateRoutes,
    MONGODB_URL,
    ItemsRoutes,
    CloudinaryPath
};