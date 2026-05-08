import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MessageCircle, Truck, RefreshCw, CreditCard, Search, Heart, User, ShoppingBag, ChevronLeft } from 'lucide-react';

// --- Assets (Placeholders) ---
const HERO_SLIDES = [
  {
    image: "https://lh3.googleusercontent.com/d/1Zu9G4uNn-JFvH5ya8SNGxkf2BusBAGaN",
    title: "Nueva Colección",
    subtitle: "Otoño Invierno",
    tag: "Otoño / Invierno 2026",
    text: "Prendas diseñadas para perdurar en el tiempo, uniendo calidad y estilo. Piezas exclusivas para tu guardarropa esencial.",
    vibrant: true
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200",
    title: "The Leather",
    subtitle: "Edition",
    tag: "Cueros Premium",
    text: "Texturas que cuentan historias. Nuestra selección de cueros está pensada para ser el corazón de tu look."
  },
  {
    image: "https://lh3.googleusercontent.com/d/10RSCueKWvq65rdaJ_NGN-a7JdNXw0Sbw",
    title: "Suéteres &",
    subtitle: "Tejidos",
    tag: "The Knitwear Story",
    text: "El abrazo de la lana más pura. Suavidad y calidez en siluetas que celebran la feminidad contemporánea.",
    vibrant: true
  },
  {
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac50?auto=format&fit=crop&q=80&w=1200",
    title: "Denim",
    subtitle: "Legends",
    tag: "Clásicos Eternos",
    text: "El calce perfecto no es un mito. Descubrí nuestra línea de denim diseñada para acompañarte siempre."
  }
];

const COLLECTION_IMAGES = [
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1475184414782-5965934384d3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=800",
];

const SECTIONS_DATA = [
  {
    title: "Remeras y Bodys",
    tag: "Básicos Esenciales",
    products: [
      { 
        name: "Body FIAMA", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1ZBpntb7ZeUsrz_aZnCyy59ArMI3ROAnl",
        images: [
          "https://lh3.googleusercontent.com/d/1ZBpntb7ZeUsrz_aZnCyy59ArMI3ROAnl",
          "https://lh3.googleusercontent.com/d/1ZMB-I1Xf8EGIR8hbeyOmQfEzfBQw7qOQ",
          "https://lh3.googleusercontent.com/d/16jv2ZBzUHF3kWnbFj2GO-P1Cb7cBaYKE"
        ]
      },
      { 
        name: "Body JULIETA", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1Zi9u6ICrTQU3IKL9VJ3-YpdDmo-1xyaq",
        images: [
          "https://lh3.googleusercontent.com/d/1Zi9u6ICrTQU3IKL9VJ3-YpdDmo-1xyaq",
          "https://lh3.googleusercontent.com/d/1XhfEEzRgsjN_EK4xjMrFsQqpH70CagsV",
          "https://lh3.googleusercontent.com/d/1O3qQ-BfJABtXEpAVoc1CjY_d8R5xLjGy"
        ]
      },
      { 
        name: "Remera PRINCESA blanca", 
        price: 29000, 
        img: "https://lh3.googleusercontent.com/d/1rUxzTOuGSBvHN8tJUsz0dQG0p-HhmB9p",
        images: [
          "https://lh3.googleusercontent.com/d/1rUxzTOuGSBvHN8tJUsz0dQG0p-HhmB9p",
          "https://lh3.googleusercontent.com/d/1WJ_Q6354dMwwpRLX26dApNqlpNs7J5uK",
          "https://lh3.googleusercontent.com/d/1Z_SHHzYamFj4zFr11z-Qm4kMuYS9nQNy"
        ]
      },
      { 
        name: "Remera PRINCESA negra", 
        price: 29000, 
        img: "https://lh3.googleusercontent.com/d/1zWWPuXJvqeK2BZ7XNr6vb2Plq9G7qvIK",
        images: [
          "https://lh3.googleusercontent.com/d/1zWWPuXJvqeK2BZ7XNr6vb2Plq9G7qvIK",
          "https://lh3.googleusercontent.com/d/1gG0KEkxptSdLnzU9_Zcixs8AsGEoKd6H",
          "https://lh3.googleusercontent.com/d/1b_7bYJ_fePdD9I9R_nbtkC-DEMjhmVtR"
        ]
      },
      { 
        name: "Remera LENCERA negra", 
        price: 29000, 
        img: "https://lh3.googleusercontent.com/d/1My_Hgk25fZv3TwFN2WTcN4fhEQdtkU8i",
        images: [
          "https://lh3.googleusercontent.com/d/1My_Hgk25fZv3TwFN2WTcN4fhEQdtkU8i",
          "https://lh3.googleusercontent.com/d/1m7-cRCUbG9ZtQcEhdRuQ_64HX_324ET8",
          "https://lh3.googleusercontent.com/d/10mkKkEjpudLs37RZwmSrXIEWCJBUxQAZ"
        ]
      },
      { 
        name: "Remera LENCERA blanca", 
        price: 29000, 
        img: "https://lh3.googleusercontent.com/d/1chfoTeLHliM5f-AVESZzCdoztSB1--BC",
        images: [
          "https://lh3.googleusercontent.com/d/1chfoTeLHliM5f-AVESZzCdoztSB1--BC",
          "https://lh3.googleusercontent.com/d/1T1yU5RmAR1cSZRytMYPq45PK2MjJvq3f",
          "https://lh3.googleusercontent.com/d/1fuHVukBDESu9FRy3_gjTHHXcbzhi_SLW"
        ]
      },
      { 
        name: "Musculosa BLANCA básica", 
        price: 28000, 
        img: "https://lh3.googleusercontent.com/d/1uHMDJMZPDp5Wstldlp_mlnlZJrBTCXMF",
        images: [
          "https://lh3.googleusercontent.com/d/1uHMDJMZPDp5Wstldlp_mlnlZJrBTCXMF",
          "https://lh3.googleusercontent.com/d/1yVe8tbjJfaP8N62FuyG_Ae4IHwRwcElP",
          "https://lh3.googleusercontent.com/d/1KUAe2yW6Q2aPRdnaWn_3WytjO9B9d2gf"
        ]
      },
      { 
        name: "Remera ESTAMPADA flor", 
        price: 35000, 
        img: "https://lh3.googleusercontent.com/d/1Drjkgwg6QPiL7XHpSmS_96wFfwgkCpoQ",
        images: [
          "https://lh3.googleusercontent.com/d/1Drjkgwg6QPiL7XHpSmS_96wFfwgkCpoQ",
          "https://lh3.googleusercontent.com/d/1vUjDPPiYmIrxY2C0kbK3rrwhEH4k_tRd",
          "https://lh3.googleusercontent.com/d/1XPXMzJ7VZ4i-TxY8GOSH96pKZoacqeIM"
        ]
      },
      { 
        name: "Remera ESTAMPADA girasol", 
        price: 35000, 
        img: "https://lh3.googleusercontent.com/d/1lx78ughK-vxF97dqZfXLw41xha9hagsI",
        images: [
          "https://lh3.googleusercontent.com/d/1lx78ughK-vxF97dqZfXLw41xha9hagsI",
          "https://lh3.googleusercontent.com/d/1P_i1GokeOQRC2GzLEdjD_EKgb-w8ZPLk",
          "https://lh3.googleusercontent.com/d/1FDFeP_wc6Ag3cCnRlnGI6qTW0xjGnBB_"
        ]
      },
      { 
        name: "Remera JAGUAR cremita", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1C8VsMi0-PfR-io2aRekUfxBLW6T3kKea",
        images: [
          "https://lh3.googleusercontent.com/d/1C8VsMi0-PfR-io2aRekUfxBLW6T3kKea",
          "https://lh3.googleusercontent.com/d/185l5lj6QkC2F8hBu0v7MjjQXSig0g-zY",
          "https://lh3.googleusercontent.com/d/1yyRcXfZbi-PjAN0tHXwM5U3D0I3Dts6A"
        ]
      },
      { 
        name: "Remera JAGUAR ladrillo", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1CbQodlSeHreFIvkmsiQig8PIQSyUcB2I",
        images: [
          "https://lh3.googleusercontent.com/d/1CbQodlSeHreFIvkmsiQig8PIQSyUcB2I",
          "https://lh3.googleusercontent.com/d/136jsO_6Hp9cGBn8OGtcVzfBQTZ3S1Uhf",
          "https://lh3.googleusercontent.com/d/1CbQodlSeHreFIvkmsiQig8PIQSyUcB2I"
        ]
      },
      { 
        name: "Body SOFI", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1PCJAa3AK5AW0ckM370ZXo68nEq03qVz6",
        images: [
          "https://lh3.googleusercontent.com/d/1PCJAa3AK5AW0ckM370ZXo68nEq03qVz6",
          "https://lh3.googleusercontent.com/d/1w9cdCNLDE93QP-BkEnz94zXYkiqIl-3M",
          "https://lh3.googleusercontent.com/d/1M-R7cHNFqGwRjN0a11Py4bYNJeppI0q7"
        ]
      },
      { 
        name: "Básica manga larga", 
        price: 30000, 
        img: "https://lh3.googleusercontent.com/d/1IBwY1hxD6Zy6oXNgsx376AkcbqR45-6Q",
        images: [
          "https://lh3.googleusercontent.com/d/1IBwY1hxD6Zy6oXNgsx376AkcbqR45-6Q",
          "https://lh3.googleusercontent.com/d/12Tbz9B5qQLMlNqsA7LlvKjL-aTMmKruG",
          "https://lh3.googleusercontent.com/d/1fcbWd470dyx04_c3_IEDPIQltNxsNe-V"
        ]
      },
    ]
  },
  {
    title: "Blazers",
    tag: "Sastrería Contemporánea",
    products: [
      { 
        name: "Blazer RUFI", 
        price: 95000, 
        img: "https://lh3.googleusercontent.com/d/1o_QOd2pxCUe8bYvJaNYgRRE73uHmevKl",
        images: [
          "https://lh3.googleusercontent.com/d/1o_QOd2pxCUe8bYvJaNYgRRE73uHmevKl",
          "https://lh3.googleusercontent.com/d/1Kw9_8bVoI3mTQwsXIfdDBZplb4pHX-Fn",
          "https://lh3.googleusercontent.com/d/1CxVQGOfX-xBWIUAegqoV-bnge8hlMrcG"
        ]
      },
      { 
        name: "Blazer JULI", 
        price: 95000, 
        img: "https://lh3.googleusercontent.com/d/1lt67KuoFvvAWjS5gefYzPbCEHlIBeNpb",
        images: [
          "https://lh3.googleusercontent.com/d/1lt67KuoFvvAWjS5gefYzPbCEHlIBeNpb",
          "https://lh3.googleusercontent.com/d/1Dgyn1DpsgJr7cxqUIpiD_5sI-CacNrdZ",
          "https://lh3.googleusercontent.com/d/1LHM_lq_MqiKBb01lJ3ELeQPGPKk1ErWh"
        ]
      },
      { 
        name: "Blazer MARA", 
        price: 95000, 
        img: "https://lh3.googleusercontent.com/d/1Cf8gJXzk9XEjPah3kjrRge4NfPPXw7M7",
        images: [
          "https://lh3.googleusercontent.com/d/1Cf8gJXzk9XEjPah3kjrRge4NfPPXw7M7",
          "https://lh3.googleusercontent.com/d/1ek2A2DT7roAJRa79O5_XMTdb3_8MFJ5L",
          "https://lh3.googleusercontent.com/d/1hIJ2l70fxXE0pxqdpIkdCAesTR_cqavi"
        ]
      },
      { 
        name: "Blazer LARA", 
        price: 95000, 
        img: "https://lh3.googleusercontent.com/d/1rFQiO6-bQKVcchc8IKjSHp5PF_2yXq0A",
        images: [
          "https://lh3.googleusercontent.com/d/1rFQiO6-bQKVcchc8IKjSHp5PF_2yXq0A",
          "https://lh3.googleusercontent.com/d/1i3YEef0TKoJy-bFpwX8XUWUjHtoFlTHd",
          "https://lh3.googleusercontent.com/d/1YbBVbaTzUXgfkkshcG3gRbqvZAa1UBc9"
        ]
      },
    ]
  },
  {
    title: "Blusas y Camisas",
    tag: "Texturas Etéreas",
    products: [
      { 
        name: "Camisa EMA blanca", 
        price: 60000, 
        img: "https://lh3.googleusercontent.com/d/19_wMPKLaltZHjaMD5XTjdst0eH4-w1he",
        images: [
          "https://lh3.googleusercontent.com/d/19_wMPKLaltZHjaMD5XTjdst0eH4-w1he",
          "https://lh3.googleusercontent.com/d/1yCgiYU92waIzJileoPpOd1K7yodNeWaF",
          "https://lh3.googleusercontent.com/d/1tANAGd_VF-Evt_wWairUeYd7Jpc1HaV-"
        ]
      },
      { 
        name: "Blusa NIA blanca", 
        price: 49000, 
        img: "https://lh3.googleusercontent.com/d/16mUjDdrbB6trUxK6yaAOxnklcUt373Oa",
        images: [
          "https://lh3.googleusercontent.com/d/16mUjDdrbB6trUxK6yaAOxnklcUt373Oa",
          "https://lh3.googleusercontent.com/d/1MdWCwnFBsq7cpohydkfI9Lbt30ibV3A4",
          "https://lh3.googleusercontent.com/d/1wjZOp9TEN2jhw46DjeLCZ1enNCES-2W-"
        ]
      },
      { 
        name: "Blusa ISA blanca", 
        price: 49000, 
        img: "https://lh3.googleusercontent.com/d/1YF0K89j5txvsD4aPgz6uqZ23Tpa2HVt1",
        images: [
          "https://lh3.googleusercontent.com/d/1YF0K89j5txvsD4aPgz6uqZ23Tpa2HVt1",
          "https://lh3.googleusercontent.com/d/1cgLLwwFpPcjyLp0CUoydblXyKfZgjgoI",
          "https://lh3.googleusercontent.com/d/13L4jCXwgyiUh1CzZP6qE8spB_evvobDr"
        ]
      },
      { 
        name: "Blusa AYALA celeste", 
        price: 60000, 
        img: "https://lh3.googleusercontent.com/d/1dcyAp_IqBFoDZ3-XARmXL56sepa2z2DF",
        images: [
          "https://lh3.googleusercontent.com/d/1dcyAp_IqBFoDZ3-XARmXL56sepa2z2DF",
          "https://lh3.googleusercontent.com/d/1v912iX-rEQDvkow7QBu96kLV-6HYTISr",
          "https://lh3.googleusercontent.com/d/1CnUrznl5p7QI1og3U1376EoKU4MWlFR1"
        ]
      },
      { 
        name: "Camisa AMATISTA blanca", 
        price: 70000, 
        img: "https://lh3.googleusercontent.com/d/1CbXS2lek14nTROV1UkjQypT0pWnZBcLk",
        images: [
          "https://lh3.googleusercontent.com/d/1CbXS2lek14nTROV1UkjQypT0pWnZBcLk",
          "https://lh3.googleusercontent.com/d/10_cHNYJFPdR6CQDCjPA1wF8DCTGQARD_",
          "https://lh3.googleusercontent.com/d/1q4c9AMW8TRMcP16IybZtMtq6ZO7vxL4E"
        ]
      },
      { 
        name: "Blusa RUA blanca", 
        price: 49000, 
        img: "https://lh3.googleusercontent.com/d/1zfQu4OPtdCcBdZpEW37tGG8mZNpO_Azq",
        images: [
          "https://lh3.googleusercontent.com/d/1zfQu4OPtdCcBdZpEW37tGG8mZNpO_Azq",
          "https://lh3.googleusercontent.com/d/1lbpAPY3kcZ0Fm06vPw80ptsk-DgKkkA5",
          "https://lh3.googleusercontent.com/d/12wqvsPIYjRnxO6DFydHKseU2vywHOAcQ"
        ]
      },
    ]
  },
  {
    title: "Pantalones y Polleras",
    tag: "Siluetas Definidas",
    products: [
      { 
        name: "Jean ANCHO elastizado", 
        price: 68000, 
        img: "https://lh3.googleusercontent.com/d/16Zr00JVDeX7NhaCRhpNLzSdcnQ5lZK05",
        images: [
          "https://lh3.googleusercontent.com/d/16Zr00JVDeX7NhaCRhpNLzSdcnQ5lZK05",
          "https://lh3.googleusercontent.com/d/1WXJkPWfKYkExXg1t9rswI50CLZvR9Z9G",
          "https://lh3.googleusercontent.com/d/1zZyf6KIlPewft0UPteqGPRkJIPW7GU1R"
        ]
      },
      {
        name: "Pantalón negro brillante",
        price: 68000,
        img: "https://lh3.googleusercontent.com/d/1Q-ah59LUv9skjGYYDFcphlzAamYt5OPD",
        images: [
          "https://lh3.googleusercontent.com/d/1Q-ah59LUv9skjGYYDFcphlzAamYt5OPD",
          "https://lh3.googleusercontent.com/d/17EkKVC6UnrrMk8x2ld8SuQ150mmFnOgY",
          "https://lh3.googleusercontent.com/d/1fMB5Vt1dwU5qxAie2qx9dsvbGVe13bSa"
        ]
      },
      {
        name: "Pantalón ANCHO oscuro",
        price: 85000,
        img: "https://lh3.googleusercontent.com/d/1xbWvZbWNjoTwznQ2qyuou2npqNNA5-fy",
        images: [
          "https://lh3.googleusercontent.com/d/1xbWvZbWNjoTwznQ2qyuou2npqNNA5-fy",
          "https://lh3.googleusercontent.com/d/1Y0DOr0sD778REnjXQplfEyc7tHcDcAQW",
          "https://lh3.googleusercontent.com/d/1EVoxs3k1OG13WVnJnfElM6Pfm0vlpM8O"
        ]
      },
      {
        name: "Pantalón ANCHO claro",
        price: 85000,
        img: "https://lh3.googleusercontent.com/d/1e2D_fBVAAoX5uk-RjbmKe-JbjLElcckx",
        images: [
          "https://lh3.googleusercontent.com/d/1e2D_fBVAAoX5uk-RjbmKe-JbjLElcckx",
          "https://lh3.googleusercontent.com/d/1OI2TJsN26R9zNQU3_F1Sew51YxOue9pM",
          "https://lh3.googleusercontent.com/d/14L7Jv-wHM3N6UOGHBigV6ykGhvNFOr8N"
        ]
      },
      {
        name: "Pantalón ANCHO mostaza",
        price: 68000,
        img: "https://lh3.googleusercontent.com/d/1uCIbms7wpcxpFpJhi5VcNHr0ceuyjxLt",
        images: [
          "https://lh3.googleusercontent.com/d/1uCIbms7wpcxpFpJhi5VcNHr0ceuyjxLt",
          "https://lh3.googleusercontent.com/d/1m8rsbyRooKW6MjUlw_qVN4tcP3Pwvd-0",
          "https://lh3.googleusercontent.com/d/1-xMHLgpDplsW0vFFqiYX9T5EswgcDoLQ"
        ]
      },
      {
        name: "Jean OXFORD",
        price: 79000,
        img: "https://lh3.googleusercontent.com/d/1flBw3iudQ4TV69mPYYm1s1BQqLJVyIYn",
        images: [
          "https://lh3.googleusercontent.com/d/1flBw3iudQ4TV69mPYYm1s1BQqLJVyIYn",
          "https://lh3.googleusercontent.com/d/1SySW7bAPKmiqsH_00F2hDCQ_rTYV11-m",
          "https://lh3.googleusercontent.com/d/1ZNnaIN0gYafhmbHnJIjpiTn6JCvVz_ux"
        ]
      },
      {
        name: "Pantalón KANDE beige",
        price: 65000,
        img: "https://lh3.googleusercontent.com/d/1t1N5dXKiS2TZRvjjNKWrUvR5EuGiZvdv",
        images: [
          "https://lh3.googleusercontent.com/d/1t1N5dXKiS2TZRvjjNKWrUvR5EuGiZvdv",
          "https://lh3.googleusercontent.com/d/1DAJPnrD5qeiuZogrBZOBCVtLD5PrIYy2",
          "https://lh3.googleusercontent.com/d/1St8oFnn9e1u3TBbXuVArJT9sKKH4fOKM"
        ]
      },
      {
        name: "Pantalón KANDE gris",
        price: 65000,
        img: "https://lh3.googleusercontent.com/d/1nUXnI6aaVZxwob24NVGf8xNrGW3fnOyf",
        images: [
          "https://lh3.googleusercontent.com/d/1nUXnI6aaVZxwob24NVGf8xNrGW3fnOyf",
          "https://lh3.googleusercontent.com/d/12Fbu1MCFgCbHe3H0yAh7xvESCqEyFWZ1",
          "https://lh3.googleusercontent.com/d/1A1TsNmhGi2wb8lJdjPrM5Rk40g4u6hCW"
        ]
      },
      {
        name: "Pollera FLECOS mostaza",
        price: 65000,
        img: "https://lh3.googleusercontent.com/d/1ByRXOWZnQ6O0MZ9-UCmATO4GccNOeUcC",
        images: [
          "https://lh3.googleusercontent.com/d/1ByRXOWZnQ6O0MZ9-UCmATO4GccNOeUcC",
          "https://lh3.googleusercontent.com/d/1Dr1haoKnwS9cavIYn610wl2_Lr3Ih4Ii",
          "https://lh3.googleusercontent.com/d/1t9x81-KQ-9F4WtsbHN5FM2qkxnAhz5b2"
        ]
      },
      {
        name: "Pantalón KANDE negro",
        price: 65000,
        img: "https://lh3.googleusercontent.com/d/1AvxHwAAmsb0dePCxVInW2jSLvImwk7gK",
        images: [
          "https://lh3.googleusercontent.com/d/1AvxHwAAmsb0dePCxVInW2jSLvImwk7gK",
          "https://lh3.googleusercontent.com/d/1UWVzCXiFRGQ_BdI_aBRHupn4twlaNqp5",
          "https://lh3.googleusercontent.com/d/1OpKgXSon1SWUvOyCP72XxYFRjs1nBVpx"
        ]
      },
    ]
  },
  {
    title: "Chalecos",
    tag: "Minimalismo Funcional",
    products: [
      { 
        name: "Chaleco CEBRA", 
        price: 39000, 
        img: "https://lh3.googleusercontent.com/d/1xNBLOpfCf9petwBDoB9bX5IJ0PpItNGz",
        images: [
          "https://lh3.googleusercontent.com/d/1xNBLOpfCf9petwBDoB9bX5IJ0PpItNGz",
          "https://lh3.googleusercontent.com/d/1dAFNKbqluzF97Wl0_JjHasyE5A7i-goM",
          "https://lh3.googleusercontent.com/d/10HOxB2uH-NrSLjZjO2SrVLOUv2ULMu1g"
        ]
      },
      { 
        name: "Chaleco GAMUSADO", 
        price: 59000, 
        img: "https://lh3.googleusercontent.com/d/1RibyAk-K5zyqcJUeRYPqH4erpLVBDD6W",
        images: [
          "https://lh3.googleusercontent.com/d/1RibyAk-K5zyqcJUeRYPqH4erpLVBDD6W",
          "https://lh3.googleusercontent.com/d/1Pv4S0ZSzTfnsmh27HDfOynXp8h9nxzyA",
          "https://lh3.googleusercontent.com/d/1x1AxUU7dN_jO4X1QU3t8uPyyzASuHYH3",
          "https://lh3.googleusercontent.com/d/1MtU5PdC9CqFK7SRMunWLQ7pI49ehthfb"
        ]
      },
      { 
        name: "Chaleco BORDADO", 
        price: 59000, 
        img: "https://lh3.googleusercontent.com/d/1_bHyx1-YVx6Te70QTwhpClX8jPUEedOL",
        images: [
          "https://lh3.googleusercontent.com/d/1_bHyx1-YVx6Te70QTwhpClX8jPUEedOL",
          "https://lh3.googleusercontent.com/d/1WHlwvi_Fw_xVdmAfmR8JCAq0w3GdfgEq",
          "https://lh3.googleusercontent.com/d/1Dzdf3o1CHFHdTO82q8UX-e4_1bkc2Bgk"
        ]
      },
      { 
        name: "Chaleco FLOREADO", 
        price: 39000, 
        img: "https://lh3.googleusercontent.com/d/1NJw-iIE_6LMRF8zp6aLBVonpHQ4Ce98M",
        images: [
          "https://lh3.googleusercontent.com/d/1NJw-iIE_6LMRF8zp6aLBVonpHQ4Ce98M",
          "https://lh3.googleusercontent.com/d/1w-772YlhuJhn82gXCrdd4ZyJNNlAJJcV",
          "https://lh3.googleusercontent.com/d/1EM8ePI9f3DeNlHz6ZMCQWOlHNQ3b0xzh"
        ]
      },
      { 
        name: "Chaleco TINA marrón", 
        price: 42000, 
        img: "https://lh3.googleusercontent.com/d/1GYWGhtb9a7nGE7LtYaKijmFMppz2RCIG",
        images: [
          "https://lh3.googleusercontent.com/d/1GYWGhtb9a7nGE7LtYaKijmFMppz2RCIG",
          "https://lh3.googleusercontent.com/d/1AkN_hcGga0Fx04G5ZCMYPQlV4L4DpTF5",
          "https://lh3.googleusercontent.com/d/1t0JqQkCHRJSmdhvyBvQAGoVLET_PR5Xm"
        ]
      },
      { 
        name: "Chaleco TINA crema", 
        price: 42000, 
        img: "https://lh3.googleusercontent.com/d/1B30_MLALDL7IDyJYEjacHEfG0BzwhBEg",
        images: [
          "https://lh3.googleusercontent.com/d/1B30_MLALDL7IDyJYEjacHEfG0BzwhBEg",
          "https://lh3.googleusercontent.com/d/1qMduXEm77OCUAL-MH5mC7VkaFvhik8eo",
          "https://lh3.googleusercontent.com/d/1krkAicJOS2P1Mdd9-ZLbJ9qP53xhB6G5"
        ]
      },
    ]
  },
  {
    title: "Abrigos",
    tag: "Capas de Estilo",
    products: [
      { 
        name: "Campera GAMUSA bomber", 
        price: 89000, 
        img: "https://lh3.googleusercontent.com/d/1ISzyo1KGB5ZKJbW15aWPJuxd2Rb7BW5b",
        images: [
          "https://lh3.googleusercontent.com/d/1ISzyo1KGB5ZKJbW15aWPJuxd2Rb7BW5b",
          "https://lh3.googleusercontent.com/d/1OXXy2v8LQ6NnBVrG7sxG8HhV8AAOKvTw",
          "https://lh3.googleusercontent.com/d/17EZ6ET2HqyzvXneqQkae9u46yjEHWHvJ"
        ]
      },
      { 
        name: "Campera CUERO negra", 
        price: 76000, 
        img: "https://lh3.googleusercontent.com/d/1uCNsflsWb8BHjZ8LHdmAe9ILBW82vV6m",
        images: [
          "https://lh3.googleusercontent.com/d/1uCNsflsWb8BHjZ8LHdmAe9ILBW82vV6m",
          "https://lh3.googleusercontent.com/d/1BmlpybqrweedGNuxYcdvv613VNObTVHt",
          "https://lh3.googleusercontent.com/d/1DVrVNOCH8dpnpIoFkswpBirF6i9XMm3p",
          "https://lh3.googleusercontent.com/d/1iqEm8LZ0U-jbHZtAen9IpiQjCuYWNllV"
        ]
      },
      { 
        name: "Tapado CUADRILLÉ", 
        price: 100000, 
        img: "https://lh3.googleusercontent.com/d/1WOcYWn8aIcvFMlmBrbjVU93UjQlI8tng",
        images: [
          "https://lh3.googleusercontent.com/d/1WOcYWn8aIcvFMlmBrbjVU93UjQlI8tng",
          "https://lh3.googleusercontent.com/d/1XnUdfEyvCwrgY3LF1rOq2kRnLT0d-nRn",
          "https://lh3.googleusercontent.com/d/1C08O0PhTHZYhR9fqLH37-Ir2TADQRhr7",
          "https://lh3.googleusercontent.com/d/1H0N7eE9olPGCfeSIz1XHHJbAqIGTWYDi"
        ]
      },
      { 
        name: "Sweater JANA", 
        price: 59000, 
        img: "https://lh3.googleusercontent.com/d/13EDN46MvwTDcEgQwyJgNOufcdQlMLVWA",
        images: [
          "https://lh3.googleusercontent.com/d/13EDN46MvwTDcEgQwyJgNOufcdQlMLVWA",
          "https://lh3.googleusercontent.com/d/1u3502ezi5o-zLUxEize75gLQL7WBbv_D",
          "https://lh3.googleusercontent.com/d/12nu3_cQ0j_QlFz7bgZXcYGYUvECd4WF7"
        ]
      },
      { 
        name: "Sweater BREMER", 
        price: 50000, 
        img: "https://lh3.googleusercontent.com/d/1nbLoKoY5GrfuEksGqb_LzqBqUOmyZPRS",
        images: [
          "https://lh3.googleusercontent.com/d/1nbLoKoY5GrfuEksGqb_LzqBqUOmyZPRS",
          "https://lh3.googleusercontent.com/d/1lQztlaOZAp6BZxM1lGWFmlN1WeGshgRR",
          "https://lh3.googleusercontent.com/d/1zOVK5a70DtgjX_mlX8yVcWrY7cU0X1CW",
          "https://lh3.googleusercontent.com/d/1evw3juNe-xsaSYaQmjW8jBjk8ABR5O06"
        ]
      },
      { 
        name: "Sweater HILO", 
        price: 50000, 
        img: "https://lh3.googleusercontent.com/d/1C2DCOg61yELd1QlfAG9D_p9yoHGI3ORb",
        images: [
          "https://lh3.googleusercontent.com/d/1C2DCOg61yELd1QlfAG9D_p9yoHGI3ORb",
          "https://lh3.googleusercontent.com/d/1SVRH_q0HIpw8C6qOSwkWXZ59XkL5oNSc",
          "https://lh3.googleusercontent.com/d/1hCXAD2zRenoE6jRNh9KjIIz9ApsEi8hJ",
          "https://lh3.googleusercontent.com/d/1FPln0I38CEKsygoLMf2P197vJb8V1lsA"
        ]
      },
      { 
        name: "Buzo FLORES", 
        price: 65000, 
        img: "https://lh3.googleusercontent.com/d/1mn2wry0o24R-egMBFpOJU4pZ3wWxs2uM",
        images: [
          "https://lh3.googleusercontent.com/d/1mn2wry0o24R-egMBFpOJU4pZ3wWxs2uM",
          "https://lh3.googleusercontent.com/d/1wd9N7NtZO4GeX3qEVnQDtDBgcQgHcNUZ",
          "https://lh3.googleusercontent.com/d/1vDC1NnN9ezxl4q9ofGytIAgTCP0mhf_P",
          "https://lh3.googleusercontent.com/d/1O9IyybkaLfIPjjToRFNCS8kvtOOpNruv"
        ]
      },
      { 
        name: "Buzo FRIDA blanco", 
        price: 75000, 
        img: "https://lh3.googleusercontent.com/d/1kFwhnDfZCkTNnkOogHZB6hOOI19MDLnt",
        images: [
          "https://lh3.googleusercontent.com/d/1kFwhnDfZCkTNnkOogHZB6hOOI19MDLnt",
          "https://lh3.googleusercontent.com/d/1XixXERxGExhctUCEkONAJ7IfjKSAF1Ma",
          "https://lh3.googleusercontent.com/d/1bQNfZvC5nGlzABui7qTi1y0iqKeHOqVw"
        ]
      },
      { 
        name: "Buzo FRIDA rosa", 
        price: 75000, 
        img: "https://lh3.googleusercontent.com/d/13DcgJn6AYeoa4yUFzMHPPIkluYetjFM_",
        images: [
          "https://lh3.googleusercontent.com/d/13DcgJn6AYeoa4yUFzMHPPIkluYetjFM_",
          "https://lh3.googleusercontent.com/d/1SLCz81KDTz2g_KcNpeSgi_eyv7QsEBW_",
          "https://lh3.googleusercontent.com/d/1kxLvAaJvhIo95xH7IW1L88Z0qLtSQBVt"
        ]
      },
      { 
        name: "Capa lana MILEN", 
        price: 70000, 
        img: "https://lh3.googleusercontent.com/d/1b4NvaKejoP3HNrMdmzupylAm5EqTZzUD",
        images: [
          "https://lh3.googleusercontent.com/d/1b4NvaKejoP3HNrMdmzupylAm5EqTZzUD",
          "https://lh3.googleusercontent.com/d/1nxc4kd6K0GJGE2HBJ9nzvtE-1t3p7_y0",
          "https://lh3.googleusercontent.com/d/1NKhoxjw8bjLOPTjHwYbohY4HxILF2rPB"
        ]
      },
      { 
        name: "Campera jean BRILLOS", 
        price: 65000, 
        img: "https://lh3.googleusercontent.com/d/1yRiddfCrioIrSsdy68aXnRnLKIXT0Vah",
        images: [
          "https://lh3.googleusercontent.com/d/1yRiddfCrioIrSsdy68aXnRnLKIXT0Vah",
          "https://lh3.googleusercontent.com/d/1tQmVL7L4xLvPEjSAsu_6dxUiL-Qo7eXW",
          "https://lh3.googleusercontent.com/d/1UOlrOFhFW-m63Y3Lcg22uwj7bItEeUWG"
        ]
      },
      { 
        name: "Ruanas", 
        price: 25000, 
        img: "https://lh3.googleusercontent.com/d/1DQ9qBJW-6lhcm9dDM_WK4AFFhD0uv4or",
        images: [
          "https://lh3.googleusercontent.com/d/1DQ9qBJW-6lhcm9dDM_WK4AFFhD0uv4or",
          "https://lh3.googleusercontent.com/d/1Syrc85ad6ysxzi3IS2o5V0M5P3c8gTcE"
        ]
      },
    ]
  }
];

// --- Components ---

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center py-2 ${className}`}>
      <div className="font-display text-2xl lg:text-3xl text-brand-borgona leading-none italic flex items-center gap-2">
        <span>Rufi</span>
        <span className="text-brand-malva font-light not-italic">&</span>
        <span>Juli</span>
      </div>
      <div className="font-sans text-[8px] tracking-[0.3em] text-ink opacity-60 uppercase mt-1">
        Moda que nos une
      </div>
      <div className="flex items-center gap-2 mt-0.5 opacity-40">
        <div className="h-[0.5px] w-4 bg-ink"></div>
        <span className="text-brand-malva text-[8px]">♥</span>
        <div className="h-[0.5px] w-4 bg-ink"></div>
      </div>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-brand-malva text-white h-8 flex items-center justify-center text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.1em] uppercase">
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-brand-rosapalo backdrop-blur-md bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['INICIO', 'REMERAS Y BODYS', 'BLAZERS', 'BLUSAS', 'PANTALONES', 'CHALECOS', 'ABRIGOS'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().split(' ')[0]}`}
              className="font-sans text-[11px] font-medium tracking-[0.1em] text-ink hover:text-brand-rosapalo transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons Removed */}
        <div className="flex items-center gap-6 text-ink">
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-brand-crema h-[80vh] min-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 h-full relative z-10 flex flex-col justify-center">
        <div className="relative h-[450px] flex flex-col justify-center">
          {HERO_SLIDES.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: current === index ? 1 : 0,
                y: current === index ? 0 : 30,
                pointerEvents: current === index ? 'auto' : 'none'
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-sans text-xs tracking-[0.4em] text-brand-borgona uppercase mb-6 opacity-60">
                {slide.tag}
              </p>
              <h2 className="font-display text-4xl md:text-8xl lg:text-9xl text-brand-borgona mb-8 leading-[0.85] not-italic">
                {slide.title}<br/>{slide.subtitle}
              </h2>
              <p className="font-sans text-sm sm:text-base text-ink opacity-70 max-w-2xl mb-12 leading-relaxed normal-case">
                {slide.text}
              </p>
              <div className="mt-2 text-left">
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-10 flex gap-4">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-10 h-[2px] transition-all duration-500 ${current === i ? 'bg-brand-borgona' : 'bg-brand-borgona/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialBanner() {
  return (
    <section className="bg-brand-borgona h-14 flex items-center justify-center px-6">
      <motion.p 
         className="font-display text-white text-lg tracking-wide italic font-light"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
      >
        La moda que nos une, la elegancia que perdura.
      </motion.p>
    </section>
  );
}

function ServiceIcons() {
  const services = [
    { title: "ENVÍOS A TODO EL PAÍS" },
    { title: "CAMBIOS SIN CARGO" },
    { title: "ATENCIÓN PERSONALIZADA" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto px-10 py-12 border-t border-brand-rosapalo/10">
      {services.map((s, i) => (
        <div key={i} className="flex items-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-ink opacity-60 uppercase">{s.title}</span>
        </div>
      ))}
    </div>
  );
}

// --- Interfaces & Types ---

interface Product {
  name: string;
  price: number;
  img: string;
  images?: string[];
  tag?: string;
  category?: string;
}

interface CategorySectionProps {
  title: string;
  tag: string;
  products: Product[];
  onProductClick: (product: Product) => void;
  key?: React.Key;
}

function ProductDetail({ product, onClose }: { product: Product, onClose: () => void }) {
  const [activeImage, setActiveImage] = React.useState(product.img);
  const images = product.images || [product.img];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-white overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-10 py-12">
        {/* Navigation / Close */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onClose}
            className="font-sans text-[10px] tracking-[0.3em] text-ink flex items-center gap-2 hover:opacity-60 transition-opacity"
          >
            <ChevronLeft size={14} /> VOLVER
          </button>
          <div className="font-display text-xl italic text-brand-borgona text-center flex-grow pr-16 hidden sm:block">Rufi & Juli</div>
          <div className="w-10"></div> {/* Empty space for centering */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Gallery Sidebar (Left) */}
          <div className="hidden lg:col-span-1 lg:flex flex-col gap-4">
            {images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`aspect-[3/4] border transition-all cursor-pointer overflow-hidden ${activeImage === img ? 'border-brand-borgona' : 'border-stone-100 hover:border-stone-300'}`}
              >
                <img src={img} className="w-full h-full object-cover object-top" alt="" />
              </div>
            ))}
          </div>

          {/* Main Image (Center) */}
          <div className="lg:col-span-6 flex items-start">
            <div className="aspect-[3/4] w-full bg-[#fcfcfc] border border-stone-100 overflow-hidden">
              <img src={activeImage} className="w-full h-full object-cover object-top transition-all duration-500" alt={product.name} />
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="flex lg:hidden gap-3 overflow-x-auto pb-4">
            {images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`aspect-[3/4] w-20 flex-shrink-0 border ${activeImage === img ? 'border-brand-borgona' : 'border-stone-100'}`}
              >
                 <img src={img} className="w-full h-full object-cover object-top" alt="" />
              </div>
            ))}
          </div>

          {/* Details (Right) */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <nav className="flex gap-2 text-[10px] font-sans tracking-widest text-ink/40 mb-6 uppercase">
              <span>Inicio</span> / <span>{product.category || 'Colección'}</span> / <span className="text-ink">{product.name}</span>
            </nav>

            <h1 className="font-display text-5xl text-brand-borgona italic mb-4 leading-none">{product.name}</h1>
            <div className="flex flex-col gap-1 mb-10">
              <p className="font-sans text-xl font-bold text-ink">$ {product.price.toLocaleString()}</p>
              <p className="font-sans text-[11px] text-ink/60 uppercase tracking-widest">este precio es solo con efectivo o transferencia</p>
            </div>

            {/* Actions - Display only */}
            <div className="mb-12">
              <a 
                href={`https://wa.me/5491130981544?text=Hola! Me gustaría consultar por ${product.name}`} 
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full bg-brand-borgona text-white font-sans text-[10px] tracking-[0.3em] font-bold py-5 hover:bg-brand-malva transition-colors uppercase text-center shadow-lg"
              >
                Consultar disponibilidad
              </a>
            </div>

            {/* Extra Info */}
            <div className="border-t border-stone-100 pt-8 space-y-8">
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ title, products, onProductClick }: CategorySectionProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id={title.toLowerCase().split(' ')[0]} className="bg-white py-6 border-b border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 text-center">
        {/* Ultra Minimal Title */}
        <h2 className="font-display text-base tracking-[0.2em] text-brand-borgona mb-8 uppercase font-bold">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProducts.map((product, offset) => {
            return (
              <motion.div 
                key={`${currentPage}-${offset}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: offset * 0.05 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => onProductClick({...product, category: title})}
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-[#fcfcfc] mb-4">
                  <img src={product.img} className="w-full h-full object-cover object-top grayscale-10 group-hover:grayscale-0 transition-all duration-700" alt={product.name} />
                </div>
                
                <div className="flex flex-col items-center">
                  <h3 className="font-sans text-[10px] tracking-[0.05em] text-ink uppercase mb-1">{product.name}</h3>
                  <p className="font-sans font-bold text-[10px] text-ink/80 mb-1">$ {product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Bottom Nav */}
        <div className="flex items-center justify-center gap-6 mt-8">
           <button 
              onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
              className="text-ink/40 hover:text-ink transition-colors text-sm"
           >
              ←
           </button>
           
           <span className="font-sans text-[9px] tracking-widest text-ink/30 tabular-nums">
             {currentPage + 1} / {totalPages}
           </span>

           <button 
              onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
              className="text-ink/40 hover:text-ink transition-colors text-sm"
           >
              →
           </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-brand-crema px-10 h-auto lg:min-h-[150px] flex flex-col lg:flex-row items-start lg:items-center justify-between py-12 lg:py-0">
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mb-8 lg:mb-0">
         <Logo />
         <div className="hidden lg:block w-[1px] h-10 bg-brand-rosapalo opacity-30 mt-1"></div>
         <p className="font-sans text-[10px] text-ink opacity-40 tracking-widest uppercase text-left">
            © 2026 RUFI & JULI<br className="sm:hidden" /> • MODA QUE NOS UNE
         </p>
         <div className="flex gap-4 ml-0 lg:ml-4">
            <a href="https://www.instagram.com/rufi.juli.moda/" target="_blank" rel="noreferrer">
              <Instagram size={18} className="text-ink opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </a>
            <a href="https://wa.me/5491130981544" target="_blank" rel="noreferrer">
              <MessageCircle size={18} className="text-ink opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </a>
         </div>
      </div>

      <a 
        href="https://wa.me/5491130981544" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100]"
      >
        <motion.div 
          className="bg-brand-orooliva text-white flex items-center gap-3 px-6 py-3.5 rounded-full shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={14} />
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white">ESCRIBINOS</span>
        </motion.div>
      </a>
    </footer>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  return (
    <div className="selection:bg-brand-rosapalo selection:text-white font-sans overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main className="bg-white">
        <Hero />
        
        {/* Category Carousels - Compact & Minimal */}
        <div className="divide-y divide-brand-rosapalo/5">
          {SECTIONS_DATA.map((section, idx) => (
            <CategorySection 
              key={idx} 
              title={section.title} 
              tag={section.tag} 
              products={section.products} 
              onProductClick={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        <EditorialBanner />
        <ServiceIcons />
      </main>
      <Footer />

      {/* Product Detail Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
