
const MAIN_URL = 'http://localhost:3008';

const UserRoutes={
    USER_LOGIN_URL : '/api/admin/login',
    USER_LOG_OUT :'/api/admin/logout',
    USER_REFRESH_TOKEN : '/api/admin/refresh',
    USER_UPDATE : '/api/admin/update/', //you must pass the id in user
    USER_FORGET_PASSWORD : '/api/admin/forgetPassword',
    USER_PASSWORD_UPDATE : '/api/admin/update/pwd/', //you must pass the id in user
    USER_DELETE : '',
    USER_AVATOR_UPDATE : '/api/admin/image/upload/', //you must pass the id in user
    USER_AVATOR_DELETE : '/api/admin/image/delete/', //you must pass the image id in user
    USER_OTP : '/api/admin/otp',
    USER_OTP_VERIFY : '/api/admin/otpVerify',
}

export {UserRoutes,MAIN_URL};