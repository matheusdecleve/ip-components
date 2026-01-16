import Image from "next/image";
import { FooterProps } from "./types";

export function Footer({ logo, socialLinks, whatsappLink, address, copyright, bottomLinks }: FooterProps) {
  return (
    <footer className="py-20 bg-[#3C8AA414]">
      {/* TOP */}
      <div className="container flex justify-between pb-10 border-b border-[#00496429]">
        {/* LOGO + SOCIAL */}
        <div>
          <Image src={logo} width={211} height={56} alt="Logo Ilha Pura" />

          <div className="flex items-center gap-x-8 mt-8">
            {socialLinks.map((item) => (
              <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer">
                <Image src={item.icon} width={32} height={32} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA + ENDEREÇO */}
        <div className="w-[444px]">
          <a
            href={whatsappLink}
            className="w-full bg-primary text-white flex items-center gap-x-2 justify-center h-14 mb-6 hover:bg-primary-dark transition"
          >
            Fale conosco pelo WhatsApp
            <Image src="/images/icons/whatsapp-white.svg" width={20} height={20} alt="WhatsApp" />
          </a>

          <span className="text-sm text-primary block mb-1">Endereço</span>

          <address className="text-2xl font-light not-italic whitespace-pre-line">{address}</address>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="container flex items-center justify-between pt-12">
        <span className="text-sm">{copyright}</span>

        <div className="flex gap-x-8">
          {bottomLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-primary underline font-semibold">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
