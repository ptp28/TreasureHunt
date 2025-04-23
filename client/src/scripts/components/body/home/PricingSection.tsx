import {Box, Button, Card, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PaymentImage from "../../../../assets/online_payment.svg";

export default function PricingSection() {

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
                <Grid container spacing={2} order={{xs: 2, sm: 1}}>
                    <Grid size={{xs: 12, sm: 3}}>
                        <Box
                            src={PaymentImage} 
                            alt="Payment Image" 
                            component="img"
                            sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                width: '80%',
                                objectFit: 'fill',
                            }}
                        />
                    </Grid>
                    <Grid size={{xs: 12, sm: 9}} order={{xs: 1, sm: 2}}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
                                Team Package
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Gather your team for an unforgettable adventure — all for just <b>$20 per group</b>.
                            </Typography>
                            <Typography variant="body2" fontStyle={'italic'} gutterBottom>
                                Our goal is simple — for you to have FUN!
                                If you're not satisfied or need to cancel, just reach out for a full refund.
                            </Typography>
                            <Button variant="outlined" color="primary" sx={{marginTop: '10px'}}>
                                Contact Us
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}