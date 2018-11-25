import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = () => (<React.Fragment>
  <img src="/images/bismillah-03.png" alt="Bismiallah" style={{ maxWidth: "300px", margin: "0 auto 16px", display: "block" }} />

  <Typography variant="h5" gutterBottom>
    Herzlich Willkommen
  </Typography>

  <Typography variant="subtitle2" paragraph>
    Völkerverständigung, Dialog und Vielfalt sind die gottgewollte Form der menschlichen Koexistenz.
  </Typography>

  <Typography variant="subtitle2">
    Im Koran 49:13 heißt es:
  </Typography>

  <Typography variant="subtitle2" paragraph>
    <i>„O ihr Menschen, Wir haben euch aus Mann und Frau erschaffen
    und euch zu Völkern und Stämmen gemacht, auf dass ihr einander kennen lernen möget.“</i>
  </Typography>


  <Typography variant="h4" gutterBottom style={{direction: "rtl"}}>
    السلام عليكم ورحمة الله وبركاته
  </Typography>

  <Typography variant="h6" paragraph style={{direction: "rtl"}}>
    التفاهم الدولي والحوار والتنوع هوشكل من أشكال التعايش بين البشر
  </Typography>

  <Typography variant="h6" style={{direction: "rtl"}}>
    يقول اللة تعالي في قرأنية:
  </Typography>

  <Typography variant="h6" paragraph style={{direction: "rtl"}}>
    "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوباً وَقَبَائِلَ لِتَعَارَفُوا"
  </Typography>
</React.Fragment>);

export default Home;