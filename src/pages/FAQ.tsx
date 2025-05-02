import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:before': {
    display: 'none',
  },
}));

const faqs = [
  {
    question: 'At what age should my child first see an orthodontist?',
    answer: 'The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. This allows us to identify any potential issues early and determine the best time to begin treatment.',
  },
  {
    question: 'How long does orthodontic treatment typically take?',
    answer: 'Treatment duration varies depending on the individual case, but most treatments take between 12-24 months. Factors that affect treatment time include the complexity of the case, the type of treatment, and how well the patient follows instructions.',
  },
  {
    question: 'What is the difference between traditional braces and Invisalign?',
    answer: 'Traditional braces use metal brackets and wires to move teeth, while Invisalign uses a series of clear, removable aligners. Both methods are effective, but Invisalign offers more discretion and convenience. The best option depends on your specific needs and goals.',
  },
  {
    question: 'Do braces hurt?',
    answer: 'You may experience some discomfort when braces are first placed and after adjustments, but this is usually mild and temporary. Over-the-counter pain relievers can help manage any discomfort. Most patients adjust to their braces within a few days.',
  },
  {
    question: 'How often will I need to come in for appointments?',
    answer: 'Most patients with braces need to visit every 4-8 weeks for adjustments. Invisalign patients typically visit every 6-8 weeks to receive new aligners and monitor progress.',
  },
  {
    question: 'Can adults get braces?',
    answer: 'Absolutely! It\'s never too late to improve your smile. Many adults choose orthodontic treatment to correct alignment issues or improve their appearance. We offer various treatment options suitable for adults.',
  },
  {
    question: 'How do I care for my teeth during orthodontic treatment?',
    answer: 'Maintaining good oral hygiene is crucial during treatment. Brush after every meal, floss daily, and use any additional cleaning tools recommended by your orthodontist. Avoid hard, sticky, or chewy foods that could damage your braces.',
  },
  {
    question: 'What happens after my braces come off?',
    answer: 'After braces are removed, you\'ll need to wear a retainer to maintain your new smile. We\'ll provide specific instructions on retainer wear and schedule follow-up appointments to monitor your progress.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Find answers to common questions about orthodontic treatment
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <StyledAccordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Still have questions?
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1a1a1a 30%, #000000 90%)',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ; 