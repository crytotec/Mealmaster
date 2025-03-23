import style from './contact.module.css';

function Contact() {
    return (
        <div className={style.body}>
            <div>
                <form className={style.form}>
                    <div className={style.name}>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' placeholder='Input your name' />
                    </div>
                    <div className={style.name}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' placeholder='Input your email' />
                    </div>
                    <div className={style.name}>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='tel' id='phone' placeholder='Input your phone number' />
                    </div>
                    <div className={style.comment}>
                        <label htmlFor='comment'>Comment:</label>
                        <textarea id='comment' placeholder='Input your comment' />
                    </div>
                    <button type='submit' className={style.btn}>Submit</button>
                    <div className={style.details1}>
                    <div className={style.details}>
                    <h2 style={{color:'white'}}>Email:</h2>
                   <p>Seyioladimeji790@gmail.com</p>
                    </div>
                    <div className={style.design}>|</div>
                    <div className={style.details}>
                    <h2 style={{color:'white'}}>Phone:</h2>
                   <p>+2349062051901</p>
                    </div>
                    </div>
                    
                    
                </form>
                           </div>
        </div>
    );
}

export default Contact;