import { ReactComponent as Swap } from '../assets/icons/swap.svg';
import Button from './Button';

function Header() {
  return (
     <nav className="fixed min-w-full flex items-center justify-between flex-nowrap">
      <div className="flex items-center flex-no-shrink mr-6">
         <Button onClick={(e) => console.log(e)}>
          <Swap className="h-4" />
         </Button>
      </div>
      <div className="flex items-center flex-no-shrink text-gray-200 mr-20">  
        <Button onClick={(e) => console.log(e)}>
          Blog
        </Button>
      </div>
     </nav>
  );
}

export default Header;