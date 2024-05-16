import { useState } from "react"
import { useForm } from "react-hook-form"
import CardForm from "./components/CardForm"
import SuccessRegister from "./components/SuccessRegister"
import DisplayCards from './components/DisplayCards';

type CardDraft = {
  cardholder: string,
  cardNumber: string,
  expireMounth: number,
  expireYear: number,
  cvv: number
}


function App() {

  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm<CardDraft>()
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const { cardholder, cardNumber, expireMounth, expireYear, cvv } = watch()

  const onSubmit = () => {
    if (!formSubmitted) {
      console.log('submit')
      setFormSubmitted(true)
    } else {
      console.log('continue')
      setFormSubmitted(false)
      reset()
    }
  };

  const formatCreditCardNumber = (num: string) => {
    if (!num) return '';
    return num.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <>
      <div className="xl:flex gap-[350px]">
        <DisplayCards
          cardholder={cardholder}
          cardNumber={cardNumber}
          expireMounth={expireMounth}
          expireYear={expireYear}
          cvv={cvv}
          formatCreditCardNumber={formatCreditCardNumber}
        />

        <div className="mt-[90px] xl:mt-[120px]">
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
            <div className="w-[327px] mx-auto">
              <SuccessRegister />
              <button
                onClick={() => {
                  setFormSubmitted(false)
                  reset()
                }}
                className="w-full bg-veryDarkViolet text-white font-bold rounded-md uppercase h-[53px] hover:cursor-pointer mt-12"
              >Continue</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
