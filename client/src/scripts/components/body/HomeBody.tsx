import Body from "./Body.tsx";
import AboutSection from "./home/AboutSection.tsx";
import PricingSection from "./home/PricingSection.tsx";
import FAQSection from "./home/FAQSection.tsx";
import HomeIcon from '@mui/icons-material/Home';
import DashboardSection from "./home/DashboardSection.tsx";
import { useAuth } from "../../../services/AuthenticationProvider.tsx";

export default function HomeBody() {

    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return (
            <Body icon={<HomeIcon />} title={'Home'}>
                <DashboardSection />
            </Body>
        );
    }

    if (!isAuthenticated) {
        return (
            <Body icon={<></>} title={''}>
                <>
                    <AboutSection />
                    <PricingSection />
                    <FAQSection />
                </>
            </Body>
        );
    }
}