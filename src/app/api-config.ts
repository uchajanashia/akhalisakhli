export const URL = 'https://backend.mr-morrison.duckdns.org';
export const imgurl = 'https://backend.mr-morrison.duckdns.org/api/v1/admin-panel/get-page-img/';
export const API = {
    auth: {
        Check_JWT: '/api/v1/user-details/is-token-validate',
        Login: '/api/v1/auth/authenticate',
        Verify_2FA_LogIn: '/api/v1/auth/verify2fa',
        Verify_Reset_Password: '/api/v1/auth/verify_reset_code',
        logout: '/api/v1/user-details/logout',
        Reset_Password: '/api/v1/auth/reset_password/',
        postExample: '/api/v1/auth/authenticate',
    },
    Manage_Users: {
        Add_New_User: '/api/v1/manage-user/register',
        Get_User_List: '/api/v1/manage-user/get-user-list',
        deleteUserList: '/api/v1/manage-user/delete-user-list',
    },
    User_Details: {
        Get_User_Data: '/api/v1/user-details/get-user-data',
        request_update_user_data: '/api/v1/user-details/request-update-user-data',
        update_user_data: '/api/v1/user-details/update-user-data',
        getUserImg: '/api/v1/user-details/get-user-img',
        uploadUserImg: '/api/v1/user-details/upload-user-img',
        },
    Manage_Page: {
            GetAllPage: '/api/v1/admin-panel/get-all-page',
            GetPageById: '/api/v1/admin-panel/get-page-by-id/f869586b-cf00-4888-8e4d-1cf31cbfff31',
            Create_Or_Inital_Page: '/api/v1/admin-panel/create-or-initial-page',
            AddPageComponentsInPage: '/api/v1/admin-panel/add-page-components-in-page',
            updatePageModal: '/api/v1/admin-panel/update-page-modal',
            UpdatePageComponent: '/api/v1/admin-panel/update-page-component-modal',
            deletePageComponents: '/api/v1/admin-panel/delete-page-components',
            deletePages: '/api/v1/admin-panel/delete-pages',
            uploadPageImg: '/api/v1/admin-panel/upload-user-img',
            deleteVideo: '/api/v1/admin-panel/upload-user-video',
            DeleteFileImg: '/api/v1/admin-panel/delete-img/Screenshot 2024-03-21 175717.png',
            DelerrePageVideo: '/api/v1/admin-panel/delete-video/Desktop 2024.02.15 - 17.59.10.01.mp4',
            GetPageVideo: '/api/v1/admin-panel/get-page-vid/Desktop 2024.02.15 - 17.59.10.01.mp3',
            GetPageImg: '/api/v1/admin-panel/get-page-img/Screenshot 2024-03-21 175717.png',
        },
    Manage_Customer: {
        CreateCustomerOrAddMessage: '/api/v1/manage-customer/create-customer-or-add-message',
        WriteOrUpdateCommentOnMessage: '/api/v1/manage-customer/write-comment-on-message',
        UpdateCustomerData: '/api/v1/manage-customer/update-customer-data',
        ratecustomer: '/api/v1/manage-customer/rate-customer',
        CheckOrUncheckCustomer: '/api/v1/manage-customer/check-or-uncheck-customer/',
        CheckOrUnCheckMsg: '/api/v1/manage-customer/check-or-uncheck-customer-message/',
        DeleteCustomerMessage: '/api/v1/manage-customer/delete-customer-message/',
        DeleteCustomer: '/api/v1/manage-customer/delete-customer/',
        GetAllCustomerModal: '/api/v1/manage-customer',
        },
};
