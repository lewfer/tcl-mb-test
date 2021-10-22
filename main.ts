namespace plotter {
    //% blockId=plotColumn
    //% block="plot column %height high at %col"
    export function plotColumn (col: number, height: number) {
        for (let index = 0; index <= height; index++) {
            led.plot(col, index)
        }
    }   
}
