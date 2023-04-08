import React from "react";
import * as yup from 'yup'
import { useFormik } from 'formik';

const Form = () => {
  
    const formik = useFormik({
      initialValues: {
        Nombre: '',
        Email: '',
      }, 
        onSubmit : values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    const validacionForm = yup.object({
      nombre: yup.string().min(5,"La cantidad minima de caracteres para un nombre es 5").max(250,"La cantidad maxima de caracteres para un nombre es 250").required("Porfavor ingrese un nombre valido"),

      email: yup.string().email("Porfavor ingrese un Email valido").required("Debe ingresar un Email")
    });

  return (
    <div>
      <form onSubmit= {formik.handleSubmit}>
        <div>
          <label>
            Nombre:
            <input type="text" id="nombre" name="nombre" value={formik.values.Nombre} onChange={validacionForm.nombre}/>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" id="email" name="email" value={formik.values.Email} onChange={validacionForm.email}/>
          </label>
        </div>
        <button type="submit">Enviar Datos</button>
      </form>
    </div>
  );
};

export default Form;
