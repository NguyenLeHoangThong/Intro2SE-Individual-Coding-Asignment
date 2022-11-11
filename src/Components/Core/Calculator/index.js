import { useState } from 'react'
import { Container } from 'Components/Common/Container';
import { Screen } from 'Components/Common/Screen';
import { Current } from 'Components/Common/Current';
import { Previous } from 'Components/Common/Previous';
import { Button } from 'Components/Common/Button';
import { ButtonContainer } from 'Components/Common/ButtonContainer';

export default function Calculator() {
  return (
    <div>
        <Container>
          <Screen>
              <Current>10</Current>
              <Previous>10 +</Previous>
          </Screen>
          <ButtonContainer>
            <Button spanTwoColumn control>AC</Button>
            <Button>DEL</Button>
            <Button operation>%</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button operation>X</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button operation>+</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button operation>-</Button>
            <Button>.</Button>
            <Button>0</Button>
            <Button spanTwoColumn operation>=</Button>
          </ButtonContainer>
        </Container>
    </div>
  )
}
