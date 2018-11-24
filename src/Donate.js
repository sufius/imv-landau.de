import React from 'react';
import Typography from '@material-ui/core/Typography';

const News = () => (
  <React.Fragment>
     <Typography variant="title" gutterBottom>
        Spenden
     </Typography>

      <Typography variant="subtitle2">
        Quran: Allah, der Erhabene, spricht:
      </Typography>
    
      <Typography variant="subtitle2" paragraph>
        <i>"Und ihr gebt nichts als Spende hin, ohne dass Er es euch ersetzt..." (34:39)</i>
      </Typography>
    
      <Typography variant="subtitle1" paragraph style={{direction: "rtl"}}>
        "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ..."
      </Typography>

      <Typography variant="subtitle2" paragraph>
        <i>"Was immer ihr an Gutem spendet, das ist für euch selbst, und ihr spendet nicht, 
      	es sei denn aus Verlangen nach dem Angesicht Allahs. Und was immer ihr an Gutem spendet, 
      	das soll euch voll zurückerstattet werden, und es soll euch kein Unrecht zugefügt werden." (2:272)</i>
      </Typography>
    
      <Typography variant="subtitle1" paragraph style={{direction: "rtl"}}>
        "وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَلأنفُسِكُمْ وَمَا تُنفِقُونَ إِلاَّ ابْتِغَاء وَجْه اللّهِ وَمَا تُنفِقُواْ مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لاَ تُظْلَمُونَ"
      </Typography>
    
      <Typography variant="subtitle2" paragraph>
        <i>"Und was immer ihr an Gutem spendet, wahrlich Allah weiß es wohl." (2:273)</i>
      </Typography>
    
      <Typography variant="subtitle1" paragraph style={{direction: "rtl"}}>
        "وَمَا تُنفِقُواْ مِنْ خَيْرٍ فَإِنَّ اللّهَ بِهِ عَلِيمٌ"
      </Typography>

      <Typography variant="subheading" paragraph align="center">
        Islamischer multikultureller Verein
      </Typography>
      <Typography variant="subheading" paragraph align="center">
      	Spendenkonto:<br/>
      	IBAN: DE32548500100035145887<br/>
      	BIC: SOLADES1SUW
      </Typography>
      <Typography variant="subheading" paragraph align="center">
      	Steuer Nr.   24 / 652 / 53374 KVI/1
      </Typography>

   </React.Fragment>
);
export default News;