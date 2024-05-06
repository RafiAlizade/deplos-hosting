import './AskedQuestions.css'
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons'
import { useEffect , useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function AskedQuestions() {

  const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }



    useEffect(() => {
        AOS.init();
      }, [])

  const questionBase = [
    {
      question: 'Why is my server in "Suspended" status?',
      answer: 'You have probably violated the rules of use and/or exceeded the resources specified. If the status contains a message contact technical support.',
      isOpen: false
    },
    {
        question: 'Why does my server have an endless load?',
        answer: 'Perhaps the location where your server is located is down and/or under maintenance. Otherwise, there is a hardware overload. If the server does not boot up within 24 hours, contact technical support.',
        isOpen: false
      },
      {
        question: 'Why does my console slow down when I start the server?',
        answer: 'Check what version of the server you are installing. Also make sure that in the "Startup" is the current version of Java for the installed version.',
        isOpen: false
      },
  ]

  return (
    <section className="questions">
        <div className="container_section">
          <div className="questions__inner"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200">
            <div className="questions__container">
                {questionBase.map(( { question, answer }, key) => (
                  <div className="questions__box" key={key}>
                    <div className="questions__top">
                        <span className="question__title" style={{ color: openIndex === key ? '#fff' : '#999'  }}>{question}</span>
                        {openIndex === key ? <ChevronUp className='question__btn' onClick={() => toggleQuestion(key)} /> : <ChevronDown className='question__btn' onClick={() => toggleQuestion(key)} />}
                    </div>

                     {openIndex === key && <div className="question__bottom">
                                    <span className="question__answer">{answer}</span>
                                </div>}

                  </div>
                ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default AskedQuestions