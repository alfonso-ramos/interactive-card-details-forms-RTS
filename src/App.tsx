import { useState } from "react"
import { useForm } from "react-hook-form"
import CardForm from "./components/CardForm"

type CardDraft = {
  cardholder: string,
  cardNumber: number,
  expireMounth: number,
  expireYear: number,
  cvv: number
}


function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<CardDraft>()
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const onSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      <div className="bg-mobile h-[240px] bg-no-repeat bg-cover xl:bg-desktop">

      </div>
      <div>
        {!formSubmitted && (
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="w-[327px] mx-auto"
          >
            <CardForm
              register={register}
              errors={errors}
            />
            <input
              type="submit"
              value="Confirm"
              className="w-full bg-veryDarkViolet text-white font-bold rounded-md uppercase h-[53px] hover:cursor-pointer"
            />
          </form>
        )}
        {formSubmitted && (
          <p>Gracias por llenar el formulario</p>
        )}
      </div>
    </>
  )
}

export default App
