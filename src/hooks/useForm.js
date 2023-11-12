import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({...formState, [ name ]: value});
    };

    const onCheckChange = ({ target }) => {
      const { name, checked } = target;
      setFormState({...formState, [ name ]: checked});

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
     }
      ;

    }

    const onCheckChangeValue = (option,{target}) => {
      const name = target.name;
      setFormState({...formState, [name]: option})
    };

    const onResetForm = () => {setFormState(initialForm)};

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onCheckChange,
        onCheckChangeValue,
        onCheckChangeAlergias,
        onCheckChangeOther,
    };
}