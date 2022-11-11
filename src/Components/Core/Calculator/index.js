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

  const handleClick = (data) => {
    if (data === "." && currentValue.includes(".")) return;
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

  return (
    <div>
        <Container>
          <Screen>
              <Current>{currentValue}</Current>
              <Previous>{previousValue} {operationValue}</Previous>
          </Screen>
          <ButtonContainer>
            <Button spanTwoColumn control onClick={() => handleAC()}>AC</Button>
            <Button onClick={() => handleDEL()}>DEL</Button>
            <Button operation>%</Button>
            <Button onClick={() => handleClick("7")}>7</Button>
            <Button onClick={() => handleClick("8")}>8</Button>
            <Button onClick={() => handleClick("9")}>9</Button>
            <Button operation>X</Button>
            <Button onClick={() => handleClick("4")}>4</Button>
            <Button onClick={() => handleClick("5")}>5</Button>
            <Button onClick={() => handleClick("6")}>6</Button>
            <Button operation>+</Button>
            <Button onClick={() => handleClick("1")}>1</Button>
            <Button onClick={() => handleClick("2")}>2</Button>
            <Button onClick={() => handleClick("3")}>3</Button>
            <Button operation>-</Button>
            <Button onClick={() => handleClick(".")}>.</Button>
            <Button onClick={() => handleClick("0")}>0</Button>
            <Button spanTwoColumn operation>=</Button>
          </ButtonContainer>
        </Container>
    </div>
  )
}
