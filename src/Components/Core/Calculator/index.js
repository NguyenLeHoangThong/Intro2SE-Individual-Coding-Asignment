import { useState } from 'react'
import { Container } from 'Components/Common/Container';
import { Screen } from 'Components/Common/Screen';
import { Current } from 'Components/Common/Current';
import { Previous } from 'Components/Common/Previous';
import { Button } from 'Components/Common/Button';
import { ButtonContainer } from 'Components/Common/ButtonContainer';

export default function Calculator() {

  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operationValue, setOperationValue] = useState("");

  const handleClickNumber = (data) => {
    if (data === "." && String(currentValue).includes(".")) return;
    setCurrentValue((prev) => prev + data);
  }

  const handleAC = () => {
    setCurrentValue("");
    setPreviousValue("");
    setOperationValue("");
  }

  const handleDEL = () => {
    setCurrentValue(String(currentValue).slice(0, -1));
  }

  const compute = () => {
    let result;
    const previousNumber = parseFloat(previousValue);
    const currentNumber = parseFloat(currentValue);
    switch (operationValue) {
      case "%":
        result = previousNumber / currentNumber;
        break;
      case "X":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  const handleClickOperator = (data) => {
    if (currentValue === "") return;
    
    if (previousValue !== "") {
      setPreviousValue(compute());
    } 
    else 
    {
      setPreviousValue(currentValue);
    }
    setCurrentValue("");
    setOperationValue(data);
  }

  const handleClickCompute = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrentValue(value);
    setPreviousValue("");
    setOperationValue("");
  };

  return (
    <div>
      <Container>
        <Screen>
          <Previous>{previousValue} {operationValue}</Previous>
          <Current>{currentValue}</Current>
        </Screen>
        <ButtonContainer>
          <Button spanTwoColumn control onClick={() => handleAC()}>AC</Button>
          <Button onClick={() => handleDEL()}>DEL</Button>
          <Button operation onClick={() => handleClickOperator("%")}>%</Button>
          <Button onClick={() => handleClickNumber("7")}>7</Button>
          <Button onClick={() => handleClickNumber("8")}>8</Button>
          <Button onClick={() => handleClickNumber("9")}>9</Button>
          <Button operation onClick={() => handleClickOperator("X")}>X</Button>
          <Button onClick={() => handleClickNumber("4")}>4</Button>
          <Button onClick={() => handleClickNumber("5")}>5</Button>
          <Button onClick={() => handleClickNumber("6")}>6</Button>
          <Button operation onClick={() => handleClickOperator("+")}>+</Button>
          <Button onClick={() => handleClickNumber("1")}>1</Button>
          <Button onClick={() => handleClickNumber("2")}>2</Button>
          <Button onClick={() => handleClickNumber("3")}>3</Button>
          <Button operation onClick={() => handleClickOperator("-")}>-</Button>
          <Button onClick={() => handleClickNumber(".")}>.</Button>
          <Button onClick={() => handleClickNumber("0")}>0</Button>
          <Button spanTwoColumn operation onClick={handleClickCompute}>=</Button>
        </ButtonContainer>
      </Container>
    </div>
  )
}
