import Link from "next/link";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";

const FooterBanner = ({ bannerdata }: any) => {
  // console.log(bannerdata);
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{bannerdata.doscount}</p>
          <h3>{bannerdata.largeText1}</h3>
          <h3>{bannerdata.largeText2}</h3>
          <p>{bannerdata.saleTime}</p>
        </div>
        <div className="right">
          <p>{bannerdata.smallText}</p>
          <h3>{bannerdata.midText}</h3>
          <p>{bannerdata.desc}</p>
          <Link href={`/product/`}><button className="button">{bannerdata.buttonText}</button></Link>
        </div>
        <img src={urlForImage(bannerdata.image).url()} alt="bannerimg" className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
