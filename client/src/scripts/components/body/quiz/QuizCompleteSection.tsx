import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {Card, Typography} from "@mui/material";

const Item = styled(Button)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '100%',
    height: '100%',
}));


interface QuizCompleteSectionProps {
    currentScore: number;
    totalScore: number;
    onResetQuizClick: () => void;
}

export default function QuizCompleteSection(props: QuizCompleteSectionProps) {
    return (
        <>
            <Typography variant="h6">
                Congratulations
            </Typography>
            <Card sx={{
                padding: "20px",
                alignItems: "center",
                gap: "20px",
            }}
            >
                <Typography variant="h6" sx={{marginBottom: '20px'}}>
                    Score: {props.currentScore} / {props.totalScore}
                </Typography>
                <Item
                    variant="contained"
                    disableElevation
                    onClick={props.onResetQuizClick}
                >
                    Try Again
                </Item>
            </Card>
        </>
    );
}
