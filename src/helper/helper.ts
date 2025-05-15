const SendWhatsAppMessage = (name: string, image: string, price: number) => {
  const phoneNumber = '9958670670';
  const message = `Product Name: ${name}\nImage: ${"https://drive.google.com/uc?export=view&id=" + image}\nPrice: ₹${price}`;
  const encodedMessage = encodeURIComponent(message);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
    window.innerWidth < 768;

  const whatsappUrl = isMobile
    ? `https://wa.me/91${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=91${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export default SendWhatsAppMessage;
