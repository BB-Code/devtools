import Nav from './components/Nav';
import Stack from '@mui/material/Stack';
import Workbench from './components/Workbench';

export default function App() {
    return (
        <Stack direction="row" spacing={2}>
            <Nav />
            <Workbench />
        </Stack>
    )
}
