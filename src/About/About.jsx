import Style from './style.module.css'


function About(){
  return(
    <div>
      <div className={Style.descript}>
        <h1>Our Mission</h1>
        <p className={Style.des}>MealMaster is dedicated to helping people eat smarter, not harder. Our Mission
          is to provide personalized nutrition guidance, healthy recipes, and expert advice
          to support a balanced lifestyle.
        </p>

        <h1>Our Vision</h1>
        <p className={Style.des}>MealMaster envisions a future where individuals and communities
          thrive on balanced diets, fostering a culture of wellness, self-care, and environmental sustainability.
        </p>

        <h1>Our Values</h1>
        <div className={Style.des}>        <p>
          <span style={{fontWeight:'bold'}}>Personalization:</span> We tailor our guidance to individuals
          needs, goals, and lifestyles.
        </p>
        <p>
          <span style={{fontWeight:'bold'}}>sustainability:</span> We promote environmentally friendly and socially
          responsible food choices.
        </p>
        <p>
          <span style={{fontWeight:'bold'}}>community:</span> We foster a supportive and inclusive environment
          for users to share and learn.
        </p>
        </div>

      </div>
    </div>
  )
}
export default About