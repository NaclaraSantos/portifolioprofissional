import React from 'react';
import { Github, Linkedin, Instagram, Code2, Brain, Rocket, Palette } from 'lucide-react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Diagonal Design */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary transform -skew-y-6 origin-top-left z-0" />
        <div className="relative z-10 text-center px-4 section-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-poppins">
            Ana Clara
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-12">
            Desenvolvedora Web Front-End
          </p>
          <a
            href="#about"
            className="inline-block bg-secondary text-primary px-10 py-4 rounded-full font-semibold hover:bg-white transition-colors duration-300"
          >
            Conheça meu trabalho
          </a>
        </div>
      </section>

      {/* About Section with Card Design */}
      <section id="about" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-6" />
                <img
                  src="images/fotoAna.jpeg"
                  alt="Profile"
                  className="relative rounded-3xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold text-primary mb-8 font-poppins">Sobre Mim</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Tenho 20 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas 
                na Faculdade Newton Paiva. Minha paixão pela programação me levou a buscar diversos 
                cursos complementares para aprimorar minhas habilidades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com uma sólida base teórica da faculdade e experiência prática adquirida através de projetos academicos e profissionais,
                 estou constantemente buscando novos desafios e 
                oportunidades para crescer profissionalmente na área de desenvolvimento web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section with Floating Cards */}
      <section id="technologies" className="py-32 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center font-poppins">
            Tecnologias que Utilizo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 size={40} />, name: 'Front-End', desc: 'HTML, CSS, JavaScript' },
              { icon: <Brain size={40} />, name: 'Frameworks', desc: 'React, TypeScript' },
              { icon: <Palette size={40} />, name: 'Estilização', desc: 'Tailwind CSS, CSS Modules' },
              { icon: <Rocket size={40} />, name: 'Ferramentas', desc: 'Git, GitHub' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-6">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{tech.name}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* Projects Section */}
 <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center font-poppins">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {[
              {
                id: 1,
                title: 'Gabriel Couto Advogado',
                description: 'O site tem como objetivo principal apresentar o advogado Gabriel Couto, destacando sua formação, especializações e áreas de atuação, o site deve servir como uma plataforma para captação de clientes, com fácil acesso ao contato via whatsapp ',
                image: '/images/projeto1.jpeg',
                link: 'https://gabrielcoutoadvogado.netlify.app/',
              },
              {
                id: 2,

                title: 'Gerador de QRcode',
                description: 'Um sistema desenvolvido para a Prefeitura Municipal de Nova Lima que atua como um gerador de QR Code. Seu objetivo é criar um código QR exclusivo para cada servidor, permitindo que ele utilize o código para retirar a cesta de Natal a que tem direito.',
                image: '/images/projeto2.jpeg',
                link: 'https://naclarasantos.github.io/cestadenatalPNL/',

              },
              {
                id: 3,
                title: 'Controle Financeiro',
                description: 'Sistema desenvolvido para uso pessoal, com o objetivo de gerenciar minhas entradas e saídas financeiras. Com ele, posso registrar minhas receitas mensais, cadastrar despesas e, ao final, obter um cálculo do total gasto e do saldo restante.',
                image: '/images/projeto3.jpeg',
                link: 'https://naclarasantos.github.io/ControleFinanceiro/',
              },
              {
                id: 4,

                title: 'GestãoSmart',
                description: 'Um sistema de gestão de estoque criado para um vendedor de produtos de limpeza, que permite controlar mercadorias calcular valor total, valor do lucro, quanto ele perderá com o valor da gasolina, quantos dias trabalhados, entre outras funcionalidades',
                image: '/images/projeto5.jpeg',
                link: 'https://naclarasantos.github.io/GestaoSmart/',

              },
            ].map((project) => (
              <div
                key={project.id}
                className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section with Gradient Background */}
      <section id="contact" className="py-32 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center font-poppins">Contato</h2>
          <ContactForm />
          <div className="flex justify-center gap-8 mt-16">
            {[
              { icon: <Github size={28} />, href: 'https://github.com/NaclaraSantos' },
              { icon: <Linkedin size={28} />, href: 'https://www.linkedin.com/in/ana-clara-dos-santos-a06090251/' },
              { icon: <Instagram size={28} />, href: 'https://www.instagram.com/anawebfrontend?igsh=dHZueGh0MHFtYmly' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transform hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;