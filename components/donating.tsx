import React from 'react';

const featuresData = [
  {
    title: "Donate via PayPal",
    description: "Donate via PayPal for a one-time contribution or set up a recurring donation. This option provides the flexibility to choose the amount you want to give.",
    icon: (
    <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0070BA"></circle> <path d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z" fill="white" fill-opacity="0.6"></path> <path d="M31.3009 17.6871C31.1506 17.6434 30.9955 17.6036 30.8364 17.5678C30.6766 17.5328 30.5127 17.5018 30.3441 17.4748C29.754 17.3793 29.1074 17.334 28.4147 17.334H22.5676C22.4237 17.334 22.2869 17.3666 22.1644 17.4254C21.8948 17.5551 21.6944 17.8104 21.6459 18.1229L20.402 26.0013L20.3662 26.2311C20.4481 25.7126 20.8911 25.3308 21.4168 25.3308H23.6055C27.9041 25.3308 31.2699 23.5851 32.2537 18.5349C32.2831 18.3854 32.3078 18.2398 32.33 18.0975C32.0811 17.9655 31.8115 17.8525 31.5212 17.7563C31.4496 17.7324 31.3757 17.7094 31.3009 17.6871Z" fill="white" fill-opacity="0.8"></path> <path d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6402 33.3381H19.2458L20.4022 26.0014L21.6461 18.1231Z" fill="white"></path> </g></svg>
    ),
    url: "https://www.paypal.com/" // Add PayPal URL
  },
  {
    title: "Support us on Patreon",
    description: "Support us on Patreon and gain access to exclusive content, updates, and rewards based on your subscription tier. Patreon allows for monthly recurring donations, perfect for ongoing support.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" fill="#ff424d"></circle> <path d="M598.57 285.68c-93.7 0-169.94 76.24-169.94 169.94C428.63 549 504.87 625 598.57 625 692 625 768 549 768 455.62c0-93.7-76-169.94-169.43-169.94M296 738.32h83V285.68h-83" fill="#fff"></path> </g></svg>
    ),
    url: "https://www.patreon.com/" // Add Patreon URL
  },
  {
    title: "Donate via Liberapay",
    description: "Liberapay is a platform for recurring donations with no fees for the donor. You can set up a weekly, monthly, or yearly donation to support our continuous efforts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Liberapay" role="img" viewBox="0 0 512 512" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f6c915"></rect><path fill="#ffffff" d="M209 359c-17 0-30-2-39-7-10-4-16-10-20-17-4-8-6-16-6-26s1-20 4-31l44-185 54-8-48 201-2 11c0 4 0 7 2 9 1 3 4 5 7 7l14 3-10 43M404 243c0 17-3 33-9 47a103 103 0 0 1-59 60 117 117 0 0 1-68 7l-16 63h-51l57-241a305 305 0 0 1 71-11c13 0 24 2 34 6a63 63 0 0 1 36 40c3 9 5 19 5 29m-127 72l15 1c9 0 17-1 25-5 7-3 13-8 19-14 5-6 9-13 12-22 3-8 4-18 4-28s-2-18-6-25c-5-7-13-11-23-11l-21 2-25 102"></path></g></svg>
    ),
    url: "https://liberapay.com/" // Add Liberapay URL
  },
  {
    title: "GitHub Sponsor",
    description: "If you're active on GitHub, you can sponsor OpenVoiceOS directly through GitHub Sponsors. Choose a sponsorship tier that fits your budget and support us directly on the platform.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#181717"></circle> <path d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z" fill="white"></path> </g></svg>
    ),
    url: "" // Add GitHub Sponsor URL
  },
];

const Methods = ({ title, description, icon, url }) => (
  <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full object-cover">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
    <p className="font-medium text-gray-500 dark:text-gray-300 md:text-justify">{description}</p>
    <a className="btn font-bold text-white bg-black dark:bg-gray-800 dark:text-gray-200 rounded-3xl mx-auto m-5" href = {url}>Learn More</a>
  </div>
);

const Donations = () => {
  return (
    <section className="relative mt-32">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-center text-3xl text-black dark:text-white font-extrabold md:text-4xl">
        How Your Donation Helps
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base lg:mx-auto">
        Your donations are crucial in sustaining the OpenVoiceOS project. The funds are used to facilitate software development, acquire and test hardware, maintain infrastructure, and promote the project to reach a broader audience. Additionally, donations help cover the costs of providing user support and ensuring the platform's continuous improvement. Every contribution, no matter the size, plays a significant role in keeping OpenVoiceOS thriving and evolving.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-8">
      {featuresData.map((feature, index) => (
        <Methods 
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          url={feature.url}
        />
      ))}
    </div>
    </section>
  );
};

export default Donations;
