import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>مسابقة روضة أنور 1</h1>

        <ol>
            <li>سيتم طرح 25 سؤالًا عليك واحدًا تلو الآخر.</li>
            <li>يتم منح 4 نقاط للإجابة الصحيحة.</li>
            <li>كل سؤال لديه ثلاثة خيارات. يمكنك اختيار خيار واحد فقط.</li>
            <li>يمكنك مراجعة الإجابات وتغييرها قبل انتهاء الاختبار.</li>
            <li>سيتم إعلان النتيجة في نهاية الاختبار.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}
