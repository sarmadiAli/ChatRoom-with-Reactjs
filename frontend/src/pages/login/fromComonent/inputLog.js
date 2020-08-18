import React, { useContext, useState } from 'react'
//import css && bootstrap
import Form from 'react-bootstrap/Form'
import '../login.css'
// import Context
import LoginContext from '../../../context/loginContext'
import AlertDismissibleExample from '../../../Components/alertDismissibleExample';



function InputLog(props) {
    let { propsLogin } = props
    const logContext = useContext(LoginContext)
    const [name, setName] = useState('')
    const [gender, setGender] = useState('0')
    const [Error, setError] = useState('')
    let submitHandler = e => {
        e.preventDefault()
        logContext.dispatch({ type: 'add_profile', paylode: { name, gender, propsLogin } })
        setError(checkOut({ name, gender }))
    }
    console.log();
    return (

        <>
            {
                (Error) ?
                    (<AlertDismissibleExample name={name} massage={Error} />)
                    : ''


            }
            <Form className='formforInpur' onSubmit={submitHandler} >
                <div className=' text-center  mb-5 '>
                    <h2 className='headertext'>چت روم علی </h2>
                </div>

                <input className='p-2'
                    onChange={e => setName(e.target.value)}
                    value={logContext.name}
                    placeholder='...لطفا اسم خود را وارد کنید'
                />
                <Form.Control
                    as="select"
                    className=" my-4 "
                    id="inlineFormCustomSelect"
                    onChange={e => setGender(e.target.value)}
                    custom>

                    <option value="0">انتخاب...</option>
                    <option value="1">زن</option>
                    <option value="2">مرد</option>
                </Form.Control>
                <button type='submit' className='btn btn-sm btn-danger'>کلیک کنید </button>

            </Form>
        </>
    )
}
export default InputLog

function checkOut({ name, gender }) {
    if (!name) {

        return 'لطفا نام خود را وارد کنید'
    }
    else if (gender === '0') {
        return 'لطفا جنسیت خود را انتخاب کنید'

    }

}