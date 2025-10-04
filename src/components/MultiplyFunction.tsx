interface MultiplyFunctionProps {
  x: number;
  y: number;
}

const MultiplyFunction = ({ x, y }: MultiplyFunctionProps) => {
  // function Multiply that adds first number to second Number times
  function multiply(x: number, y: number): number {
    let totalSum = 0;
    for (let i = 0; i < y; i++) {
      totalSum = totalSum + x;
    }
    return totalSum;
  }

  // \function that is finding average of Three Numbers

  const my_avg = (a: number, b: number, c: number): number => {
    return (a + b + c) / 3;
  };

//   Check Even Function
  const isEven = (a: number): boolean => {
    if (a % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  //   Check ODD Function
  const isOdd = (a: number): boolean => {
    return (a % 2 !== 0)
  };


//   Cube Function
const cubeOfNumber = (x:number):number =>{
    return x*x*x
}

  return (
    <div>
      Result:{multiply(x, y)}
      <p>Addition Result: {my_avg(4, 6, 8)}</p>
      <p>Result: {isEven(6) ? "Even":"Not Even"}</p>
      <p>Result: {isOdd(81) ? "Odd":"Not Odd"}</p>
      <p>Cube Result: {cubeOfNumber(4)}</p>
    </div>
  );
};

export default MultiplyFunction;
