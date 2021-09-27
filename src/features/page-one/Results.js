import { useSelector } from 'react-redux';
import { getPageOneAnswers } from './pageOneSlice';
import { resultCategories } from '../../textConsts';
import { VictoryBar, VictoryChart, VictoryGroup } from 'victory';

export function Results() {
  const answers = useSelector(getPageOneAnswers);
  const totalScore = answers.reduce((partial_sum, number) => partial_sum + number, 0);
  const avoidance = answers.slice(0, 5).reduce((partial_sum, number) => partial_sum + number, 0);
  const intrusions = answers.slice(5, 7).reduce((partial_sum, number) => partial_sum + number, 0);
  const cognitions = answers.slice(7, 14).reduce((partial_sum, number) => partial_sum + number, 0);
  const hypervigilance = answers.slice(14).reduce((partial_sum, number) => partial_sum + number, 0);

  const text = `You're total score for this month was ${totalScore}. That consisted of four sub-scores: you mainfested an avoidance score of ${avoidance}, an intrusion score of ${intrusions}, a cognitions score of ${cognitions}, and a hypervigilance score of ${hypervigilance}. We hope you feel that you are progressing and encourage you to connect with us if you feel you are not.`

  const results = [totalScore, avoidance, intrusions, cognitions, hypervigilance];
  const resultContainers = resultCategories.map((category, index) => {
  	return (<div key={index}>{category + ': ' + results[index]}</div>);
  });

  const image = null;
  //const image = (<img src="public/coupleScaled.jpg" alt="Alternative Text">);

  const graphData = results.map((result, index) => {
  	return {x: resultCategories[index], y: result}
  });

  return (
    <div className='results-container'>
      {text}
      {resultContainers}
      {image}
      <div className='victory-container'>
        <VictoryChart height={400} width={600}>
          <VictoryGroup offset={3}
            colorScale={"qualitative"}
          >
            <VictoryBar
              barWidth={10}
              categories={{x: resultCategories}}
              data={graphData}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    </div>
  );
}