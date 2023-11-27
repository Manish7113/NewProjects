import { TextField } from "@mui/material"
import { Button } from "bootstrap"
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";



const schema = Yup.object().shape({
    prevention: Yup.number().required().min(0).max(25),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
        prevention: e.target.prevention.value,
     
    };
  
    const errors = schema.validate(formData);
  
    if (errors.length > 0) {
      console.log(true)
    } else {
      console.log('false')
    }
  };

export default function DynamicField(){

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" type="number" name="prevention"  label="Outlined" variant="outlined" />
            {/* <Button type='submit'>Submit</Button> */}
            <button type="submit">submit</button>

            </form>
        </div>
    )
}