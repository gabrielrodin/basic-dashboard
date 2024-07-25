import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

         {/* QUESTION 1 */}
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Important Question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mi iaculis, tempus felis id, viverra tortor. Fusce faucibus semper lacinia. Morbi sit amet nunc in dui aliquam porttitor sed non urna. Phasellus at dolor consequat, cursus lorem in, gravida orci. Curabitur bibendum, lorem interdum iaculis gravida, dui sem tristique massa, et scelerisque tortor nisi vitae arcu. Nulla et eros a massa bibendum hendrerit. Aliquam eget felis ac elit bibendum consectetur eu a tellus. Nunc sit amet gravida leo. In hac habitasse platea dictumst. Proin eros quam, sollicitudin et erat in, feugiat posuere urna.
               </Typography>
            </AccordionDetails>
         </Accordion>

         {/* QUESTION 2 */}
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  Another Important Question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mi iaculis, tempus felis id, viverra tortor. Fusce faucibus semper lacinia. Morbi sit amet nunc in dui aliquam porttitor sed non urna. Phasellus at dolor consequat, cursus lorem in, gravida orci. Curabitur bibendum, lorem interdum iaculis gravida, dui sem tristique massa, et scelerisque tortor nisi vitae arcu. Nulla et eros a massa bibendum hendrerit. Aliquam eget felis ac elit bibendum consectetur eu a tellus. Nunc sit amet gravida leo. In hac habitasse platea dictumst. Proin eros quam, sollicitudin et erat in, feugiat posuere urna.
               </Typography>
            </AccordionDetails>
         </Accordion>

         {/* QUESTION 3 */}
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  Your favorite Question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mi iaculis, tempus felis id, viverra tortor. Fusce faucibus semper lacinia. Morbi sit amet nunc in dui aliquam porttitor sed non urna. Phasellus at dolor consequat, cursus lorem in, gravida orci. Curabitur bibendum, lorem interdum iaculis gravida, dui sem tristique massa, et scelerisque tortor nisi vitae arcu. Nulla et eros a massa bibendum hendrerit. Aliquam eget felis ac elit bibendum consectetur eu a tellus. Nunc sit amet gravida leo. In hac habitasse platea dictumst. Proin eros quam, sollicitudin et erat in, feugiat posuere urna.
               </Typography>
            </AccordionDetails>
         </Accordion>

         {/* QUESTION 4 */}
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  Your Weirdest Question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mi iaculis, tempus felis id, viverra tortor. Fusce faucibus semper lacinia. Morbi sit amet nunc in dui aliquam porttitor sed non urna. Phasellus at dolor consequat, cursus lorem in, gravida orci. Curabitur bibendum, lorem interdum iaculis gravida, dui sem tristique massa, et scelerisque tortor nisi vitae arcu. Nulla et eros a massa bibendum hendrerit. Aliquam eget felis ac elit bibendum consectetur eu a tellus. Nunc sit amet gravida leo. In hac habitasse platea dictumst. Proin eros quam, sollicitudin et erat in, feugiat posuere urna.
               </Typography>
            </AccordionDetails>
         </Accordion>

         {/* QUESTION 5 */}
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  Common Question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mi iaculis, tempus felis id, viverra tortor. Fusce faucibus semper lacinia. Morbi sit amet nunc in dui aliquam porttitor sed non urna. Phasellus at dolor consequat, cursus lorem in, gravida orci. Curabitur bibendum, lorem interdum iaculis gravida, dui sem tristique massa, et scelerisque tortor nisi vitae arcu. Nulla et eros a massa bibendum hendrerit. Aliquam eget felis ac elit bibendum consectetur eu a tellus. Nunc sit amet gravida leo. In hac habitasse platea dictumst. Proin eros quam, sollicitudin et erat in, feugiat posuere urna.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}

export default FAQ;