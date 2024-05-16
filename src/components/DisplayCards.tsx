type DisplayCardsProps = {
    cardholder: string,
    cardNumber: string,
    expireMounth: number,
    expireYear: number,
    cvv: number,
    formatCreditCardNumber: (num: string) => string
}

export default function DisplayCards({ cardholder, cardNumber, expireMounth, expireYear, cvv, formatCreditCardNumber }: DisplayCardsProps) {
    return (
        <>
            <div className="bg-mobile h-[240px] bg-no-repeat bg-cover xl:bg-desktop xl:h-screen">
                <div className="w-[343px]">
                    <div className="bg-card-back bg-cover bg-no-repeat w-[286px] h-[157px] absolute right-4 mt-8 md:right-36 xl:left-64 xl:top-[275px]">
                        <p className="absolute right-9 top-[70px] text-xs text-white">{cvv || '000'}</p>
                    </div>

                    <div className="bg-card-front bg-cover bg-no-repeat w-[286px] h-[157px] absolute left-4 top-[120px] md:left-36 xl:left-40 ">
                        <img
                            src="/images/card-logo.svg"
                            alt=""
                            className="w-14 h-7 absolute left-5 top-4"
                        />
                        <div className="absolute left-5 top-[80px] min-w-[240px] ">
                            <p className=" text-lg text-white mb-5 font-bold space-x-2">{formatCreditCardNumber(cardNumber) || '0000 0000 0000 0000'}</p>
                            <div className="flex justify-between">
                                <p className="uppercase text-[9px] text-white">{cardholder || 'Jane appleseed'}</p>
                                <p className="text-xs text-white text-[9px]">{expireMounth || '00'}/{expireYear || '00'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
