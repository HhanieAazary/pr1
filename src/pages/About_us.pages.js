import React from 'react'
import Aboutimg from "../assets/images/about.png"

export default function About_uspages() {
  return (
    <div className=' container '>

      <div className='row'>
        <div className='col-12 bg-info p-3 rounded'>

         AboutUs
        </div>

      </div>
      
      <div className='row align-items-center mt-1' >

        <div className='col-md-7 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolores neque cupiditate excepturi. Amet non fugit qui repellat laborum adipisci illum,
          harum repudiandae earum culpa suscipit laboriosam nobis mollitia animi asperiores expedita,
          delectus corporis, ullam eveniet. Perferendis impedit possimus fugit harum dicta voluptates
          reprehenderit iure quasi vero maiores, magni hic sunt nesciunt sapiente numquam ducimus omnis
          consequatur id ipsa reiciendis. Alias molestias porro quisquam aperiam laborum, nobis numquam
          recusandae quod aspernatur amet quaerat rem reprehenderit optio dicta autem, a explicabo
          officiis? Officiis eveniet consequatur ad eaque quasi beatae tempore a aperiam earum?
          Architecto facere nam,
          omnis adipisci animi quidem voluptatem doloribus.
        </div>
        <div className='col-md-5 text-center'>
        <img src = {Aboutimg} alt = "about"  className='img-fluid about_img'/>
        </div>
        
      </div>


    </div>
  )
}
