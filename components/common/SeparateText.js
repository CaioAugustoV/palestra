import React, { useState, useEffect } from 'react';

export function SeperateText(props) {
  const [TextChange, setTextChange] = useState([])
  const [Text, setText] = useState([])

  useEffect(() => {
    let x = [];
    x = props.split("");
    let y = [];
    for (let index = 0; index < x.length; index++) {
      y = [...y, [x[index], index]]
    }
    y.map((el,i) => {
      setTimeout(() => {
        const AddressID = el[0];
        setTextChange(AddressID)
      }, i * 300);
    })
  }, [])

  useEffect(() => {
    setText([...Text, ...TextChange])
  }, [TextChange])

  return Text
}
