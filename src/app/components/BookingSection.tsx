// import Link from 'next/link';
// import Image from 'next/image';

// export default function BookingSection() {
//   return (
//     <div className="bg-gray-100 py-16 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold mb-3">Let people book when</h1>
//         <h2 className="text-5xl font-extrabold mb-8">it works for both of you</h2>
//         <div className="flex justify-center space-x-4 mb-8">
//           <Link href="/get-started" passHref>
//             <div className="inline-block bg-black text-white py-4 px-10 rounded-full hover:bg-gray-800 transition cursor-pointer">
//               GET STARTED &rarr;
//             </div>
//           </Link>
//           <Link href="/contact-sales" passHref>
//             <div className="inline-block bg-white border border-black text-black py-4 px-10 rounded-full hover:bg-gray-100 transition cursor-pointer">
//               CONTACT SALES &rarr;
//             </div>
//           </Link>
//         </div>
//         <div className="flex justify-center space-x-4 mt-4">
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Google" width={90} height={90} />

//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Product of the week" width={90} height={90} />

//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Product of the month" width={90} height={90} />

//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/p_sign.png" alt="Google" width={80} height={80} />

//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/g_sign.png" alt="G2" width={80} height={80} />

//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/o_sign.png" alt="Product Hunt" width={80} height={80} />

//           </div>
//           <div
//             className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
//             style={{ backgroundImage: 'url("/images/design.png")' }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from 'next/link';
// import Image from 'next/image';

// export default function BookingSection() {
//   return (
//     <div className="relative bg-gray-100 py-16 px-4">
//       {/* Background Image */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
//         style={{ backgroundImage: 'url("/images/design.png")', zIndex: 0 }}
//       ></div>

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto text-center z-10">
//         <h1 className="text-5xl font-extrabold mb-3">Let people book when</h1>
//         <h2 className="text-5xl font-extrabold mb-8">it works for both of you</h2>
//         <div className="flex justify-center space-x-4 mb-8">
//           <Link href="/get-started" passHref>
//             <div className="inline-block bg-black text-white py-4 px-10 rounded-full hover:bg-gray-800 transition cursor-pointer">
//               GET STARTED &rarr;
//             </div>
//           </Link>
//           <Link href="/contact-sales" passHref>
//             <div className="inline-block bg-white border border-black text-black py-4 px-10 rounded-full hover:bg-gray-100 transition cursor-pointer">
//               CONTACT SALES &rarr;
//             </div>
//           </Link>
//         </div>
//         <div className="flex justify-center space-x-4 mt-4">
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Product of the day" width={90} height={90} />
//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Product of the week" width={90} height={90} />
//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/product_day.png" alt="Product of the month" width={90} height={90} />
//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/p_sign.png" alt="Product Hunt" width={80} height={80} />
//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/g_sign.png" alt="Google" width={80} height={80} />
//           </div>
//           <div className="text-center">
//             <Image src="/images/BookingSection/o_sign.png" alt="G2" width={80} height={80} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';

export default function BookingSection() {
  return (
    <div className="relative bg-gray-100 py-16 px-4">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
        style={{ 
          backgroundImage: 'url("/images/design.png")', 
          backgroundPosition: 'center 260px',
          zIndex: 0 
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl font-extrabold mb-3">Let people book when</h1>
        <h2 className="text-5xl font-extrabold mb-8">it works for both of you</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href="/get-started" passHref>
            <div className="inline-block bg-black text-white py-4 px-10 rounded-full hover:bg-gray-800 transition cursor-pointer">
              GET STARTED &rarr;
            </div>
          </Link>
          <Link href="/contact-sales" passHref>
            <div className="inline-block bg-white border border-black text-black py-4 px-10 rounded-full hover:bg-gray-100 transition cursor-pointer">
              CONTACT SALES &rarr;
            </div>
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mt-4 mb-20">
          <div className="text-center">
            <Image src="/images/BookingSection/product_day.png" alt="Google" width={90} height={90} />
          </div>
          <div className="text-center">
            <Image src="/images/BookingSection/product_day.png" alt="Product of the week" width={90} height={90} />
          </div>
          <div className="text-center">
            <Image src="/images/BookingSection/product_day.png" alt="Product of the month" width={90} height={90} />
          </div>
          <div className="text-center">
            <Image src="/images/BookingSection/p_sign.png" alt="Google" width={80} height={80} />
          </div>
          <div className="text-center">
            <Image src="/images/BookingSection/g_sign.png" alt="G2" width={80} height={80} />
          </div>
          <div className="text-center">
            <Image src="/images/BookingSection/o_sign.png" alt="Product Hunt" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
}
