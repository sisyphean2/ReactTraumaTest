import { introduction, instructions, pageOneQuestions, radioLabels } from '../../textConsts';
import { useSelector, useDispatch } from 'react-redux';
import { getPageOneAnswers, updateAnswer, updateStatus } from './pageOneSlice';
import { sendPost } from '../../utils';

export function PageOne() {
	const dispatch = useDispatch();
	const answers = useSelector(getPageOneAnswers);

	const surveryComplete = answers.every(answer => answer !== null)
	const warningText = 'Please answer all questions before submitting.'
	const warning = surveryComplete ? null : <div className='warning'>{warningText}</div>

	const setAnswer = (event) => {
  	const questionNum = parseInt(event.target.name, 10);
  	const value = parseInt(event.target.value, 10);
  	dispatch(updateAnswer({index: questionNum, value: value}))
  };

  const submitSurvey = async () => {
  	dispatch(updateStatus());
    const result = await sendPost(answers);
    return result;
  };

  const questions = pageOneQuestions.map((questionText, questionIndex) => {
  	const radioButtons = radioLabels.map((label, radioIndex) => {
  		return (
  			<div key={radioIndex}>
			    <input 
			      checked={answers[questionIndex] === radioIndex}
	  		    name={questionIndex}
		  	    onChange={setAnswer}
			      type="radio" 
			      value={radioIndex}
  			  />
	  		  {label}
			  </div>
  		);
  	});

    const className = questionIndex % 2 === 0 ? 'even-question' : 'odd-question';
  	return (
  	  <div className={'question-container '  + className} key={questionIndex}>
  	    <div>{questionText}</div>
  	    <div className='radio-container'>{radioButtons}</div>
  	  </div>
  	);
  });

  return (
    <section className='survey-container'>
      <div className='introduction'>{introduction}</div>
      <div className='instructions'>{instructions}</div>
      {questions}
      {warning}
      <input className='submit' disabled={!surveryComplete} onClick={submitSurvey} type="submit" value="Submit" />
    </section>
  );
}
