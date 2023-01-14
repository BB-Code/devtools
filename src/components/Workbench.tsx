
import { Container, Paper } from '@mui/material'
import ToolCard from './ToolCard'

export default function Workbench() {
    return (
        <Container maxWidth="xl">
            <Paper elevation={2}>
                <ToolCard />
            </Paper>
        </Container>
    )
}
