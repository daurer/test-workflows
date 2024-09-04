import React from "react";
import { Typography, Accordion, AccordionSummary, styled } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import TasksDynamic from "./TasksDynamic";
import { getWorkflowStatusIcon } from "../common/StatusIcons";
import { Workflow } from "../../types";

interface WorkflowProps {
  workflow: Workflow;
}

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  height: "80vh",
}));

const WorkflowAccordion: React.FC<WorkflowProps> = ({ workflow }) => {
  return (
    <Accordion key={workflow.name}>
      <AccordionSummary
        expandIcon={getWorkflowStatusIcon(workflow.status)}
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "none",
          },
        }}
      >
        <Typography>{workflow.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TasksDynamic tasks={workflow.tasks} />
      </AccordionDetails>
    </Accordion>
  );
};

export default WorkflowAccordion;
