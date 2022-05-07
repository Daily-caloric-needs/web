import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import food1 from "../../img/food1.jpg";
import food2 from "../../img/food2.jpg";
import food3 from "../../img/food3.jpg";
import food4 from "../../img/food4.jpg";
import food5 from "../../img/food5.jpg";
import food6 from "../../img/food6.jpg";
import food7 from "../../img/food7.jpg";
import food8 from "../../img/food8.jpg";
import food9 from "../../img/food9.jpg";
import food10 from "../../img/food10.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "food1",
    imgPath: food1,
  },
  {
    label: "food2",
    imgPath: food2,
  },
  {
    label: "food3",
    imgPath: food3,
  },
  {
    label: "food4",
    imgPath: food4,
  },
  {
    label: "food5",
    imgPath: food5,
  },
  {
    label: "food6",
    imgPath: food6,
  },
  {
    label: "food7",
    imgPath: food7,
  },
  {
    label: "food8",
    imgPath: food8,
  },
  {
    label: "food9",
    imgPath: food9,
  },
  {
    label: "food10",
    imgPath: food10,
  },
];

export function Slider({ className }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }} className={className}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
