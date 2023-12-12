import { createSlice } from "@reduxjs/toolkit";
import IPHONE1 from "../../Assets/mobile-1.png"
import IPHONE2 from "../../Assets/mobile-2.png"
import IPHONE3 from '../../Assets/mobile-3.png'
import IPHONE4 from '../../Assets/mobile-4.png'
import IPHONE5 from '../../Assets/mobile-5.png'
import Camera1 from '../../Assets/camera-1.png'
import Camera2 from '../../Assets/camera-2.png'
import Camera3 from '../../Assets/camera-3.png'
import Camera4 from '../../Assets/camera-4.png'
import Camera5 from '../../Assets/camera-5.png'
import watch1 from '../../Assets/watch-1.png'
import watch2 from '../../Assets/watch-2.png'
import watch3 from '../../Assets/watch-3.png'
import watch4 from '../../Assets/watch-4.png'
import watch5 from '../../Assets/watch-5.png'
import watch6 from '../../Assets/watch-6.png'
import watch7 from '../../Assets/watch-7.png'
import Speaker1 from '../../Assets/speaker-1.png'
import Speaker2 from '../../Assets/speaker-2.png'
import Speaker3 from '../../Assets/speaker-3.png'
import Speaker4 from '../../Assets/speaker-4.png'
import Speaker5 from '../../Assets/speaker-5.png'

const initialState = {cart:[{
    id:1,
    title:"iPhone-11",
    image:IPHONE1,
    price:10000,
    count:0,
    totalamount:10000,
    category:"mobile"
},{
    id:2,
    title:"iPhone-2",
    image:IPHONE2,
    price:10500,
    count:0,
    totalamount:10500,
    category:"mobile"
},{
    id:3,
    title:"iPhone-3",
    image:IPHONE3,
    price:10600,
    count:0,
    totalamount:10600,
    category:"mobile"
},{
    id:4,
    title:"iPhone-4",
    image:IPHONE4,
    price:10700,
    count:0,
    totalamount:10700,
    category:"mobile"
},{
    id:5,
    title:"iPhone-5",
    image:IPHONE5,
    price:10800,
    count:0,
    totalamount:10800,
    category:"mobile"
},
{
    id:6,
    title:"Watch-1",
    image:watch1,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},
{
    id:7,
    title:"Watch-2",
    image:watch2,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},{
    id:8,
    title:"Watch-3",
    image:watch3,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},{
    id:9,
    title:"Watch-4",
    image:watch4,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},{
    id:10,
    title:"Watch-5",
    image:watch5,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},{
    id:11,
    title:"Watch-6",
    image:watch6,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},{
    id:12,
    title:"Watch-7",
    image:watch7,
    price:10800,
    count:0,
    totalamount:10800,
    category:"watch"
},
{
    id:13,
    title:"speaker-1",
    image:Speaker1,
    price:10800,
    count:0,
    totalamount:10800,
    category:"speaker"
},{
    id:14,
    title:"speaker-2",
    image:Speaker2,
    price:10800,
    count:0,
    totalamount:10800,
    category:"speaker"
},{
    id:14,
    title:"speaker-3",
    image:Speaker3,
    price:10800,
    count:0,
    totalamount:10800,
    category:"speaker"
},{
    id:15,
    title:"speaker-4",
    image:Speaker4,
    price:10800,
    count:0,
    totalamount:10800,
    category:"speaker"
},{
    id:16,
    title:"speaker-5",
    image:Speaker5,
    price:10800,
    count:0,
    totalamount:10800,
    category:"speaker"
},{
    id:17,
    title:"camera-1",
    image:Camera1,
    price:10800,
    count:0,
    totalamount:10800,
    category:"camera"
},
{
    id:18,
    title:"camera-2",
    image:Camera2,
    price:10800,
    count:0,
    totalamount:10800,
    category:"camera"
},{
    id:19,
    title:"camera-3",
    image:Camera3,
    price:10800,
    count:0,
    totalamount:10800,
    category:"camera"
},{
    id:20,
    title:"camera-4",
    image:Camera4,
    price:10800,
    count:0,
    totalamount:10800,
    category:"camera"
},{
    id:21,
    title:"camera-5",
    image:Camera5,
    price:10800,
    count:0,
    totalamount:10800,
    category:"camera"
}]}
export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
     products(state,action){

     }
    }
})

export const {products} =cartSlice.actions
export default cartSlice.reducer