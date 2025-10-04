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
    return a % 2 !== 0;
  };

  //   Cube Function to find cube of number

  const cubeOfNumber = (x: number): number => {
    return x * x * x;
    // return Math.exp(x,3)
    // return x**3
  };

  const isVowel = (ch: string): boolean => {
    return (
      ch === "a" ||
      ch === "e" ||
      ch === "i" ||
      ch === "o" ||
      ch === "u" ||
      ch === "A" ||
      ch === "E" ||
      ch === "I" ||
      ch === "O" ||
      ch === "U"
    )
      
  };


//   const isConsonant = (chr:string):boolean => {
//     const consonant_list = ['b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
//     const ch = chr.toLowerCase()
//     return (consonant_list.includes(ch))
    
//   };

const isConsonant = (chr:string):boolean => {
    return !isVowel(chr)
    
   };




  const isUpperCase = (chr:string):boolean =>{
    return(chr === chr.toUpperCase())
  }



// Taable of 5 Function called on Click

const multiplicationTable = (x:number):void => {
    for(let i =1 ; i<=10 ; i++){
        console.log(`5 x ${i} = ${i*x}`)
    }
}



  return (
    <div >
      Result:{multiply(x, y)}
      <p>Addition Result: {my_avg(4, 6, 8)}</p>
      <p>Result: {isEven(6) ? "Even" : "Not Even"}</p>
      <p>Result: {isOdd(81) ? "Odd" : "Not Odd"}</p>
      <p>Cube Result: {cubeOfNumber(4)}</p>
      <p>isVowel: {isVowel("g") ? "vowel" : "Consonant"} </p>
      <p>isConsonent: {isConsonant('a') ? "consonent" : "not Consonant"} </p>
      <p>isUpperCase: {isUpperCase("g") ? "Yes Uppercase" : "Not Uppercase"} </p>

      <button className="bg-green-500" onClick={()=> multiplicationTable(5) }>Table of 5</button>
    </div>
  );
};

export default MultiplyFunction;
