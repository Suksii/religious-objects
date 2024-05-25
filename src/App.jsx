import './App.scss'
import HomePage from "./pages/homePage/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import NorthPage from "./pages/northPage/NorthPage.jsx";
import NorthObjects from "./pages/NorthObjects/NorthObjects.jsx";
import FZM from "./assets/FZM.png";
import DzamijaUBioci1 from "./assets/img/DzamijaUBioci1.jpg";
import DzamijaUBioci2 from "./assets/img/DzamijaUBioci2.jpg";
import DzamijaUBioci3 from "./assets/img/DzamijaUBioci3.jpg";
import DzamijaURasovu1 from "./assets/img/DzamijaURasovu1.jpg";
import DzamijaURasovu2 from "./assets/img/DzamijaURasovu2.jpg";
import DzamijaURasovu3 from "./assets/img/DzamijaURasovu3.jpg";
import DzamijaURasovu4 from "./assets/img/DzamijaURasovu4.jpg";
import DzamijaURasovu5 from "./assets/img/DzamijaURasovu5.jpg";
import DzamijaUNedakusima1 from "./assets/img/DzamijaUNedakusima1.jpg";
import DzamijaUNedakusima2 from "./assets/img/DzamijaUNedakusima2.jpg";
import DzamijaUNedakusima3 from "./assets/img/DzamijaUNedakusima3.jpg";
import DzamijaUNedakusima4 from "./assets/img/DzamijaUNedakusima4.jpg";
import SaborniHramHristovogRozdestva1 from "./assets/img/SaborniHramHristovogRozdestva1.jpg";
import SaborniHramHristovogRozdestva2 from "./assets/img/SaborniHramHristovogRozdestva2.jpg";
import SaborniHramHristovogRozdestva3 from "./assets/img/SaborniHramHristovogRozdestva3.jpg";
import ManastirDjurdjeviStupovi1 from "./assets/img/ManastirDjurdjeviStupovi1.jpg";
import ManastirDjurdjeviStupovi2 from "./assets/img/ManastirDjurdjeviStupovi2.jpg";
import ManastirDjurdjeviStupovi3 from "./assets/img/ManastirDjurdjeviStupovi3.jpg";
import ManastirDjurdjeviStupovi4 from "./assets/img/ManastirDjurdjeviStupovi4.jpg";
import CrkvaPresvSrcaIsusovog1 from "./assets/img/CrkvaPresvSrcaIsusovog1.jpg";
import CrkvaPresvSrcaIsusovog2 from "./assets/img/CrkvaPresvSrcaIsusovog2.jpg";
import CrkvaPresvSrcaIsusovog3 from "./assets/img/CrkvaPresvSrcaIsusovog3.jpg";
import HramHristovogVaskrsenja1 from "./assets/img/HramHristovogVaskrsenja1.jpg";
import HramHristovogVaskrsenja2 from "./assets/img/HramHristovogVaskrsenja2.jpg";
import DzamijaOsmanagica1 from "./assets/img/DzamijaOsmanagica1.jpg";
import DzamijaOsmanagica2 from "./assets/img/DzamijaOsmanagica2.jpg";
import DzamijaOsmanagica3 from "./assets/img/DzamijaOsmanagica3.jpg";
import HasanovaDzamija1 from "./assets/img/HasanovaDzamija1.jpg";
import HasanovaDzamija2 from "./assets/img/HasanovaDzamija2.jpg";
import HramSvProrokaIlije from "./assets/img/HramSvProrokaIlije.jpg";
import CrkvaSvetePetkeParaskeve1 from "./assets/img/CrkvaSvetePetkeParaskeve1.jpg";
import CrkvaSvetePetkeParaskeve2 from "./assets/img/CrkvaSvetePetkeParaskeve2.jpg";
import CrkvaSvetePetkeParaskeve3 from "./assets/img/CrkvaSvetePetkeParaskeve3.jpg";
import ManastirOstrog1 from "./assets/img/ManastirOstrog1.jpg";
import ManastirOstrog2 from "./assets/img/ManastirOstrog2.jpg";
import ManastirOstrog3 from "./assets/img/ManastirOstrog3.jpg";
import DvoranskaCrkva1 from "./assets/img/DvoranskaCrkva1.jpg";
import DvoranskaCrkva2 from "./assets/img/DvoranskaCrkva2.jpg";
import DvoranskaCrkva3 from "./assets/img/DvoranskaCrkva3.jpg";
import CrkvaSvNovomucenikaMitropolijeCP1 from "./assets/img/CrkvaSvNovomucenikaMitropolijeCP1.jpg";
import CrkvaSvNovomucenikaMitropolijeCP2 from "./assets/img/CrkvaSvNovomucenikaMitropolijeCP2.jpg";
import CrkvaSvNovomucenikaMitropolijeCP3 from "./assets/img/CrkvaSvNovomucenikaMitropolijeCP3.jpg";
import ManastirDajbabe1 from "./assets/img/ManastirDajbabe1.jpg";
import ManastirDajbabe2 from "./assets/img/ManastirDajbabe2.jpg";
import ManastirDajbabe3 from "./assets/img/ManastirDajbabe3.jpg";
import CetinjskiManastir1 from "./assets/img/CetinjskiManastir1.jpg";
import CetinjskiManastir2 from "./assets/img/CetinjskiManastir2.jpg";
import CetinjskiManastir3 from "./assets/img/CetinjskiManastir3.jpg";
import SkenderCauseva_StarodoganjskaDzamija1 from "./assets/img/SkenderCauseva_StarodoganjskaDzamija1.jpg";
import SkenderCauseva_StarodoganjskaDzamija2 from "./assets/img/SkenderCauseva_StarodoganjskaDzamija2.jpg";
import SkenderCauseva_StarodoganjskaDzamija3 from "./assets/img/SkenderCauseva_StarodoganjskaDzamija3.jpg";
import HramSvNovomucenikaStanka1 from "./assets/img/HramSvNovomucenikaStanka1.jpg";
import HramSvNovomucenikaStanka2 from "./assets/img/HramSvNovomucenikaStanka2.jpg";
import HramSvNovomucenikaStanka3 from "./assets/img/HramSvNovomucenikaStanka3.jpg";
import ManastirSavina from "./assets/img/ManastirSavina.jpg";
import CrkvaSvMarkaPerast from "./assets/img/CrkvaSvMarkaPerast.jpg";
import HramSvLukeKotor from "./assets/img/HramSvLukeKotor.jpg";
import KatedralaSvTripuna1 from "./assets/img/KatedralaSvTripuna1.jpg";
import KatedralaSvTripuna2 from "./assets/img/KatedralaSvTripuna2.jpg";
import CrkvaSvNikole from "./assets/img/CrkvaSvNikole.jpg";
import DzamijaSelimija1 from "./assets/img/DzamijaSelimija1.jpg";
import DzamijaSelimija2 from "./assets/img/DzamijaSelimija2.jpg";
import KonkatedralaSvPetra1 from "./assets/img/KonkatedralaSvPetra1.jpg";
import KonkatedralaSvPetra2 from "./assets/img/KonkatedralaSvPetra2.jpg";
import KonkatedralaSvPetra3 from "./assets/img/KonkatedralaSvPetra3.jpg";
import HramSvJovanaVladimira1 from "./assets/img/HramSvJovanaVladimira1.jpg";
import HramSvJovanaVladimira2 from "./assets/img/HramSvJovanaVladimira2.jpg";
import HramSvJovanaVladimira3 from "./assets/img/HramSvJovanaVladimira3.jpg";
import HramUspenjaPresvBogorodice1 from "./assets/img/HramUspenjaPresvBogorodice1.jpg";
import HramUspenjaPresvBogorodice2 from "./assets/img/HramUspenjaPresvBogorodice2.jpg";
import HramUspenjaPresvBogorodice3 from "./assets/img/HramUspenjaPresvBogorodice3.jpg";
import CrkvaSvSaveDjenasi from "./assets/img/CrkvaSvSaveDjenasi.jpg";
import CentralPage from "./pages/centralPage/CentralPage.jsx";
import CentralObjects from "./pages/centralObjects/CentralObjects.jsx";
import SouthPage from "./pages/southPage/SouthPage.jsx";
import SouthObjects from "./pages/southObjects/SouthObjects.jsx";
function App() {

    const north_data = [
        {
            id: 1,
            name: 'Džamija u Bioči',
            mainImage: DzamijaUBioci3,
            date: '20.03.2024.',
            images: [
                {
                    id: 1,
                    image: DzamijaUBioci1
                },
                {
                    id: 2,
                    image: DzamijaUBioci2
                },
                {
                    id: 3,
                    image: DzamijaUBioci3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Džamija u Bioči je predstavljala duhovno središte džemata koji su sačinjavali šest naselja: Bioča, Podgrađe, Gojevići, Poda, Lađevac i Žurina. Kada su podignuti pomenuta džamija, kao i karavan-saraj s dvorištima, han za prenoćište i mekteb u blizini, ne može se sa sigurnošću utvrditi, ali analogno drugim naseljima ovog tipa, bilo je to krajem XVI ili početkom XVII vijeka.'
                },
                {
                    id: 2,
                    description: 'Osnivače ovih objekata treba tražiti među zapovjednicima bihorske tvrđave, ili među Biočanima koji su se istakli u osmanlijskoj vojsci, u upravi ili administraciji a nijesu zaboravili svoj zavičaj, te u njemu podizali hajrate. Na osnovu više dokumenata koji se baziraju na osmanskim izvorima državnog arhiva u Istanbulu, džamija u Bioči je evidentirana kao „džamija Sultan Sulejman-han“, a sa sigurnošću se može prihvatiti da je džamija u Bioči podignuta za vrijeme vladavine Sultana Sulejmana Hana (1520. – 1566.) i da je njemu i bila posvećena.'
                },
                {
                    id: 3,
                    description: 'Prvobitni izgled jedinstvene džamije sa kamenim munarom nije bio karakterističan za seoska područja. Međutim, džamija je više puta stradala, a munara je ostala sve do 1943. godine kada je i ona srušena.'
                },
                {
                    id: 4,
                    description: 'Krajem 2008. godine mještani su pokrenuli inicijativu obnove džamije u Bioči. Dogovor je postignut nakon održanog sastanka 15.01.2009. godine. Tom prilikom je izabran odbor za gradnju džamije: Ragip efendija Ličina, Zaim Islamović, Ajdin Bakija, Fahrudin Spahić, Salil Herović, Mule Islamović i Hasan Bakija. Na istoj lokaciji je 12.04.2009. godine otpočeta obnova džamije. Džamija se radila dobrovoljnim prilozima mještana i zaposlenih u inostranstvu koji potiču iz ovih krajeva, raznih institucija, privatnih preduzetnika, pojedinaca, akcijama i dobrovoljnim radom. Najveći ulog za završne radove na džamiji, uređenju harema, ogradnog zida i pratećih objekata dala je Turska agencija za međunarodnu saradnju i razvoj (TIKA). Prvi namaz klanjao se na Kurban bajram 25. oktobra 2012. godine. Arhitekta džamije je dipl. ing. Arh. Selman Mucević. Džamija je svečano otvorena 23. avgusta (petak) 2013. godine.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 320, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 2,
            name: 'Džamija u Rasovu',
            mainImage: DzamijaURasovu1,
            date: '20.03.2024.',
            images: [
                {
                    id: 1,
                    image: DzamijaURasovu1
                },
                {
                    id: 2,
                    image: DzamijaURasovu2
                },
                {
                    id: 3,
                    image: DzamijaURasovu3
                },
                {
                    id: 4,
                    image: DzamijaURasovu4
                },
                {
                    id: 5,
                    image: DzamijaURasovu5
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Rasovo je jedno od najljepših naselja na području Bijelog Polja, a smješteno je na desnoj obali Lima, u neposrednoj blizini grada. U središnjem dijelu naselja bila je izgrađena džamija, na dijelu groblja bratstva Franca. Nema bližih podataka o njenoj prvobitnoj gradnji. Zna se da je izgorjela 1921. godine, nakon čega je bila obnovljena, ali 1943. ponovo zapaljena.'
                },
                {
                    id: 2,
                    description: "Na njenim temeljima podignuta je nova džamija, reprezentativna, od tvrdog materijala, sa visokim kupolastim svodom, rascijepljenim na dva identična nivoa u vidu polumjeseca. Gradnja ove džamije započeta je 1992. godine. Izgrađena je dobrovoljnim prilozima džematlija i prilozima iz inostranstva sa posebnim zalaganjem bratstva Franca. Džamija nije imala munaru sve do 2010. godine. Organizacijom džemata prikupljena su sredstva za izgradnju munare. Temelji munare postavljeni su u aprilu 2010. a završeni za dva mjeseca, u junu 2010. godine. Visina munare je 46 metara i spada u najveće munare na području Crne Gore. Džamija u Rasovu je jedinstvena građevina ovog tipa na našim prostorima."
                },
                {
                    id: 3,
                    description: "Imamsku službu u ovoj džamiji obavljali su: hafiz Murat Nuhodžić, hafiz Salih Nuhodžić, Adem Međedović, Ibrahim Franca. Imamsku službu obavljao je Amer ef. Šukurica u periodu od 15.09.2006. do septembra 2011. godine, kada je za imama rasovske džamije postavljen Admir Zekić."
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 338, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 3,
            name: 'Džamija u Nedakusima',
            mainImage: DzamijaUNedakusima1,
            date: '20.03.2024.',
            images: [
                {
                    id: 1,
                    image: DzamijaUNedakusima2
                },
                {
                    id: 2,
                    image: DzamijaUNedakusima3
                },
                {
                    id: 3,
                    image: DzamijaUNedakusima4
                },
                {
                    id: 4,
                    image: DzamijaUNedakusima1
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Džamija u Nedakusima počela je da se gradi 11. jula 2011. godine na inicijativu prijatelja i komšija: Kenana Kapetanovića, Ahmedina Ramovića, Esmira Kijameta, Rijada Drndara i Edisa Majstorovića. Projekat džamije su radili: arhitekta Imer Franca, ing. statike Nedžad Mekić i Emir Vesković. Džamija je rađena na zemljištu od 9,5 ari, koje je otkupljeno od vlasnika Murata Mušovića. U osnovi je površine 126m2 i 130m2 pratećih objekata. Munara je visoka 35 metara, sa 99 stepenika. Od pratećih objekata ima gasulhanu i abdestahnu.'
                },
                {
                    id: 2,
                    description: 'Radovi na džamiji su se odvijali uglavnom sopstvenim sredstvima organizatora ovog projekta i mještana, Islamske zajednice iz Bijelog Polja, Mešihata Islamske zajednice, dobrovoljnim prilozima i akcijama, radnom snagom i materijalom pojedinaca. Najveću pomoć u novcu donirao je poznati vakif Ahmet Ahmetović, iz Biševa, sa privremenim radom u Njemačkoj, a u materijalu Mele Mekić.'
                },
                {
                    id: 3,
                    description: "Džamija je svečano otvorena u petak 27. juna 2014. godine. Svečanosti je prisustvovao veliki broj mještana i okolnih džemata. Prije svečanog otvaranja imam iz Turske Avni ef. Alaybeyoglu najavio je otvaranje učenjem Kur'ana, a glavni imam iz Bijelog Polja Enes ef. Burdžović održao je hutbu. Džumu namaz predvodio je hafiz Džemil ef. Džemaili."
                }
                ],
            sources: [
                {
                    id: 1,
                    source: 'Izvori: - „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 320, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: '- https://bs.wikipedia.org/wiki/Spisak_d%C5%BEamija_u_Sand%C5%BEaku'
                },
                {
                    id: 3,
                    source: '- https://medzlisizbp.wordpress.com/dzamija-nedakusi/'
                },
                {
                    id: 4,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 4,
            name: 'Saborni hram Hristovog Roždestva u Mojkovcu',
            mainImage: SaborniHramHristovogRozdestva1,
            date: '20.03.2024.',
            images: [
                {
                    id: 1,
                    image: SaborniHramHristovogRozdestva1
                },
                {
                    id: 2,
                    image: SaborniHramHristovogRozdestva2
                },
                {
                    id: 3,
                    image: SaborniHramHristovogRozdestva3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Iskopavanje temelja počelo je u julu 2000.godine, a isti su osveštani 8. januara 2001. godine. Projekat hrama je izradio i poklonio Mojkovčanin Vlado Radojević. Hram je posvećen rodjenju Hrista ali i u spomen junaka Mojkovačke bitke 1916. godine koji su položili svoje živote za odbranu vjere i otadžbine. Kako prenosi Svetigora press Njegovo preosveštenstvo arhiepiskop cetinjski mitropolit crnogorsko-primorski Amfilohije i preosvećeni episkop budimljansko-nikšićki gospodin Joanikije 7. januara 2008. godine su, na velikom crkveno -narodnom sabranju, sa sveštenstvom osveštali novosagrađeni Saborni hram Hristovog Roždestva u Mojkovcu i u njemu služili Božićnu arhijerejsku liturgiju.'
                }
                ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 817, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]

        },
        {
            id: 5,
            name: 'Manastir Đurđevi stupovi',
            mainImage: ManastirDjurdjeviStupovi1,
            date: '20.03.2024.',
            images: [
                {
                    id: 1,
                    image: ManastirDjurdjeviStupovi1
                },
                {
                    id: 2,
                    image: ManastirDjurdjeviStupovi2
                },
                {
                    id: 3,
                    image: ManastirDjurdjeviStupovi3
                },
                {
                    id: 4,
                    image: ManastirDjurdjeviStupovi4
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Đurđevi stupovi su locirani u neposrednoj blizini Berana, na lijevoj strani Lima, pod Rastovcem, na zaravni koja se zove Stupovi, odmah iznad rijeke ponornice gdje izvire kristalno čista studena voda. Ktitor crkve Sv.Đorđa Đurđevih stupova, bio je Stefan Prvoslav, sin župana Tihomira, brata Nemanjinog.'
                },
                {
                    id: 2,
                    description: 'Vrijeme gradnje crkve pada u sedmu ili osmu deceniju XII vijeka. Sveti Sava osniva Budimljansku episkopiju 1219.god. sa sjedištem u Đurđevim stupovima. U XV vijeku Budimljanska episkopija se podiže na stepen mitropolije, što se dogodilo prije 1455.god.kada ovaj kraj pada pod Turke. Prvi zvanični pomen Budimljanske mitropolije potiče iz 1532.god. U poznatom rukopisu, Šudikovskom pomeniku, nabrajaju se imena budimljanskih mitropolita. Ova dva značajna duhovna centra, Đurđevi stupovi i Šudikova , koji su se nalazili u neposrednoj blizini, održavali su žive međusobne odnose, sve do rušenja Šudikova.'
                },
                {
                    id: 3,
                    description: 'O samom manastiru od kraja XII do sredine XVII vijeka nema nikakvih podataka. U burnim istorijskim tokovima Đurđevi stupovi su 1738.godine zadobili teška oštećenja. Obnovljeni su zaslugom vojvode Radonje, uz pomoć Vasojevića i Kuča, negdje izmedju 1760. i 1790.godine. Upečatljiva ličnost ovog manastira bio je iguman Mojsije Zečević diplomata i osnivač škole. Najznačajniji potez igumana Zečevića je njegova orijentacija prema Cetinju i Crnoj Gori, povezivanje Vasojevića sa drugim crnogorskim plemenima, a uz to obnavljanje manastira i otvaranje škole u konacima, što je bilo od značaja za prosvetu ovog kraja.'
                },
                {
                    id: 4,
                    description: 'U novijoj istoriji Đurđevi stupovi su bili oštećeni u I svjetskom ratu od strane Austrijanaca, pa je godine 1926.izvršena obimna opravka crkve. Kompleks manastira Đurđevi stupovi nije sačuvan u izvornom stanju, u smislu objekata ,rizničkog materijala, konacima, nije sačuvana ni prvobitna zaokruženost porte. U jednom od objekata novijeg datuma sačuvan je Polimski muzej. Crkva Svetog Đorđa je složeno zdanje, sastavljeno iz tri jasno izdvojene cjeline. Prvobitna crkva imala je jednobrodnu osnovu sa polukružnom apsidom i osmostranom kupolom. Uz crkvu su dozidana bočna postrojenja, koja su šira od ostalog dijela hrama, a izmedju njih se nalazi visoka četvrtasta kula. Sveti Đorđe je dobio izgled izuzetno izduženog hrama, ali ipak sva tri dijela čine organski skladnu cjelinu. Crkva je dugačka 29, široka 9,5, a u prostoru bočnih postrojenja njena širina iznosi 12m.'
                },
                {
                    id: 5,
                    description: 'Ono što je zanimljivo jeste da se uz južni zid zapadnog traveja nalazi grob ktitora crkve, Stefana Prvoslava, čak je u naosu propao živopis osim ktitorskog natpisa iznad njegovog groba :” Župan Prvoslav, sin velikog župana Tihomira, sinovac svetoga Simeona Nemanje i ktitor mesta segov.” Ktitor je preminuo 6. januara 1244.godine. Freske su danas fragmentovane sačuvane u oltarskom prostoru i priprati, ali i pored konzervatorskog tretmana freske oltarskog prostora su ostale u sferi dokumentarne vrijednosti. U svodu priprate očuvane freske su zbog oštećenja ikonografski nečitljive.'
                }
                ],
            sources: [
                {
                    id: 1,
                    source: 'Izvori: '
                },
                {
                    id: 2,
                    source: '- Manastiri na tlu Crne Gore, strana 237, Tatjana Pejović – Novi Sad: Presmedij; Cetinje: Republički zavod za zaštitu spomenika kulture, 1995 (Beograd: Zavod za izradu novčanica)'
                },
                {
                    id: 3,
                    source: '- https://www.eparhija.me/manastir-djurdjevi-stupovi'
                }
            ]
        },
        {
            id: 6,
            name: 'Crkva Svete Petke Paraskeve',
            mainImage: CrkvaSvetePetkeParaskeve1,
            date: '01.04.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaSvetePetkeParaskeve1
                },
                {
                    id: 2,
                    image: CrkvaSvetePetkeParaskeve2
                },
                {
                    id: 3,
                    image: CrkvaSvetePetkeParaskeve3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Gradnja crkve Svete Petke Paraskeve u Rasovu, opština Bijelo Polje započeta je 2010. godine, a završena 2022. godine. Crkva je osveštana 29.05.2022. godine, a Svetu arhijerejsku litrugiju služio je mitropolit crnogorsko-primorski Joanikije sa episkopom budimljansko-nikšićkim Metodijem, kao episkopom buenosajreskim i južnocentralnoameričkim Kirilom i episkopom mileševskim Atanasijem.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
    ];
    const central_data = [

        {
            id: 1,
            name: 'Skender Čauševa - Starodoganjska Džamija',
            mainImage: SkenderCauseva_StarodoganjskaDzamija2,
            date: '15.04.2024.',
            images: [
                {
                    id: 1,
                    image: SkenderCauseva_StarodoganjskaDzamija2
                },
                {
                    id: 2,
                    image: SkenderCauseva_StarodoganjskaDzamija3
                },
                {
                    id: 3,
                    image: SkenderCauseva_StarodoganjskaDzamija1
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Prema turskim izvorima ovu džamiju je sagradio Skender-Čauš krajem XV vijeka. Do 1582. godine bila je jedina džamija u varoši. Kada su propali vakufi, džamiju su održavali trgovci, čije radnje su se nalazile u okruženju džamije, pa je otuda i njeno ime Starodoganjska. Pošto je tokom II svjetskog rata Podgorica bombardovana 1944. godine, varoš je doživjela Velika razaranja, a tom prilikom nijesu bile pošteđene ni džamije. Ova džamija je imala manja oštećenja, pa je postojala mogućnost njene opravke.'
                },
                {
                    id: 2,
                    description: 'Prvo je džamija bila pretvorena u reonske prostorije, ali je na taj postupak reagovalo Vakufsko Mearifsko povjerenstvo u Titogradu i molilo Islamsko Starješinstvo za Narodnu Republiku Crnu Goru da se zauzme kod nadležnih organa da se džamija oslobodi i vrati namjeni koju je ranije imala. Sjedište Islamskog starješinstva je premješteno iz Cetinja 1952. godine u Titograd, pa je i džamija vraćena Islamskoj zajednici.'
                },
                {
                    id: 3,
                    description: 'U haremu džamije nalazilo se nekoliko mezara. Kako Islamska zajednica nije imala svojih službenih prostorija u Podgorici, odlučila je da se mezari izmjeste i podigne administrativna zgrada odbora. Od prodate vakufske imovine zvane Murtovina, zgrada je podignuta 1967. godine.'
                },
                {
                    id: 4,
                    description: 'Ova džamija je više puta restaurirana, a najveće opravke su bile nakon razornog zemljotresa 1979. godine, a posljednji opsežni radovi bili su 2008. godine kada je izvršena promjena oronulog krova, nova fasada i unutrašnje krečenje, promjena cjelokupne stolarije i patosa sa podnim grijanjem, izrada novog mimbera i ćursa, te kompletne rasvjete. Radove je finansirao Odbor Islamske zajednice Podgorica, kao i pojedinci. Ova džamija je pod zaštitom države, kao spomenik kulture.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 111, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 2,
            name: 'Katolička crkva Presvetog Srca Isusovog',
            mainImage: CrkvaPresvSrcaIsusovog1,
            date: '18.04.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaPresvSrcaIsusovog1
                },
                {
                    id: 2,
                    image: CrkvaPresvSrcaIsusovog2
                },
                {
                    id: 3,
                    image: CrkvaPresvSrcaIsusovog3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Katolička crkva Presvetog Srca Isusovog je sagrađena 1969. godine, u bivšoj Jugoslaviji i predstavlja jedan od najvažnijih objekata projektovanih i izvedenih u brutalizmu. Djelo je hrvatskih arhitekata Zvonimira Vrkljana i Borisa Krstulovića. 2018. godine katolička crkva Presvetog Srca Isusovog je prepoznata kao jedno od važnijih djela arhitekture u staroj Jugoslaviji, pa su njene fotografije bile izložene u najpoznatijem muzeju moderne umjetnosti u Nju Jorku -The Museum of Modern Art, MoMA.'
                },
                {
                    id: 2,
                    description: 'Glavni prilaz crkvi je široko i dugačko stepenište, koje predstavlja prvi kontakt sa crkvom. Prije stepeništa i ulaska u crkvu postoje dva velika platoa, koja omogućavaju održavanje Svete Mise na otvorenom ili bilo kojeg drugog događaja. Prije samog ulaska u crkvu, postavljena je skulptura “Sv.Ivana Boska”- osnivača salezijanaca, koji se brinu za župu i don Bosko centar u Podgorici. Mala drvena vrata pri ulasku u crkvu, nam poručuju samu simboliku iz evanđelja: ”Uđite na uska vrata! Jer široka su vrata i prostran put koji vodi u propast i mnogo ih je koji njime idu.”(Mt7,13).'
                },
                {
                    id: 3,
                    description: 'Oblik crkve je kako spolja tako iznutra projektovan kao brod. Oblik broda nas podsjeća na starozavjetnu priču o Noinoj barci, a u novom zavjetu brod je simbol Crkve koja sa dobrim kapetanom za kormilom na palubi plovi u vječnu luku mira. Oltar, ambon, svetohranište, krstionica su napravljeni od bijelog mermera. Katolička crkva Presvetog Srca Isusovog ima odlično urađen projekat akustike, pa je položaj ambona u njoj na odličnom mjestu što daje mogućnost za odličnu međusobnu komunikaciju sa vjernicima. Sa druge strane oltara je postavljen tabernakul ili svetohranište. U svetohraništu se čuvaju posvećene hostilje (hljeb, koji se kod sv. Mise promijeni u Isusovo tijelo) i služe za pričešćivanje vjernika. U crkvi je napravljen i prostor za krstionicu, koja se nalazi sa desne strane prezbiterija, gdje je trenutno smješten hor, a na putu ka sakristiji. Gornji dio krstionice je napravljen od pozlaćenog materijala, smješten je na postolje od bijelog mermera, te nosi natpis na latinskom jeziku:”Ego te baptize in nominee patris et filii et spiritus sancti”, a sa druge strane na našem jeziku: „Ja te krstim u ime oca i sina i duha svetoga“.'
                },
                {
                    id: 4,
                    description: 'Crkva Presvetog Srca Isusovog je jako uspjeli arhitektonski projekat u smislu simbolike, sakralnog prostora i praktičnog rješenja, koja daje mogućnost da se svi osjećaju prijatno.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: Katolička crkva Presvetog Srca Isusovog Podgorica, Doživljaj sakralne i brutalističke arhitekture/ uredila Marija V. Ivezić, izdavač: don Bosko centar Podgorica, založio Salve d.o.o. Ljubljana 2019'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 3,
            name: 'Džamija Osmanagića',
            mainImage: DzamijaOsmanagica1,
            date: '18.04.2024.',
            images: [
                {
                    id: 1,
                    image: DzamijaOsmanagica1
                },
                {
                    id: 2,
                    image: DzamijaOsmanagica2
                },
                {
                    id: 3,
                    image: DzamijaOsmanagica3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Osmanagića džamija nalazi se u starom dijelu grada, nedaleko od Starodoganjske džamije, prema brdu Ljubović. Podigao ju je krajem XVIII vijeka Hadži Mehmed-paša Osmanagić. Na džamiji nema natpisa, vakufnama joj nije sačuvana, pa je tačna godina gradnje nepoznata. U turbetu pored džamije gdje je ukopan Hadži-paša, uzglavni nišan je uništen, pa se ni godina smrti ovog hajirsahibije ne zna.'
                },
                {
                    id: 2,
                    description: "Prilikom bombardovanja Podgorice tokom II svjetskog rata, Osmanagića džamija doživjela je velika oštećenja, a na njenu obnovu se čekalo čak četiri decenije. 1997. godine joj je vraćen prvobitni izgled, jer je sanacija vršena prema projektnoj dokumentaciji Republičkog zavoda za zaštitu spomenika kulture iz Cetinja. 1998. godine urađen je i ogradni kameni zid i dvije ulazne kapije u haremu džamije. Lijevo od ulaza u džamiju nalazi se Hadži-paše Osmanagića turbe. Izgrađeno je kao otvoreno zdanje, na četiri stuba od fino klesanog kamena. Na njih se oslanja poluobličasta zidana kupola."
                },
                {
                    id: 3,
                    description: "Godine 2000. turbe je pokriveno bakrom i munare je sanirano. U haremu džamije, sa desne strane od ulaza je bunar, koji je nekada služio za potrebe vjerskih obreda-abdesta, a koristio je i za potrebe stanovnika mahale Osmanagića džamije, a sa lijeve strane nekoliko mezara. Od ulazne kapije sa desne strane napravljena je abdesthana, a na istočnom dijelu harema pored ogradnog zida podignuta je mala zgrada za arhivu sa kancelarijom i mokrim čvorom."
                },
                {
                    id: 4,
                    description: "15. oktobra 2004. godine, prvog dana mjeseca Ramazana klanjala se džuma namaz u Osmanagića džamiji nakon 60 godina. Ta čast je pripala hadži Idris efendiji Demiroviću."
                },
                {
                    id: 5,
                    description: "12. decembra 2010. godine u ranim jutarnjim satima unutrašnjost džamije je zahvatio požar. Uništen je sav unutrašnji dio: hutba, mihrab, tepisi, lusteri, tavanice, prozori, mahfile i dr. Brzom intervencijom vatrogasnih ekipa džamija je spašena od potpunog uništenja. Nakon uviđaja stručne komisije, analize mogućeg uzroka požara i procjene štete, pokrenuta je aktivnost na kompletnoj sanaciji unutrašnjeg dijela džamije. Ministarstvo kulture je dalo novčanu pomoć, ali je Turska agencija za međunarodnu saradnju i razvoj (TIKA) izvršila kompletnu sanaciju džamije o svom trošku."
                },
                {
                    id: 6,
                    description: "Džamija je ponovo počela sa radom 9. decembra 2011. godine i pod zaštitom je države."
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 115, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 4,
            name: 'Hasanova džamija u Milješu',
            mainImage: HasanovaDzamija1,
            date: '18.04.2024.',
            images: [
                {
                    id: 1,
                    image: HasanovaDzamija2
                },
                {
                    id: 2,
                    image: HasanovaDzamija1
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Izgradnja džamije počela je 1998. godine, odlukom stanovnika Gornjeg Milješa, Donjeg Milješa i Rogama. Locirana je na seoskom zemljištu, u središnjem dijelu koji povezuje ova tri naselja. Ideja za gradnju džamije potekla je od Cana Hasana (Osmanovog) Đokovića, iz Milješa, nastanjenog u SAD-Kalifornija. Sopstvenim sredstvima finansiran je ovaj objekat-od početka do završne faze, sa željom da ga pokloni mještanima. Rukovođenje radovima povjerio je Bećiru Djokoviću, a izvođenje Husu Grliću. Džamija je veličine 17x10,20 m. Izvođač radova na munari, čija je visina 37 metara, je Zuhdija ef. Imamović iz Bihaća.'
                },
                {
                    id: 2,
                    description: 'Džamiju je svečano otvorio njen donator Hasan Osmani i predao je na upotrebu bratstvu ova tri naselja. Istoga dana, 21.05.2000. godine (17.02.1421. h) pored ove džamije postavljeni su temelji buduće Medrese uz veliko prisustvo imama i vjernika iz svih krajeva Crne Gore, predstavnika državnih organa Republike i opštine Podgorica, te MZ Tuzi.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 131, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 5,
            name: 'Manastir Dajbabe',
            mainImage: ManastirDajbabe1,
            date: ' 20.04.2024.',
            images: [
                {
                    id: 1,
                    image: ManastirDajbabe1
                },
                {
                    id: 2,
                    image: ManastirDajbabe2
                },
                {
                    id: 3,
                    image: ManastirDajbabe3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Manastir Dajbabe je posvećen prazniku Uspenja Presvete Bogorodice, a narodu je poznat po istoimenom selu u neposrednoj blizini. Manastir je osnovao monah Simeon Popović 1897. godine.'
                },
                {
                    id: 2,
                    description: 'Simeon Popović, inače sa Cetinja, završio je Seminariju i Duhovnu akademiju u Kijevu, a potom i studije filozofije na Sorboni. Zamonašio se 1877. godine, a nakon što je prodao imovinu na Cetinju započeo je da realizuje svoju zamisao. Miniranjem je proširio prirodnu pećinu u obliku krsta, koju je namijenio za manastirsku crkvu.'
                },
                {
                    id: 3,
                    description: 'Radovi na crkvi su bili završeni 1897. godine. Pećinska crkvica je nepravilne osnove, dugačka 21,5m, a prosječno široka oko 2,5m. U središnjem dijelu sada se nalazi grob starca Simeona. Starac Simeon je u Dajbabama proveo ostatak svog života sve do smrti 1941. godine. Za to vrijeme pomagao je narodu i radio na ukrašavanju svoje zadužbine. Islikao je kompletnu unutrašnjost crkve uglavnom likovima Svetih otaca, isposnika, proroka, ali i domaćih Svetitelja, kao na primjer Svetog Petra Cetinjskog. O zidanju manastira ostavio je iza sebe štampanu knjižicu “Postanak svetouspenjskog manastira Dajbabe” iz 1928. godine.'
                },
                {
                    id: 4,
                    description: 'U sklopu manastira postoji i konak površine 300m2 koji je podigao blaženopočivši starješina manastira otac Teodosije Balić uz nesebičnu pomoć Aluminijskog kombinata, Elektrodistribucije, Vodovoda Podgorica, kao i priloga stanovnika Zete i poklonika ove svetinje. Novopodignuti konak je osveštao mitropolit Amfilohije 22. novembra 1997. godine povodom stogodišnjeg jubileja.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 285, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 6,
            name: 'Crkva Svetih Novomučenika Mitropolije crnogorsko-primorske - Pardus',
            mainImage: CrkvaSvNovomucenikaMitropolijeCP1,
            date: '20.04.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaSvNovomucenikaMitropolijeCP1
                },
                {
                    id: 1,
                    image: CrkvaSvNovomucenikaMitropolijeCP2
                },
                {
                    id: 1,
                    image: CrkvaSvNovomucenikaMitropolijeCP3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Kao i Novomučenike kojima je hram posvećen tako su i izgradnju hrama Svetih Novomučenika na Pardusu pratile nevolje jer je građevinska inspekcija pokušala da sruši njegove temelje, a pri kraju izgradnje je aktivirana eksplozivna naprava od strane nepoznatih počinioca i teško oštetila skoro završeni hram. Konačno je sagrađen i osveštan 31.avgusta 2008.godine, a Svetu arhijerejsku liturgiju je služio mitropolit Amfilohije. Novomučenici kojima je hram posvećen su uglavnom iz Lješanske nahije, ali i cijele Crne Gore nevino postradali za vrijeme II svjetskog rata.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: `Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 530, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke`
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 7,
            name: 'Manastir Ostrog',
            mainImage: ManastirOstrog1,
            date: '22.04.2024.',
            images: [
                {
                    id: 1,
                    image: ManastirOstrog1
                },
                {
                    id: 2,
                    image: ManastirOstrog2
                },
                {
                    id: 3,
                    image: ManastirOstrog3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Manastir Ostrog dobio je ime po brdu koje se strmo uzdiže iznad njega, a iz daljine djeluje nestvarno baš kao i čuda Svetog Vasilija. Ovo je jedno od najvećih evropskih svetilišta u kom dolaze ljudi ne samo sa prostora bivše Jugoslavije već i sa drugih kontinenata. Nebrojana su čuda koja su se dogodila kraj kivota sa moštima Svetog Vasilija, pa u čudo ovog sveca vjeruju i oni koji nijesu pravoslavne vjeroispovijesti. Pravoslavna crkva ovog sveca proslavlja 12. maja (29. aprila po julijanskom kalendaru).'
                },
                {
                    id: 2,
                    description: 'Vasilije Jovanović je rodom iz Hercegovine iz Popova Polja, a rođeno ime mu je bilo Stojan koji još kao dječak odlazi u manastir Tvrdoš gdje prima sveti monaški čin. Ovaj sveti božiji ugodnik imao je veliki broj neprijatelja pa je bio prinuđen da pođe u Svetu Goru. Nakon jednogodišnjeg boravka u Hilandaru hirotonisan je u čin episkopa. Sveti Vasilije upravlja crkvom sve Hercegovine, prvo iz manastira Tvrdoš, a konačno prelazi u novu Mitropoliju. U Popima kod Onogošta gradi crkvu i konake gdje određuje da će joj biti sjedište. Sveti Vasilije je bio veliki iskušenik za života pa uprkos novoj i udobnoj rezidenciji osjećao je potrebu za pustinjom i samoćom. Kako je od ranije poznavao planinu Ostrog tako je na njoj pronašao pogodno mjesto koje mu je postalo i mitropolitska rezidencija i isposnica. Upravljao je eparhijom iz Ostroga petnaest godina.'
                },
                {
                    id: 3,
                    description: 'S blagoslovom mitropolita Vasilija, podignuta je 1665. i živopisana 1667. pećinska crkva posvećena Svetom Krstu. Ispod nje urađena je crkva Vavedenja Presvete Bogorodice, čiji se postanak ne može tačno utvrditi.'
                },
                {
                    id: 4,
                    description: <div><strong>Gornji manastir</strong> je današnji izgled dobio 1923-1926. godine nakon požara u kojem je sve izgorjelo osim pećinskih crkvi i ćivota Svetog Vasilija. U Gornjem manastiru nalaze se dvije crkvice, jedna posvećena Časnom Krstu, a druga donja - Vavedenju Presvete Bogorodice. Obje su prirodne pećine. U donjoj crkvi počivaju mošti Svetog Vasilija.</div>
                },
                {
                    id: 5,
                    description: <div><strong>Donji manastir</strong> se postepeno razvijao služeći potrebama Gornjeg manastira. Kada je mitropolit Vasilije kupio ovo zemljište već je postojala seoska crkva. U blizini te crkve podigao je ambar i kuću za mlade monahe i iskušenike pa je iz svega toga kasnije nastao Donji manastir Ostrog. Sadašnja crkva u Donjem manastiru posvećena je Svetoj Trojici, a podignuta 1824. godine odobrenjem mitropolita Petra I, a trudom arhimandrita Josifa Pavićevića i prilozima pobožnih hrišćana.</div>
                }
            ],
            sources: [
                {
                    id: 1,
                    source: `Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori“ Jovan B. Markuš, strane 47-57, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke`
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 8,
            name: 'Hram Svetog Novomučenika Stanka u Ostrogu',
            mainImage: HramSvNovomucenikaStanka1,
            date: '22.04.2024.',
            images: [
                {
                    id: 1,
                    image: HramSvNovomucenikaStanka1
                },
                {
                    id: 2,
                    image: HramSvNovomucenikaStanka2
                },
                {
                    id: 3,
                    image: HramSvNovomucenikaStanka3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Na zaravni između Gornjeg i Donjeg manastira Ostrog 2004. godine sa blagoslovom mitropolita crnogorsko - primorskog Amfilohija i trudom episkopa dioklijskog Jovana podignut je hram posvećen Svetom Mučeniku Stanku, u koji su svečano prenijete njegove netruležne ruke iz ostroške crkvice Časnog Krsta. Osim njegovih mošti u ovu crkvu su prenijeti posmrtni ostaci 27 članova Glavnog štaba Kraljevske vojske u otadžbini za Crnu Goru, Boku, Hercegovinu i Stari Ras, postradalih 18. oktobra 1943.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strane 47-57, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 9,
            name: 'Cetinjski Manastir',
            mainImage: CetinjskiManastir1,
            date: ' 23.04.2024.',
            images: [
                {
                    id: 1,
                    image: CetinjskiManastir1
                },
                {
                    id: 2,
                    image: CetinjskiManastir2
                },
                {
                    id: 3,
                    image: CetinjskiManastir3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Manastir rođenja Presvete Bogorodice - Cetinjski manastir je za Crnu Goru kolijevka, duhovno ognjište i epicentar oko koga se spleo poznati tok istorijskih događaja. On je bio i ostao duhovni kičmeni stub, središte i ognjište Crne Gore u kojem nije prekidan kontinuitet djelovanja iako je kroz istoriju bio na velikim iskušenjima i raspećima. U ovoj svetinji su služili dva Svetitelja: Sveti Petar Cetinjski koji je čitav ovozemaljski život proveo u njemu i čije mošti i danas počivaju, a jedno vrijeme pridvorni monah u cetinjskoj svetinji je bio Sveti Vasilije Ostroški. Manastirske zgrade liče na pčelinje saće. Ćelija se nadovezuje na ćeliju bez nekog utvrđenog reda, a opet se na kraju diviš skladnosti građevine. Na Cetinjskom manastiru svaki naraštaj ostavlja svoj pečat: arkade i pirg dodade vladika Danilo, isposničku keliju Sveti Petar, konake Njegoš i patrijarh Gavrilo Dožić, hram na Ćipuru i dvorsko groblje kralj Nikola i mitropolit Mitrofan Ban, vladičin stan mitropolit Danilo Dajković, a paraklis za tri velike hrišćanske svetinje: desnicu Svetog Jovana Krstitelja koja je krstila Isusa Hrista, česticu Časnog Krsta na kojoj je Hrist razapet i čudotvornu ikonu Bogorodicu Filermsku, i skit Jovana Krstitelja mitropolit Amfilohije Radović.'
                },
                {
                    id: 2,
                    description: 'Cetinjski manastir je podigao vladika Danilo, rodonačelnik dinastije Petrovića, na samom početku XVIII vijeka poslije razaranja manastira Crnojevića 1692. godine. Vladika Danilo je učio u starom manastiru i bio savremenik njegovog rušenja. Novi manastir je podignut 1701. godine, devet godina poslije dramatičnih događaja u kojima je nestalo zdanje Crnojevića. Vladika Danilo nije imao mogućnosti da ponovi nekadašnji kupolni hram manastira Crnojevića ali je u novoj manastirskoj crkvi ipak napravio podsjećanje na jedan hram Crnojevića.'
                },
                {
                    id: 3,
                    description: 'U manastiru je pored vladike i monaha radila škola, štamparija i odvijao se politički diplomatski život Crne Gore. Završetkom Biljarde 1838. godine prenošenjem državnih funkcija iz manastira u Biljardu počinje i njegova stagnacija u graditeljskom smislu.'
                },
                {
                    id: 4,
                    description: 'Središte manastirskog kompleksa je hram posvećen rođenju Presvete Bogorodice. Vladika Danilo je iznad ulaznih vrata postavio ploču sa starog hrama Crnojevića na kojoj je posveta Ivana Crnojevića. Osnova hrama je relativno malih dimenzija dugačka 11,5 a široka 5,5m. U eksterijeru, pored ploče sa posvetom Ivana Crnojevića u hram su ugrađeni i drugi dekorativni elementi sa starog manastira. Na sredini apside je ukomponovan grb Crnojevića, dvoglavi orao spuštenih krila u vijencu od lovorovog lišća. Unutrašnjost hrama je jednostavna. Svod je podužni i niži u pjevničkim prostorima. Pod je od crvenkastih i bijelih kamenih ploča. U južnoj pjevnici je manastirska svetinja ćivot Svetog Petra Cetinjskog. Uz bočne zidove su grobovi knjaza Danila i velikog vojvode Mirka Petrovića.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Tekst je preuzet iz knjige “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strane 21-39, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 10,
            name: 'Hram Svetog Proroka Ilije',
            mainImage: HramSvProrokaIlije,
            date: '25.04.2024.',
            images: [
                {
                    id: 1,
                    image: HramSvProrokaIlije
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Hram Svetog Proroka Ilije na lokalitetu Nikšin kiljan na živopisnoj Lukavici počeo je da se gradi blagoslovom blaženopočivšeg mitropolita Amfilohija i tadašnjeg episkopa budimljansko - nikšićkog, a sada mitropolita crnogorsko - primorskog g. Joanikija sabornim učešćem plemena: Župe, Morače, Rovaca, Zagarača i Pipera. Crkva se nalazi na nekih 3km od Kapetanovog jezera, a izgrađena je 2007. godine.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Fotografija: Nikolina Radunović'
                }
            ]
        },
        {
            id: 11,
            name: 'Dvoranska crkva na Ćipuru',
            mainImage: DvoranskaCrkva1,
            date: '01.05.2024.',
            images: [
                {
                    id: 1,
                    image: DvoranskaCrkva1
                },
                {
                    id: 2,
                    image: DvoranskaCrkva2
                },
                {
                    id: 3,
                    image: DvoranskaCrkva3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Na mjestu zvanom Ćipur, na temeljima hrama manastira Crnojevića, 1890. godine knjaz Nikola podigao je hram. Zapravo gradnja hrama je završena 1886. godine ali zbog loše statike došlo je do oštećenja pa je čitava građevina iznova ozidana 4 godine kasnije. '
                },
                {
                    id: 2,
                    description: 'Hram je osveštao mitropolit Mitrofan Ban. U hramu se nalaze mermerne grobnice sa posmrtnim ostacima kralja Nikole I Petrovića Njegoša i kraljice Milene koji su iz San Rema prenijeti i sahranjeni na Cetinju 1. oktobra 1989. godine. Ispred ikonostasa u podu crkve nalazi se grobnica osnivača Cetinja - Ivana Crnojevića. U njoj se nalaze i posmrtni ostaci crnogorskih princeza Ksenije i Vjere.'
                },
                {
                    id: 3,
                    description: 'Crkva je 1961. godine proglašena kulturnim dobrom, a 2012. godine je ušla u sastav Istorijskog muzeja Crne Gore. Crkva je posvećena rođenju Bogorodice.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvori: - “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 31, izdanje Mitropolije\n' +
                        'Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: '- https://sr.wikipedia.org/sr-el/dvorska_crkva_na_cipuru'
                },
                {
                    id: 3,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 12,
            name: 'Hram Hristovog Vaskrsenja',
            mainImage: HramHristovogVaskrsenja1,
            date: '01.05.2024.',
            images: [
                {
                    id: 1,
                    image: HramHristovogVaskrsenja1
                },
                {
                    id: 2,
                    image: HramHristovogVaskrsenja2
                },

            ],
            descriptions: [
                {
                    id: 1,
                    description: 'S blagoslovom Visokopreosvećenog mitropolita Amfilohija, a po idejnom rješenju arhitekte dr Predraga Ristića, godine 1993. počela je gradnja Sabornog hrama Vaskrsenja Hristovog u Podgorici. 9. avgusta 1993. započeo je svečani čin osvećenja kamena temeljca budućeg hrama. Arhiepiskop Carigrada i Patrijarh Vaseljenski g. Vartolomej zajedno sa Arhiepiskopom Pećkim i Patrijarhom Svesrpskim g. Pavlom, položili su u pripremljenom mjestu ukopanom ispod Časnog Krsta prvo povelju, a potom kamen temeljac.'
                },
                {
                    id: 2,
                    description:  'O važnosti i karakteru ovoga hrama govore posjete visokih predstavnika koje su po prvi put posjetile Crnu Goru: prvi po časti u Pravoslavnoj crkvi njegova svetost Vartolomej, blaženopočivši Patrijarh Moskovski i Sveruski Aleksej II, sadašnji ruski Patrijarh Smolenski Kiril, blaženopočivši Arhiepiskop Atinski i sve Jelade Hristodul, blaženopočivši Papa i Patrijarh Aleksandrijski koji nosi titulu Sudija vaseljene Petar VII i još mnogi drugi. '
                },
                {
                    id: 3,
                    description: 'Završetkom građevinskih radova u kripti Svih Svetih dobija se jedan posebna prostor za crkveni život u Podgorici. Kripta posvećena svim svetima ima površinu oko 1000m2.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: https://hramvaskrsenja.me/'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        ];
    const south_data = [
        {
            id: 1,
            name: 'Manastir Savina',
            mainImage: ManastirSavina,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: ManastirSavina
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Manastir Savina nalazi se u Herceg Novom na samom ulazu u Boku Kotorsku. Manastir Savina je nekada u svom kompleksu imao tri hrama: Svetog Save Osvećenog, mali hram Uspenja Presvete Bogorodice i veliki hram Uspenja Presvete Bogorodice, a u jednom od zapisa pominje se da je manastir Savina osnovan 1030 .godine. Po narodnom predanju hram Svetog Save Osvećenog osnovao je Sveti Sava, pa po njemu čitav manastir i ovaj dio Herceg Novog nosi ime. Ovaj hram služi kao parohijski hram. Hram Svetog Save Osvećenog ima jednobrodnu osnovu sa polukružnom apsidom i jednodjelnim zvonikom na preslicu, a uz zapadnu fasadu dozidan je trijem skoro iste veličine kao i hram.'
                },
                {
                    id: 2,
                    description: 'Mali hram Uspenja Presvete Bogorodice je sagrađen na ostacima hrama iz XI vijeka, a nad ulazom sa unutrašnje strane stoji natpis da je podignut 1030. godine. Uspenje Presvete Bogorodice ima jednobrodnu osnovu sa polukružnom apsidom i jednodjelnim zvonikom na preslicu, dugačak je 10, a širok 6 metara. Hram je sačuvao gotički karakter sa šiljasto prelomljenim svodom koji je ojačan poprečnim lukom.'
                },
                {
                    id: 3,
                    description: 'Riznica manastira Savina je izuzetno bogata pa su njene starine ušle u svjetsku nauku kada je na njih obratio pažnju Thomas Graham Jackson. Posebnu pažnju mu je privukao kristalni krst Svetog Save i plaštenica Arsenija Čarnojevića iz 1659.godine. Ovu plaštenicu pominju i drugi veliki engleski istraživači i arheolozi. Riznica manastira Savina čuva najstariju Hrisovulju cara Uroša iz XIV vijeka, zatim povelje vlaških vojvoda iz XVII vijeka, rukopis Šestodnevnik Nikona Jerusalimca nastao 1440. godine, Krmčija - zakonik savinski iz XVI vijeka, ikonu Svetog Nikole iz Hilandara nastalu 1735. godine, italokritsku Bogorodicu sa Hristom iz XVI vijeka itd.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: '- Manastiri na tlu Crne Gore, strane 31 - 40, Tatjana Pejović – Novi Sad: Presmedij; Cetinje: Republički zavod za zaštitu spomenika kulture, 1995 (Beograd: Zavod za izradu novčanica)'
                },
                {
                    id: 2,
                    source: 'Fotografije: Ranko Maraš'
                }
            ]
        },
        {
            id: 2,
            name: 'Crkva Svetog Marka u Perastu',
            mainImage: CrkvaSvMarkaPerast,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaSvMarkaPerast
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Crkva Svetog Marka u Perastu se nalazi u zapadnom dijelu grada, u Penčićima. Ovo je rimokatolička crkva sagrađena 1760. godine. Bratovština koja je sagradila ovu crkvu je bratovština Sv. Ivana. Novoj crkvi je pripojena kapela porodice Štukanović, a od nje je i sakristija, zvonik i unutrašnji grobovi. Odlikuje se lijepim skulpturama uskrsnulog Hrista, Sv.Petra sa ključevima i Sv.Marka sa Jevanđeljem u ruci. Zgrada crkve i danas služi u vjerske svrhe.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvori: - https://upoznajcrnugoru.com/crkva-sveti-marko-perast/'
                },
                {
                    id: 2,
                    source: '-  https://hr.m.wikipedia.org/wiki/Crkva_sv._Marka_u_Perastu'
                },
                {
                    id: 3,
                    source: 'Fotografije: Ranko Maraš'
                }
            ]
        },
        {
            id: 3,
            name: 'Hram Svetog Luke u Kotoru',
            mainImage: HramSvLukeKotor,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: HramSvLukeKotor
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Za vrijeme vladavine Nemanjića 1195. godine podignut je hram Svetog apostola Luke u Kotoru. Podigli su ga Mavro Cazafrangi i supruga mu Bona. Na hramu stoji natpis: ”U ime Hristovo, godine od ovaploćenja Gospoda našega Isusa Hrista 1195. godine, 13. indikta, ja Mavro, sin Andrije Cazafrangi, zajedno sa Bonom mojom suprugom, ćerkom prijora Vasilija, podižemo ovu crkvu u čast Božiju i Sv.Luke apostola u jevanđeliste, za spasenje naših duša i svih vjernih hrišćana. U vrijeme gospodara Nemanje velikog župana i sina njegovog Vukana kralja Duklje, Dalmacije, Travunije, Toplice i Kosne. Svi koji ovo čitate udostojite nas svojom molitvom, da nam Hristos bude vječni život. Amin!”'
                },
                {
                    id: 2,
                    description: 'Kapelica Svetog Spiridona je dograđena 1747. godine i podignut je zvonik na preslicu. Čitava unutrašnjost hrama je bila freskopisana. Pronađen je i do danas sačuvan jedan veći fragment koji se nalazi na samom ulazu u hram – prikaz Svetog Silvestera Rimsko, episkopa koji je krstio Konstantina Velikog.'
                },
                {
                    id: 3,
                    description: 'Hram je pretrpio znatna oštećenja tokom zemljotresa 1979. godine, ali je povodom proslave 800 godina od njegovog nastanka 1995. godine potpuno obnovljen.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 607, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografija: Ranko Maraš'
                }
            ]
        },
        {
            id: 4,
            name: 'Katedrala Svetog Tripuna u Kotoru',
            mainImage: KatedralaSvTripuna1,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: KatedralaSvTripuna1
                },
                {
                    id: 2,
                    image: KatedralaSvTripuna2
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Jedan od simbola grada Kotora je katedrala Svetog Tripuna koja se nalazi na istoimenom trgu. Odmah pored nalazi se i Biskupija kotorska. Poznati Kotorski građanin Andrea Saracenis je finansirao izgradnju ove katedrale 809. godine i otkupio mošti Sv.Tripuna od moreplovaca iz Venecije. On i njegova žena sahranjeni su u crkvi koju su i podigli.'
                },
                {
                    id: 2,
                    description: 'Katedrala je izgrađena u romaničkom stilu, sa elementima vizantijske arhitekture. Njen izgled se kroz vjekove mijenjao, najčešće zbog čestih zemljotresa, od kojih su najjači bili iz: 1537., 1563.,1667.,1979. Katedrala je poslije svakog zemljotresa vrlo brzo rekonstruisana. Tokom obnova uvođeni su elementi arhitekture i dizajna enterijera u duhu vremena u kojima su te obnove izvođene. Na zapadnoj fasadi nalaze se dva zvonika. Sjeverni je visok 33m, a južni 35m. Katedrala je izgrađena kao trobodna bazilika, sa tri i po traveja (prostor u crkvi omeđen stubovima iznad kojih se nalazi svod) i kupolom iznad srednjeg traveja glvnog broda crkve. Ukupna dužina katedrale je 35,1m, a širina 17,47m.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: - https://hr.wikipedia.org/wiki/Kotorska_katedrala'
                },
                {
                    id: 2,
                    source: 'Fotografije: Ranko Maraš'
                }
            ]
        },
        {
            id: 5,
            name: 'Crkva Svetog Nikole',
            mainImage: CrkvaSvNikole,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaSvNikole
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'U starom dijelu grada Kotora između trga Svetog Luke i gradskih bedema, na mjesto ranijeg hrama koji je krajem 1896. godine stradao u požaru podignut je hram Svetog Nikole. Izgrađen je u neovizantijskom stilu početkom XX vijeka, s osnovom u obliku krsta i monumentalnom kupolom na sjecištu krakova. U zemljotresu 1979. godine hram je ponovo pretrpio velika oštećenja pa je tokom 2009. i 2010. godine detaljno obnovljen. Takođe je obnovljena i knjižara crkvene opštine Kotor koja se nalazi pored hrama. 6.juna 2002. godine je po prvi put u istoriji vaseljenski patrijarh Vartolomej posjetio hram Svetog Nikole i Kotor.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 595, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografija: Ranko Maraš'
                }
            ]
        },
        {
            id: 6,
            name: 'Džamija Selimija',
            mainImage: DzamijaSelimija2,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: DzamijaSelimija2
                },
                {
                    id: 2,
                    image: DzamijaSelimija1
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: '28. jula 2002. godine postavljen je temelj za gradnju reprezentativne centralne džamije sa pratećim sadržajima, a na parceli koja je vakuf - vlasništvo islamske zajednice. Projektnu dokumentaciju uradili su poznate arhitekte iz Ulcinja, dipl. ing. arh. Selim Resulbegović i dipl. ing. arh. Fuad Mavrić. Džamija se gradila od donacija pojedinaca, preduzetnika, firmi, a najznačajniji dio sredstava prikupljenih od iseljenika ovih krajeva, a nastanjenih u SAD-u i zemljama zapadne Evrope. Izgradnju dva munareta finansirali su Muharem Ćantić iz Bara i Husein Bećović iz Ulcinja koji žive i rade u Čikagu. Završne radove na džamiji i kulturnom centru finansirala je TIKA.'
                },
                {
                    id: 2,
                    description: 'Islamski centar sa džamijom otvoren je svečano 30. maja 2014. godine uz učenje Kurana hafiza Aziza Alilija, glavnog imama Zagreba, džumu namaz predvodio je reis Rifat Fejzić, a mujezinio je hafiz Aziz Alili.'
                },
                {
                    id: 3,
                    description: 'Kompleks Islamskog centra ima sljedeće sadržaje: džamija 900m2, biblioteka, abdesthana muška i ženska, prostor za garderobu, kongresna sala, sanitarni čvor i kupatila, učionice i informatički kabinet, kancelarije za vjerske službenike i administracija odbora, dječiji vrtić sa modernom opremom i igralište, musafirhana, gasulhana, apartman za goste, sala za šerijatsko vjenčanje, restoran, butik sa islamskim rekvizitima i poslovni prostor sa šest višenamjenskih lokacija. Ukupna površina centralne džamije sa pratećim sadržajima, a bez parking prostora je 4000m2.'
                },
                {
                    id: 4,
                    description: 'Džamiji je dato ime Selimija. U gradskim bedemima starog Bara u periodu od 1571. do 1574. godine sagrađena je džamija Sultan Selim po sultanu Selimu II koji je prvi uspostavio upravu nad ovim gradom. Ta prvobitna džamija srušena je 1881. godine od velike eksplozije baruta kada je grad doživio velika razaranja, a na njenom mjestu podignuta je nova impozantna 2014. godine.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvori: - „Džamije u Crnoj Gori“, Bajro Agović, drugo dopunjeno izdanje, strana 381, izdavač: Almanah – Podgorica'
                },
                {
                    id: 2,
                    source: 'Fotografije: Ranko Maraš'
                }
            ]
        },
        {
            id: 7,
            name: 'Konkatedrala Svetog Petra',
            mainImage: KonkatedralaSvPetra1,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: KonkatedralaSvPetra1
                },
                {
                    id: 2,
                    image: KonkatedralaSvPetra2
                },
                {
                    id: 3,
                    image: KonkatedralaSvPetra3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Kamen temeljac konkatedrale u Baru blagoslovio je kardinal vašingtonski Theodore Edgar McCarrick 16. jula 2006. Godine, ali je gradnja počela tek 30. juna 2010. godine. Konkatedrala je posvećena Svetom apostolu Petru i njeno posvećenje je obavljeno 3. septembra 2017. godine na misi koju je služio nadbiskup barski i primas Srbije u mirovini Zef Gashi, za čijeg pontifikata je počela gradnja konkatedrale. Svečanosti je prisistvovao i mitropolit crnogorsko-primorski Amfilohije koji je nadbiskupu barskom Rroku Gjonlleshaju poklonio ikonu Isusa i Bogorodice.'
                },
                {
                    id: 2,
                    description: 'Gradnja konkatedrale je koštala 3.500.000,00 eura. Projektanti su arhitekte iz grada Foggia u Italiji Nicola Danza i Rodolfo Mancano. Za razliku od pravoslavne crkve, rimokatolička je vremenom napustila obaveznost običaja da se prilikom gradnje oltar okrene ka istoku tj. ka mjestu odakle dolazi svjetlost sunca pa je tako i oltar konkatedrale Svetog Petra u Baru okrenut ka zapadu. Na gradnji ove konkatedrale kao i na uređivanju njenog enterijera i eksterijera radilo je još dosta poznatih imena, kako pojedinaca tako i firmi iz Italije, Njemačke, Hrvatske, Crne Gore, Albanije. Kosova itd.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: - https://hr.wikipedia.org/wiki/Konkatedrala_sv._Petra_u_Baru'
                },
                {
                    id: 2,
                    source: 'Fotografija: Ranko Maraš'
                }
            ]
        },
        {
            id: 8,
            name: 'Hram Svetog Jovana Vladimira',
            mainImage: HramSvJovanaVladimira1,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: HramSvJovanaVladimira1
                },
                {
                    id: 2,
                    image: HramSvJovanaVladimira2
                },
                {
                    id: 3,
                    image: HramSvJovanaVladimira3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Još davne 1979. godine nakon razornog zemljotresa tadašnji Barski paroh otac Bogić Femić podnio je u opštini prvi zahtjev za dodjelu lokacije za izgradnju pravoslavnog hrama u urbanom dijelu Bara. U to vrijeme takav zahtjev nije mogao proći, pa su konkretne aktivnosti oko dobijanja lokacije za izgradnju hrama Svetog Jovana Vladimira na Topolici otpočele 1991. godine.'
                },
                {
                    id: 2,
                    description: 'Kako lokalna vlast dugo vremena nije reagovala tadašnji paroh Femić samoinicijativno je otpočeo sa protestom na centralnom gradskom trgu tražeći prostor za hram. S obzirom da je dobio punu podršku građana Bara lokalna vlast je popustila pod pritiskom i prihvatila da se radi izmjena DUP-a Topolica, koja je usvojena 1994. godine. Tada je određeno da lokacija hrama bude u centru Bara između pošte i bulevara, kako je i traženo. Kamen temeljac za izgradnju hrama postavljen je 4. juna 2002. godine, a 4. jula 2009. godine u Baru su osvećeni temelji Sabornog hrama Svetog Jovana Vladimira. Kako je svetitelj Jovan Vladimir vladao ovim prostorima, tako je dat blagoslov da ovaj hram bude posvećen njemu. U hram je ugrađen i njegov krst koji je vjekovima čuvan u časnoj porodici Androvića. Osnova hrama je 1370m2 u bruto površini, a najviša tačka sa krstom iznosi 41,6m. Dužina hrama je 53m, a širina kripte bez paraklisa 24m.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strane 851-856, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 9,
            name: 'Hram Uspenja Presvete Bogorodice Radovići',
            mainImage: HramUspenjaPresvBogorodice1,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: HramUspenjaPresvBogorodice1
                },
                {
                    id: 2,
                    image: HramUspenjaPresvBogorodice2
                },
                {
                    id: 3,
                    image: HramUspenjaPresvBogorodice3
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'U nekadašnjoj opštini Krtoli selu Radovići, na zaravnjenom vrhu kamenitog uzvišenja nalazi se hram Uspenja Presvete Bogorodice. Odomaćeni naziv je i hram Svete Gospođe. Na uklesanom natpisu iznad portala zapisano je da je hram izgrađen ali se u literaturi spominje i znatno ranije tj. 1594. godine pa se vjerovatno radi o starijem hramu koji je postojao na mjestu sadašnjeg. Današnji hram je jedna Velika jednobrodna građevina sa polukružnom apsidom, kupolom i visokim zvonikom u pročelju. Zvonik je građen na uobičajen način, oslonjen u prizemlju na dva masivna stubca i dva polustubca između kojih su razapeti lukovi koji ispred ulaza u crkvu grade neku vrstu otvorenog trijema. Na sredini zvonika postavljen je veliki sat. Hram je zidan od fino tesanog kamena složenog u pravilne horizontalne redove.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, strana 658, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografije: Dejan Feratović'
                }
            ]
        },
        {
            id: 10,
            name: 'Crkva Svetog Save u Đenašima',
            mainImage: CrkvaSvSaveDjenasi,
            date: '20.05.2024.',
            images: [
                {
                    id: 1,
                    image: CrkvaSvSaveDjenasi
                }
            ],
            descriptions: [
                {
                    id: 1,
                    description: 'Đenaši su selo preko puta Svetog Stefana. Hram Svetog Save u ovom selu je sagrađen u XVII vijeku. Zabilježeno je da ga je italijanska vojska u ratnim operacijama 1941. godine znatno oštetila, ali je 1979. u zemljotresu pretrpio veća oštećenja. Inicijativom Ilije Kentere saniran je 1988. godine, a prije nekoliko godina izvršeni su temeljni radovi na obnovi hrama.'
                }
            ],
            sources: [
                {
                    id: 1,
                    source: 'Izvor: “Obnova i gradnja manastira i hramova u Crnoj Gori “ Jovan B. Markuš, izdanje Mitropolije Crnogorsko-primorske i Eparhije Budimljansko-nikšićke'
                },
                {
                    id: 2,
                    source: 'Fotografija: Ranko Maraš'
                }
            ]
        },
    ];

  return (
    <>
        <div style={{position:'relative'}}>
            <p className="logo_text">Podržano od </p>
            <img src={FZM} alt="FZM" style={{width: '100%'}} />
        </div>

        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/sjeverna-regija" element={<NorthPage data={north_data}/>} />
            <Route path="/sjeverna-regija/:object" element={<NorthObjects data={north_data}/>} />
            <Route path="/srednja-regija" element={<CentralPage data={central_data}/>} />
            <Route path="/srednja-regija/:object" element={<CentralObjects data={central_data} />}/>
            <Route path="/juzna-regija" element={<SouthPage data={south_data}/>} />
            <Route path="/juzna-regija/:object" element={<SouthObjects data={south_data} />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
