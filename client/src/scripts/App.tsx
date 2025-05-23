import NavigationArea from "./components/navigation/NavigationArea.tsx";
import {ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import {useAppState} from "./context.tsx";

const App = () => {

    const title = "TreasureQuest";

    const {state} = useAppState();
    const darkMode = state.darkMode;

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#288BE4' : '#091F2F'
            },
            secondary: {
                main: darkMode ? '#FB4D42' : '#A51C30'
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavigationArea title={title} />
        </ThemeProvider>
    )
}

export default App;