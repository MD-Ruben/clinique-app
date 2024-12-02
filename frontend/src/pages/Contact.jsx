import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Nous contacter</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
        Vous avez un problème technique ? Vous souhaitez nous faire part de vos commentaires sur une fonction bêta ? Faites-nous part de vos commentaires
        </p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>
              Votre Email
            </label>
            <input 
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className='form__input mt-1' 
            />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>
              Sujet
            </label>
            <input 
              type="text"
              id="sujet"
              placeholder="Faites-nous savoir comment nous pouvons vous aider"
              className='form__input mt-1' 
            />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>
              Votre Message
            </label>
            <input 
              rows="6"
              type="text"
              id="message"
              placeholder="congé"
              className='form__input mt-1' 
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
