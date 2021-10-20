import { toastController } from "@ionic/vue";
import { ToastOptions } from "@ionic/vue";

const buildPopup = (options: ToastOptions): Promise<HTMLIonToastElement> => {
    const defaults: ToastOptions = {
        position: "bottom",
        duration: 2000,
        color: "success"
    };
    return toastController.create(Object.assign(defaults, options));
}

export const showPopup = (options: ToastOptions | string): Promise<unknown> => {
    if (typeof options === "string") return showPopup({ message: options });
    return buildPopup(options).then((toast): Promise<void> => toast.present());
}