import React from "react";
import { Link } from "react-router-dom";
import "./../Css/prod_feat.css";
import image1 from "../../Product_feat/IcuBed.png";
import image2 from "../../Product_feat/fowler_bed.png";
import image3 from "../../Product_feat/Semi_Fowlerbed.png";
import image4 from "../../Product_feat/Plainbed.png";
import image5 from "../../Product_feat/OT_table.png";
const photos = [
  {
    imageUrl: image1,
    name: "ICU Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image2,
    name: "Fowler Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image3,
    name: "Semi Fowler Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image4,
    name: "Plain Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image5,
    name: "OT Table",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image3,
    name: "Semi Fowler Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image4,
    name: "Plain Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image5,
    name: "OT Table",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },

  {
    imageUrl: image4,
    name: "Plain Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
  {
    imageUrl: image5,
    name: "OT Table",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
    pageLink: "/icubed",
  },
];


const Prod_Feature = () => {
  return (
    <div className="product-gallery">
      {photos.map((item, index) => (
        <div className="product-card" key={index}>
          <div className="product-card-inner">
            <div className="product-card-front">
              <img src={item.imageUrl} alt={item.name} className="product-image" />
              <div className="product-name">{item.name}</div>
            </div>
            <div className="product-card-back">
              <p className="product-description">{item.backtext}</p>
              {item.pageLink && (
                <Link to={item.pageLink}>
                  <button className="product-button">Go to page</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prod_Feature;