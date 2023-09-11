import { Box } from "@mui/material";
import HeadingBox from "./components/headingBox.tsx";
import TwoSidesSlider from "./components/twoSidesSlider.tsx";
import InfoFab from "./components/infoFab.tsx";

function App() {
    return (
        <div>
            <Box sx={{margin: '32px 24px'}}>
                <HeadingBox />
            </Box>
            <Box sx={{margin: '32px 24px'}}>
                <TwoSidesSlider />
            </Box>
            <InfoFab />
        </div>
    );
}

export default App;
