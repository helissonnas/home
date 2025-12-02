import Button from './Button';
import ImageProvider from './ImageProvider';

function Modal(props) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-blacktrans p-4">
      <div className="relative w-full max-w-3xl mx-auto my-6 rounded-xl bg-black max-h-[90vh] overflow-y-auto">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          {/*header*/}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 sm:p-5 rounded-t gap-3">
            <div className="flex-shrink-0">
              {props.icon && <img src={ImageProvider(props.icon)} className="w-16 sm:w-24 md:w-32" alt="icon" />}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left sm:pt-4 md:pt-8">{props.title}</h3>
          </div>

          {props.children}

          {/*footer*/}
          <div className="flex items-center justify-center sm:justify-end p-4 sm:p-6">
            <Button onClick={props.onClose}>{props.language === 'pt' ? 'Voltar' : 'Back'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
