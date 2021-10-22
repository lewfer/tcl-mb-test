namespace plotter {
    //% blockId=plotColumn
    //% block="plot column %height high at col %col"
    //% col.min=0 col.max=3
    //% height.min=0 height.max=3
    export function plotColumn (col: number, height: number) {
        for (let index = 0; index < height; index++) {
            led.plot(col, index)
        }
    }   
}
