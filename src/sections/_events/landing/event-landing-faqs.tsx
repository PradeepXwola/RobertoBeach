import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import { _faqs } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const eventFaqs = [
    
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of event management services, including planning, coordination, catering, decoration, entertainment, and more."
    },
    {
        id: 2,
        question: "How can I contact you for more information?",
        answer: "You can contact us via our contact form on the website, email us at willkommen@robertobeach.de, or call us at +49 (0) 89 – 90 90 186 - 0."
    },
    {
        id: 3,
        question: "What types of events do you specialize in?",
        answer: "We specialize in corporate events, weddings, private parties, product launches, conferences, and more."
    },
    {
        id: 4,
        question: "How far in advance should I book your services?",
        answer: "We recommend booking our services at least 6-12 months in advance for larger events. However, we can accommodate shorter timelines depending on availability."
    },
    {
        id: 5,
        question: "What is the cost of your event services?",
        answer: "Our pricing varies based on the size, complexity, and specific requirements of your event. Please contact us for a customized quote."
    }
]

export default function EventLandingFaqs() {
  const mdUp = useResponsive('up', 'md');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" color="text.disabled">
              FAQS
            </Typography>

            <Typography variant="h2">Frequently Asked Questions</Typography>
          </Stack>

          {eventFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.question}
              onChange={handleChangeExpanded(faq.question)}
            >
              <AccordionSummary
                sx={{
                  minHeight: 64,
                  [`& .${accordionSummaryClasses.content}`]: {
                    p: 0,
                    m: 0,
                  },
                  [`&.${accordionSummaryClasses.expanded}`]: {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>

                <Iconify
                  width={24}
                  icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                />
              </AccordionSummary>

              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="faqs" src="/assets/illustrations/illustration_faqs.svg" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
