const puppeteer = require('puppeteer');
const fs = require('fs');
const handlebars = require('handlebars');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  const tableComponent = fs.readFileSync('./template/table.hbs', 'utf-8');
  const mobilityAnalysisComponent = fs.readFileSync('./template/mobilityAnalysis.hbs', 'utf-8');
  const poseSummaryComponent = fs.readFileSync('./template/poseSummary.hbs', 'utf-8');
  const exerciseTableComponent =  fs.readFileSync('./template/exerciseTable.hbs', 'utf-8');
  const coursesTableComponent =  fs.readFileSync('./template/coursesTable.hbs', 'utf-8');


  handlebars.registerPartial('table', tableComponent);
  handlebars.registerPartial('mobilityAnalysis', mobilityAnalysisComponent);
  handlebars.registerPartial('poseSummary', poseSummaryComponent);
  handlebars.registerPartial('exerciseTable', exerciseTableComponent);
  handlebars.registerPartial('coursesTable', coursesTableComponent);



  const source = fs.readFileSync('./template/template.hbs', 'utf-8');
  const template = handlebars.compile(source);


  const firstAnalyses = {
    overallPoints: '10',
    posture: '10',
    stability: '2',
    flexibility: '8',
    mobility: '8',
    date: '12/01/2022',
    squat: {
      hipAngle: '68°',
      kneeAngle: '68°'
    },
    fold: {
      hipAngle: '68°',
      groundDistance: '46 cm'
    },
    lunge: {
      hipAngle: '68°',
      groundDistance: '46 cm',
      straightBack: 'TAK'
    }
  }

  const lastAnalyses = {
    overallPoints: '10',
    posture: '10',
    stability: '8',
    flexibility: '8',
    mobility: '8',
    date: '12/01/2022',
    squat: {
      hipAngle: '68°',
      kneeAngle: '68°'
    },
    fold: {
      hipAngle: '68°',
      groundDistance: '46 cm'
    },
    lunge: {
      hipAngle: '68°',
      groundDistance: '46 cm',
      straightBack: 'TAK'
    }
  }


  const exercises = [
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
  ].slice(0,7)
  // no more than 7 elements


  const courses = [
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
    {
      name: 'Bird dog',
      imgSrc: 'https://media.self.com/photos/57d88cd0d3276fe2329464df/4:3/w_2240,c_limit/workouts-for-busy-people-feat.jpg',
      date: '12/01/2022',
      result: '34%'
    },
  ]


  const data = {
    fox: 'xxxxadasd',
    name: 'John Doe',
    reportFrom: '12/01/2022',
    reportTo: '12/01/2022',
    trainingProgramExercisesCount: '25',
    otherExercisesCount: '25',
    timeSpent: '120',
    firstAnalyses,
    lastAnalyses,
    exercises,
    courses
  };
  const html = template(data);


  await page.setContent(html);
  await page.pdf({path: 'example.pdf', format: 'A4'});

  await browser.close();
})();