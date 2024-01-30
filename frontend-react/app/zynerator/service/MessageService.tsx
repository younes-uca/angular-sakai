export const MessageService = {

    showToast: (toastRef:any, options:any) => {
        if (toastRef && options) {
            toastRef.current?.show(options);
        }
    },

    showSuccess: (toastRef:any, message:any) => {
        let options = {severity: 'success', summary: 'Successful', detail: message, life: 3000};
        toastRef.current?.show(options);
    },

    showError: (toastRef:any, message:any) => {
        let options = {severity: 'error', summary: 'Erreur', detail: message, life: 3000};
        toastRef.current?.show(options);
    }
};