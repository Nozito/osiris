import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const LegalPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        // Handle hash navigation manually if needed
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const { t } = useLanguage();

    return (
        <>
            <SEOHead
                title="Mentions Légales & Confidentialité | Osiris"
                description="CGV, Politique de Confidentialité, Gestion des Cookies et Conformité RGPD d'Osiris Agency."
                canonical="https://osiris-web.com/legal"
            />

            <section className="min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-16 px-5 sm:px-6 relative bg-[#0B0B0B]">
                {/* Background Details */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-premium-green/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_60%)]"></div>
                </div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-black font-display text-white mb-6">
                            Mentions <span className="text-premium-green">Légales</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Dernière mise à jour : Février 2025
                        </p>
                    </motion.div>

                    <div className="space-y-12 sm:space-y-16">
                        {/* SECTION 2: CGV */}
                        <div id="cgv" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">2. Conditions Générales de Vente (CGV)</h2>
                            <div className="space-y-8">
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 1 : Objet</h3>
                                    <p className="text-gray-400 leading-relaxed">Les présentes CGV régissent les prestations de services fournies par Osiris Agency (création de sites web, marketing digital, design, etc.). Toute commande implique l'adhésion sans réserve du client aux présentes conditions.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 2 : Tarifs et Devis</h3>
                                    <p className="text-gray-400 leading-relaxed">Les prestations sont fournies aux tarifs en vigueur indiqués sur le site ou sur devis spécifique. Les prix sont exprimés en Euros Hors Taxes (HT). Un devis est valable 30 jours à compter de sa date d'émission.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 3 : Modalités de paiement</h3>
                                    <p className="text-gray-400 leading-relaxed">Le règlement s'effectue par virement ou carte bancaire. Un acompte de 30% ou 50% (selon le devis) est exigé à la signature. Le solde est dû à la livraison de la prestation. En cas de retard de paiement, des pénalités égales à trois fois le taux d'intérêt légal seront appliquées.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 4 : Délais et Livraison</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency s'engage à respecter le calendrier prévu dans le devis, sauf en cas de retard de transmission des éléments par le client.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 5 : Propriété intellectuelle</h3>
                                    <p className="text-gray-400 leading-relaxed">Le transfert de propriété des créations (logos, sites, textes) n'intervient qu'après paiement intégral du prix. Osiris Agency se réserve le droit de mentionner sa réalisation sur son portfolio.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 6 : Responsabilité</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency est tenu à une obligation de moyens et non de résultat (notamment pour le référencement SEO ou les campagnes publicitaires).</p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 3: Politique de Confidentialité & RGPD */}
                        <div id="confidentialite" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">3. Politique de Confidentialité & RGPD</h2>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Collecte des données</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency collecte des données personnelles (nom, email, téléphone) via les formulaires de contact ou de devis. Ces données sont utilisées uniquement pour la gestion de la relation client et l'envoi d'offres commerciales si vous y avez consenti.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Responsable du traitement</h3>
                                    <p className="text-gray-400 leading-relaxed">Le responsable du traitement des données est Antoine.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Durée de conservation</h3>
                                    <p className="text-gray-400 leading-relaxed">Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact commercial.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Vos droits</h3>
                                    <p className="text-gray-400 leading-relaxed">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ce droit, contactez-nous à : contact@osiris-agency.fr.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Sécurité</h3>
                                    <p className="text-gray-400 leading-relaxed">Nous mettons en œuvre toutes les mesures techniques nécessaires (protocole HTTPS, sécurisation des serveurs) pour protéger vos données.</p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 4: Politique de Cookies */}
                        <div id="cookies" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">4. Politique de Cookies</h2>
                            <div className="space-y-6">
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-white mb-2">Qu’est-ce qu’un cookie ?</h3>
                                    <p className="text-gray-400 leading-relaxed">Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site.</p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-white mb-4">Cookies utilisés par Osiris Agency :</h3>
                                    <ul className="space-y-4 text-gray-400">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0"></span>
                                            <span><strong className="text-white">Cookies techniques :</strong> Indispensables au bon fonctionnement du site.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0"></span>
                                            <span><strong className="text-white">Cookies de mesure d'audience :</strong> (Ex: Google Analytics) pour comprendre le parcours utilisateur et améliorer nos services.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0"></span>
                                            <span><strong className="text-white">Cookies marketing :</strong> Pour afficher des publicités pertinentes sur d'autres plateformes.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-white mb-2">Gestion des cookies</h3>
                                    <p className="text-gray-400 leading-relaxed">Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez également configurer votre navigateur pour bloquer les cookies à tout moment.</p>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 5: Conformité RGPD */}
                        <div id="rgpd" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">5. Conformité RGPD</h2>
                            <div className="bg-gradient-to-br from-premium-green/5 to-transparent border border-premium-green/20 rounded-2xl p-8 backdrop-blur-sm">
                                <p className="text-white text-lg mb-8 font-medium">Chez Osiris Agency, nous plaçons la protection de vos données au cœur de nos services.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-premium-green mb-2">Transparence</h3>
                                        <p className="text-gray-400 leading-relaxed">Nous vous informons clairement sur l'usage de vos données.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-premium-green mb-2">Consentement</h3>
                                        <p className="text-gray-400 leading-relaxed">Aucun tracking n'est activé sans votre accord préalable (via le bandeau cookies).</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-premium-green mb-2">Droit à l'oubli</h3>
                                        <p className="text-gray-400 leading-relaxed">Sur simple demande, nous supprimons l'intégralité de vos informations personnelles de nos bases de données.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-premium-green mb-2">Sous-traitance</h3>
                                        <p className="text-gray-400 leading-relaxed">Nous vérifions que nos outils tiers (hébergeurs, outils de mailing) sont également conformes au RGPD.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
