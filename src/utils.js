export const sendPost = async(answers) => {
	try {
    const answersObject = {
 	    date: new Date().getDate(),
  	  user: 'fakeUser'
    };
    answers.forEach((answer, index) => {
      const key = index + 1;
      answersObject[key.toString()] = answer;
    })
    const options = { 
    	headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(answersObject)
    };
    const result = await fetch('http://localhost:3001/surveys', options);
    return result;
  } catch (error) {
    console.error(error);
    return { error };
  }
}