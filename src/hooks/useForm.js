import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({...formState, [ name ]: value});
    };


    const onInputChangeNumber = ({ target }) => {
      const { name, value } = target;

      if (!isNaN(value)) {
        setFormState({...formState, [ name ]: value});
      }
    };


    const onCheckChange = ({ target }) => {
      const { name, checked } = target;
      setFormState({...formState, [ name ]: checked});

    };

    const onCheckChangeValue = ({ target }) => {
      const { name, checked } = target;

      if (name === "cenaSi" && checked) {
      setFormState({...formState, [ name ]: checked, cenaNo: false, carne: true});
      }else if(name === "cenaNo" && checked){
      setFormState({...formState, [ name ]: checked, cenaSi: false, carne: false, pescado: false});
      }else if(name === "pescado" && checked){
        setFormState({...formState, [ name ]: checked, carne: false});
      }else if(name === "carne" && checked){
        setFormState({...formState, [ name ]: checked, pescado: false});
      }
    };


    const onCheckChangeAlergias = ({ target }) => {
      const { name, checked } = target;
      //TODO Mejorar este proceso tan pesado
      if (!formState.noAlergias && name === "noAlergias") {
        setFormState({...formState, [ name ]: checked,
          gluten: false,
          huevo: false,
          lactosa: false,
          marisco: false,
          frutossecos: false,
          otras: false,
          otrasAlergias: ""});
          document.getElementsByName("gluten")[0].checked= false;
          document.getElementsByName("huevo")[0].checked= false;
          document.getElementsByName("lactosa")[0].checked= false;
          document.getElementsByName("marisco")[0].checked= false;
          document.getElementsByName("frutossecos")[0].checked= false;
          document.getElementsByName("otras")[0].checked= false;
          document.getElementsByName("otrasAlergias")[0].style.visibility = "hidden";
      }else{
        setFormState({...formState, [ name ]: checked});
      }
    };


    const onCheckChangeOther = ({target}) => {
      const { name, checked } = target;
      const text = document.getElementsByName("otrasAlergias")[0];
     if (checked) {
      text.style.visibility = "visible";
      setFormState({...formState, [ name ]: checked})
     }else{
      text.style.visibility = "hidden";
      setFormState({...formState, [ name ]: checked, otrasAlergias: ""})
     };
    }

    const onResetForm = () => {
      document.getElementsByName("gluten")[0].checked= false;
      document.getElementsByName("huevo")[0].checked= false;
      document.getElementsByName("lactosa")[0].checked= false;
      document.getElementsByName("marisco")[0].checked= false;
      document.getElementsByName("frutossecos")[0].checked= false;
      document.getElementsByName("otras")[0].checked= false;
      document.getElementsByName("otrasAlergias")[0].style.visibility = "hidden";
      setFormState(initialForm)};

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onCheckChange,
        onCheckChangeValue,
        onCheckChangeAlergias,
        onCheckChangeOther,
        onInputChangeNumber,
    };
}