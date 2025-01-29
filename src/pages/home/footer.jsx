
import React from 'react';

const Footer = () => {
  return (

<footer className="bg-gray-800 text-gray-300 text-sm py-4">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
  <p className="mb-2 md:mb-0">&copy; 2025 Sua Empresa. Todos os direitos reservados.</p>
  <ul className="flex space-x-4">
    <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
    <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
    <li><a href="#" className="hover:text-white">Contato</a></li>
  </ul>
</div>
</footer>
 );
};

export default Footer;