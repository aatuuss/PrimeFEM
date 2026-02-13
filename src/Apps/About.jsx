import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, Award, Users, Globe, Zap, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentIndustry, setCurrentIndustry] = useState(0);
    const [activeTab, setActiveTab] = useState('stress');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { language } = useLanguage();

    const content = {
        en: {
            engineeringConsulting: 'Engineering Consulting',
            established: 'ESTABLISHED 2020',
            excellence: 'Delivering Excellence in Engineering',
            whoTitle: 'Independent',
            whoHighlight: 'Engineering',
            whoSuffix: 'Consulting & Analysis',
            whoP1: 'specializes in FEM analysis, Mechanical, Piping, Welding, and Geotechnical services. We do not just calculate; we engineer solutions.',
            whoP2: 'Supporting industrial projects in design, construction, and modification, our approach is predominantly analysis-driven, ensuring safety, integrity, and compliance with international standards.',
            whoP3: 'Every project is delivered with strict professionalism, objectivity, and confidentiality, helping clients solve complex technical challenges through rigorous design verification.',
            servicesButton: 'Our Services',
            visionBadge: 'FUTURE FOCUSED',
            visionTitle: 'Our Vision',
            visionText: 'To become a trusted engineering consulting firm delivering FEM-based and mechanical engineering solutions in compliance with international codes and standards.',
            missionBadge: 'ACTION DRIVEN',
            missionTitle: 'Our Mission',
            missionPoints: [
                'Deliver accurate, reliable, code-compliant analysis.',
                'Prioritize safety and technical integrity.',
                'Provide practical, value-added engineering solutions.'
            ],
            partnersTitle: 'Backed by',
            partnersAccent: 'Global Strategic Partners',
            partnersDesc: 'We collaborate with world-class technology providers and industry leaders to deliver cutting-edge engineering solutions',
            professionalServices: 'PROFESSIONAL SERVICES',
            servicesTitle: 'Our Engineering Services',
            servicesDesc1: 'is an engineering consulting company that delivers analysis-driven engineering solutions in the fields of Finite Element Method (FEM), Mechanical Engineering, Piping Engineering, Welding Engineering, and Georadar-Geotechnical Engineering.',
            servicesDesc2: 'We support industrial projects by providing design verification, integrity assessment, and code-compliant engineering evaluation to ensure safety, reliability, and efficient project execution.',
            serviceTag: 'SERVICE',
            learnMore: 'Learn More',
            industriesBadge: 'Industries We Serve',
            industriesTitle: 'INDUSTRIES COVERAGE',
            industriesDesc: 'Delivering expert engineering solutions across diverse industrial sectors'
        },
        id: {
            engineeringConsulting: 'Konsultasi Rekayasa',
            established: 'BERDIRI 2020',
            excellence: 'Menghadirkan Keunggulan Rekayasa',
            whoTitle: 'Konsultan',
            whoHighlight: 'Rekayasa',
            whoSuffix: '& Analisis Independen',
            whoP1: 'fokus pada analisis FEM, Mechanical, Piping, Welding, dan Geotechnical. Kami tidak hanya menghitung; kami merancang solusi.',
            whoP2: 'Mendukung proyek industri dalam desain, konstruksi, dan modifikasi, pendekatan kami berbasis analisis untuk memastikan keselamatan, integritas, dan kepatuhan pada standar internasional.',
            whoP3: 'Setiap proyek diselesaikan dengan profesionalisme, objektivitas, dan kerahasiaan yang ketat, membantu klien menyelesaikan tantangan teknis secara tepat.',
            servicesButton: 'Layanan Kami',
            visionBadge: 'BERORIENTASI MASA DEPAN',
            visionTitle: 'Visi Kami',
            visionText: 'Menjadi firma konsultasi rekayasa terpercaya yang memberikan solusi FEM dan rekayasa mekanik sesuai kode dan standar internasional.',
            missionBadge: 'BERBASIS AKSI',
            missionTitle: 'Misi Kami',
            missionPoints: [
                'Menyediakan analisis akurat, andal, dan sesuai kode.',
                'Memprioritaskan keselamatan dan integritas teknis.',
                'Memberikan solusi rekayasa yang praktis dan bernilai tambah.'
            ],
            partnersTitle: 'Didukung oleh',
            partnersAccent: 'Mitra Strategis Global',
            partnersDesc: 'Kami berkolaborasi dengan penyedia teknologi kelas dunia dan pemimpin industri untuk menghadirkan solusi rekayasa terdepan',
            professionalServices: 'LAYANAN PROFESIONAL',
            servicesTitle: 'Layanan Rekayasa Kami',
            servicesDesc1: 'adalah perusahaan konsultasi rekayasa yang menghadirkan solusi berbasis analisis di bidang Finite Element Method (FEM), Mechanical Engineering, Piping Engineering, Welding Engineering, serta Georadar-Geotechnical Engineering.',
            servicesDesc2: 'Kami mendukung proyek industri melalui verifikasi desain, evaluasi integritas, dan penilaian rekayasa sesuai kode untuk memastikan keselamatan, keandalan, dan efisiensi proyek.',
            serviceTag: 'LAYANAN',
            learnMore: 'Pelajari Lebih Lanjut',
            industriesBadge: 'Industri yang Dilayani',
            industriesTitle: 'CAKUPAN INDUSTRI',
            industriesDesc: 'Memberikan solusi rekayasa ahli di berbagai sektor industri'
        }
    };

    const text = content[language];

    const services = [
        {
            id: 1,
            title: {
                en: 'Mechanical Engineering & Equipment Integrity Services',
                id: 'Layanan Rekayasa Mekanik & Integritas Peralatan'
            },
            description: {
                en: 'Professional engineering services for the design, evaluation, and life-cycle integrity of mechanical systems and industrial equipment, ensuring safe, reliable, and code-compliant operation.',
                id: 'Layanan rekayasa profesional untuk desain, evaluasi, dan integritas siklus hidup sistem mekanik serta peralatan industri agar aman, andal, dan sesuai kode.'
            },
            image: '/img/Modeling Lihologi 3D Lapisan Batuan - Andesiti - Power Plant Areal-GE.jpg.jpeg'
        },
        {
            id: 2,
            title: {
                en: 'Piping & Pipeline Engineering',
                id: 'Rekayasa Piping & Pipeline'
            },
            description: {
                en: 'Specialized mechanical engineering focused on the design, analysis, and integrity of piping systems and pipelines to ensure safe and reliable fluid transport.',
                id: 'Rekayasa mekanik khusus yang fokus pada desain, analisis, dan integritas sistem piping serta pipeline untuk memastikan transportasi fluida yang aman dan andal.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan - Breksi - Power Plant Areal GE.jpg.jpeg'
        },
        {
            id: 3,
            title: {
                en: 'Welding Engineering & Fabrication Quality',
                id: 'Rekayasa Welding & Kualitas Fabrikasi'
            },
            description: {
                en: 'Specialized welding engineering and quality assurance services ensuring safe, compliant, and high-quality fabrication of structures, piping, and equipment.',
                id: 'Layanan rekayasa welding dan jaminan mutu untuk memastikan fabrikasi struktur, piping, dan peralatan yang aman, sesuai standar, dan berkualitas.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan -Andesit Inti Pecah - GE.jpg.jpeg'
        },
        {
            id: 4,
            title: {
                en: 'Provide FEM-Based Engineering Analysis',
                id: 'Analisis Rekayasa Berbasis FEM'
            },
            description: {
                en: 'Advanced FEM-based analysis to simulate and verify the structural, thermal, and mechanical performance of engineering systems under real operating conditions.',
                id: 'Analisis berbasis FEM tingkat lanjut untuk simulasi dan verifikasi performa struktural, termal, dan mekanik pada kondisi operasi nyata.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan -Breksi Tersementasi Lemah-Power Plant Areal GE.jpg.jpeg'
        },
        {
            id: 5,
            title: {
                en: 'Ensure Code Compliance & Engineering Assurance',
                id: 'Kepatuhan Kode & Jaminan Rekayasa'
            },
            description: {
                en: 'Engineering services that verify and document compliance with applicable codes and standards, ensuring technical integrity and operational safety.',
                id: 'Layanan rekayasa untuk verifikasi dan dokumentasi kepatuhan terhadap kode dan standar, memastikan integritas teknis dan keselamatan operasi.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan -Pecahan Breksi Tidak Terikat dengan Kuat-Power Plant Areal GE.jpg.jpeg'
        },
        {
            id: 6,
            title: {
                en: 'Conduct Georadar and Inspection Studies',
                id: 'Studi Georadar dan Inspeksi'
            },
            description: {
                en: 'Georadar (Ground Penetrating Radar - GPR) services are performed to detect, map, and interpret subsurface features without excavation or disturbance.',
                id: 'Layanan georadar (GPR) untuk mendeteksi, memetakan, dan menafsirkan fitur bawah permukaan tanpa penggalian atau gangguan.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan -Tuff - Power Plant Areal GE.jpg.jpeg'
        },
        {
            id: 7,
            title: {
                en: 'Geotechnical Engineering Studies',
                id: 'Studi Rekayasa Geoteknik'
            },
            description: {
                en: 'Geotechnical engineering services are provided to evaluate soil and ground conditions and support foundation, structural, and earthwork design.',
                id: 'Layanan geoteknik untuk evaluasi kondisi tanah serta mendukung desain pondasi, struktur, dan pekerjaan tanah.'
            },
            image: '/img/Modeling Lithologo 3D Lapisan Batuan -Tuff Inti Pecah-Power Plant Areal GE.jpg.jpeg'
        }
    ];

    const industries = [
        { id: 1, name: { en: 'Oil & Gas Companies', id: 'Perusahaan Migas' }, image: '/img/oil.jpg' },
        { id: 2, name: { en: 'Power Generation Companies', id: 'Perusahaan Pembangkit Listrik' }, image: '/img/generation.jpg' },
        { id: 3, name: { en: 'Petrochemical and Chemical Processing Plants', id: 'Pabrik Petrokimia dan Kimia' }, image: '/img/Petrochemical.jpg' },
        { id: 4, name: { en: 'Construction Companies (EPC Contractors)', id: 'Perusahaan Konstruksi (Kontraktor EPC)' }, image: '/img/construction.jpg' },
        { id: 5, name: { en: 'Mining & Smelter', id: 'Pertambangan & Smelter' }, image: '/img/mining.jpg' },
        { id: 6, name: { en: 'Manufacturers & Packager', id: 'Manufaktur & Pengemasan' }, image: '/img/manufacture.jpg' },
        { id: 7, name: { en: 'Engineering Consultant', id: 'Konsultan Rekayasa' }, image: '/img/consultan.jpg' },
        { id: 8, name: { en: 'Educational Institution', id: 'Institusi Pendidikan' }, image: '/img/educational.jpg' }
    ];

    const capabilitiesData = {
        stress: {
            label: { en: 'Stress', id: 'Tegangan' },
            title: {
                en: 'Helping operators and equipment manufacturers',
                id: 'Membantu operator dan produsen peralatan'
            },
            description: {
                en: [
                    'Structural analysis projects typically include the identification and risk assessment of failure modes. Common failure modes are mechanical overloading, plastic collapse, localized yielding, or wear. We are familiar with assessing structures to various design codes such as ASME VIII Div. 2, BS EN ISO 3449:2008., DEF STAN 08-123, BR 3021, MIL-STD-810, RTCA DO-160 and DN-RP-F112.',
                    'However, we have also investigated other potential causes of failure, such as hydrogen embrittlement and aging, including stress corrosion cracking of stainless steel subsea equipment to DN-RP-F112.',
                    'We can predict progressive failure using advanced fracture mechanics capabilities, including application of the Paris Law for aluminium structures.'
                ],
                id: [
                    'Proyek analisis struktur biasanya mencakup identifikasi dan penilaian risiko mode kegagalan. Mode kegagalan umum meliputi beban mekanik berlebih, plastic collapse, localized yielding, atau wear. Kami terbiasa menilai struktur sesuai berbagai kode desain seperti ASME VIII Div. 2, BS EN ISO 3449:2008., DEF STAN 08-123, BR 3021, MIL-STD-810, RTCA DO-160 dan DN-RP-F112.',
                    'Kami juga meneliti penyebab kegagalan lain seperti hydrogen embrittlement dan aging, termasuk stress corrosion cracking pada peralatan subsea stainless steel sesuai DN-RP-F112.',
                    'Kami dapat memprediksi progressive failure menggunakan kapabilitas fracture mechanics tingkat lanjut, termasuk penerapan Paris Law untuk struktur aluminium.'
                ]
            },
            image: '/img/stress.png'
        },
        thermal: {
            label: { en: 'Thermal', id: 'Termal' },
            title: { en: 'Mixing simulation', id: 'Simulasi pencampuran' },
            description: {
                en: [
                    'Often structural stress is caused by temperature gradients. Both steady-state and transient thermal analysis have been undertaken using Ansys and other FEA codes.',
                    'We have simulated thermal cracking of ceramic refractory tiles due to quenching processes, in addition to thermo-mechanical simulations for a diverse range of products including engine ice protection systems, ceramic catalysts, oil well plug systems and roof tiles. Results have been validated through physical test data and thermal shock tests.',
                    'Our structural analysis and fluid dynamics capabilities can be combined to study fluid-structure interaction (FSI) behavior, including both thermal and pressure loading.'
                ],
                id: [
                    'Sering kali stress struktural disebabkan oleh gradien temperatur. Analisis termal steady-state maupun transient telah dilakukan menggunakan Ansys dan kode FEA lainnya.',
                    'Kami mensimulasikan thermal cracking pada ubin refractory keramik akibat proses quenching, serta simulasi termo-mekanik untuk berbagai produk termasuk sistem perlindungan es mesin, katalis keramik, oil well plug, dan genteng. Hasil divalidasi melalui data uji fisik dan thermal shock tests.',
                    'Kapabilitas analisis struktur dan dinamika fluida kami dapat digabungkan untuk mempelajari perilaku fluid-structure interaction (FSI), termasuk beban termal dan tekanan.'
                ]
            },
            image: '/img/thermal.png'
        },
        vibration: {
            label: { en: 'Vibration', id: 'Getaran' },
            title: { en: 'Accurately modeling valve closure dynamics', id: 'Pemodelan akurat dinamika penutupan valve' },
            description: {
                en: [
                    'We regularly undertake design assessment for code compliance. We are very familiar with PD5500, Eurocode and ASME VIII & ASME V Design by Analysis for pressure vessel and related equipment, including stress linearisation. We also undertake the bespoke assessment of designs not in-line with conventional codes and standards.',
                    'We also run a popular software-neutral Design By Analysis training course to help engineers meet the requirements of ASME VIII Div. 2 using Finite Element Analysis (FEA).'
                ],
                id: [
                    'Kami rutin melakukan penilaian desain untuk kepatuhan kode. Kami sangat familiar dengan PD5500, Eurocode, dan ASME VIII & ASME V Design by Analysis untuk pressure vessel dan peralatan terkait, termasuk stress linearisation. Kami juga melakukan penilaian khusus untuk desain yang tidak sesuai kode dan standar konvensional.',
                    'Kami juga menyelenggarakan pelatihan Design By Analysis yang netral terhadap software untuk membantu engineer memenuhi persyaratan ASME VIII Div. 2 menggunakan Finite Element Analysis (FEA).'
                ]
            },
            image: '/img/vibration.png'
        },
        dynamics: {
            label: { en: 'Dynamics', id: 'Dinamik' },
            title: { en: 'Improving pedestrian comfort and safety', id: 'Meningkatkan kenyamanan dan keselamatan' },
            description: {
                en: [
                    'We support both implicit and explicit dynamic analysis with Ansys Mechanical and Ansys LS-DYNA, in addition to kinematic (rigid body) simulations, to extract dynamic loads from reciprocating machinery. Natural frequency (modal), harmonic, response spectrum and random vibration applications are common to understand how a system performs relative to its critical frequencies.',
                    'Projects range from automotive after treatment systems, fuel oil coolers, nuclear gloveboxes to gas holders. Sources of dynamic loads vary widely, from gas pulsations within internal baffles and rotating equipment to road vibrations and seismic events.'
                ],
                id: [
                    'Kami mendukung analisis dinamik implicit maupun explicit dengan Ansys Mechanical dan Ansys LS-DYNA, serta simulasi kinematik (rigid body) untuk mengekstrak beban dinamik dari mesin reciprocating. Aplikasi natural frequency (modal), harmonic, response spectrum, dan random vibration umum digunakan untuk memahami performa sistem terhadap frekuensi kritisnya.',
                    'Proyek kami mencakup sistem after treatment otomotif, fuel oil cooler, nuclear glovebox hingga gas holder. Sumber beban dinamik sangat beragam, dari pulsasi gas dalam baffle internal dan peralatan berputar hingga getaran jalan dan kejadian seismik.'
                ]
            },
            image: '/img/dynamics.png'
        },
        buckling: {
            label: { en: 'Buckling', id: 'Tekuk' },
            title: { en: 'Fluid-Structure Interaction (FSI) analysis', id: 'Analisis Fluid-Structure Interaction (FSI)' },
            description: {
                en: [
                    'A major consideration for many load-bearing structures, we predict buckling-capacity safety-factors using both linear and non-linear approaches. Some examples of recent projects include offshore fabricated towers, railway masts, bridges and outdoor storage tanks subject to variable wind loading.'
                ],
                id: [
                    'Sebagai pertimbangan utama pada banyak struktur penahan beban, kami memprediksi faktor keamanan kapasitas buckling menggunakan pendekatan linear maupun non-linear. Contoh proyek mencakup menara fabrikasi lepas pantai, tiang kereta, jembatan, dan tangki penyimpanan luar ruang dengan beban angin yang bervariasi.'
                ]
            },
            image: '/img/buckling.png'
        },
        materials: {
            label: { en: 'Materials', id: 'Material' },
            title: { en: 'Fluid-Structure Interaction (FSI) analysis', id: 'Analisis Fluid-Structure Interaction (FSI)' },
            description: {
                en: [
                    'Fatigue life prediction of structures and systems has been one of our most common applications over three decades, correlating results with physical test data where it is available. Whether the excitations are static or dynamic, regular or completely random, we ensure designs meet their requirements for safe-life or damage-tolerant design.',
                    'We have experience in fatigue life predictions within many industries, from mixing vessels and ship-based rotating equipment to speciality bridges subject to multiple crossings, applying relevant codes such as Eurocode, PD5500 and DNV CN30-7.'
                ],
                id: [
                    'Prediksi umur lelah (fatigue) struktur dan sistem adalah salah satu aplikasi paling umum kami selama tiga dekade, dengan korelasi terhadap data uji fisik jika tersedia. Baik eksitasi statik maupun dinamik, teratur maupun acak, kami memastikan desain memenuhi persyaratan safe-life atau damage-tolerant.',
                    'Kami berpengalaman dalam prediksi umur lelah di berbagai industri, mulai dari mixing vessel dan peralatan berputar di kapal hingga jembatan khusus, menggunakan kode seperti Eurocode, PD5500, dan DNV CN30-7.'
                ]
            },
            image: '/img/materials.png'
        },
        fatigue: {
            label: { en: 'Fatigue', id: 'Kelelahan' },
            title: { en: 'Fluid-Structure Interaction (FSI) analysis', id: 'Analisis Fluid-Structure Interaction (FSI)' },
            description: {
                en: [
                    'In addition to linear metallic materials, we are also very familiar with hyperelastic and creep modeling of polymers and rubbers for seals, housings, and other products.',
                    'We can translate complex non-linear behavior into efficient material models suitable for FEA. This includes the project management of material physical tests and development and validation of constitutive models to implement within our clients analysis software.'
                ],
                id: [
                    'Selain material metalik linear, kami juga sangat familiar dengan pemodelan hyperelastic dan creep untuk polimer dan karet pada seal, housing, serta produk lainnya.',
                    'Kami dapat menerjemahkan perilaku non-linear kompleks menjadi model material yang efisien untuk FEA, termasuk pengelolaan uji fisik material serta pengembangan dan validasi model konstitutif untuk diterapkan pada software analisis klien.'
                ]
            },
            image: '/img/capability-fatigue.png'
        }
    };

    const tabs = Object.keys(capabilitiesData);

    const testimonials = [
        {
            id: 1,
            title: {
                en: 'Clear and Reliable Engineering Analysis',
                id: 'Analisis Rekayasa yang Jelas dan Andal'
            },
            text: {
                en: 'PRIME FEM supported our project with clear and reliable engineering analysis. Their team demonstrated strong technical understanding and delivered results that were easy to review and apply. Communication was smooth, and responses were always timely. Overall, PRIME FEM was a dependable engineering partner.',
                id: 'PRIME FEM mendukung proyek kami dengan analisis rekayasa yang jelas dan andal. Tim mereka menunjukkan pemahaman teknis yang kuat serta hasil yang mudah ditinjau dan diterapkan. Komunikasi berjalan lancar dan respons selalu tepat waktu. Secara keseluruhan, PRIME FEM adalah mitra rekayasa yang dapat diandalkan.'
            },
            name: 'Galih Indro Tanoyo',
            role: {
                en: 'Mechanical Engineer - Rekind',
                id: 'Insinyur Mekanik - Rekind'
            },
            image: '/img/Galih Indro Tanoyo.jpg'
        },
        {
            id: 2,
            title: {
                en: 'Technically Sound and Well-Organized Analysis',
                id: 'Analisis yang Kuat dan Terstruktur'
            },
            text: {
                en: 'PRIME FEM provided valuable engineering input that supported our project decision-making process. Their analysis was well-organized and technically sound. The team showed good coordination and understanding of project requirements. We appreciated their professionalism and commitment to quality.',
                id: 'PRIME FEM memberikan masukan rekayasa yang berharga untuk mendukung pengambilan keputusan proyek. Analisis mereka terstruktur dan kuat secara teknis. Tim menunjukkan koordinasi yang baik dan pemahaman atas kebutuhan proyek. Kami menghargai profesionalisme dan komitmen mereka terhadap kualitas.'
            },
            name: 'Edi Rosa',
            role: {
                en: 'Project Manager - Tuban Steel Work',
                id: 'Manajer Proyek - Tuban Steel Work'
            },
            image: '/img/Edi Rosa.jpg'
        },
        {
            id: 3,
            title: {
                en: 'Thorough Engineering Review Aligned with Standards',
                id: 'Ulasan Rekayasa yang Teliti dan Sesuai Standar'
            },
            text: {
                en: 'Working with PRIME FEM was a positive experience throughout the project. Their engineering review was thorough and aligned with applicable codes and standards. The deliverables were clear and supported by proper technical justification. PRIME FEM demonstrated strong reliability as an engineering consultant.',
                id: 'Bekerja bersama PRIME FEM memberikan pengalaman positif sepanjang proyek. Ulasan rekayasa mereka teliti dan selaras dengan kode serta standar yang berlaku. Deliverables jelas dan didukung justifikasi teknis yang baik. PRIME FEM menunjukkan keandalan yang kuat sebagai konsultan rekayasa.'
            },
            name: 'Galih Sukmono Aji',
            role: {
                en: 'Project Manager - Tripatra',
                id: 'Manajer Proyek - Tripatra'
            },
            image: '/img/Galih Suksmono Adi.jpg'
        },
        {
            id: 4,
            title: {
                en: 'Structured and Systematic Mechanical Analysis',
                id: 'Analisis Mekanik yang Terstruktur dan Sistematis'
            },
            text: {
                en: 'PRIME FEM showed strong capability in mechanical and numerical analysis. Their work was carried out using a structured and systematic approach. The results were clearly presented and easy to interpret for further engineering evaluation. Their technical support added real value to the project.',
                id: 'PRIME FEM menunjukkan kapabilitas yang kuat dalam analisis mekanik dan numerik. Pekerjaan dilakukan dengan pendekatan terstruktur dan sistematis. Hasil disajikan jelas dan mudah ditafsirkan untuk evaluasi lanjutan. Dukungan teknis mereka memberikan nilai tambah yang nyata.'
            },
            name: 'Fahmi Fauzi Handoko',
            role: {
                en: 'Mechanical Engineer - Puspetindo',
                id: 'Insinyur Mekanik - Puspetindo'
            },
            image: '/img/Fahmi Fauzi Handoko.jpg'
        },
        {
            id: 5,
            title: {
                en: 'Accurate Numerical and Stress Analysis for Research',
                id: 'Analisis Numerik dan Stress yang Akurat untuk Riset'
            },
            text: {
                en: 'PRIME FEM successfully supported our study with accurate numerical and stress analysis. Their team was responsive and open to interdisciplinary discussion. The analysis results were clearly explained and useful for research interpretation. PRIME FEM demonstrated flexibility and strong technical competence.',
                id: 'PRIME FEM berhasil mendukung studi kami dengan analisis numerik dan stress yang akurat. Tim mereka responsif dan terbuka untuk diskusi lintas disiplin. Hasil analisis dijelaskan dengan jelas dan bermanfaat untuk interpretasi riset. PRIME FEM menunjukkan fleksibilitas dan kompetensi teknis yang kuat.'
            },
            name: 'Cendrawasih Andusyana Farmasyanti',
            role: {
                en: 'Faculty of Dentistry - Universitas Gadjah Mada',
                id: 'Fakultas Kedokteran Gigi - Universitas Gadjah Mada'
            },
            image: '/img/Dr.Cendrawasih.jpg'
        }
    ];

    const nextIndustry = () => {
        setCurrentIndustry((prev) => Math.min(prev + 1, 3));
    };

    const prevIndustry = () => {
        setCurrentIndustry((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative z-20 w-full min-h-screen font-sans">
            {/* 
                Parallax Container 
                We use z-20 to ensure this section slides OVER the fixed Hero section (z-10 or 0).
                The background gradient is specific: #7C0A02 -> #AF3112 -> #F1BC31
            */}

            {/* Custom Shape Divider at Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
                {/* This SVG creates the angled cut effect to transition from the Hero image to this section */}
                <svg className="relative block w-[calc(100%+1px)] h-[150px] md:h-[200px] drop-shadow-xl" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 L500,100 L900,40 L1200,60 L1200,120 L0,120 Z" className="fill-[#7C0A02]"></path>
                </svg>
            </div>

            <div
                className="w-full py-16 px-4 sm:px-6 lg:px-8 text-white start-content relative"
                style={{
                    background: 'linear-gradient(180deg, #7C0A02 0%, #AF3112 60%, #F1BC31 100%)',
                    marginTop: '-1px' // Slight negative margin to ensure no gap
                }}
            >

                <div className="max-w-7xl mx-auto space-y-16 relative z-10">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-20 pb-2 border-b border-white/20">

                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                                PrimeFEM <span className="text-yellow-400">.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 font-light">
                                PT Prima Rekayasa Mandiri
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                            <div className="inline-block px-4 py-2 border border-yellow-400/50 rounded-lg bg-black/20 backdrop-blur-sm">
                                <span className="text-yellow-400 text-xs md:text-sm font-bold tracking-wider uppercase">{text.engineeringConsulting}</span>
                            </div>
                        </div>
                    </div>

                    {/* WHO WE ARE Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Image with stylized border */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-600 rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="/img/about.jpeg"
                                    alt="About PrimeFEM"
                                    className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                                        <Award size={24} />
                                        <span className="font-bold tracking-wider">{text.established}</span>
                                    </div>
                                    <p className="text-white/80 text-sm">{text.excellence}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Card */}
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                                {text.whoTitle} <span className="text-yellow-400">{text.whoHighlight}</span> <br />{text.whoSuffix}
                            </h3>
                            <div className="space-y-6 text-lg text-gray-100 font-light leading-relaxed">
                                <p>
                                    <strong className="text-white font-semibold">PrimeFEM</strong> {text.whoP1}
                                </p>
                                <p>
                                    {text.whoP2}
                                </p>
                                <p>
                                    {text.whoP3}
                                </p>
                            </div>
                            <Link
                                to="/#services"
                                className="px-8 py-4 bg-white text-[#7C0A02] font-bold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-2 group"
                            >
                                {text.servicesButton}
                                <Zap className="w-5 h-5 group-hover:fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Vision & Mission Cards - Unique Premium Design */}
                    <div className="relative">
                        {/* Floating Gradient Orbs - Background Decoration */}
                        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                            {/* VISION CARD - Diagonal Asymmetric Design */}
                            <div className="lg:col-span-7 group">
                                <div className="relative h-full">
                                    {/* Animated Border Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse"></div>

                                    {/* Main Card */}
                                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-yellow-500/20">
                                        {/* Diagonal Split Layout */}
                                        <div className="relative min-h-[500px] lg:min-h-[550px]">
                                            {/* Background Image - Diagonal Placement */}
                                            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-[40%] lg:h-full">
                                                <div className="relative w-full h-full overflow-hidden">
                                                    <img
                                                        src="/img/vision.jpeg"
                                                        alt="Vision"
                                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-transparent to-black/60"></div>

                                                    {/* Decorative Mesh Pattern Overlay */}
                                                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                                </div>
                                            </div>

                                            {/* Content Area with 3D Effect */}
                                            <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
                                                {/* Icon & Badge */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="relative">
                                                        {/* Icon with Glow */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 blur-xl opacity-60"></div>
                                                        <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500 border-2 border-white/30">
                                                            <Eye size={36} className="text-white" />
                                                        </div>
                                                    </div>

                                                    {/* Decorative Badge */}
                                                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                                                        <span className="text-xs font-bold tracking-widest text-yellow-300">{text.visionBadge}</span>
                                                    </div>
                                                </div>

                                                {/* Title with Gradient */}
                                                <div className="space-y-4 mb-6 lg:mb-0 lg:w-[70%]">
                                                    <h3 className="text-4xl lg:text-5xl font-black bg-white bg-clip-text text-transparent">
                                                        {text.visionTitle}
                                                    </h3>

                                                    {/* Decorative Line */}
                                                    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>

                                                    <p className="text-white/90 leading-relaxed text-base lg:text-xl font-semibold">
                                                        {text.visionText}
                                                    </p>
                                                </div>

                                                {/* Bottom Decorative Elements */}
                                                <div className="absolute bottom-6 left-6 flex items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                                    <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                                                    <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                                                    <div className="w-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MISSION CARD - Vertical Emphasis Design */}
                            <div className="lg:col-span-5 group">
                                <div className="relative h-full">
                                    {/* Animated Border Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse"></div>

                                    {/* Main Card */}
                                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-red-500/20">
                                        <div className="relative min-h-[500px] lg:min-h-[550px] flex flex-col">
                                            {/* Image Section - Top */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src="/img/mission.jpeg"
                                                    alt="Mission"
                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/30 to-[#7C0A02]/90"></div>

                                                {/* Floating Icon on Image */}
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 blur-xl opacity-60"></div>
                                                        <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-[-12deg] transition-transform duration-500 border-2 border-white/30">
                                                            <Target size={36} className="text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="flex-1 p-8 pt-14 flex flex-col justify-between">
                                                {/* Badge */}
                                                <div className="text-center mb-4">
                                                    <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-xs font-bold tracking-widest text-white-500">
                                                        {text.missionBadge}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div className="space-y-4 mb-6">
                                                    <h3 className="text-4xl lg:text-5xl font-black text-center bg-white bg-clip-text text-transparent">
                                                        {text.missionTitle}
                                                    </h3>

                                                    {/* Center Decorative Line */}
                                                    <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto"></div>
                                                </div>

                                                {/* Mission Points - Creative Style */}
                                                <ul className="space-y-4">
                                                    <li className="group/item flex items-start gap-3 p-3 rounded-l hover:bg-white/5 transition-all duration-300">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transform group-hover/item:rotate-12 transition-transform duration-300 shadow-lg">
                                                                <span className="text-white font-black text-xs">01</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-white/90 text-l leading-relaxed">{text.missionPoints[0]}</span>
                                                    </li>
                                                    <li className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transform group-hover/item:rotate-12 transition-transform duration-300 shadow-lg">
                                                                <span className="text-white font-black text-xs">02</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-white/90 text-l leading-relaxed">{text.missionPoints[1]}</span>
                                                    </li>
                                                    <li className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                                                        <div className="mt-1 flex-shrink-0">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transform group-hover/item:rotate-12 transition-transform duration-300 shadow-lg">
                                                                <span className="text-white font-black text-xs">03</span>
                                                            </div>
                                                        </div>
                                                        <span className="text-white/90 text-l leading-relaxed">{text.missionPoints[2]}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom padding adjustment */}
                <div className="h-32"></div>

                {/* Bottom Shape Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        className="relative block w-[calc(100%+10px)] h-[80px] md:h-[120px] drop-shadow-xl"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        {/* Light Beige Border Layer */}
                        <path
                            d="M0,120 L0,90 L600,30 L1200,70 L1200,120 Z"
                            className="fill-[#F9E4D4]"
                        ></path>

                        {/* Main White Fill Layer */}
                        <path
                            d="M0,120 L0,105 L600,45 L1200,85 L1200,120 Z"
                            className="fill-white"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Backed by Partners Section - Enhanced Professional Design */}
            <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header with Decorative Elements */}
                    <div className="relative">
                        <div className="text-center pt-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                                {text.partnersTitle} <span className="text-[#007BB1]">10+</span> {text.partnersAccent}
                            </h2>

                            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">{text.partnersDesc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Carousel Section - Enhanced Professional Design */}
            <div id="services" className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-5 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C0A02]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#007BB1]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header with Enhanced Design */}
                    <div className="text-center mb-12">
                        {/* Decorative Badge */}
                        <div className="inline-block mb-3">
                            <span className="px-4 py-1.5 bg-gradient-to-r from-[#7C0A02]/10 to-[#AF3112]/10 text-[#7C0A02] text-xs font-bold rounded-full border border-[#7C0A02]/20 shadow-sm">
                                {text.professionalServices}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            {text.servicesTitle}
                        </h2>

                        <div className="w-20 h-1 bg-gradient-to-r from-[#7C0A02] via-[#AF3112] to-[#F1BC31] mx-auto mb-5 rounded-full"></div>

                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            <strong className="font-bold text-gray-900">PrimeFEM</strong> {text.servicesDesc1}
                        </p>

                        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mt-3 leading-relaxed">{text.servicesDesc2}</p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Carousel Track */}
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="min-w-full px-4"
                                    >
                                        {/* Unique Premium Card Design */}
                                        <div className="relative group">
                                            {/* Animated Gradient Border Effect */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C0A02] via-[#AF3112] to-[#F1BC31] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-500 animate-pulse"></div>

                                            {/* Main Card Container */}
                                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                                                <div className="relative h-[420px] lg:h-[450px]">
                                                    {/* Full Background Image with Diagonal Overlay */}
                                                    <div className="absolute inset-0">
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                        {/* Gradient Overlay - Diagonal Effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                                                    </div>

                                                    {/* Creative Number Badge - Top Left */}
                                                    <div className="absolute top-6 left-6 z-20">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC31] to-[#AF3112] blur-lg opacity-60"></div>
                                                            <div className="relative bg-gradient-to-br from-[#7C0A02] to-[#AF3112] text-white w-16 h-16 rounded-2xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-2xl border-2 border-white/20">
                                                                <span className="text-2xl font-black">{String(service.id).padStart(2, '0')}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Glassmorphism Content Card - Diagonal Bottom Right */}
                                                    <div className="absolute bottom-0 right-0 left-0 lg:left-auto lg:w-[65%] z-10 p-6 lg:p-8">
                                                        <div className="relative backdrop-blur-xl bg-white/95 rounded-2xl lg:rounded-tr-none lg:rounded-br-none p-6 lg:p-8 shadow-2xl border border-white/40 transform transition-all duration-500 group-hover:bg-white">
                                                            {/* Decorative Corner Element */}
                                                            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#F1BC31]/20 to-[#7C0A02]/20 rounded-full blur-2xl"></div>

                                                            {/* Content */}
                                                            <div className="space-y-4 relative z-10">
                                                                {/* Service Category Tag */}
                                                                <div className="inline-block">
                                                                    <span className="text-xs font-bold tracking-wider text-[#7C0A02] bg-gradient-to-r from-[#F1BC31]/20 to-transparent px-3 py-1 rounded-full border border-[#7C0A02]/20">
                                                                        {text.serviceTag} {String(service.id).padStart(2, '0')}
                                                                    </span>
                                                                </div>

                                                                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                                                                    {service.title[language]}
                                                                </h3>

                                                                <p className="text-sm lg:text-base text-gray-700 leading-relaxed line-clamp-3">
                                                                    {service.description[language]}
                                                                </p>

                                                                {/* Premium Button with Arrow */}
                                                                <button className="group/btn relative inline-flex items-center gap-2 overflow-hidden">
                                                                    {/* Button Background Animation */}
                                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7C0A02] via-[#AF3112] to-[#7C0A02] bg-size-200 bg-pos-0 group-hover/btn:bg-pos-100 transition-all duration-500"></div>

                                                                    {/* Button Content */}
                                                                    <span className="relative px-6 py-3 text-white font-bold text-sm flex items-center gap-2 rounded-xl">
                                                                        {text.learnMore}
                                                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                                    </span>
                                                                </button>
                                                            </div>

                                                            {/* Decorative Line Accent */}
                                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7C0A02] to-transparent opacity-20"></div>
                                                        </div>
                                                    </div>

                                                    {/* Top Right Decorative Element */}
                                                    <div className="absolute top-6 right-6 w-32 h-32 border-2 border-white/20 rounded-full opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#7C0A02] hover:text-white transition-all duration-300 group z-10 border-2 border-gray-200"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#7C0A02] hover:text-white transition-all duration-300 group z-10 border-2 border-gray-200"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex justify-center gap-3 mt-10">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentSlide
                                        ? 'w-12 h-3 bg-[#7C0A02]'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Industries Coverage Section - Premium Professional Design */}
            <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-24 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#007BB1]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#7C0A02]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header - Enhanced Professional */}
                    <div className="text-center mb-20 relative">
                        {/* Top decorative line */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
                            <div className="flex items-center gap-4 w-full max-w-4xl">
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#007BB1] to-transparent"></div>
                                <div className="w-3 h-3 bg-[#007BB1] rounded-full"></div>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#007BB1] to-transparent"></div>
                            </div>
                        </div>

                        {/* Title with gradient accent */}
                        <div className="pt-6">
                            <div className="inline-block mb-3">
                                <span className="text-sm font-semibold tracking-[0.2em] text-[#007BB1] uppercase bg-[#007BB1]/10 px-4 py-1.5 rounded-full">
                                    {text.industriesBadge}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                    {text.industriesTitle}
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light">{text.industriesDesc}</p>
                        </div>
                    </div>

                    {/* Grid Layout - Image Left, Carousel Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side - Static Image (flush left) */}
                        <div className="lg:col-span-4 -ml-4 lg:-ml-[80px]">
                            <div className="relative group">
                                {/* Decorative border */}
                                <div className="absolute -inset-3 bg-gradient-to-br from-[#007BB1]/20 via-[#7C0A02]/20 to-[#F1BC31]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                                <img
                                    src="/img/industries_coverage.png"
                                    alt="Industries Coverage"
                                    className="relative w-full max-w-[400px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Right Side - Industries Carousel (2 per slide) */}
                        <div className="lg:col-span-8 relative">
                            {/* Carousel Container */}
                            <div className="relative overflow-hidden rounded-3xl">
                                {/* Slides */}
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateX(-${currentIndustry * 100}%)` }}
                                >
                                    {/* Create slides with 2 industries each */}
                                    {[0, 2, 4, 6].map((startIndex) => (
                                        <div key={startIndex} className="min-w-full px-2">
                                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                                {/* First Industry in this slide */}
                                                {industries[startIndex] && (
                                                    <div className="relative group/card">
                                                        {/* Enhanced Glow Effect */}
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#007BB1] via-[#7C0A02] to-[#F1BC31] rounded-3xl blur-lg opacity-20 group-hover/card:opacity-50 transition-all duration-500"></div>

                                                        {/* Card */}
                                                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 transform transition-all duration-500 group-hover/card:shadow-[0_20px_60px_rgba(0,123,177,0.3)] group-hover/card:-translate-y-2">
                                                            {/* Square Image */}
                                                            <div className="relative aspect-square overflow-hidden">
                                                                <img
                                                                    src={industries[startIndex].image}
                                                                    alt={industries[startIndex].name[language]}
                                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                                                                />
                                                                {/* Enhanced gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                                                {/* Top right accent */}
                                                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                                                    <div className="w-2 h-2 bg-[#F1BC31] rounded-full animate-pulse"></div>
                                                                </div>

                                                                {/* Industry Name Overlay - Enhanced */}
                                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                                                                    <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-3 sm:p-4 transform transition-all duration-300 group-hover/card:bg-white/20">
                                                                        <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white text-center leading-tight tracking-wide">
                                                                            {industries[startIndex].name[language]}
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Second Industry in this slide */}
                                                {industries[startIndex + 1] && (
                                                    <div className="relative group/card">
                                                        {/* Enhanced Glow Effect */}
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#007BB1] via-[#7C0A02] to-[#F1BC31] rounded-3xl blur-lg opacity-20 group-hover/card:opacity-50 transition-all duration-500"></div>

                                                        {/* Card */}
                                                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 transform transition-all duration-500 group-hover/card:shadow-[0_20px_60px_rgba(124,10,2,0.3)] group-hover/card:-translate-y-2">
                                                            {/* Square Image */}
                                                            <div className="relative aspect-square overflow-hidden">
                                                                <img
                                                                    src={industries[startIndex + 1].image}
                                                                    alt={industries[startIndex + 1].name[language]}
                                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                                                                />
                                                                {/* Enhanced gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                                                {/* Top right accent */}
                                                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                                                    <div className="w-2 h-2 bg-[#F1BC31] rounded-full animate-pulse"></div>
                                                                </div>

                                                                {/* Industry Name Overlay - Enhanced */}
                                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                                                                    <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-3 sm:p-4 transform transition-all duration-300 group-hover/card:bg-white/20">
                                                                        <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white text-center leading-tight tracking-wide">
                                                                            {industries[startIndex + 1].name[language]}
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Navigation Arrows */}
                            <button
                                onClick={prevIndustry}
                                disabled={currentIndustry === 0}
                                className={`absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group z-20 border-2 ${currentIndustry === 0
                                    ? 'opacity-40 cursor-not-allowed border-gray-200'
                                    : 'hover:from-[#007BB1] hover:to-[#005a8a] hover:text-white border-gray-200 hover:border-[#007BB1] hover:scale-110'
                                    }`}
                                aria-label="Previous industries"
                            >
                                <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={nextIndustry}
                                disabled={currentIndustry === 3}
                                className={`absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group z-20 border-2 ${currentIndustry === 3
                                    ? 'opacity-40 cursor-not-allowed border-gray-200'
                                    : 'hover:from-[#7C0A02] hover:to-[#5a0701] hover:text-white border-gray-200 hover:border-[#7C0A02] hover:scale-110'
                                    }`}
                                aria-label="Next industries"
                            >
                                <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
                            </button>

                            {/* Enhanced Slide Indicators */}
                            <div className="flex justify-center gap-3 mt-12">
                                {[0, 1, 2, 3].map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndustry(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndustry
                                            ? 'w-14 h-3.5 bg-gradient-to-r from-[#007BB1] to-[#7C0A02] shadow-lg'
                                            : 'w-3.5 h-3.5 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Engineering Capabilities Section - Professional Tabbed Design */}
            <div className="w-full bg-white py-5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 mb-12 overflow-x-auto no-scrollbar">
                        <div className="flex w-full min-w-max gap-2 pb-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative pb-3 px-4 text-sm sm:text-base md:text-xl md:flex-1 md:text-center font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                        ? 'text-gray-900 scale-105'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {capabilitiesData[tab].label[language]}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C0A02] to-[#AF3112] rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area - 2 Column Layout */}
                    <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[450px]">
                        {/* Left Side - Text Content */}
                        <div className="space-y-8 animate-fadeIn">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                {capabilitiesData[activeTab].title[language]}
                            </h3>
                            <div className="space-y-6">
                                {capabilitiesData[activeTab].description[language].map((para, index) => (
                                    <p key={index} className="text-gray-600 text-md leading-relaxed font-regular">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Visual Representation */}
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#007BB1]/10 to-[#7C0A02]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105 w-full flex justify-center">
                                <img
                                    src={capabilitiesData[activeTab].image}
                                    alt={capabilitiesData[activeTab].label[language]}
                                    className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-lg h-auto rounded-2xl shadow-2xl border border-gray-100 object-contain"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist yet
                                        e.target.src = "https://placehold.co/800x600/f3f4f6/374151?text=" + capabilitiesData[activeTab].label[language];
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section - Exactly as Mockup */}
            <div className="w-full bg-white py-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-[#7C0A02] rounded-none md:rounded-2xl shadow-2xl overflow-hidden min-h-[380px]">
                        {/* Top Right "Cutout" shape */}
                        <div
                            className="absolute top-0 right-0 w-[45%] h-16 bg-white hidden md:block"
                            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                        ></div>

                        <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:px-16 md:py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Content */}
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0">
                                            <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                                <path d="M13.7143 0C6.14286 0 0 6.14286 0 13.7143V37.7143H20.5714V13.7143H10.2857C10.2857 6.85714 13.7143 3.42857 20.5714 3.42857V0H13.7143ZM41.1429 0C33.5714 0 27.4286 6.14286 27.4286 13.7143V37.7143H48V13.7143H37.7143C37.7143 6.85714 41.1429 3.42857 48 3.42857V0H41.1429Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                                                {testimonials[currentTestimonial].title[language]}
                                            </h3>
                                            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl">
                                                {testimonials[currentTestimonial].text[language]}
                                            </p>

                                            <div className="flex items-center gap-1.5 pt-2 text-[#F1BC31]">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-xl md:text-2xl">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content - Profile Card & Nav */}
                                <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6 sm:gap-10">
                                    {/* Profile Card Overlay */}
                                    <div className="relative mt-2 sm:mt-4">
                                        {/* Image Overlapping */}
                                        <div className="relative mb-4 sm:mb-0 sm:absolute sm:-left-12 sm:top-1/2 sm:-translate-y-1/2 z-10">
                                            <div className="relative">
                                                <img
                                                    src={testimonials[currentTestimonial].image}
                                                    alt={testimonials[currentTestimonial].name}
                                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#7C0A02] bg-white object-cover"
                                                    onError={(e) => {
                                                        e.target.src = "https://placehold.co/100x100/ffffff/7C0A02?text=PF";
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {/* White Rounded Box */}
                                        <div className="bg-white rounded-2xl pl-5 sm:pl-16 pr-6 sm:pr-8 py-5 sm:py-6 md:py-8 w-full sm:min-w-[280px] shadow-xl">
                                            <p className="text-gray-900 font-bold text-lg leading-tight uppercase tracking-wide">
                                                {testimonials[currentTestimonial].name}
                                            </p>
                                            <p className="text-gray-600 text-xs md:text-sm font-medium mt-1">
                                                {testimonials[currentTestimonial].role[language]}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Navigation Bars and Arrows */}
                                    <div className="flex items-center gap-6 mt-4">
                                        <button
                                            onClick={prevTestimonial}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                                            aria-label="Previous testimonial"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {testimonials.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => setCurrentTestimonial(index)}
                                                    className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${index === currentTestimonial
                                                        ? 'w-10 bg-white opacity-100'
                                                        : 'w-7 bg-white/30 opacity-60 hover:bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={nextTestimonial}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                                            aria-label="Next testimonial"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
