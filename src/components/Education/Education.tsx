import { Timeline, TimelineItem, TimelineContent, TimelineSeparator, TimelineDot, TimelineConnector } from '@mui/lab';
import { Typography, Paper, Grid2 } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  '& .timeline-box': {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 255, 255, 0.2)',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
    marginBottom: theme.spacing(3),
  },
  '& .timeline-title': {
    color: '#fff',
    marginBottom: theme.spacing(1),
  },
  '& .timeline-subtitle': {
    color: '#ccc',
    marginBottom: theme.spacing(1),
  },
  '& .timeline-date': {
    color: '#00ffff',
    fontWeight: 'bold',
  },
}));

const StyledTimelineDot = styled(TimelineDot)({
  backgroundColor: '#00ffff',
  boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
});

const StyledTimelineConnector = styled(TimelineConnector)({
  backgroundColor: '#00ffff',
  width: '2px',
});

export const Education = () => {
  const educationData = [
    {
      school: 'Indiana University Bloomington',
      location: 'Bloomington, Indiana',
      degree: 'Master of Science in Computer Science',
      duration: 'Aug 2024 - May 2026',
    },
    {
      school: 'SJB Institute of Technology (VTU)',
      location: 'India',
      degree: 'Bachelor of Engineering in Computer Science',
      duration: 'Aug 2018 - July 2022',
    },
    {
      school: 'MES VidyaSagara Prof.MPL Sastry',
      location: 'India',
      degree: 'Senior Secondary Education',
      duration: 'Aug 2016 - May 2018',
    },
    {
      school: 'RNS Vidyaniketan',
      location: 'India',
      degree: 'Sophomore',
      duration: 'May 2015 - July 2016',
    },
  ];

  return (
    <Grid2 container direction="column" sx={{ width: '100%' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 'bold',
        }}
      >
        Education
      </Typography>
      
      <Grid2 container justifyContent="center">
        <Grid2 container sx={{ 
          maxWidth: '1200px',
          '& .MuiTimeline-root': {  // Add specific Timeline styling
            width: '100%',
            maxWidth: '100%'
          }
        }}>
          <Timeline position="alternate" sx={{ 
            padding: '20px',
            width: '100%'
          }}>
            {educationData.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <StyledTimelineDot />
                  {index !== educationData.length - 1 && <StyledTimelineConnector />}
                </TimelineSeparator>
                
                <StyledTimelineContent>
                  <Paper elevation={3} className="timeline-box">
                    <Typography variant="h6" className="timeline-title">
                      {education.school}
                    </Typography>
                    <Typography variant="subtitle1" className="timeline-subtitle">
                      {education.location}
                    </Typography>
                    <Typography variant="body1" className="timeline-subtitle">
                      {education.degree}
                    </Typography>
                    <Typography variant="body2" className="timeline-date">
                      {education.duration}
                    </Typography>
                  </Paper>
                </StyledTimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
