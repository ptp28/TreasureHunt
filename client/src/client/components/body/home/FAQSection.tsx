import {Accordion, AccordionDetails, AccordionSummary, Box, Card, Stack, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQList from "../../../../assets/faq_list.json";

interface FAQ {
    question: string;
    answer: string;
}

export default function FAQSection() {
    const faqs = FAQList as FAQ[];
    
    return (
        <Box>
            <Card
                sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Stack>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
                        All You Need to Know
                    </Typography>
                    {faqs.length === 0 && (
                        <Typography color="text.secondary">No FAQs available.</Typography>
                    )}
                    {faqs.map((faq, idx) => (
                        <Accordion key={idx}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography component="span">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Card>
        </Box>
    );
}