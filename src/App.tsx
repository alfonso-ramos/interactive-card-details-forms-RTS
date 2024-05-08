import { useState } from "react"
import { useForm } from "react-hook-form"
type CardDraft = {
  cardholder: string,
  cardNumber: number,
  expireMounth: number,
  expireYear: number,
  cvv: number
}



function App() {
  const [isCorrect, setIsCorrect] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<CardDraft>()
  const submitForm = () => {
    setIsCorrect(true)
  }
  return (
    <>
      <form
        action=""
        noValidate
        className="container"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col mb-5">
          <label htmlFor="cardholder" className="uppercase font-bold mb-2">
            cardholder name
          </label>
          <input
            type="text"
            id="cardholder"
            placeholder="e.g. Jane Appleseed"
            className="border-lightViolet border-solid border-2 max-w-[327px] h-[45px] rounded-lg p-4"
            {...register('cardholder', {
              required: 'The cardholder name is obligatory.'
            })}
          />
          {errors.cardholder && (
            <p className="text-red">
              {errors.cardholder.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="cardNumber" className="uppercase font-bold mb-2">
            card number
          </label>
          <input
            type="number"
            id="cardNumber"
            placeholder="eg. 1234 5678 9123 0000"
            className="border-lightViolet border-solid border-2 max-w-[327px] h-[45px] rounded-lg p-4"
            {...register('cardNumber', {
              required: 'Wrong format, numbers only',
              minLength: 16
            })}
          />
          {errors.cardNumber && (
            <p className="text-red">
              {errors.cardNumber?.message}
            </p>
          )}
        </div>

        <div className="flex gap-3 mb-5">
          <div>

            <label htmlFor="expDate" className="uppercase">
              exp. date (mm/yy)
            </label>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <input
                  type="number"
                  id="expDate"
                  placeholder="MM"
                  className="border-lightViolet border-solid border-2 max-w-[72px] h-[45px] rounded-lg p-4"
                  {...register('expireYear' && 'expireMounth', {
                    required: "Can't be black",
                    minLength: 2
                  })}
                />
                {(errors.expireMounth || errors.expireYear) && (
                  <p className="text-red">
                    {errors.expireMounth?.message || errors.expireYear?.message}
                  </p>
                )}

              </div>
              <input
                type="number"
                id="expDate"
                placeholder="YY"
                className="border-lightViolet border-solid border-2 max-w-[72px] h-[45px] rounded-lg p-4"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="cardNumber" className="uppercase">
              cvv
            </label>
            <input
              type="number"
              id="cvv"
              placeholder="e.g. 123"
              className="border-lightViolet border-solid border-2 max-w-[164px] h-[45px] rounded-lg p-4"
              {...register('cvv', {
                required: "Can't be black",
                minLength: 3, maxLength: 4
              })}
            />
            {errors.cvv && (
              <p className="text-red">
                {errors.cvv?.message}
              </p>
            )}
          </div>
        </div>



        <input
          type="submit"
          value="Confirm"
          className="w-full bg-veryDarkViolet text-white font-bold rounded-md uppercase h-[53px]"
        />
      </form>

      {isCorrect && (
        <p>Formulario llenado correctamente</p>
      )}
    </>
  )
}

export default App
