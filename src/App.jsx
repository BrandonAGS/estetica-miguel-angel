import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Scissors, Palette, Users, Instagram, Facebook } from 'lucide-react';

function App() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            name: "Corte de Cabello",
            price: {
                hombre: "Desde $180",
                mujer: "Desde $250"
            },
            description: "Cortes modernos y clásicos adaptados a tu estilo",
            icon: <Scissors className="w-8 h-8" />
        },
        {
            id: 2,
            name: "Tinte y Color",
            price: "Desde $500",
            description: "Coloración profesional con productos de alta calidad",
            icon: <Palette className="w-8 h-8" />
        },
        {
            id: 3,
            name: "Peinado y Maquillaje",
            price: "Desde $950",
            description: "Peinados para eventos especiales y ocasiones únicas",
            icon: <Users className="w-8 h-8" />
        },
        {
            id: 4,
            name: "Mechas, Balayage y Luces",
            price: "Desde $1,000",
            description: "Productos que no maltratan tu cabello, con técnicas de última tendencia",
            icon: <Scissors className="w-8 h-8" />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <header className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                        Salón de Belleza Miguel Ángel
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Donde tu belleza cobra vida
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://wa.me/5218134177467?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Estética%20Miguel%20Ángel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            💬 Agendar por WhatsApp
                        </a>
                        <a
                            href="tel:+5218134177467"
                            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            📞 Llamar Ahora
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </header>

            {/* Services Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                        Ofrecemos servicios de belleza de alta calidad con las últimas tendencias
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`group relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 cursor-pointer border-2 ${
                                    activeService === service.id ? 'border-purple-500' : 'border-transparent'
                                }`}
                                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                            >
                                <div className="text-purple-600 mb-4 group-hover:text-pink-600 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h3>
                                <p className="text-purple-600 font-semibold mb-3">
                                    {typeof service.price === 'string'
                                        ? service.price
                                        : `Hombre: ${service.price.hombre} / Mujer: ${service.price.mujer}`}
                                </p>
                                <p className="text-gray-600 text-sm">{service.description}</p>

                                {activeService === service.id && (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white transform transition-all duration-300">
                                        <div className="text-white mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                        <p className="text-purple-100 font-semibold mb-3">{service.price}</p>
                                        <p className="text-sm mb-4">{service.description}</p>
                                        <button
                                            className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                            Reservar Ahora
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 pb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ¿Por qué elegirnos?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-purple-600 mb-4">
                                <Star className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Calidad Premium</h3>
                            <p className="text-gray-600">Utilizamos productos de las mejores marcas para garantizar resultados excepcionales</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-purple-600 mb-4">
                                <Users className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Profesional Experto</h3>
                            <p className="text-gray-600">Cuento con años de experiencia y capacitación constante</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-purple-600 mb-4">
                                <Clock className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Horarios Flexibles</h3>
                            <p className="text-gray-600">Nos adaptamos a tu horario para que siempre encuentres tiempo para verte bien</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Nuestra Ubicación
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <MapPin className="w-8 h-8 text-purple-600 mr-4" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Dirección</h3>
                                        <p className="text-gray-600">Lerdo 708a, Mitras Nte., Monterrey, N.L.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <Clock className="w-8 h-8 text-purple-600 mr-4" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Horarios</h3>
                                        <p className="text-gray-600">Lun-Vie: 10:00 AM - 7:30 PM</p>
                                        <p className="text-gray-600">Sab: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Dom: 10:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <Phone className="w-8 h-8 text-purple-600 mr-4" />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Contacto</h3>
                                        <p className="text-gray-600">Tel: +52 81 3105 5588</p>
                                        <p className="text-gray-600">Wsp: +52 81 8182 2688</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.8877801005456!2d-100.35763442514585!3d25.70813931081733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629679f72ae7d7%3A0x714433d06abef395!2sLerdo%20708a%2C%20Mitras%20Nte.%2C%2064320%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1751595493116!5m2!1ses-419!2smx"
                                width="100%"
                                height="400"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación Estética Miguel Ángel"
                                className="relative z-10 rounded-2xl shadow-2xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        ¿Listo para tu transformación?
                    </h2>
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                        No esperes más para lucir espectacular. Agenda tu cita hoy mismo y descubre por qué somos la estética favorita de Monterrey.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a
                            href="https://wa.me/5218181822688?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Estética%20Miguel%20Ángel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            💬 Agendar por WhatsApp
                        </a>
                        <a
                            href="tel:+5218131055588"
                            className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            📞 Llamar Ahora
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Salón de Belleza Miguel Ángel
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Tu destino de belleza y bienestar en el corazón de Monterrey.
                            </p>
                            <div className="flex space-x-4">
                                <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
                                <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Corte de Cabello</li>
                                <li>Tinte y Color</li>
                                <li>Peinados</li>
                                <li>Barbería</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>📍 Lerdo 708a, Mitras Nte., Monterrey</li>
                                <li>📞 +52 81 3105 5588</li>
                                <li>🕒 Lun-Vie: 10:00 AM - 7:30 PM</li>
                                <li>🕒 Sab: 9:00 AM - 6:00 PM</li>
                                <li>🕒 Dom: 10:00 AM - 1:00 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Salón de Belleza Miguel Ángel. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
