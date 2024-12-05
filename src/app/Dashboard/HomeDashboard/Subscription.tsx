"use client";
import React from "react";
import { Button } from "react-bootstrap";
import yellow_icon from "../../../../public/assets/images/svg/yellow_icon.svg";
import Image from "next/image";

const PlanCard = ({ planName, price, features, additionalClass }) => {
  return (
    <div className={`col-md-6 ${additionalClass}`}>
<<<<<<< HEAD
      <div className="subscription-box p-3 rounded-2">
        <h4 className="fs_16 fw-medium red_ff subcription-text-color">{planName}</h4>
        <div className="d-flex align-items-end">
          <span className="fs_24 red_ff  fw-semibold subcription-text-color">${price}</span>
=======
      <div className="subscription-box w-100 p-3 rounded-2">
        <h4 className="fs_16 fw-medium red_ff subcription-text-color">
          {planName}
        </h4>
        <div className="d-flex align-items-end">
          <span className="fs_24 red_ff  fw-semibold subcription-text-color">
            ${price}
          </span>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
          <span className="fs-6 mb-1">/Month</span>
        </div>
        {features.map((feature, index) => (
          <div className="d-flex align-items-center mt-3 gap-2" key={index}>
            <Image src={yellow_icon} alt="yellow_icon" />
<<<<<<< HEAD
            <span className="fs_14 subcription-text-color red_ff fw-normal">{feature}</span>
=======
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              {feature}
            </span>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
          </div>
        ))}
      </div>
    </div>
  );
};

const Subscription = () => {
  const plans = [
    {
      planName: "Starter Plan",
      price: 49,
<<<<<<< HEAD
      features: ["Basic Reporting", "Email Reminders", "Budgeting Tools", "Budgeting Tools"],
=======
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
    },
    {
      planName: "Basic Plan",
      price: 49,
<<<<<<< HEAD
      features: ["Basic Reporting", "Email Reminders", "Budgeting Tools", "Budgeting Tools"],
=======
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
    },
    {
      planName: "Premium Plan",
      price: 49,
<<<<<<< HEAD
      features: ["Basic Reporting", "Email Reminders", "Budgeting Tools", "Budgeting Tools"],
=======
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
    },
    {
      planName: "Premium Plan",
      price: 49,
<<<<<<< HEAD
      features: ["Basic Reporting", "Email Reminders", "Budgeting Tools", "Budgeting Tools"],
=======
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            {...plan}
<<<<<<< HEAD
            additionalClass={index === 2 || index === 3 ? 'mt-4' : ''}
=======
            additionalClass={index === 2 || index === 3 ? "mt-4" : ""}
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
          />
        ))}
      </div>
      <div className="mt-5 text-center w-100">
        <Button className="w-100 py-2">Update Auto Payment</Button>
      </div>
    </div>
  );
};

export default Subscription;

<<<<<<< HEAD


=======
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
// "use client"
// import React from "react";
// import yellow_icon from "../../../../public/assets/images/svg/yellow_icon.svg";
// import Image from 'next/image';
// const Subscription = () => {
//   return (
//     <div>
//       <div className="row">
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;
