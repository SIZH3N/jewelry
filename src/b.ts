/// <reference types="@workadventure/iframe-api-typings" 

export function day_night_cycle(dayFolder: string, nightFolder: string) {
    let today = new Date();
    let time = today.getHours();
    if (time >= 17 && time <= 6) {
        WA.room.hideLayer(dayFolder);
        WA.room.showLayer(nightFolder);
    }
    else{
        WA.room.hideLayer(nightFolder);
        WA.room.showLayer(dayFolder);    
    }
}