import React from 'react';

const featuresData = [
  {
    title: "Coding",
    description: "OpenVoiceOS, is always actively seeking contributions from developers across its entire framework. Whether you're skilled in front-end interfaces, backend services, machine learning, or voice recognition, your expertise can help advance this community-driven project. Developers can contribute by improving existing features, fixing bugs, or optimizing performance, ensuring the platform remains robust, user-friendly, and accessible to a broader audience.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Building a Skill and/or Plugin",
    description: "We welcome developers who can create skills and plugins to help expand its functionality and versatility. By contributing your creativity with coding new skills, enhance existing ones, or develop new plugins that integrate seamlessly with the platform we enrich the user experience and offer more personalized and diverse interactions.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_402_1610)"> <path d="M17.6336 11.5653L12.2393 16.9596L15.3514 20.0717C16.841 21.5613 19.2561 21.5613 20.7457 20.0717C22.2353 18.5821 22.2353 16.167 20.7457 14.6774L17.6336 11.5653Z" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M6.80931 11.2036L12.2036 5.80925L9.09151 2.69715C7.60192 1.20755 5.18681 1.20756 3.69721 2.69715C2.20762 4.18675 2.20762 6.60186 3.69721 8.09146L6.80931 11.2036Z" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M13.1909 15.4215L11.2393 13.4699" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M16.0955 12.5169L14.1439 10.5653" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M20.7456 20.0717L21.9904 21.3165" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M3.69714 2.69713L2.4523 1.45229" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M11.4094 17.7895L18.4635 10.7354" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> <path d="M13.0334 4.97935L5.97936 12.0334" stroke="#1C1C1C" stroke-width="1.55182" stroke-linecap="round"></path> </g> <defs> <clipPath id="clip0_402_1610"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Helping with Translation",
    description: "OpenVoiceOS is committed to ensuring that no language is left behind and is seeking help from translators around the globe to make this vision a reality. As an open-source voice assistant platform, OpenVoiceOS aims to be accessible to users around the world, regardless of their native language.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Testing & Quality Assurance",
    description: "The easiest way to contribute is most likely by just user, test and report back any issues found for quality assurance. This helps to maintain the platform's reliability and performance, ensuring that the voice assistant functions work seamlessly across various devices and scenarios which is crucial for delivering a top-notch user experience. Identifying and resolve bugs, improve system stability, and ensure that new features are implemented smoothly.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V7C19 7.55228 19.4477 8 20 8C20.5523 8 21 7.55228 21 7V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM13.5067 11.3155C13.6011 10.0209 14.6813 9 16 9H17C18.3186 9 19.3988 10.0209 19.4933 11.3155C20.6616 10.75 22.0859 11.175 22.7452 12.317L23.2452 13.183C23.9045 14.325 23.5605 15.7709 22.4866 16.5C23.5605 17.2291 23.9045 18.675 23.2452 19.817L22.7452 20.683C22.0859 21.825 20.6616 22.25 19.4933 21.6845C19.3988 22.9791 18.3186 24 17 24H16C14.6813 24 13.6011 22.9791 13.5067 21.6845C12.3384 22.25 10.9141 21.825 10.2548 20.683L9.7548 19.817C9.09548 18.675 9.43952 17.2291 10.5134 16.5C9.43952 15.7709 9.09548 14.325 9.7548 13.183L10.2548 12.317C10.9141 11.175 12.3384 10.75 13.5067 11.3155ZM16 11C15.7238 11 15.5 11.2239 15.5 11.5V12.4678C15.5 12.8474 15.285 13.1943 14.945 13.3633C14.8128 13.429 14.6852 13.5029 14.5629 13.5844C14.2464 13.7952 13.8378 13.8083 13.5085 13.6181L12.6699 13.134C12.4307 12.9959 12.1249 13.0778 11.9868 13.317L11.4868 14.183C11.3488 14.4222 11.4307 14.728 11.6699 14.866L12.5088 15.3504C12.8375 15.5402 13.0304 15.8997 13.0069 16.2785C13.0023 16.3516 13 16.4255 13 16.5C13 16.5745 13.0023 16.6484 13.0069 16.7215C13.0304 17.1003 12.8375 17.4598 12.5088 17.6496L11.6699 18.134C11.4307 18.272 11.3488 18.5778 11.4868 18.817L11.9868 19.683C12.1249 19.9222 12.4307 20.0041 12.6699 19.866L13.5085 19.3819C13.8378 19.1917 14.2464 19.2048 14.5629 19.4156C14.6852 19.4971 14.8128 19.571 14.945 19.6367C15.285 19.8057 15.5 20.1526 15.5 20.5322V21.5C15.5 21.7761 15.7238 22 16 22H17C17.2761 22 17.5 21.7761 17.5 21.5V20.5323C17.5 20.1526 17.715 19.8057 18.055 19.6367C18.1872 19.571 18.3148 19.4971 18.4372 19.4156C18.7536 19.2048 19.1622 19.1917 19.4915 19.3819L20.3301 19.866C20.5693 20.0041 20.8751 19.9222 21.0131 19.683L21.5131 18.817C21.6512 18.5778 21.5693 18.272 21.3301 18.134L20.4912 17.6496C20.1625 17.4599 19.9696 17.1004 19.9931 16.7215C19.9977 16.6484 20 16.5745 20 16.5C20 16.4255 19.9977 16.3516 19.9931 16.2785C19.9696 15.8996 20.1625 15.5401 20.4912 15.3504L21.3301 14.866C21.5693 14.728 21.6512 14.4222 21.5131 14.183L21.0131 13.317C20.8751 13.0778 20.5693 12.9959 20.3301 13.134L19.4915 13.6181C19.1622 13.8083 18.7536 13.7952 18.4372 13.5844C18.3148 13.5029 18.1872 13.429 18.055 13.3633C17.715 13.1943 17.5 12.8474 17.5 12.4677V11.5C17.5 11.2239 17.2761 11 17 11H16ZM18.5 16.5C18.5 17.6046 17.6046 18.5 16.5 18.5C15.3954 18.5 14.5 17.6046 14.5 16.5C14.5 15.3954 15.3954 14.5 16.5 14.5C17.6046 14.5 18.5 15.3954 18.5 16.5Z" fill="#000000"></path> </g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Documentation",
    description: "OpenVoiceOS is seeking contributors to help enhance both user and developer documentation, a critical aspect of making the platform accessible and easy to use. Clear, comprehensive documentation is essential for guiding users through the setup and operation of the voice assistant, as well as for assisting developers in creating new features, skills, and plugins. Whether you're skilled in writing, technical communication, or have a deep understanding of OpenVoiceOS, your contributions can ensure that documentation is thorough, up-to-date, and user-friendly.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fill-rule="evenodd" d="M4.25 1A2.25 2.25 0 002 3.25v9.5A2.25 2.25 0 004.25 15h8.5c.69 0 1.25-.56 1.25-1.25V2.25C14 1.56 13.44 1 12.75 1h-8.5zM3.5 12.75c0 .414.336.75.75.75h8.25v-2H4.25a.75.75 0 00-.75.75v.5zm0-2.622c.235-.083.487-.128.75-.128h8.25V2.5H4.25a.75.75 0 00-.75.75v6.878z" clip-rule="evenodd"></path></g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Sharing is Caring",
    description: "We are looking for passionate advocates to help spread the word. By raising awareness through social media, blogs, community forums, and other channels, you can play a crucial role in growing the OpenVoiceOS community. Whether you enjoy creating content, engaging with tech enthusiasts, or networking within developer circles, your efforts can help attract more users and contributors to the project.",
    icon: (
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#1C274C"></path> </g></svg>
    ),
    url: ""  // No URL provided
  },
  {
    title: "Donating",
    description: "OpenVoiceOS welcomes support in the form of donations to help sustain and grow its open-source voice assistant platform. Donations play a vital role in covering essential expenses, such as server costs, development tools, and other resources that keep the project running smoothly. By contributing financially, you can directly impact the platform's ability to innovate, improve, and remain accessible to everyone. Whether it's a one-time donation or ongoing support, every contribution helps ensure that OpenVoiceOS continues to thrive as a community-driven project.",
    icon: (
      <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"></path></g></svg>
    ),
    url: ""  // No URL provided
  }
];

const Feature = ({ title, description, icon, url }) => (
  <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-200 object-cover p-3">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
    <p className="font-medium text-gray-500 dark:text-gray-300 md:text-justify">{description}</p>
    <a className="btn font-bold text-white bg-black dark:bg-gray-800 dark:text-gray-200 rounded-3xl mx-auto m-5" href = {url}>Learn More</a>
  </div>
);

const Contributions = () => {
  return (
    <section className="relative mt-32">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-center text-3xl text-black dark:text-white font-extrabold md:text-4xl">
        How can I help make Open Voice OS better?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base lg:mx-auto">
        OpenVoiceOS is an open-source voice assistant platform powered by a passionate community of developers, translators, testers, and advocates. Whether you're skilled in coding, translation, testing, documentation, or simply spreading the word, your contributions are vital to our mission of creating a customizable, privacy-focused, and inclusive voice assistant. We're also grateful for financial donations, which help sustain the project's growth and innovation. No matter how you choose to contribute, your involvement helps make OpenVoiceOS a powerful, adaptable, and accessible tool for users around the world.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
      {featuresData.map((feature, index) => (
        <Feature 
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

export default Contributions;
