import { useState } from "react";

const Like = () => {

const [isLike, setisLike] = useState(false)

const buttonClassName = isLike ? 'btn-like isLike' : 'btn-like'
const handleClick = () =>{
  setisLike(!isLike)
}

  return (
    <div className="flex">
      <button className={buttonClassName} onClick={handleClick}>
        <i className="bx bx-heart inset-1 text-center py-1 text-[#ffffff]"></i>
      </button>
    </div>
  );
};

export default Like;