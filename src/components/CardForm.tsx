import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormularioProps {
    register: UseFormRegister<any>;
    errors: FieldErrors<CardDraft>;
}

type CardDraft = {
    cardholder: string,
    cardNumber: number,
    expireMounth: number,
    expireYear: number,
    cvv: number
}

export default function CardForm({ register, errors }: FormularioProps) {   

    return (
        <>
            <div className="flex flex-col mb-5">
                <label htmlFor="cardholder" className="uppercase font-bold mb-2">
                    cardholder name
                </label>
                <input
                    type="text"
                    id="cardholder"
                    placeholder="e.g. Jane Appleseed"
                    maxLength={40}
                    className={`${errors.cardholder ? 'border-red' : 'border-lightViolet'} border-solid border-2 max-w-[327px] h-[45px] rounded-lg p-4 outline-none focus:border-violet`}
                    {...register('cardholder', {
                        required: 'The cardholder name is obligatory.',
                        maxLength: 40
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
                    type="text"
                    id="cardNumber"
                    maxLength={16}
                    placeholder="eg. 1234 5678 9123 0000"
                    className={`${errors.cardholder ? 'border-red' : 'border-lightViolet'} border-solid border-2 max-w-[327px] h-[45px] rounded-lg p-4 outline-none focus:border-violet`}
                    {...register('cardNumber', {
                        required: 'Wrong format, numbers only',
                        maxLength: 16
                    })}
                />
                {errors.cardNumber && (
                    <p className="text-red">
                        {errors.cardNumber.message}
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
                                type="text"
                                id="expDate"
                                placeholder="MM"
                                maxLength={2}
                                className={`${errors.expireMounth ? 'border-red' : 'border-lightViolet'} border-lightViolet border-solid border-2 max-w-[72px] h-[45px] rounded-lg ps-4 outline-none focus:border-violet`}
                                {...register('expireMounth', {
                                    required: "Can't be black",
                                    maxLength: 2
                                })}
                            />
                            {(errors.expireMounth || errors.expireYear) && (
                                <p className="text-red">
                                    {errors.expireMounth?.message || errors.expireYear?.message}
                                </p>
                            )}

                        </div>
                        <input
                            type="text"
                            id="expDate"
                            placeholder="YY"
                            maxLength={2}
                            className={`${errors.expireYear ? 'border-red' : 'border-lightViolet'} border-lightViolet border-solid border-2 max-w-[72px] h-[45px] rounded-lg ps-4 outline-none focus:border-violet`}
                            {...register('expireYear', {
                                required: "Can't be black",
                                maxLength: 2
                            })}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cardNumber" className="uppercase">
                        cvv
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        placeholder="e.g. 123"
                        maxLength={3}
                        className={`${errors.expireYear ? 'border-red' : 'border-lightViolet'} border-lightViolet border-solid border-2 max-w-[164px] h-[45px] rounded-lg p-4 outline-none focus:border-violet`}
                        {...register('cvv', {
                            required: "Can't be black",
                            maxLength: 3
                        })}
                    />
                    {errors.cvv && (
                        <p className="text-red">
                            {errors.cvv.message}
                        </p>
                    )}
                </div>
            </div>

        </>
    )
}
