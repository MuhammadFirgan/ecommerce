import { Poppins, Bebas_Neue } from "next/font/google";


export const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

export const bebas_neue = Bebas_Neue({ 
  weight: ['400'],
  subsets: ["latin"] 
});

export const payments = [
  {
    name: 'visa',
    img: 'visa.svg'
  },
  {
    name: 'american_express',
    img: 'american_express.svg'
  },
  {
    name: 'google_pay',
    img: 'google_pay.svg'
  },
  {
    name: 'paypal',
    img: 'paypal.svg'
  },
  {
    name: 'mastercard',
    img: 'master_card.svg'
  },
]