import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = () => (<React.Fragment>
  <Typography variant="title" paragraph>
    Herzlich Willkommen
  </Typography>
  <Typography paragraph>
    Völkerverständigung, Dialog und Vielfalt sind die gottgewollte Form der menschlichen Koexistenz.
    Im Koran 49:13 heißt es: „O ihr Menschen, Wir haben euch aus Mann und Frau erschaffen
    und euch zu Völkern und Stämmen gemacht, auf dass ihr einander kennen lernen möget.“
  </Typography>
  <Typography variant="h6" paragraph style={{direction: "rtl"}}>
    السلام عليكم ورحمة الله وبركاته<br/>
    التفاهم الدولي والحوار والتنوع هوشكل من أشكال التعايش بين البشر<br/>
    يقول اللة تعالي في قرأنية:<br/>
    "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوباً وَقَبَائِلَ لِتَعَارَفُوا"<br/>
  </Typography>
</React.Fragment>);

export default Home;