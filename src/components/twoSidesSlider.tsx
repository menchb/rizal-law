import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Avatar, Chip, Box } from '@mui/material';

// Importing images
import recto from '../images/Claro-Recto.jpg';
import laurel from '../images/Jose-Laurel.jpg';
import church from '../images/Church.jpg';
import cuenco from '../images/Mariano-Cuenco.jpg';
import veteranos from '../images/Veteranos-revolucion.jpg';
import alagad from '../images/Alagad-Rizal.jpg';
import knightsRizal from '../images/Knights-Rizal.png';
import freemasons from '../images/Freemasons.jpg';
import cortez from '../images/Emilio-Cortez.png';
import roces from '../images/Joaquin-Roces.webp';
import lagumbay from '../images/Wenceslao-Lagumbay.jpg';
import cavanna from '../images/Jesus-Cavanna.png';
import scap from '../images/SCAP.jpg';
import congregation from '../images/Congregation-Mission.jpg';
import columbus from '../images/Knights-Columbus.jpg';
import ctgp from '../images/CTGP.png';
import santos from '../images/Rufino-Santos.jpg';
import catholicSchool from '../images/Catholic-school.jpeg';
import rodrigo from '../images/Francisco-Rodrigo.jpg';
import rosales from '../images/Decoroso-Rosales.png';
import durano from '../images/Ramon-Durano.jpg';
import nuguid from '../images/Jose-Nuguid.jpg';
import godofredo from '../images/Godofredo-Ramos.jpg';
import miguelCuenco from '../images/Miguel-Cuenco.jpg';
import consing from '../images/Carmen-Consing.jpg';
import ziga from '../images/Tecla-Ziga.jpg';

import placeholder from '../images/placeholder.jpg';

export default function twoSidesSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true
    };

    return (
        <div>
            <Box>
                <Typography variant='h4'>Supporting Side</Typography>
                <Slider {...settings}>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Senator Claro M. Recto" src={recto} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Senator Claro M. Recto</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Main proponent of the Rizal Bill.</Typography>
                            <Typography variant="body1">Teach the youth to stand up for their country and embody the values of Rizal.</Typography>
                            <Typography variant="body1">Appreciate Rizal's memory in combating the Spanish tyranny.</Typography>
                            <Typography variant="body1">Rizal portrayed faithfully what actually occured in the Philippines.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Senator Jose P. Laurel" src={laurel} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Senator Jose P. Laurel</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Head of the senate committee on education.</Typography>
                            <Typography variant="body1">Viable and practical to enact the bill into law.</Typography>
                            <Typography variant="body1">Give a sense of nationalism and importance to sovereignty.</Typography>
                            <Typography variant="body1">Mirror our strengths and defects for consciousness and preparation to sacrifice for freedom.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Veteranos de la Revolucion" src={veteranos} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Veteranos de la Revolucion</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Spirit of 1896.</Typography>
                            <Typography variant="body1">Rizal was a national hero who inspired the revolution.</Typography>
                            <Typography variant='body1'> Writings relevant to the Filipino identity and culture.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Alagad ni Rizal" src={alagad} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Alagad ni Rizal</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Rizal's novels exposed the abuses of the Spanish colonial regime. </Typography>
                            <Typography variant="body1">Inspired the Filipino people to fight for freedom and dignity.</Typography>
                            <Typography variant="body1">Part of the Filipino heritage, should be preserved and propagated.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="The Freemasons" src={freemasons} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">The Freemasons</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Recognized Rizal as one of their prominent members who embodied principles and fought against tyranny and oppression.</Typography>
                            <Typography variant="body1">The Philippines was an exclusively Filipino Masonic territory. They had the right to preserve and promote their own culture and history.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Knights of Rizal" src={knightsRizal} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Knights of Rizal</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Propagate Rizal's teachings among Filipinos and others who believe in his teachings.</Typography>
                            <Typography variant="body1">Had a legal mandate to study, teach, and disseminate Rizal's life, works, and writings as a body corporate and politic recognized by law.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Emilio Cortez" src={cortez} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Emilio Cortez</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Works were not anti-Catholic but anti-friar.</Typography>
                            <Typography variant="body1">Exposed the evils of colonialism and the need for reforms.</Typography>
                            <Typography variant="body1">Books were not subversive but patriotic.</Typography>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Mario Bengzon" src={placeholder} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Mario Bengzon</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Expose students to different perspectives and stimulate their critical thinking.</Typography>
                            <Typography variant="body1">Opposed the amendment to allow students not to read Rizal's works on religious grounds: it was a victory for the church hierarchy and a defeat for academic freedom.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Joaquin 'Don Chino' R. Roces" src={roces} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Joaquin "Don Chino" R. Roces</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Prominent publisher and journalist who owned and edited the Manila Times.</Typography>
                            <Typography variant="body1">Works were not only literary masterpieces but also historical documents that revealed the true conditions of the Filipino people under Spanish rule.</Typography>

                            
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Wenceslao Rancap Lagumbay" src={lagumbay} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Wenceslao Rancap Lagumbay</Typography>
                            <Chip color="success" label="Supporting" />
                            <Typography variant="body1">Rizal's works were educational and inspirational, they taught the Filipinos nationalism, democracy, and human rights.</Typography>
                        </CardContent>
                    </Card>
                </Slider>
            </Box>

            <Box>
                <Typography variant='h4' sx={{ marginTop: '24px' }}>Opposing Side</Typography>
                <Slider {...settings} rtl={true}>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Church" src={church} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">The Catholic Church</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Violate the freedom of consience and religion.</Typography>
                            <Typography variant="body1">Organized symposium and fora to denounce the bill.</Typography>
                            <Typography variant="body1">Novels are heretic and impious.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Fr. Jesus Cavanna" src={cavanna} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Fr. Jesus Cavanna</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">The novels belong to the past.</Typography>
                            <Typography variant="body1">Teaching them will misinterpret the current conditions of the Philippines.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Jesus Paredes" src={placeholder} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Jesus Paredes</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Unconstitutional, violated the freedom of conscience and religion of the students.</Typography>
                            <Typography variant="body1">Blasphemous, immoral, subversive, and they would corrupt the youth. </Typography>
                            <Typography variant="body1">Proposed an amendment for students to choose other books.</Typography>

                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Catholic Action of the Philippines" src={scap} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Catholic Action of the Philippines</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Attack on the Catholic faith.</Typography>
                            <Typography variant="body1">Violation of the separation of church and state.</Typography>
                            <Typography variant="body1">Works were full of errors, insults, and heresies against the Catholic Church and its doctrines.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="The Congregation of the Mission" src={congregation} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">The Congregation of the Mission</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">The law was a threat to Catholic education and religious freedom of the students.</Typography>
                            <Typography variant="body1">Rizal's works were anti-Catholic, anti-Spanish, and anti-Filipino.</Typography>
                            <Typography variant="body1">Would undermine the moral and spiritual values of the nation.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="The Knights of Columbus" src={columbus} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">The Knights of Columbus</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Imposition of a secular ideology on the Catholic students and a violation of their rights of conscience.</Typography>
                            <Typography variant="body1">Rizal's works were offensive, erroneous, dangerous, and might incite hatred and rebellion against the Church and the government.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="The Catholic Teachers Guild" src={ctgp} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">The Catholic Teachers Guild</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Infringement on the academic freedom and the professional competence of the teachers.</Typography>
                            <Typography variant="body1">Not suitable for the students' level of maturity and understanding, would sow confusion, doubt, and resentment.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Archbishop Rufino Santos" src={santos} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Archbishop Rufino Santos</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Archbishop of Manila</Typography>
                            <Typography variant="body1">Wrote a pastoral letter.</Typography>
                            <Typography variant="body1">Compulsory reading of unexpurgated version would affect Catholic students.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Senator Mariano J. Cuenco" src={cuenco} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Senator Mariano J. Cuenco</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Rizal's denial of purgatory because it was not mentioned in the Bible, by Moses, or by Jesus Christ.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Catholic Schools" src={catholicSchool} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Catholic Schools</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Rumored to threathen to close down.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Fransisco Rodrigo" src={rodrigo} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Fransisco Rodrigo</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Would create conflict between nationalistic and religious Filipinos.</Typography>
                            <Typography variant="body1">Rizal's works attacked the practices and beliefs of the Church, not historical but fictional.</Typography>
                            <Typography variant="body1">Proposed an amendment to make reading Rizal's novels optional.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Decoroso Rosales" src={rosales} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Decoroso Rosales</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Bill would divide Filipinos united in the fight against Japan.</Typography>
                            <Typography variant="body1">Would affect the number of Catholics in the Philippines and lead to the closure of Catholic schools.</Typography>
                            <Typography variant="body1">Proposed amendment to make teaching Rizal's works optional for private schools.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Ramon Durano" src={durano} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Ramon Durano</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Would promote hatred and disloyalty to the government.</Typography>
                            <Typography variant="body1">Proposed to make reading Rizal's novels optional for those who had religious objections.</Typography>
                            
                            
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Jose Nuguid" src={nuguid} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Jose Nuguid</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">(Same with Durano) Would promote hatred and disloyalty to the government.</Typography>
                            <Typography variant="body1">Proposed to make reading Rizal's novels optional for those who had religious objections.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Marciano Lim" src={placeholder} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Marciano Lim</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Rizal's books contained anti-Catholic sentiments.</Typography>
                            <Typography variant="body1">Would violate the freedom of conscience of the students.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Manuel Zosa" src={placeholder} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Manuel Zosa</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Would impose a foreign ideology to Filipino students.</Typography>
                            <Typography variant="body1">Would undermine the national identity and culture of the Philippines.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Lucas Paredes" src={placeholder} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Lucas Paredes</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">The law would expose the students to immoral and subversive ideas that would corrupt their minds and endanger the faith and morals of the nation.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Godofredo Ramos" src={godofredo} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Godofredo Ramos</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Father of Aklan.</Typography>
                            <Typography variant="body1">The law violated academic freedom and religious liberty.</Typography>
                            <Typography variant="body1">Rizal's writings were anti-Catholic and anti-Filipino.</Typography>
                            <Typography variant="body1">Unconstitutional and discriminatory.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congressman Miguel Cuenco" src={miguelCuenco} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congressman Miguel Cuenco</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">Criticized Rizal for attacking the dogmas of the Catholic Churc</Typography>
                            <Typography variant="body1">Anti-Catholic and anti-Filipin</Typography>
                            <Typography variant="body1">Endanger the faith of young student</Typography>
                            <Typography variant="body1">Questioned the impartiality of Rizal's sources, accused him of being influenced by Freemasonry.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congresswoman Carmen D. Consing" src={consing} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congresswoman Carmen D. Consing</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">The bill violated the constitutional provision of separation of church and state.</Typography>
                            <Typography variant="body1">Would create religious intolerance and division.</Typography>
                            <Typography variant="body1">Novels were not suitable for young students, they contained errors and misrepresentations of history.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '400px', minHeight: '360px' }}>
                        <CardContent>
                            <Avatar alt="Congresswoman Tecla San Andres Ziga" src={ziga} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5">Congresswoman Tecla San Andres Ziga</Typography>
                            <Chip color="warning" label="Opposing" />
                            <Typography variant="body1">The first woman in PH to top bar examination for law-degree graduates.</Typography>
                            <Typography variant="body1">Bill was an infringement on the rights of parents and teachers to choose books for their children and students.</Typography>
                            <Typography variant="body1">Rizal's novels were not patriotic, but subversive and seditious.</Typography>
                        </CardContent>
                    </Card>

                </Slider>
            </Box>
        </div>
    );
};
