import { useState } from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const [show, setShow] = useState(false);

  return (
    <nav className="fixed min-w-full flex items-center justify-between flex-nowrap">
      <div className="flex items-center flex-no-shrink mr-6">
        <select
          className="bg-black"
          selected={props.language}
          onChange={(e) => {
            props.changeLanguage(e.target.value);
            setShow(false);
          }}
        >
          <option value="en">🇬🇧</option>
          <option value="pt">🇵🇹</option>
        </select>
      </div>
      {/* <div className="flex items-center flex-no-shrink text-gray-200 mr-20">  
        <Button onClick={(e) => console.log(e)}>
          Blog
        </Button>
      </div> */}
    </nav>
  );
}

Header.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default Header;
