import { func1  } from "./info.js";
import { func2 } from "./image.js";


const wrapper = document.querySelector(".wrapper")

const data = {
    title: "Loki the God of Stories",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn:"click here",
    img: "",

    title2:"PROJECT COMPLTE",
    img1:"download (1).jpg",
    img2:"download (1).jpg",
    img3:"download (1).jpg",
    para1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn2:"click here",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",


}


const { title, para,  btn, img ,title2,img1,img2,img3,para1,btn2,para2,para3} = data

wrapper.append(func1(title,para,btn,btn2))
wrapper.append(func2(img,img1,img2,img3))
