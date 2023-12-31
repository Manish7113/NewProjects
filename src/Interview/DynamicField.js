import { FormLabel, TextField, Grid, useFormControl } from "@mui/material"
import { Button } from "bootstrap"
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';


const validationSchema = Yup.object().shape({
  prevention: Yup.number().required().min(1).max(10).label('prevention'),
})

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const formData = {
//     prevention: e.target.prevention.value,

//   };

//   const errors = schema.validate(formData);

//   if (errors.length > 0) {
//     console.log(true)
//   } else {
//     console.log('false')
//   }
// };

const defaultValuesRef = {
  prevention: 5,
}

export default function DynamicField() {

  // const { register, handleSubmit, error } = useForm({ resolver: yupResolver(validationSchema) })



  // const {
  //   control,
  //   register,
  //   getValues,
  //   setValue,
  //   errors,
  //   defaultValuesRef,
  // } = useFormContext();

  const onSubmit = async (data) => {
    console.log(data, 'ttttttttttt');
    // Add your asynchronous logic here, if needed
  };

  const test = (event) => {
    event.preventDefault();
    console.log('test ')
  }




  return (
    <div>
      <form
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Grid xs={6} sm={6} lg={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <FormLabel>enter number</FormLabel>
          <Controller
            name="fieldName"
            // control={control}
            render={({ field }) => (

              <TextField id="outlined-basic" type="number" name="prevention" label="prevention" variant="outlined" />)
            }
            // {errors.fieldName && <p>{errors.fieldName.message}</p>}

              />


        </Grid>
        {/* <Button type='submit'>Submit</Button> */}
        <button type="submit">submit</button>

      </form>
    </div>
  )
}