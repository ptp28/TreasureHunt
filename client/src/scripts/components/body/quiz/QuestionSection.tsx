import {Card, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {QuestionDataType} from "../../../../services/QuestionDataType.ts";

interface QuestionSectionProps {
    questionNumber: number;
    questionData: QuestionDataType['question'];
}

export default function QuestionSection(props: QuestionSectionProps) {

    return (
        <Grid size={{xs: 12}}>
            <Typography sx={{marginY: 1}} variant={'h6'}>
                {props.questionData.text}
            </Typography>
            {
                (props.questionData.imageURL != undefined) &&
                <Card
                    component="img"
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'block',
                        width: {xs: '100%', sm: '100%', md: '33%'},
                        objectFit: 'fill',
                    }}
                    src={props.questionData.imageURL}
                    alt={props.questionData.imageAlt}
                />}
        </Grid>
    );
}