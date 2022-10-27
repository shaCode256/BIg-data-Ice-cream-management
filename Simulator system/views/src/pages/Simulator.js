
import React from 'react'
import './/style.css';
import Axios from "axios"

export default function simulator() {
  return (
    <>
      <h1> Simulator </h1>
      {/* <h2> Simulate sales by dates (up to week duration) </h2> */}
      <h2> Choose an option to simulate sales data</h2>
      <button type="button" className="button" onClick={(e) => handleSimulateSales()}
        id="simulate_sales"> Simulate randomly </button>

      <h2> Choose date to simulate sales</h2>
      <label htmlFor="date"> Date: </label>
      <input type="date" id="date" name="fname" />
      <br />
      <br />
      <button type="button" className="button" onClick={(e) => handleSimulateByDate(document.getElementById("date").value)}
        id="simulate_sales"> Simulate by date</button>
      <h2> Add a sale </h2>
      <label htmlFor="date"> Date: </label>
      <input type="date" id="date_add_sale" >
      </input>
      <br />
      <br />
      <label htmlFor="flavors"> Flavor: </label>
      <select name="flavor" id="flavor">
        <option value="Chocolate">Chocolate</option>
        <option value="Strawberry">Strawberry</option>
        <option value="Vanilla">Vanilla</option>
        <option value="Halvah">Halvah</option>
        <option value="Lemon">Lemon</option>
      </select>
      <br />
      <br />
      <label htmlFor="weights"> Weight: </label>
      <select name="weight" id="weight">
        <option value="0.25">0.25</option>
        <option value="0.5">0.5</option>
        <option value="1.0">1.0</option>
        <option value="1.5">1.5</option>
        <option value="2.0">2.0</option>
      </select>
      <br />
      <br />
      <label htmlFor="branches"> Branch: </label>
      <select id="branch_name">
      <option>SHAHAR</option>
<option>NIR HEN</option>
<option>HAZEVA</option>
<option>NO'AM</option>
<option>BET NIR</option>
<option>SEDE MOSHE</option>
<option>BE'ER ORA</option>
<option>MIQWE YISRA'EL</option>
<option>AMAZYA</option>
<option>LAKHISH</option>
<option>ROSH PINNA</option>
<option>SEDOT MIKHA</option>
<option>MAZKERET BATYA</option>
<option>YESUD HAMA'ALA</option>
<option>OFAQIM</option>
<option>OZEM</option>
<option>BAT SHELOMO</option>
<option>GADOT</option>
<option>SEDE DAWID</option>
<option>ETAN</option>
<option>GEFEN</option>
<option>ELYAKHIN</option>
<option>METULA</option>
<option>ZOHAR</option>
<option>YAVNE'EL</option>
<option>KEFAR TAVOR</option>
<option>MENAHEMYA</option>
<option>ILANIYYA</option>
<option>LUZIT</option>
<option>ATLIT</option>
<option>NOGAH</option>
<option>KINNERET(QEVUZA)</option>
<option>MIZPA</option>
<option>NEHUSHA</option>
<option>DEGANYA ALEF</option>
<option>KINNERET(MOSHAVA)</option>
<option>YAD RAMBAM</option>
<option>MIGDAL</option>
<option>MERHAVYA(QIBBUZ)</option>
<option>OR HANER</option>
<option>NIR OZ</option>
<option>ASHDOD</option>
<option>ESHBOL</option>
<option>GAN SHEMU'EL</option>
<option>EN HOD</option>
<option>KEFAR GIL'ADI</option>
<option>AYYELET HASHAHAR</option>
<option>QIRYAT ANAVIM</option>
<option>DEGANYA BET</option>
<option>NAHALAL</option>
<option>EN HAROD(ME'UHAD)</option>
<option>KEFAR YEHEZQEL</option>
<option>GEVA</option>
<option>KEREM BEN SHEMEN</option>
<option>EN HAROD (IHUD)</option>
<option>HEFZI-BAH</option>
<option>GINNEGAR</option>
<option>BALFURYA</option>
<option>BET ALFA</option>
<option>YAGUR</option>
<option>MERHAVYA(MOSHAV)</option>
<option>KEFAR MALAL</option>
<option>MIZPE RAMON</option>
<option>ME'IR SHEFEYA</option>
<option>MIZRA</option>
<option>KEFAR GID'ON</option>
<option>KEFAR SILVER</option>
<option>KEFAR HASIDIM ALEF</option>
<option>ADDIRIM</option>
<option>HOFIT</option>
<option>RAMAT YISHAY</option>
<option>RAMAT RAHEL</option>
<option>GAT RIMMON</option>
<option>MISHMAR HAEMEQ</option>
<option>KEFAR BARUKH</option>
<option>GEVAT</option>
<option>YIF'AT</option>
<option>RAMAT DAWID</option>
<option>EN SHEMER</option>
<option>KEFAR YEHOSHUA</option>
<option>BARAQ</option>
<option>SEDE YA'AQOV</option>
<option>BET ZERA</option>
<option>GAN SHELOMO</option>
<option>GADISH</option>
<option>DEVORA</option>
<option>GIV'AT BRENNER</option>
<option>BE'ER TOVIYYA</option>
<option>AYANOT</option>
<option>EN WERED</option>
<option>NA'AN</option>
<option>BET HANAN</option>
<option>HULDA</option>
<option>HERUT</option>
<option>MELE'A</option>
<option>NIR YAFE</option>
<option>GAN YAVNE</option>
<option>EN HAHORESH</option>
<option>KEFAR YONA</option>
<option>KEFAR YA'BEZ</option>
<option>PARDESIYYA</option>
<option>GIV'AT HAYYIM(ME'UHAD)</option>
<option>NETA'IM</option>
<option>AVIHAYIL</option>
<option>AFIQIM</option>
<option>KEFAR BILU</option>
<option>RAMAT YOHANAN</option>
<option>EVEN YEHUDA</option>
<option>YARQONA</option>
<option>RAMAT HAKOVESH</option>
<option>NE'URIM</option>
<option>KEFAR HESS</option>
<option>ASHDOT YA'AQOV(ME'UHAD)</option>
<option>KEFAR PINES</option>
<option>KEFAR VITKIN</option>
<option>HADAR AM</option>
<option>KEFAR HAHORESH</option>
<option>KEFAR HAYYIM</option>
<option>MISHMAR HASHARON</option>
<option>QADIMA-ZORAN</option>
<option>GIBBETON</option>
<option>MA'BAROT</option>
<option>ZOFIT</option>
<option>ASHDOT YA'AQOV(IHUD)</option>
<option>BET YANNAY</option>
<option>BET OVED</option>
<option>ELYASHIV</option>
<option>HOGLA</option>
<option>RAMOT HASHAVIM</option>
<option>GIV'AT HEN</option>
<option>MOZA ILLIT</option>
<option>BET ZEVI</option>
<option>MISHMAROT</option>
<option>KEFAR HARO'E</option>
<option>GANNE AM</option>
<option>HIBBAT ZIYYON</option>
<option>KEFAR BIALIK</option>
<option>EN IRON</option>
<option>SHOSHANNAT HAAMAQIM</option>
<option>GAN HASHOMERON</option>
<option>GANNE TIQWA</option>
<option>MA'AS</option>
<option>KEFAR YEDIDYA</option>
<option>BIZZARON</option>
<option>HAVAZZELET HASHARON</option>
<option>GAN HAYYIM</option>
<option>YOQNE'AM ILLIT</option>
<option>YOQNE'AM(MOSHAVA)</option>
<option>BET HASHITTA</option>
<option>NETIVOT</option>
<option>RISHPON</option>
<option>BET SHE'ARIM</option>
<option>KEFAR SIRKIN</option>
<option>HAZOREA</option>
<option>BITAN AHARON</option>
<option>HULATA</option>
<option>KEFAR HAMAKKABBI</option>
<option>KEFAR HITTIM</option>
<option>NIR DAWID (TEL AMAL)</option>
<option>NOFEKH</option>
<option>SEDE NAHUM</option>
<option>GINNOSAR</option>
<option>MASSADA</option>
<option>BET YOSEF</option>
<option>KEFAR SHEMARYAHU</option>
<option>TIRAT ZEVI</option>
<option>MOLEDET</option>
<option>EN HASHOFET</option>
<option>MA'OZ HAYYIM</option>
<option>EN GEV</option>
<option>KEFAR MENAHEM</option>
<option>ZUR MOSHE</option>
<option>USHA</option>
<option>HANITA</option>
<option>PEQI'IN HADASHA</option>
<option>SHAVE ZIYYON</option>
<option>SEDE WARBURG</option>
<option>ALLONIM</option>
<option>MA'ALE HAHAMISHA</option>
<option>BET YEHOSHUA</option>
<option>EN HAMIFRAZ</option>
<option>MA'YAN ZEVI</option>
<option>SEDE YO'AV</option>
<option>ELON</option>
<option>KEFAR RUPPIN</option>
<option>NEWE ETAN</option>
<option>KEFAR MASARYK</option>
<option>MESILLOT</option>
<option>DALIYYA</option>
<option>BET UZZI'EL</option>
<option>DAFNA</option>
<option>DAN</option>
<option>SEDE ELIYYAHU</option>
<option>GESHER</option>
<option>SHADMOT DEVORA</option>
<option>HAZORE'IM</option>
<option>MAHANAYIM</option>
<option>NEHORA</option>
<option>KEFAR GLIKSON</option>
<option>GAN SOREQ</option>
<option>NEWE YAM</option>
<option>AFEQ</option>
<option>NEGBA</option>
<option>KEFAR NETTER</option>
<option>BET OREN</option>
<option>AMMI'OZ</option>
<option>AMIR</option>
<option>KEFAR WARBURG</option>
<option>BET HILLEL</option>
<option>SHE'AR YASHUV</option>
<option>MAZZUVA</option>
<option>BET YIZHAQ-SH. HEFER</option>
<option>SEDOT YAM</option>
<option>EZUZ</option>
<option>SEDE NEHEMYA</option>
<option>ALUMMOT</option>
<option>NIR ZEVI</option>
<option>QEVUZAT YAVNE</option>
<option>RAMAT HASHOFET</option>
<option>DOROT</option>
<option>IBBIM</option>
<option>RAMAT ZEVI</option>
<option>GAT(QIBBUZ)</option>
<option>GEVAR'AM</option>
<option>HAMADYA</option>
<option>MA'ANIT</option>
<option>KEFAR SZOLD</option>
<option>GELIL YAM</option>
<option>MENARA</option>
<option>NIR AM</option>
<option>NIZZAN</option>
<option>GEVULOT</option>
<option>BET ZEID</option>
<option>REVIVIM</option>
<option>HORESHIM</option>
<option>HAGOSHERIM</option>
<option>KEFAR BLUM</option>
<option>YAD MORDEKHAY</option>
<option>NIZZANIM</option>
<option>GIV'AT NILI</option>
<option>RUHAMA</option>
<option>HAFEZ HAYYIM</option>
<option>KEFAR URIYYA</option>
<option>BET QESHET</option>
<option>SHAMIR</option>
<option>EN HAEMEQ</option>
<option>BIRIYYA</option>
<option>GAL'ED (EVEN YIZHAQ)</option>
<option>GEZER</option>
<option>KADOORIE</option>
<option>RAMOT NAFTALI</option>
<option>BET HALEWI</option>
<option>HUQOQ</option>
<option>MAGGAL</option>
<option>EVRON</option>
<option>HAMA'PIL</option>
<option>MISGAV AM</option>
<option>GE'ULIM</option>
<option>LAHAVOT HABASHAN</option>
<option>MIKHMORET</option>
<option>EN HANAZIV</option>
<option>AMMI'AD</option>
<option>BENE DEROR</option>
<option>KEFAR MONASH</option>
<option>KEFAR KISCH</option>
<option>BAZRA</option>
<option>REGBA</option>
<option>GAL'ON</option>
<option>SHOVAL</option>
<option>MISHMAR HANEGEV</option>
<option>NEVATIM</option>
<option>HAZERIM</option>
<option>BE'ERI</option>
<option>EVEN SHEMU'EL</option>
<option>NIR YIZHAQ</option>
<option>URIM</option>
<option>NEWE ILAN</option>
<option>HAZOR-ASHDOD</option>
<option>DAVERAT</option>
<option>NE'OT MORDEKHAY</option>
<option>YEHI'AM</option>
<option>QIRYAT SHELOMO</option>
<option>ZE'ELIM</option>
<option>QELAHIM</option>
<option>SHOQEDA</option>
<option>MA'YAN BARUKH</option>
<option>YAQUM</option>
<option>BENE ZIYYON</option>
<option>SA'AD</option>
<option>MASH'ABBE SADE</option>
<option>HEREV LE'ET</option>
<option>HAOGEN</option>
<option>GEVIM</option>
<option>MISHMERET</option>
<option>EN KARMEL</option>
<option>KEFAR GALLIM</option>
<option>BEROR HAYIL</option>
<option>ALLONE ABBA</option>
<option>BET LEHEM HAGELILIT</option>
<option>DALTON</option>
<option>SHAMERAT</option>
<option>NAHSHOLIM</option>
<option>HAHOTERIM</option>
<option>NEZER SERENI</option>
<option>EN DOR</option>
<option>RESHAFIM</option>
<option>SHELUHOT</option>
<option>YESODOT</option>
<option>GID'ONA</option>
<option>KEFAR HANASI</option>
<option>REGAVIM</option>
<option>RAMOT MENASHE</option>
<option>UDIM</option>
<option>NORDIYYA</option>
<option>BENE ATAROT</option>
<option>NEHALIM</option>
<option>BE'EROT YIZHAQ</option>
<option>YIZRE'EL</option>
<option>YIFTAH</option>
<option>SA'AR</option>
<option>SHORESH</option>
<option>GAZIT</option>
<option>RAMAT RAZI'EL</option>
<option>TAL SHAHAR</option>
<option>GA'TON</option>
<option>HAR'EL</option>
<option>ZOVA</option>
<option>BET DAGAN</option>
<option>QIRYAT EQRON</option>
<option>ABU GHOSH</option>
<option>ABU SINAN</option>
<option>DAHI</option>
<option>IKSAL</option>
<option>BEIT JANN</option>
<option>MUGHAR</option>
<option>BU'EINE-NUJEIDAT</option>
<option>BI'NE</option>
<option>JULIS</option>
<option>JISH(GUSH HALAV)</option>
<option>DABURIYYA</option>
<option>DEIR AL-ASAD</option>
<option>DEIR HANNA</option>
<option>DEIR RAFAT</option>
<option>DALIYAT AL-KARMEL</option>
<option>HURFEISH</option>
<option>TAYIBE(BAEMEQ)</option>
<option>TUR'AN</option>
<option>YAFI</option>
<option>YIRKA</option>
<option>KABUL</option>
<option>KAOKAB ABU AL-HIJA</option>
<option>KAFAR YASIF</option>
<option>KAFAR KAMA</option>
<option>KAFAR KANNA</option>
<option>KAFAR MANDA</option>
<option>ILUT</option>
<option>KAFAR MISR</option>
<option>EIN RAFA</option>
<option>MAJD AL-KURUM</option>
<option>MAZRA'A</option>
<option>MI'ELYA</option>
<option>MESHHED</option>
<option>EIN NAQQUBA</option>
<option>NAHEF</option>
<option>NEIN</option>
<option>NA'URA</option>
<option>SAJUR</option>
<option>SULAM</option>
<option>SHEZOR</option>
<option>UZEIR</option>
<option>I'BILLIN</option>
<option>EILABUN</option>
<option>ARRABE</option>
<option>EIN MAHEL</option>
<option>ISIFYA</option>
<option>FASSUTA</option>
<option>PEQI'IN (BUQEI'A)</option>
<option>FUREIDIS</option>
<option>RUMMANE</option>
<option>REIHANIYYE</option>
<option>JISR AZ-ZARQA</option>
<option>REINE</option>
<option>RAME</option>
<option>EIN AL-ASAD</option>
<option>TAMRA (YIZRE'EL)</option>
<option>GANNOT HADAR</option>
<option>NIR BANIM</option>
<option>SHEDEMA</option>
<option>BUSTAN HAGALIL</option>
<option>BET EL'AZARI</option>
<option>MISHMAR DAWID</option>
<option>REVADIM</option>
<option>AZOR</option>
<option>GIV'AT SHEMESH</option>
<option>ZOR'A</option>
<option>ME'ONA</option>
<option>BET GAMLI'EL</option>
<option>BET HAEMEQ</option>
<option>MAVQI'IM</option>
<option>GESHER HAZIW</option>
<option>YAS'UR</option>
<option>KABRI</option>
<option>YAD BINYAMIN</option>
<option>SASA</option>
<option>KEFAR ROSH HANIQRA</option>
<option>KEREM MAHARAL</option>
<option>KEFAR HANAGID</option>
<option>ZIQIM</option>
<option>LAVI</option>
<option>MEGIDDO</option>
<option>SAVYON</option>
<option>BENE RE'EM</option>
<option>BEZET</option>
<option>NEWE UR</option>
<option>ASERET</option>
<option>BENE DAROM</option>
<option>ARUGOT</option>
<option>ZAFRIYYA</option>
<option>LOHAME HAGETA'OT</option>
<option>MALKIYYA</option>
<option>PALMAHIM</option>
<option>BET QAMA</option>
<option>PAROD</option>
<option>NIRIM</option>
<option>ELQOSH</option>
<option>BET ARIF</option>
<option>KEFAR SHAMMAY</option>
<option>MAZOR</option>
<option>MERON</option>
<option>KEFAR HOSHEN</option>
<option>SITRIYYA</option>
<option>ZERUFA</option>
<option>ZIPPORI</option>
<option>SHOMERA</option>
<option>QIDRON</option>
<option>RINNATYA</option>
<option>BARQAY</option>
<option>HADID</option>
<option>BET GUVRIN</option>
<option>MASSU'OT YIZHAQ</option>
<option>EN ZURIM</option>
<option>YIR'ON</option>
<option>JALJULYE</option>
<option>JATT</option>
<option>KAFAR BARA</option>
<option>KAFAR QASEM</option>
<option>MUQEIBLE</option>
<option>SANDALA</option>
<option>AR'ARA</option>
<option>QALANSAWE</option>
<option>MEZER</option>
<option>MEISER</option>
<option>IBTIN</option>
<option>KAFAR QARA</option>
<option>SHEIKH DANNUN</option>
<option>HOSEN</option>
<option>TIRAT YEHUDA</option>
<option>KEREM BEN ZIMRA</option>
<option>OMER</option>
<option>BAR'AM</option>
<option>MEFALLESIM</option>
<option>MISHMAR AYYALON</option>
<option>BET NEQOFA</option>
<option>KEFAR TRUMAN</option>
<option>LIMAN</option>
<option>HABONIM</option>
<option>EN HASHELOSHA</option>
<option>HASOLELIM</option>
<option>MA'AGAN</option>
<option>AVI'EL</option>
<option>OMEZ</option>
<option>GIV'AT SHEMU'EL</option>
<option>ELYAQIM</option>
<option>GEVA KARMEL</option>
<option>HAYOGEV</option>
<option>BENAYA</option>
<option>NEWE YAMIN</option>
<option>EN AYYALA</option>
<option>ALMA</option>
<option>MEGADIM</option>
<option>KEFAR AHIM</option>
<option>NETIV HALAMED-HE</option>
<option>MA'AGAN MIKHA'EL</option>
<option>MAGEN</option>
<option>KEFAR HABAD</option>
<option>BE'EROTAYIM</option>
<option>BURGETA</option>
<option>NIR YISRA'EL</option>
<option>HAZAV</option>
<option>ARBEL</option>
<option>HAON</option>
<option>GIV'AT OZ</option>
<option>NAHSHONIM</option>
<option>GE'A</option>
<option>KEFAR DANIYYEL</option>
<option>AMQA</option>
<option>BET ZAYIT</option>
<option>AZARYA</option>
<option>BEN AMMI</option>
<option>RE'IM</option>
<option>EREZ</option>
<option>LAHAVOT HAVIVA</option>
<option>EYAL</option>
<option>HAGOR</option>
<option>YARHIV</option>
<option>NIR GALLIM</option>
<option>SEDE ILAN</option>
<option>MAGSHIMIM</option>
<option>BET HAGADDI</option>
<option>HODIYYA</option>
<option>MISHMAR HASHIV'A</option>
<option>ELIFELET</option>
<option>MESHAR</option>
<option>MISHMAR HAYARDEN</option>
<option>GAN YOSHIYYA</option>
<option>RAMOT ME'IR</option>
<option>GILAT</option>
<option>OLESH</option>
<option>DOR</option>
<option>SEDE UZZIYYAHU</option>
<option>ESHTA'OL</option>
<option>SHO'EVA</option>
<option>MESILLAT ZIYYON</option>
<option>KEFAR SHEMU'EL</option>
<option>GIMZO</option>
<option>BEREKHYA</option>
<option>BET SHIQMA</option>
<option>MASLUL</option>
<option>PATTISH</option>
<option>PEDUYIM</option>
<option>BET ME'IR</option>
<option>YANUV</option>
<option>GOREN</option>
<option>BET EZRA</option>
<option>MAZLIAH</option>
<option>YAD HANNA</option>
<option>YAZIZ</option>
<option>BEN ZAKKAY</option>
<option>SHUVA</option>
<option>BITHA</option>
<option>KEFAR MORDEKHAY</option>
<option>MISGAV DOV</option>
<option>QOMEMIYYUT</option>
<option>PORAT</option>
<option>KARMIYYA</option>
<option>NIR EZYON</option>
<option>MEVO BETAR</option>
<option>EMUNIM</option>
<option>AMMIQAM</option>
<option>ZURI'EL</option>
<option>YAD NATAN</option>
<option>MAHSEYA</option>
<option>NAHSHON</option>
<option>AMMINADAV</option>
<option>ORA</option>
<option>EVEN SAPPIR</option>
<option>BET NEHEMYA</option>
<option>AHIHUD</option>
<option>KEFAR ZETIM</option>
<option>GIV'AT YE'ARIM</option>
<option>ZETAN</option>
<option>RANNEN</option>
<option>MASH'EN</option>
<option>NETIV HASHAYYARA</option>
<option>GIV'ATI</option>
<option>AGUR</option>
<option>YA'ARA</option>
<option>ZELAFON</option>
<option>AHI'EZER</option>
<option>YAGEL</option>
<option>ZEKHARYA</option>
<option>BET HANANYA</option>
<option>HEMED</option>
<option>GIV'AT KOAH</option>
<option>YOSHIVYA</option>
<option>AHISAMAKH</option>
<option>YISH'I</option>
<option>EN YAHAV</option>
<option>HANNI'EL</option>
<option>NIR ELIYYAHU</option>
<option>NAHAM</option>
<option>OFER</option>
<option>YAKHINI</option>
<option>SHELOMI</option>
<option>EN YA'AQOV</option>
<option>ZAVDI'EL</option>
<option>ZANOAH</option>
<option>AZRIQAM</option>
<option>ZERAHYA</option>
<option>AVIGEDOR</option>
<option>HELEZ</option>
<option>AHUZZAM</option>
<option>MATTA</option>
<option>BAR GIYYORA</option>
<option>KOKHAV MIKHA'EL</option>
<option>NES HARIM</option>
<option>UZA</option>
<option>NEWE MIVTAH</option>
<option>YASHRESH</option>
<option>MIVTAHIM</option>
<option>YEROHAM</option>
<option>NURIT</option>
<option>GANNOT</option>
<option>AZRI'EL</option>
<option>PEDAYA</option>
<option>PETAHYA</option>
<option>KISSUFIM</option>
<option>ELISHAMA</option>
<option>GA'ASH</option>
<option>MARGALIYYOT</option>
<option>NAHAL OZ</option>
<option>KEFAR AZZA</option>
<option>BET RABBAN</option>
<option>DEVIRA</option>
<option>AHITUV</option>
<option>NIZZANE OZ</option>
<option>GONEN</option>
<option>GE'ALYA</option>
<option>REHOV</option>
<option>KEFAR AVIV</option>
<option>NEWE YARAQ</option>
<option>KESALON</option>
<option>SEDE ELI'EZER</option>
<option>GANNE YOHANAN</option>
<option>GINNATON</option>
<option>BEQOA</option>
<option>SHIBBOLIM</option>
<option>YOTVATA</option>
<option>ALLONE YIZHAQ</option>
<option>GIV'AT HASHELOSHA</option>
<option>ENAT</option>
<option>GE'ULE TEMAN</option>
<option>SHALWA</option>
<option>MIGDAL HAEMEQ</option>
<option>BET HERUT</option>
<option>EN SARID</option>
<option>ORANIM</option>
<option>SEDE BOQER</option>
<option>ETANIM</option>
<option>KEFAR HARIF</option>
<option>KEFAR HASIDIM BET</option>
<option>KEFAR HANO'AR HADATI</option>
<option>AVDON</option>
<option>MIDRESHET RUPPIN</option>
<option>SHIBLI-UMM AL-GHANAM</option>
<option>YESHA</option>
<option>ATSMON SEGEV</option>
<option>GIV'AT YESHA'YAHU</option>
<option>REKHASIM</option>
<option>NEWE AVOT</option>
<option>SAWA'ID(HAMRIYYE)</option>
<option>BASMAT TAB'UN</option>
<option>TUBA-ZANGARIYYE</option>
<option>ZARZIR</option>
<option>KA'ABIYYE-TABBASH-HAJAJRE</option>
<option>RAS ALI</option>
<option>HAMAM</option>
<option>MANSHIYYET ZABDA</option>
<option>RUMAT HEIB</option>
<option>BIR EL-MAKSUR</option>
<option>MEVASSERET ZIYYON</option>
<option>OR AQIVA</option>
<option>HARUZIM</option>
<option>SEDEROT</option>
<option>QIRYAT MAL'AKHI</option>
<option>GIZO</option>
<option>YE'AF</option>
<option>OHAD</option>
<option>HAZON</option>
<option>BET HASHMONAY</option>
<option>QETURA</option>
<option>EN KAREM-B.S.HAQLA'I</option>
<option>NEWE ZOHAR</option>
<option>SEDE NIZZAN</option>
<option>KUSEIFE</option>
<option>LAQYE</option>
<option>NOF HAGALIL</option>
<option>MA'ALOT-TARSHIHA</option>
<option>AMIRIM</option>
<option>ZIMRAT</option>
<option>BENE AYISH</option>
<option>DOVEV</option>
<option>ADAMIT</option>
<option>RAM-ON</option>
<option>AVI'EZER</option>
<option>NEWE MIKHA'EL</option>
<option>GAN HADAROM</option>
<option>BET BERL</option>
<option>GIV'AT SHAPPIRA</option>
<option>ZAFRIRIM</option>
<option>MABBU'IM</option>
<option>EVEN MENAHEM</option>
<option>MA'GALIM</option>
<option>BEN SHEMEN(K.NO'AR)</option>
<option>KEREM SHALOM</option>
<option>KEREM YAVNE(YESHIVA)</option>
<option>KEFAR MAYMON</option>
<option>MERKAZ SHAPPIRA</option>
<option>ZUQI YAM</option>
<option>GANNE HADAR</option>
<option>PORIYYA-KEFAR AVODA</option>
<option>PORIYYA-NEWE OVED</option>
<option>OMEN</option>
<option>HEVER</option>
<option>YODEFAT</option>
<option>ZUR HADASSA</option>
<option>AVIVIM</option>
<option>ADDERET</option>
<option>NE'OT HAKIKKAR</option>
<option>ALMAGOR</option>
<option>ELOT</option>
<option>MA'ALE GILBOA</option>
<option>ME AMMI</option>
<option>GEROFIT</option>
<option>KEFAR ROZENWALD(ZARIT)</option>
<option>WARDON</option>
<option>YAD HASHEMONA</option>
<option>ZOHAR</option>
<option>QIRYAT YE'ARIM</option>
<option>YA'AD</option>
<option>KARMI'EL</option>
<option>MIDRESHET BEN GURION</option>
<option>MEVO MODI'IM</option>
<option>NES AMMIM</option>
<option>YEDIDA</option>
<option>ALUMMA</option>
<option>ALUMIM</option>
<option>NETU'A</option>
<option>ZUR NATAN</option>
<option>EZER</option>
<option>ZOFAR</option>
<option>PARAN</option>
<option>ASHALIM</option>
<option>KISHOR</option>
<option>MALKISHUA</option>
<option>MAGEN SHA'UL</option>
<option>SAMAR</option>
<option>AHAWA</option>
<option>YAHEL</option>
<option>SHEKHANYA</option>
<option>RAHAT</option>
<option>BET RIMMON</option>
<option>MORAN</option>
<option>SHILAT</option>
<option>KEFAR RUT</option>
<option>QESARYYA</option>
<option>LOTEM</option>
<option>LAPPIDOT</option>
<option>MANOF</option>
<option>IDDAN</option>
<option>SAPPIR</option>
<option>TELALIM</option>
<option>MORESHET</option>
<option>QORANIT</option>
<option>ZVIYYA</option>
<option>TAL-EL</option>
<option>ALLON HAGALIL</option>
<option>KELIL</option>
<option>MATTAT</option>
<option>PELEKH</option>
<option>HOSHA'AYA</option>
<option>ESHHAR</option>
<option>MIZPE NETOFA</option>
<option>BAR YOHAY</option>
<option>AR'ARA-BANEGEV</option>
<option>NIZZANA (QEHILAT HINUH)</option>
<option>MAHANE YATTIR</option>
<option>NE'OT SMADAR</option>
<option>KERAMIM</option>
<option>ADI</option>
<option>MODI'IN-MAKKABBIM-RE'UT</option>
<option>KAMMON</option>
<option>MIKHMANNIM</option>
<option>HARARIT</option>
<option>GILON</option>
<option>MANOT</option>
<option>GITTA</option>
<option>LAVON</option>
<option>HILLA</option>
<option>HARASHIM</option>
<option>KAHAL</option>
<option>QADDARIM</option>
<option>AMUQQA</option>
<option>ZIV'ON</option>
<option>TEFAHOT</option>
<option>GORNOT HAGALIL</option>
<option>ABBIRIM</option>
<option>ZURIT</option>
<option>MIZPE AVIV</option>
<option>SEDE AVRAHAM</option>
<option>KOKHAV YA'IR</option>
<option>RAVID</option>
<option>YUVALLIM</option>
<option>YATED</option>
<option>RAQQEFET</option>
<option>KALLANIT</option>
<option>LIVNIM</option>
<option>PERI GAN</option>
<option>YEVUL</option>
<option>SHORASHIM</option>
<option>NIRIT</option>
<option>SUFA</option>
<option>HOLIT</option>
<option>EN HABESOR</option>
<option>DEQEL</option>
<option>NETIV HAASARA</option>
<option>QAZIR</option>
<option>SALLAMA</option>
<option>ARAMSHA</option>
<option>HARISH</option>
<option>ELIFAZ</option>
<option>HARDUF</option>
<option>EN TAMAR</option>
<option>KORAZIM</option>
<option>AMNUN</option>
<option>NATAF</option>
<option>LOTAN</option>
<option>ASHERAT</option>
<option>HANNATON</option>
<option>MASSAD</option>
<option>NEWE SHALOM</option>
<option>RETAMIM</option>
<option>HAR AMASA</option>
<option>ZUQIM</option>
<option>KEFAR WERADIM</option>
<option>KARME YOSEF</option>
<option>SHOMERIYYA</option>
<option>SHAHARUT</option>
<option>METAR</option>
<option>LEHAVIM</option>
<option>HALUZ</option>
<option>GAN NER</option>
<option>AVTALYON</option>
<option>ESHBAL</option>
<option>BE'ER MILKA</option>
<option>NEWE HARIF</option>
<option>NIZZANE SINAY</option>
<option>MERAV</option>
<option>NOFIT</option>
<option>KARKOM</option>
<option>SEGEV-SHALOM</option>
<option>SHANI</option>
<option>GIV'AT ELA</option>
<option>ZEMER</option>
<option>KEMEHIN</option>
<option>JUDEIDE-MAKER</option>
<option>GIV'AT AVNI</option>
<option>OR HAGANUZ</option>
<option>YANUH-JAT</option>
<option>KISRA-SUMEI</option>
<option>KEFAR HANANYA</option>
<option>HURA</option>
<option>SHOHAM</option>
<option>EL'AD</option>
<option>LAPPID</option>
<option>AVSHALOM</option>
<option>PORIYYA ILLIT</option>
<option>NEWE ZIV</option>
<option>MATTAN</option>
<option>AL-ARYAN</option>
<option>DEMEIDE</option>
<option>MEVO'OT YAM</option>
<option>BAT HEFER</option>
<option>EIN HOD</option>
<option>KHAWALED</option>
<option>HODAYOT</option>
<option>BAT HADAR</option>
<option>ARSUF</option>
<option>KEFAR ZOHARIM</option>
<option>BASMA</option>
<option>MA'ALE IRON</option>
<option>AHUZZAT BARAQ</option>
<option>KAMANE</option>
<option>HUSSNIYYA</option>
<option>NOF AYYALON</option>
<option>RAS AL-EIN</option>
<option>ARAB AL NAIM</option>
<option>IRUS</option>
<option>SHIMSHIT</option>
<option>KADDITA</option>
<option>AL-AZY</option>
<option>MERHAV AM</option>
<option>ABU QUREINAT</option>
<option>MAKCHUL</option>
<option>GEVA'OT BAR</option>
<option>ZUR YIZHAQ</option>
<option>QASR A-SIR</option>
<option>BIR HADAGE</option>
<option>DERIG'AT</option>
<option>UMM BATIN</option>
<option>AL SAYYID</option>
<option>SA'WA</option>
<option>BAT HEN</option>
<option>BNE NETSARIM</option>
<option>SHLOMIT</option>
<option>ELIAV</option>
<option>NAVE</option>
<option>KOCHLEA</option>
<option>BNE DEQALIM</option>
<option>NETA</option>
<option>MITSPE ILAN</option>
<option>GANNE TAL</option>
<option>NEZER HAZZANI</option>
<option>KARME KATIF</option>
<option>ABU TULUL</option>
<option>BE'ER GANNIM</option>
<option>SHAVE DAROM</option>
<option>SHEZAF</option>
<option>NIZZAN B</option>
<option>KANNOT</option>
<option>SEDE YIZHAQ</option>
<option>YUVAL</option>
<option>KEFAR BIN NUN</option>
<option>YINNON</option>
<option>OROT</option>
<option>BEN SHEMEN (MOSHAV)</option>
<option>GIV'OLIM</option>
<option>SEDE HEMED</option>
<option>REWAYA</option>
<option>GIV'AT HAYYIM (IHUD)</option>
<option>ESHEL HANASI</option>
<option>LAHAV</option>
<option>UMM AL-QUTUF</option>
<option>YARDENA</option>
<option>MIDRAKH OZ</option>
<option>MENUHA</option>
<option>BET HILQIYYA</option>
<option>HAZOR HAGELILIT</option>
<option>ADANIM</option>
<option>BAREQET</option>
<option>QIRYAT YE'ARIM(INSTITUTE)</option>
<option>EN GEDI</option>
<option>BAHAN</option>
<option>MELILOT</option>
<option>NAHALA</option>
<option>SEGULLA</option>
<option>NIR MOSHE</option>
<option>NIR AQIVA</option>
<option>SEDE ZEVI</option>
<option>REWAHA</option>
<option>AVITAL</option>
<option>PERAZON</option>
<option>METAV</option>
<option>MA'OR</option>
<option>SEDE TERUMOT</option>
<option>PA'AME TASHAZ</option>
<option>BEROSH</option>
<option>DISHON</option>
<option>ZERU'A</option>
<option>TIRAT KARMEL</option>
<option>DIMONA</option>
<option>QIRYAT TIV'ON</option>
<option>OR YEHUDA</option>
<option>NESHER</option>
<option>BE'ER YA'AQOV</option>
<option>GEDERA</option>
<option>ARAD</option>
<option>ELAT</option>
<option>BET SHEMESH</option>
<option>QIRYAT ONO</option>
<option>QIRYAT GAT</option>
<option>ROSH HAAYIN</option>
<option>RAMAT HASHARON</option>
<option>YAVNE</option>
<option>UMM AL-FAHM</option>
<option>TIRE</option>
<option>TAYIBE</option>
<option>QIRYAT SHEMONA</option>
<option>JERUSALEM</option>
<option>KEFAR EZYON</option>
<option>NETIV HAGEDUD</option>
<option>ALMOG</option>
<option>QEDUMIM</option>
<option>ELQANA</option>
<option>MIGDAL OZ</option>
<option>KOKHAV HASHAHAR</option>
<option>RIMMONIM</option>
<option>YAFIT</option>
<option>SAL'IT</option>
<option>REHAN</option>
<option>MEVO DOTAN</option>
<option>ARI'EL</option>
<option>SHAVE SHOMERON</option>
<option>KEFAR TAPPUAH</option>
<option>NEVE TSUF</option>
<option>BET EL</option>
<option>BET HORON</option>
<option>MIZPE YERIHO</option>
<option>SHADMOT MEHOLA</option>
<option>ELON MORE</option>
<option>ARGAMAN</option>
<option>MEHOLA</option>
<option>QALYA</option>
<option>ROSH ZURIM</option>
<option>HAR GILLO</option>
<option>ALLON SHEVUT</option>
<option>MASSU'A</option>
<option>GILGAL</option>
<option>YITAV</option>
<option>MA'ALE EFRAYIM</option>
<option>HAMRA</option>
<option>MIZPE SHALEM</option>
<option>QIRYAT ARBA</option>
<option>BEQA'OT</option>
<option>GITTIT</option>
<option>MEKHORA</option>
<option>PEZA'EL</option>
<option>MA'ALE ADUMMIM</option>
<option>OFRA</option>
<option>EL'AZAR</option>
<option>RO'I</option>
<option>NA'ARAN</option>
<option>KEFAR ADUMMIM</option>
<option>WERED YERIHO</option>
<option>QARNE SHOMERON</option>
<option>SHILO</option>
<option>HINNANIT</option>
<option>GIV'ON HAHADASHA</option>
<option>BET HAARAVA</option>
<option>HEMDAT</option>
<option>YAQIR</option>
<option>MATTITYAHU</option>
<option>EFRAT</option>
<option>MA'ALE MIKHMAS</option>
<option>BET ARYE-OFARIM</option>
<option>MA'ALE AMOS</option>
<option>BARQAN</option>
<option>NILI</option>
<option>KARMEL</option>
<option>MA'ON</option>
<option>ATERET</option>
<option>PESAGOT</option>
<option>IMMANU'EL</option>
<option>MEVO HORON</option>
<option>BERAKHA</option>
<option>ENAV</option>
<option>NA'AMA</option>
<option>ALMON</option>
<option>HERMESH</option>
<option>ESHKOLOT</option>
<option>PENE HEVER</option>
<option>NEGOHOT</option>
<option>NEWE DANIYYEL</option>
<option>NOQEDIM</option>
<option>ALE ZAHAV</option>
<option>GIV'AT ZE'EV</option>
<option>TENE</option>
<option>BRUKHIN</option>
<option>MEZADOT YEHUDA</option>
<option>QIRYAT NETAFIM</option>
<option>DOLEV</option>
<option>OTNI'EL</option>
<option>YIZHAR</option>
<option>ALFE MENASHE</option>
<option>MIGDALIM</option>
<option>MA'ALE LEVONA</option>
<option>ASFAR</option>
<option>SUSEYA</option>
<option>ADORA</option>
<option>ORANIT</option>
<option>ITAMAR</option>
<option>GEVA BINYAMIN</option>
<option>HAGGAY</option>
<option>ELI</option>
<option>KARME ZUR</option>
<option>NAHALI'EL</option>
<option>PEDU'EL</option>
<option>HAR ADAR</option>
<option>HASHMONA'IM</option>
<option>SANSANA</option>
<option>KOKHAV YA'AQOV</option>
<option>BETAR ILLIT</option>
<option>QEDAR</option>
<option>ROTEM</option>
<option>SHIM'A</option>
<option>MASKIYYOT</option>
<option>AVENAT</option>
<option>NA'ALE</option>
<option>TALMON</option>
<option>NOFIM</option>
<option>ZUFIM</option>
<option>AVNE HEFEZ</option>
<option>BAT AYIN</option>
<option>REVAVA</option>
<option>KEFAR HAORANIM</option>
<option>MODI'IN ILLIT</option>
<option>REHELIM</option>
<option>GANNE MODI'IN</option>
<option>AMMIHAY</option>
<option>MEVO'OT YERIHO</option>
<option>HAIFA</option>
<option>BUQ'ATA</option>
<option>ELI-AD</option>
<option>EL-ROM</option>
<option>KEFAR HARUV</option>
<option>HASPIN</option>
<option>QESHET</option>
<option>YONATAN</option>
<option>MA'ALE GAMLA</option>
<option>ODEM</option>
<option>AVNE ETAN</option>
<option>ANI'AM</option>
<option>ORTAL</option>
<option>NATUR</option>
<option>BENE YEHUDA</option>
<option>ALLONE HABASHAN</option>
<option>MEZAR</option>
<option>GIV'AT YO'AV</option>
<option>GESHUR</option>
<option>QELA</option>
<option>QIDMAT ZEVI</option>
<option>HAD-NES</option>
<option>KANAF</option>
<option>QAZRIN</option>
<option>MEROM GOLAN</option>
<option>MAJDAL SHAMS</option>
<option>MAS'ADE</option>
<option>MEVO HAMMA</option>
<option>AFIQ</option>
<option>NEWE ATIV</option>
<option>NOV</option>
<option>GHAJAR</option>
<option>EIN QINIYYE</option>
<option>EN ZIWAN</option>
<option>NE'OT GOLAN</option>
<option>RAMAT MAGSHIMIM</option>
<option>RAMOT</option>
<option>BAQA AL-GHARBIYYE</option>
<option>BENE BERAQ</option>
<option>BAT YAM</option>
<option>GIV'ATAYIM</option>
<option>HERZLIYYA</option>
<option>HADERA</option>
<option>HOLON</option>
<option>TIBERIAS</option>
<option>QIRYAT ATTA</option>
<option>KEFAR SAVA</option>
<option>LOD</option>
<option>ASHQELON</option>
<option>NES ZIYYONA</option>
<option>NAZARETH</option>
<option>NETANYA</option>
<option>SAKHNIN</option>
<option>AKKO</option>
<option>AFULA</option>
<option>PARDES HANNA-KARKUR</option>
<option>PETAH TIQWA</option>
<option>ZEFAT</option>
<option>QIRYAT MOTZKIN</option>
<option>RISHON LEZIYYON</option>
<option>REHOVOT</option>
<option>RAMLA</option>
<option>RAMAT GAN</option>
<option>RA'ANNANA</option>
<option>TAMRA</option>
<option>BE'ER SHEVA</option>
<option>NAHARIYYA</option>
<option>BET SHE'AN</option>
<option>ZIKHRON YA'AQOV</option>
<option>YEHUD-MONOSON</option>
<option>QIRYAT BIALIK</option>
<option>QIRYAT YAM</option>
<option>HOD HASHARON</option>
<option>BINYAMINA-GIV'AT ADASHAHAR</option>
<option>MEQ</option>
      </select>
      <br />
      <br />
      <button id="add_sale" type="button" className="button"
        onClick={(e) => handleAddSale(document.getElementById("branch_name").value, document.getElementById("flavor").value,
          document.getElementById("date_add_sale").value, document.getElementById("weight").value)}> Add sale </button>
      <br />
    </>


  )
}

const handleSimulateSales = async () => {
  await Axios.post('http://localhost:5000/sales_simulation',
    {});
};

const handleSimulateByDate = async (date) => {
  await Axios.post('http://localhost:5000/sales_simulation_by_date',
    {date: date});
};

const handleAddSale = async (name, flavor, date, weight) => {
  await Axios.post('http://localhost:5000/insert_sale',
    { name: name, date: date, flavor: flavor, weight: weight });
};