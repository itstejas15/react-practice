import React, { useCallback, useState } from 'react';

const CustomAccordion = ({ i, handleExpand, handleCheckbox }) => {
  return <div>
    <div style={{ border: '1px solid gray', width: '40vw', padding: '1rem', cursor: 'pointer' }} onClick={() => handleExpand(i.id)}>
      <span>
        <input type='checkbox' onClick={(e) => e.stopPropagation()} value={i.checkbox} onChange={() => handleCheckbox()} />
      </span>
      {i.heading}
    </div>
    {i.expand && (<div style={{ border: '1px solid green', borderRadius: '5px', width: '40vw', padding: '1rem', background: 'lightgray' }}>{i.desc}</div>)}
  </div>
}

const Accordion = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [data, setData] = useState([
    {
      id: 1,
      heading: 'Accordion 1',
      desc: 'Hii Im accordion one Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas velit voluptas eveniet non ratione modi fugiat distinctio delectus officia excepturi laudantium nobis perspiciatis facilis saepe ipsum! Exercitationem, molestiae corporis perspiciatis omnis fugiat fuga quidem blanditiis officiis ipsam mollitia error cum pariatur ipsum hic, nihil voluptas velit quae inventore ea maiores architecto. A, molestiae repellat.',
      expand: false,
      checkbox: false
    },
    {
      id: 2,
      heading: 'Accordion 2',
      desc: 'Hii Im accordion two Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas velit voluptas eveniet non ratione modi fugiat distinctio delectus officia excepturi laudantium nobis perspiciatis facilis saepe ipsum! Exercitationem, molestiae corporis perspiciatis omnis fugiat fuga quidem blanditiis officiis ipsam mollitia error cum pariatur ipsum hic, nihil voluptas velit quae inventore ea maiores architecto. A, molestiae repellat.',
      expand: false,
      checkbox: false
    },
    {
      id: 3,
      heading: 'Accordion 3',
      desc: 'Hii Im accordion three Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas velit voluptas eveniet non ratione modi fugiat distinctio delectus officia excepturi laudantium nobis perspiciatis facilis saepe ipsum! Exercitationem, molestiae corporis perspiciatis omnis fugiat fuga quidem blanditiis officiis ipsam mollitia error cum pariatur ipsum hic, nihil voluptas velit quae inventore ea maiores architecto. A, molestiae repellat.',
      expand: false,
      checkbox: false
    },
    {
      id: 4,
      heading: 'Accordion 4',
      desc: 'Hii Im accordion four Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas velit voluptas eveniet non ratione modi fugiat distinctio delectus officia excepturi laudantium nobis perspiciatis facilis saepe ipsum! Exercitationem, molestiae corporis perspiciatis omnis fugiat fuga quidem blanditiis officiis ipsam mollitia error cum pariatur ipsum hic, nihil voluptas velit quae inventore ea maiores architecto. A, molestiae repellat.',
      expand: false,
      checkbox: false
    }
  ])

  const handleExpand = useCallback((id) => {
    setData((prev) => prev.map((t) => {
      return t.id === id ? { ...t, expand: !t.expand } : { ...t, expand: false }
    }))
  }, [])

  const handleCheckbox = useCallback((id) => {
    const updatedData = data.map((i) => {
      return i.id === id ? { ...i, checkbox: !i.checkbox } : { ...i }
    })
    setData(updatedData)
    let disable = updatedData.some(i => i.checkbox === false);
    setIsDisabled(disable)
    // setData((prev) => prev.map((t) => {
    //   return t.id === id ? { ...t, checkbox: !t.checkbox } : { ...t }
    // }))
  }, [data])

  // useEffect(()=> {
  //   // let disable = !data.every(i => i.checkbox === true);
  //   let disable = data.some(i => i.checkbox === false);
  //   setIsDisabled(disable)
  // }, [data])
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Accordion</h1>

      {data.map((i) => {
        return <CustomAccordion key={i.id} i={i} handleExpand={handleExpand} handleCheckbox={() => handleCheckbox(i.id)} />
      })}

      <button disabled={isDisabled} style={{ margin: '2rem', padding: '0.5rem' }}>Submit</button>
    </div>
  );
}

export default Accordion;