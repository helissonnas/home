import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';

function Contact(props) {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const [state, handleSubmit] = useForm("mqkwwjnk");
  if (state.succeeded) {
      return <section className="text-gray-200 w-full md:w-4/5 mt-8">Obrigado por entrar em contato!</section>;
  }

  return (
    <section className="text-gray-200 w-full md:w-4/5 mt-8">
      <h1 className="text-2xl md:text-4xl font-bold">{props.language === 'en' ? 'Contact' : 'Contato'}</h1>
      <Card clearCard>
          <form className="p-8" onSubmit={handleSubmit}>
            <Input value={email} onChange={setEmail} name="email" label={props.language === 'en' ? 'E-mail' : 'E-mail'} type="email"/>
            <ValidationError 
              prefix={props.language === 'en' ? 'Email' : 'E-mail'} 
              field="email"
              errors={state.errors}
            />
        
            <Input value={content} onChange={setContent} name="message" label={props.language === 'en' ? 'Content' : 'Conteúdo'} type="textarea"/>
            <ValidationError 
              prefix={props.language === 'en' ? 'Message' : 'Mensagem'} 
              field="message"
              errors={state.errors}
            />  

            <div className="grid items-end justify-end text-gray-200">
              <Button type="submit">{props.language === 'en' ? 'Send' : 'Enviar'}</Button>
            </div>
          </form>
      </Card>
    </section>
  )
}

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contact;
