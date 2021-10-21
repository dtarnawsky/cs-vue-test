import { createGesture } from "@ionic/core";

export const registerCoolBeansGesture = () => {
    let tapCount = 0;
    let lastTarget: EventTarget | null;

    const gesture = createGesture({
        el: window.document.querySelector("#app") as Element,
        threshold: 0,

        gestureName: "showState",
        passive: true,
        onStart: ev => {
            try {
                if (ev.event.target === lastTarget) {
                    tapCount++;
                    console.log('Cool beans', tapCount);
                    if (tapCount >= 3) {
                        lastTarget = null;
                        tapCount = 0;
                        console.log('Cool beans Activate!');

                    }
                } else {
                    lastTarget = ev.event.target;
                    tapCount = 1;
                    console.log('Cool beans', tapCount);
                }
            } catch (error) {
                console.error("Error in Cool Beans gesture", error);
            }
        }
    });
    gesture.enable();
    console.log('registerCoolBeansGesture', window.document.querySelector("#app"));
};