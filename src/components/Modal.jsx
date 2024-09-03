import Button from './Button';
import ImageProvider from './ImageProvider';

function Modal(props) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blacktrans">
      <div className="relative w-auto my-6 mx-auto rounded-xl bg-black">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 rounded-t">
            <div className="col-start-1">
              {props.icon && <img src={ImageProvider(props.icon)} className="ml-8 w-32" alt="icon" />}
            </div>
            <h3 className="text-3xl font-semibold pt-8  max-w-3xl">{props.title}</h3>
          </div>

          {props.children}

          {/*footer*/}
          <div className="flex items-center justify-end p-6">
            <Button onClick={props.onClose}>{props.language === 'pt' ? 'Voltar' : 'Back'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
