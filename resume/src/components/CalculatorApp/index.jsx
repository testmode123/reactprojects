import React, { useState } from 'react';

const CalculatorApp = () => {
    const [num, setNum] = useState("");
    const [resultData, setResultData] = useState("");
    const btnClick = (e) => {
        const currValue = e.target.value;
        switch(currValue){
            case '=':{
                // if(num !==''){
                //     try{
                //         setResultData(eval(num));
                //         setNum("");
                //     }catch(err){
                //         setResultData("Math Error");
                //     }
                // }
                setResultData(eval(num));
                setNum("");
                break;
            }
            case 'C':{
                setResultData("");
                setNum("");
                break;
            }
            case 'Delete':{
                setNum((prevVal) => num.substr(0,num.length - 1));
                break;
            }
            default:{
                setNum((prevValue)=>  (prevValue += currValue));
                break;
            }
        }
    }
    return (
        <>
            <h2>Calculator</h2>
            <textarea value={num} readOnly/> <br/>
            <textarea value={resultData} readOnly/> <br/>
            <button onClick={btnClick} value="9">9</button>
            <button onClick={btnClick} value="8">8</button>
            <button onClick={btnClick} value="7">7</button> <br/>
            <button onClick={btnClick} value="6">6</button>
            <button onClick={btnClick} value="5">5</button>
            <button onClick={btnClick} value="4">4</button> <br/>
            <button onClick={btnClick} value="3">3</button>
            <button onClick={btnClick} value="2">2</button>
            <button onClick={btnClick} value="1">1</button> <br/>
            <button onClick={btnClick} value=".">.</button>
            <button onClick={btnClick} value="0">0</button>
            <button onClick={btnClick} value="">#</button> <br/>
            <button onClick={btnClick} value="/">/</button>
            <button onClick={btnClick} value="*">*</button>
            <button onClick={btnClick} value="-">-</button><br/>
            <button onClick={btnClick} value="+">+</button> 
            <button onClick={btnClick} value="C">C</button>
            <button onClick={btnClick} value="=">=</button>
            <button onClick={btnClick} value="Delete">Delete</button>
        </>
    )
}

export default CalculatorApp;

// import React, { useState } from "react";

// import "./Wrapper.css";
// import "./Screen.css";
// import "./ButtonBox.css";
// import "./Button.css";

// const Wrapper = ({ children }) => {
//   return <div className="wrapper">{children}</div>;
// };

// const Screen = ({ value }) => {
//   return (
//     <input type="text" className="screen" mode="single" max={70}  value={value} readOnly/>
//   );
// };

// const ButtonBox = ({ children }) => {
//   return <div className="buttonBox">{children}</div>;
// };

// const Button = ({ className, value, onClick }) => {
//   return (
//     <button className={className} onClick={onClick}>
//       {value}
//     </button>
//   );
// };


// const btnValues = [
//   ["C", "+-", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ];

// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

// const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// const CalculatorApp = () => {
//   let [calc, setCalc] = useState({
//     sign: "",
//     num: 0,
//     res: 0,
//   });

//   const numClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num) % 1 === 0
//             ? toLocaleString(Number(removeSpaces(calc.num + value)))
//             : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       });
//     }
//   };

//   const commaClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     });
//   };

//   const signClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       sign: value,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     });
//   };

//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//           ? a - b
//           : sign === "X"
//           ? a * b
//           : a / b;

//       setCalc({
//         ...calc,
//         res:
//           calc.num === "0" && calc.sign === "/"
//             ? "Can't divide with 0"
//             : toLocaleString(
//                 math(
//                   Number(removeSpaces(calc.res)),
//                   Number(removeSpaces(calc.num)),
//                   calc.sign
//                 )
//               ),
//         sign: "",
//         num: 0,
//       });
//     }
//   };

//   const invertClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
//       sign: "",
//     });
//   };

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };

//   return (
//     <Wrapper>
//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {btnValues.flat().map((btn, i) => {
//           return (
//             <Button
//               key={i}
//               className={btn === "=" ? "equals" : ""}
//               value={btn}
//               onClick={
//                 btn === "C"
//                   ? resetClickHandler
//                   : btn === "+-"
//                   ? invertClickHandler
//                   : btn === "%"
//                   ? percentClickHandler
//                   : btn === "="
//                   ? equalsClickHandler
//                   : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                   ? signClickHandler
//                   : btn === "."
//                   ? commaClickHandler
//                   : numClickHandler
//               }
//             />
//           );
//         })}
//       </ButtonBox>
//     </Wrapper>
//   );
// };

// export default CalculatorApp;