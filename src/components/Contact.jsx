import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const [state, handleSubmit] = useForm("mqkwwjnk");
  if (state.succeeded) {
      return <section className="text-gray-200  w-4/5 mt-8">Obrigado por entrar em contato!</section>;
  }

  return (
    <section className="text-gray-200  w-4/5 mt-8">
      <h1 className="text-4xl font-bold">Contato</h1>
      <Card clearCard>
          <form className="p-8" onSubmit={handleSubmit}>
            <Input value={email} onChange={setEmail} name="email" label="E-mail" type="email"/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
        
            <Input value={content} onChange={setContent} name="message" label="Conteúdo" type="textarea"/>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />  

            <div className="grid items-end justify-end text-gray-200">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
      </Card>
    </section>
  )
}

export default Contact;
