import {Box, Card, Link, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ContactUsImage from "../../../../assets/contact_us.svg";
import EmailIcon from '@mui/icons-material/Email';

export default function AboutSection() {

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
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 9}} order={{xs: 2, sm: 1}}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                If you have any questions, feedback, or need assistance, feel free to reach out to us.
                            </Typography>
                            <Stack direction={"row"} alignItems="center" spacing={1}>
                                <EmailIcon />
                                <Typography variant="body1" gutterBottom>
                                Email: 
                                </Typography>
                                <Link href="mailto:treasurehunt@email.com">
                                    treasurehunt@email.com
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12, sm: 3}} order={{xs: 1, sm: 2}}>
                        <Box
                            src={ContactUsImage} 
                            alt="Contact Us" 
                            component="img"
                            sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                width: '100%',
                                objectFit: 'fill',
                            }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}