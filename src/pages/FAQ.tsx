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
    question: 'À quel âge mon enfant devrait-il consulter un orthodontiste pour la première fois ?',
    answer: 'L\'Association Américaine des Orthodontistes recommande que les enfants aient leur première évaluation orthodontique à l\'âge de 7 ans. Cela nous permet d\'identifier tout problème potentiel tôt et de déterminer le meilleur moment pour commencer le traitement.',
  },
  {
    question: 'Combien de temps dure généralement un traitement orthodontique ?',
    answer: 'La durée du traitement varie selon le cas individuel, mais la plupart des traitements durent entre 12 et 24 mois. Les facteurs qui affectent la durée du traitement incluent la complexité du cas, le type de traitement et la façon dont le patient suit les instructions.',
  },
  {
    question: 'Quelle est la différence entre les appareils dentaires traditionnels et Invisalign ?',
    answer: 'Les appareils dentaires traditionnels utilisent des brackets et des fils métalliques pour déplacer les dents, tandis qu\'Invisalign utilise une série de gouttières transparentes amovibles. Les deux méthodes sont efficaces, mais Invisalign offre plus de discrétion et de commodité. La meilleure option dépend de vos besoins et objectifs spécifiques.',
  },
  {
    question: 'Les appareils dentaires font-ils mal ?',
    answer: 'Vous pouvez ressentir un certain inconfort lorsque les appareils sont posés pour la première fois et après les ajustements, mais cela est généralement léger et temporaire. Les analgésiques en vente libre peuvent aider à gérer tout inconfort. La plupart des patients s\'adaptent à leurs appareils en quelques jours.',
  },
  {
    question: 'À quelle fréquence devrai-je venir pour des rendez-vous ?',
    answer: 'La plupart des patients avec des appareils dentaires doivent venir tous les 4 à 8 semaines pour des ajustements. Les patients Invisalign viennent généralement toutes les 6 à 8 semaines pour recevoir de nouvelles gouttières et surveiller les progrès.',
  },
  {
    question: 'Les adultes peuvent-ils porter des appareils dentaires ?',
    answer: 'Absolument ! Il n\'est jamais trop tard pour améliorer votre sourire. De nombreux adultes choisissent un traitement orthodontique pour corriger des problèmes d\'alignement ou améliorer leur apparence. Nous proposons diverses options de traitement adaptées aux adultes.',
  },
  {
    question: 'Comment prendre soin de mes dents pendant le traitement orthodontique ?',
    answer: 'Maintenir une bonne hygiène bucco-dentaire est crucial pendant le traitement. Brossez-vous les dents après chaque repas, utilisez le fil dentaire quotidiennement et utilisez tous les outils de nettoyage supplémentaires recommandés par votre orthodontiste. Évitez les aliments durs, collants ou mous qui pourraient endommager vos appareils.',
  },
  {
    question: 'Que se passe-t-il après le retrait de mes appareils dentaires ?',
    answer: 'Après le retrait des appareils, vous devrez porter une contention pour maintenir votre nouveau sourire. Nous vous fournirons des instructions spécifiques sur le port de la contention et programmerons des rendez-vous de suivi pour surveiller vos progrès.',
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
            Questions Fréquemment Posées
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Trouvez des réponses aux questions courantes sur le traitement orthodontique
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
              Vous avez encore des questions ?
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
              Contactez-nous
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ; 