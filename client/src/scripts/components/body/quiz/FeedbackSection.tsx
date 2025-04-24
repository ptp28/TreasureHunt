import Button from "@mui/material/Button";
import {Card, CardActions, Typography} from "@mui/material";

interface FeedbackSectionProps {
    questionNumber: number;
    feedback: string;
    dismissFeedback: () => void;
}

export default function FeedbackSection(props: FeedbackSectionProps) {
    return (
        <>
            <Typography variant="h6">
                Question {props.questionNumber}
            </Typography>
            <Card sx={{
                padding: "20px",
                alignItems: "center",
                gap: "20px",
            }}
            >
                <Typography variant="h6" dangerouslySetInnerHTML={{ __html: props.feedback }} />

                <CardActions>
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            width: '100%', 
                        }}
                        onClick={props.dismissFeedback}
                    >
                        Proceed
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
