
import React from 'react';

const Footer = () => {
  return (

<footer class="bg-gray-800 text-gray-300 text-sm py-4">
<div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
  <p class="mb-2 md:mb-0">&copy; 2025 Sua Empresa. Todos os direitos reservados.</p>
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:text-white">Política de Privacidade</a></li>
    <li><a href="#" class="hover:text-white">Termos de Serviço</a></li>
    <li><a href="#" class="hover:text-white">Contato</a></li>
  </ul>
</div>
</footer>
 );
};

export default Footer;