import React from "react";

const EmbededMap = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.70504110098574!2d77.23131262950166!3d28.507048308986146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce162bb99feed%3A0xfdca4ae549060183!2sVIROH%20For%20Overall%20Development!5e0!3m2!1sen!2sin!4v1745141414584!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbededMap;
