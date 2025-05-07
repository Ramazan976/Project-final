import React, {useState} from "react";

function NumberInput() {
  const [num, setNum] = useState(0);

  const changeNumber = (direction) => {
    if (direction === 'up') {
      setNum(prev => prev + 1);
    } else if (direction === 'down') {
      setNum((prev) => Math.max(0, prev -1));
    }
  }

    return (
      <div className="flex items-center gap-2 relative">
          <button className="absolute left-13 top-0" onClick={() => changeNumber('up')}>
            <i className="fa-solid fa-chevron-up num"></i>
          </button>
          <input type="text" className="border-2 border-[#555555] w-20 h-9 pl-2" value={num} onChange={(e) => setNum(Number(e.target.value))}/>
          <button className="absolute left-13 bottom-0" onClick={() => changeNumber('down')}>
            <i className="fa-solid fa-chevron-down num"></i>
          </button>
      </div>
  )

}
export default NumberInput;