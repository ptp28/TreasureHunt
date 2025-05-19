import QuizIcon from "@mui/icons-material/Quiz";
import Body from "./Body";
import AvailableQuestSection from "./questSelection/AvailableQuestSection";
import UserQuestSection from "./questSelection/UserQuestSection";

export default function QuestSelectionBody() {

    const title = "SELECT QUEST";

    return (
        <Body icon={<QuizIcon/>} title={title}>
            <UserQuestSection/>
            <AvailableQuestSection/>
        </Body>
    );
}