import { useState } from "react";
import _default from "react-bootstrap/esm/Accordion";

const my = {
    rno: 0,
    name: "",
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    total: 0,
    avg: 0,
    pf : 0,

}

function Result() {

    const [name, setname] = useState(my)
    const [val, setval] = useState([])

    const handle = (e) => {
        setname({ ...name, [e.target.name]: e.target.value });
    }

    const change = () => {
        name.total = parseInt(name.s1) + parseInt(name.s2) + parseInt(name.s3) + parseInt(name.s4) + parseInt(name.s5);
        name.avg = name.total / 5;
        
        if(name.avg <= 33.33){
            name.pf = "Fail";
        }
        if(name.avg >= 33.33){
            name.pf = "Pass";
        }

        setval(val => [...val, name])

    }


    return (
        <>
            <div className="container">

                <div className='title'>
                    <h1>STUDENT RESULT</h1>
                </div>


                <div className="no">
                    <h1>RNO :- <input type="text" onChange={handle} name="rno" value={name.rno} ></input></h1>
                </div>
                <div className="name">
                    <h1>NAME :- <input type="text" onChange={handle} name="name" value={name.name} ></input></h1>
                </div>
                <div className="s1">
                    <h1>S1 :- <input type="text" onChange={handle} name="s1" value={name.s1} ></input></h1>
                </div>
                <div className="s2">
                    <h1>S2 :- <input type="text" onChange={handle} name="s2" value={name.s2} ></input></h1>
                </div>
                <div className="s3">
                    <h1>S3 :- <input type="text" onChange={handle} name="s3" value={name.s3} ></input></h1>
                </div>
                <div className="s4">
                    <h1>S4 :- <input type="text" onChange={handle} name="s4" value={name.s4} ></input></h1>
                </div>
                <div className="s5">
                    <h1>S5 :- <input type="text" onChange={handle} name="s5" value={name.s5} ></input></h1>
                </div>
                <center>
                    <div>
                        <input type="button" value="submit" onClick={change}></input>
                    </div>
                </center>

            </div>

            <br />


            <center>
                <table border={1}>
                    <tr>
                        <th>ROLL NO</th>
                        <th>NAME</th>
                        <th>S1</th>
                        <th>S2</th>
                        <th>S3</th>
                        <th>S4</th>
                        <th>S5</th>
                        <th>TOTAL</th>
                        <th>AVG</th>
                        <th>RESULT</th>
                    </tr>   
                    {
                        val.map((item) => {
                            return (
                                <tr>
                                    <td>{item.rno}</td>
                                    <td>{item.name}</td>
                                    <td>{item.s1}</td>
                                    <td>{item.s2}</td>
                                    <td>{item.s3}</td>
                                    <td>{item.s4}</td>
                                    <td>{item.s5}</td>
                                    <td>{item.total}</td>
                                    <td>{item.avg}</td>
                                    <td>{item.pf}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </center>
        </>
    )
};

export default Result;