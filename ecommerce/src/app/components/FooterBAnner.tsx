// import Link from "next/link";
// import React from "react";
// import { urlForImage } from "../../../sanity/lib/image";
// import Image from "next/image";

// const FooterBanner = ({ bannerdata }: any) => {
 
//   return (
//     <div className="footer-banner-container">
//       <div className="banner-desc">
//         <div className="left">
//           <p>{bannerdata.doscount}</p>
//           <h3>{bannerdata.largeText1}</h3>
//           <h3>{bannerdata.largeText2}</h3>
//           <p>{bannerdata.saleTime}</p>
//         </div>
//         <div className="right">
//           <p>{bannerdata.smallText}</p>
//           <h3>{bannerdata.midText}</h3>
//           <p>{bannerdata.desc}</p>
//           <Link href={`/product/`}><button className="button">{bannerdata.buttonText}</button></Link>
//         </div>
//         <Image src={urlForImage(bannerdata.image).url()} alt="bannerimg" className="footer-banner-image" width={500} height={500}/>
//       </div>
//     </div>
//   );
// };

// export default FooterBanner;
