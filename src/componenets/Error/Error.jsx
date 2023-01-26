import style from './Error.module.css'

const Error = () => {
  return (
    <div className={style.error}>
      <svg className={style.errorImg} fill="#9ACD32" width="80px" height="80px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path fill="#9ACD32" d="M13 10.65657q0 .40404-.28283.68686l-1.37374 1.37374Q11.06061 13 10.65657 13t-.68687-.28283L7 9.74747l-2.9697 2.9697Q3.74747 13 3.34343 13q-.40404 0-.68686-.28283l-1.37374-1.37374Q1 11.06061 1 10.65657t.28283-.68687L4.25253 7l-2.9697-2.9697Q1 3.74747 1 3.34343q0-.40404.28283-.68686l1.37374-1.37374Q2.93939 1 3.34343 1t.68687.28283L7 4.25253l2.9697-2.9697Q10.25253 1 10.65657 1q.40404 0 .68686.28283l1.37374 1.37374Q13 2.93939 13 3.34343t-.28283.68687L9.74747 7l2.9697 2.9697Q13 10.25253 13 10.65657z" />
        </g>
      </svg>
      <div>
        <p className={style.errorText}>Oops..! Something went wrong.<br />Please try again later</p>
      </div>
    </div>
  )
}

export default Error