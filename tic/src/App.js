import "./App.css";
import { useState } from "react";

let  temp =  0;

function App(){ 
  
  const [btn1, setbtn1] = useState('')
  const [btn2, setbtn2] = useState('')
  const [btn3, setbtn3] = useState('')
  const [btn4, setbtn4] = useState('')
  const [btn5, setbtn5] = useState('')
  const [btn6, setbtn6] = useState('')
  const [btn7, setbtn7] = useState('')
  const [btn8, setbtn8] = useState('')
  const [btn9, setbtn9] = useState('')

  const [disabled, setdisabled] = useState()


  const b1 = () =>{

    if(btn1 != "")
    {
      alert("already clicked")
      return
    }
   
    if (temp%2 == 0) {
      setbtn1("x")
    }else
    {
      setbtn1("o")
    }
    temp++;

    win();    
  }

  const b2 = () =>{
    if (temp%2 == 0) {
      setbtn2("x")
    }else
    {
      setbtn2("o")
    }
    temp++;
    win();
  }

  const b3 = () =>{
    if (temp%2 == 0) {
      setbtn3("x")
    }else
    {
      setbtn3("o")
    }
    temp++;
    win();
  }

  const b4 = () =>{
    if (temp%2 == 0) {
      setbtn4("x")
    }else
    {
      setbtn4("o")
    }
    temp++;
    win();
  }

  const b5 = () =>{
    if (temp%2 == 0) {
      setbtn5("x")
    }else
    {
      setbtn5("o")
    }
    temp++;
    win();
  }

  const b6 = () =>{
    if (temp%2 == 0) {
      setbtn6("x")
    }else
    {
      setbtn6("o")
    }
    temp++;
    win();
  }

  const b7 = () =>{
    if (temp%2 == 0) {
      setbtn7("x")
    }else
    {
      setbtn7("o")
    }
    temp++;
    win();
  }

  const b8 = () =>{
    if (temp%2 == 0) {
      setbtn8("x")
    }else
    {
      setbtn8("o")
    }
    temp++;
    win();
  }

  const b9 = () =>{
    if (temp%2 == 0) {
      setbtn9("x")
    }else
    {
      setbtn9("o")
    }
    temp++;
    win();
  }

  const win = () =>
{
  if(btn1 == 'x' && btn2 ==  'x' && btn3 == 'x')
			{
				alert('x is win')
        setbtn1(disabled)
        setbtn2(disabled)
        setbtn3(disabled)
        setbtn4(disabled)
        setbtn5(disabled)
        setbtn6(disabled)
        setbtn7(disabled)
        setbtn8(disabled)
        setbtn9(disabled)
				
			}
			else if(btn1 == 'x' && btn4 ==  'x' && btn7 == 'x')
			{
				alert('x is win')
				return
			}
			else if(btn7 == 'x' && btn8 ==  'x' && btn9 == 'x')
			{
				alert('x is win')
				return
			}
			else if(btn3 == 'x' && btn6 ==  'x' && btn9 == 'x')
			{
				alert('x is win')
				return
			}
			else if(btn1 == 'x' && btn5 ==  'x' && btn9 == 'x')
			{
				alert('x is win')
				
			}
			else if(btn3 == 'x' && btn5 ==  'x' && btn7 == 'x')
			{
				alert('x is win')
				
			}
			else if(btn4 == 'x' && btn5 ==  'x' && btn6 == 'x')
			{
				alert('x is win')
				
			}

			
			if(btn1 == 'o' && btn2 ==  'o' && btn3 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn1 == 'o' && btn4 ==  'o' && btn7 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn7 == 'o' && btn8 ==  'o' && btn9 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn3 == 'o' && btn6 ==  'o' && btn9 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn1 == 'o' && btn5 ==  'o' && btn9 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn3 == 'o' && btn5 ==  'o' && btn7 == 'o')
			{
				alert('o is win')
				
			}
			else if(btn4 == 'o' && btn5 ==  'o' && btn6 == 'o')
			{
				alert('o is win')
				
			}

			else if((btn1=='x' || btn1=='o') && (btn2=='x' || btn2=='o') && (btn3=='x' || btn3=='o') && (btn4=='x' || btn4=='o') && (btn5=='x' || btn5=='o') && (btn6=='x' || btn6=='o') && (btn7=='x' || btn7=='o') && (btn8=='x' || btn8=='o') && (btn9=='x' || btn9=='o'))
			{
				alert('refresh the page');
			}

			
		}
  
  
  
  return (
    <>
      <center>
        <h1>Tic Tac Toe</h1>
        <div>
          <input type="button" value={btn1} onClick={b1}/>
          <input type="button" value={btn2} onClick={b2}/>
          <input type="button" value={btn3} onClick={b3}/>
        </div>
        <div>
          <input type="button" value={btn4} onClick={b4}/>
          <input type="button" value={btn5} onClick={b5}/>
          <input type="button" value={btn6} onClick={b6}/>
        </div>
        <div>
          <input type="button" value={btn7} onClick={b7}/>
          <input type="button" value={btn8} onClick={b8}/>
          <input type="button" value={btn9} onClick={b9}/>
        </div>
      </center>
    </>
  );
  }


export default App;


