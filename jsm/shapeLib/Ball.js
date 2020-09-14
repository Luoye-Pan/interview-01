import Shape from "./Shape.js"

/*Ball 圆点对象
*   r半径
* */

export default class Ball extends Shape{
    constructor(...attrs) {
        super(...attrs,{r:5});
    }
    crtPath(ctx){
        const {orign,r}=this;
        ctx.beginPath();
        ctx.arc(
            orign.x,orign.y,r,
            0,Math.PI*2,
        )
    }
}
