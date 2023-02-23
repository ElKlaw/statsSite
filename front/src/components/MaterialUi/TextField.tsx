import { styled, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";

export const TextFieldBase = styled(TextField)({
  "& label.Mui-focused": {
    color: teal[400],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: teal[400],
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& fieldset": {
      borderColor: teal[400],
    },
    "&:hover fieldset": {
      borderColor: teal[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: teal[400],
    },
  },
});
