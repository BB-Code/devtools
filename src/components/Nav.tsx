import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HandymanIcon from '@mui/icons-material/Handyman';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SnoozeIcon from '@mui/icons-material/Snooze';
import { Container } from '@mui/material';
export default function Nav() {
    return (
        <Container maxWidth="xs">
            <Accordion expanded>
                <AccordionSummary

                    expandIcon={<HandymanIcon />}
                >
                    所有工具
                </AccordionSummary>
            </Accordion>
            <Accordion >

                <AccordionSummary
                    expandIcon={<CompareArrowsIcon />}
                >
                    转换工具
                </AccordionSummary>
                <AccordionDetails>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <SnoozeIcon fontSize="small" />
                                <ListItemText>时间戳</ListItemText>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <SnoozeIcon fontSize="small" />
                                <ListItemText>进制转换</ListItemText>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <SnoozeIcon fontSize="small" />
                                <ListItemText>JSON ↔ YAML</ListItemText>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <SnoozeIcon fontSize="small" />
                                <ListItemText>Cron 解析</ListItemText>
                            </ListItemIcon>
                        </MenuItem>
                    </MenuList>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}
