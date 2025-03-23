import style from './style.module.css';
import riceEfo from '../Images/yoruba/riceandEfo.jpeg';
import { setFood } from '../Item';
import {dietaryFood} from '../Item';
import {winterFood} from '../Item';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Index() {
    const [slide, setSlide] = useState(0);
    const slideLength = 3;
    const totalSlides = Math.ceil(setFood.length / slideLength); 

    const updateSlideNext = () => {
        setSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const updateSlidePrev = () => {
        setSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const updateslidefunction = setFood.slice(slide * slideLength, (slide + 1) * slideLength);


    const [slide2, setSlide2]= useState(0);
    const slideth=[
        {id:1, text:'Whole grains are a great source of fiber and essential nutrients. Foods like brown rice, quinoa, whole wheat bread, and oats are excellent choices.They help with digestion, keep you feeling full longer, and provide sustained energy.'},
        {id:2, text:'Vegetables are crucial for a healthy diet. Aim to fill half your plate with a variety of colorful vegetables.Leafy greens, bell peppers, carrots, and tomatoes are packed with vitamins, minerals, and antioxidants. Try to include both raw and cooked vegetables in your meals.'},
        {id:3, text:'Incorporate lean protein sources into your diet, such as chicken, turkey, fish, beans, lentils, and tofu.These options are lower in saturated fat compared to red meat and provide essential amino acids for muscle repair and overall health.'},
        {id:4, text:'Drink plenty of water throughout the day to stay hydrated.Limit sugary drinks and sodas, as they can add unnecessary calories. Herbal teas and infused water with fruits can be refreshing alternatives.'},
        {id:5, text:'Minimize the intake of processed foods and snacks, which often contain added sugars, unhealthy fats, and preservatives. Instead, focus on whole, natural foods.For snacks, consider options like fresh fruits, nuts, yogurt, or homemade snacks.'},
        {id:6, text:'Consider meal prepping to save time during the week. Preparing meals in advance can help you stick to your healthy eating goals and reduce the temptation to opt for unhealthy convenience foods.'}


    ]
    const slide2length=3;
    const totalSlide2=Math.ceil(slideth.length/slide2length)


    const slide2next = () =>{
        setSlide2((prevslide)=> (prevslide+1)%totalSlide2)
    }
 
    const slide2prev=()=>{
        setSlide2((prevslide)=>(prevslide -1 + totalSlide2) % totalSlide2)
    }
    const slide2Upadte= slideth.slice(slide2*slide2length,(slide2 + 1)* slide2length)
    
    return (
        <div>
            <div className={style.section}>
                <img className={style.images} src={riceEfo} alt="Delicious Sharwama Dish" />
                <div className={style.set}>
                    <h1 className={style.text}>Plan Your Meals, Simplify Your Life</h1>
                    <p className={style.para}>Get started with our easy-to-use meal planning tool</p>
                    <button className={style.btn}>
                        <a href=''>Start planning</a>
                    </button>
                </div>
            </div>
            <div className={style.section2}>
                <h1 className={style.text1}>Deliciously Curated, just for you!</h1>
                <div className={style.par}>
                    <h1>Plan Your Meal with Mealmaster</h1>
                </div>
            </div>
            <div className={style.setMap}>
                <div className={style.slide}>
                    <FaArrowLeft className={style.icon} onClick={updateSlidePrev} />
                    <FaArrowRight className={style.icon} onClick={updateSlideNext} />
                </div>
                {updateslidefunction.map((item) => (
                    <div className={style.map} key={item.id}>
                        <img className={style.img} src={item.img} alt={item.alt} />
                        <h2 className={style.name}>{item.name}</h2>
                        <p className={style.description}>{item.description}</p>
                    </div>
                ))}
            </div>
          
               <h2 className={style.text2}>How MealMaster advises on how to eat healthy</h2>
               <div className={style.section3}>
               {slide2Upadte.map((item)=>(
                    <div key={item.id} >
                        <div className={style.card}>
                            {item.text}
                            </div>
                        </div>
               ))}
               </div>
              <div className={style.pag}>
                <div onClick={slide2next} className={style.num}>
                <h1 className={style.num}>1</h1>
                </div>
                <div onClick={slide2prev} className={style.num}>
                <h1 className={style.num}>2</h1>
                </div>
              </div>
              <div className={style.deitary}>
              <h2>Dietary Tips</h2>
              <div className={style.deitarydes}>
              {dietaryFood.map((item)=>(
                <div  key={item.id} className={style.deitarydes}>
                    <div className={style.dd}>
                   <img className={style.img} src={item.img} alt={item.alt} />
                   <p>{item.name}</p>
                   </div>
                </div>
              ))}
              </div>
              </div>


              <div className={style.winter}>
              <h2>Winter Foods</h2>
              <div className={style.wintertittle}>
              {winterFood.map((item)=>(
                  <div className={style.wintertittle} key={item.id}>
                   <div className={style.winterdes}>
                   <h2>{item.name}</h2>

                   <p>{item.description}</p>
                   </div>
                </div>
              ))}
              </div>
              </div>
        </div>
    );
}

export default Index;