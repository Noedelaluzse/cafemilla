import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";


export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1A0D07] text-[#C9A87E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
        </div>

        {/* Barra inferior */}
        <div className="border-t border-[#6E3F2A]/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B4C3B]">
            © 2026 CAFEMILLA · Todos los derechos reservados
          </p>
          <p className="text-xs text-[#6B4C3B] flex items-center gap-1">
            Hecho con <span className="text-[#ED8B00]">♥</span> en México
          </p>
        </div>

      </div>
    </footer>
  )
}