/// <reference types="@workadventure/iframe-api-typings" />

let currentPopup: any;

export const config = [
    {
        zone: 'fireplacezone',
        message: 'Hey! Is this office warm?',
        cta: [
            {
                label: 'Yes',
                className: 'primary',
                callback: () => {WA.room.hideLayer('others/fire');}
            },
            {
                label: 'No',
                className: 'primary',
                callback: () => {WA.room.showLayer('others/fire');}
            }
        ]
    },
]

export function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        currentPopup = WA.ui.openPopup(popupName, zone.message, zone.cta)

    }
}

export function closePopup(){
    if (typeof currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}