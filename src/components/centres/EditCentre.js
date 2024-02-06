import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { editCentre, getCentres } from '../../actions/centre';


const jsonAddress = {
  "Andaman and Nicobar Islands": [
      "Port Blair"
  ],
  "Andhra Pradesh": [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla"
  ],
  "Arunachal Pradesh": [
      "Naharlagun",
      "Pasighat"
  ],
  "Assam": [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia"
  ],
  "Bihar": [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "BhabUrban Agglomeration",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj"
  ],
  "Chandigarh": [
      "Chandigarh"
  ],
  "Chhattisgarh": [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra"
  ],
  "Dadra and Nagar Haveli": [
      "Silvassa"
  ],
  "Delhi": [
      "Delhi",
      "New Delhi"
  ],
  "Goa": [
      "Mapusa",
      "Margao",
      "Marmagao",
      "Panaji"
  ],
  "Gujarat": [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Gandhinagar",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahemdabad",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner"
  ],
  "Haryana": [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar"
  ],
  "Himachal Pradesh": [
      "Kullu",
      "Manali",
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla",
      "Solan",
      "Sundarnagar"
  ],
  "Jammu and Kashmir": [
      "Anantnag",
      "Baramula",
      "Jammu",
      "KathUrban Agglomeration",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar",
      "Udhampur"
  ],
  "Jharkhand": [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Medininagar (Daltonganj)",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara"
  ],
  "Karnataka": [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Ballari",
      "Belagavi",
      "Bengaluru",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudabidri",
      "Mudalagi",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Mysore",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Raayachuru",
      "Rabkavi Banhatti",
      "Ramanagaram",
      "Ramdurg",
      "Ranebennuru",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindagi",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Surapura",
      "Talikota",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir"
  ],
  "Kerala": [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Koyilandy",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara"
  ],
  "Madhya Pradesh": [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni"
  ],
  "Maharashtra": [
      "Achalpur",
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Mumbai",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran Islampur",
      "Uran",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla"
  ],
  "Manipur": [
      "Imphal",
      "Lilong",
      "Mayang Imphal",
      "Thoubal"
  ],
  "Meghalaya": [
      "Nongstoin",
      "Shillong",
      "Tura"
  ],
  "Mizoram": [
      "Aizawl",
      "Lunglei",
      "Saiha"
  ],
  "Nagaland": [
      "Dimapur",
      "Kohima",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto"
  ],
  "Odisha": [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh"
  ],
  "Puducherry": [
      "Karaikal",
      "Mahe",
      "Pondicherry",
      "Yanam"
  ],
  "Punjab": [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur Cantt.",
      "Firozpur",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Patti",
      "Pattran",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur"
  ],
  "Rajasthan": [
      "Ajmer",
      "Alwar",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Jaipur",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulpur",
      "Sadulshahar",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Takhatgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer"
  ],
  "Tamil Nadu": [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Ranipet",
      "Rasipuram",
      "Salem",
      "Sankarankovil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham"
  ],
  "Telangana": [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu"
  ],
  "Tripura": [
      "Agartala",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur"
  ],
  "Uttar Pradesh": [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Fatehpur Sikri",
      "Firozabad",
      "Hapur",
      "Hardoi ",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalganj",
      "Lalitpur",
      "Lar",
      "Loni",
      "Lucknow",
      "Mathura",
      "Meerut",
      "Mirzapur",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "PurqUrban Agglomerationzi",
      "Purwa",
      "Rae Bareli",
      "Rampur Maniharan",
      "Rampur",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "SUrban Agglomerationr",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania"
  ],
  "Uttarakhand": [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri"
  ],
  "West Bengal": [
      "Adra",
      "AlipurdUrban Agglomerationr",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "PandUrban Agglomeration",
      "Paschim Punropara",
      "Purulia",
      "Raghunathganj",
      "Raghunathpur",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar"
  ]
}
// console.log(Object.keys(jsonAddress));

const EditCentre = ({getCentres, centre:{centres}, editCentre}) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   getCentres();
  // },[])

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  const currCentre = centres.find(centre => (centre._id).toString() === id.toString());

  // console.log(currCentre);



  let [formData, setFormData] = useState({
    name:currCentre.name,
    chiefname:currCentre.chiefname,
    longitude:currCentre.location.coordinates[0],
    latitude:currCentre.location.coordinates[1],
    contact:currCentre.contact,
    state:currCentre.address.state,
    city:currCentre.address.city,
    pincode:currCentre.address.pincode,
    locality:currCentre.address.locality,
    medical:currCentre.medical,
    active:currCentre.active,
    fire:currCentre.roles.fire,
    flood:currCentre.roles.flood,
    earthquake:currCentre.roles.earthquake,
    hurricane:currCentre.roles.hurricane,
    avalanche:currCentre.roles.avalanche,
    air:currCentre.transport.air,
    water:currCentre.transport.water,
    land:currCentre.transport.land,
    beds:{total:currCentre.beds.total,available:currCentre.beds.available},
    food:currCentre.food,
    fuel:currCentre.fuel,
    rescuecount:currCentre.rescuecount,
    refugeecount:currCentre.refugeecount
  });

  const [selectedState, setSelectedState] = useState(currCentre.address.state);
  const [selectedCity, setSelectedCity] = useState(currCentre.address.city);
  const [stateData, setStateData] = useState(Object.keys(jsonAddress));

  useEffect(() => {
    setStateData(jsonAddress)
  }, []);

  // console.log(stateData)
  // Event handler for state selection
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setFormData({ ...formData, state: e.target.value });
    formData.state = e.target.value;
    setFormData({ ...formData, city: '' });
    setSelectedCity('');
    city = '';
  };
  // Event handler for city selection
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setFormData({ ...formData, city: e.target.value });
    formData.city=e.target.value;
  };

  let {
    name,
    chiefname,
    longitude,
    latitude,
    contact,
    state,
    city,
    pincode,
    locality,
    medical,
    active,
    fire,
    flood,
    earthquake,
    hurricane,
    avalanche,
    air,
    water,
    land,
    beds:{total,available},
    food,
    fuel,
    rescuecount,
    refugeecount,
   } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeTotalBeds = (e) =>
    setFormData({ ...formData, beds:{total:e.target.value, available:available} });

  const onChangeAvailableBeds = (e) =>
    setFormData({ ...formData, beds:{total:total, available:e.target.value} });

  const onChangeCheckbox = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });



  const onSubmit = (e) => {
    e.preventDefault();
      editCentre(id,formData, navigate);
  };

  return (
    <>
    <h3 style={{color:'var(--primary-color)', marginTop:'1rem'}}> Update Centre Information</h3>
    <table>
      <tbody>
    
      <div className="post-form" >
        <form className="form" onSubmit={ e => onSubmit(e)}>

          <tr>
            <td>
              <label>Name:<input type='text' placeholder='Centre Name' name="name" value={name} required onChange={e => onChange(e)} /></label>
            </td>
            <td>
              <label>Chief Name:<input type='text' placeholder='Chief Name' name="chiefname" value={chiefname} required onChange={e => onChange(e)} /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Longitude:<input type='text' placeholder='Longitude' name="longitude" value={longitude} required onChange={e => onChange(e)} /></label>
            </td>
            <td>
              <label>Latitude:<input type='text' placeholder='Latitude' name="latitude" value={latitude} required onChange={e => onChange(e)} /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Contact:</label><input type='text' placeholder='Contact' name="contact" value={contact} required onChange={e => onChange(e)} />
            </td>
            <td>
            <td>
              <label>Centre Active: </label>
              <input type='checkbox' name="active" checked={active===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            </td>
          </tr>
          <label>Address:</label>
          <tr>
            <td>
              <label>State:
                {/* {console.log(Object(jsonAddress[selectedState]))} */}
                <select id='state' size='1' name="state" value={selectedState} onChange={e => (onChange(e), handleStateChange(e) )}>
                  <option value={selectedState}>{selectedState}</option>
                  {Object.keys(stateData).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
            </td>
            <td>
              {selectedState && (
                  <label>Select City
                    <select id="city" name="city" value={selectedCity} onChange={e => (onChange(e),handleCityChange(e))}>
                      <option value={selectedCity}>{selectedCity}</option>
                      {Object(jsonAddress[selectedState]).map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </label>
              )} 
            </td>
          </tr>
          {selectedCity &&
          <tr>
            <td>
              <label>Locality:</label><input type='text' placeholder='Locality' name="locality" value={locality} required onChange={e => onChange(e)} />
            </td>
            <td>
              <label>Pincode:</label><input type='text' placeholder='Pincode' name="pincode" value={pincode} required onChange={e => onChange(e)} />
            </td>
          </tr>
          }
          <label>Facilities:</label>
          <tr>
            <td>
              <label>Total Beds: </label>
              <input type='number' style={{width:"3rem"}} placeholder='Total Beds' name="total" value={total} onChange={e => onChangeTotalBeds(e)} />
            </td>
            <td>
              <label>Available Beds: </label>
              <input type='number' style={{width:"3rem"}} placeholder='Available Beds' name="available" value={available} onChange={e => onChangeAvailableBeds(e)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Medical : </label>
              <input type='checkbox' placeholder='Medical' name="medical" checked={medical===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Food Units : </label>
              <input type='number' style={{width:"3rem"}} placeholder='Food Units' name="food" value={food} onChange={e => onChange(e)} />
            </td>
            <td>
              <label>Fuel Units : </label>
              <input type='number' style={{width:"3rem"}} placeholder='Fuel Units' name="fuel" value={fuel} onChange={e => onChange(e)} />
            </td>
          </tr>
          <label>Transport:</label>
          <tr>
            <td>
              <label>Air : </label>
              <input type='checkbox' placeholder='Air' name="air" checked={air===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Water : </label>
              <input type='checkbox' placeholder='Water' name="water" checked={water===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Land : </label>
              <input type='checkbox' placeholder='Land' name="land" checked={land===true} onChange={e => onChangeCheckbox(e)} />
            </td>
          </tr>
          <label>Roles:</label>
          <tr>
            <td>
              <label>Hurricane : </label>
              <input type='checkbox' placeholder='Hurricane' name="hurricane" checked={hurricane===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Flood : </label>
              <input type='checkbox' placeholder='Flood' name="flood" checked={flood===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Fire : </label>
              <input type='checkbox' placeholder='Fire' name="fire" checked={fire===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Avalanche : </label>
              <input type='checkbox' placeholder='Avalanche' name="avalanche" checked={avalanche===true} onChange={e => onChangeCheckbox(e)} />
            </td>
            <td>
              <label>Earthquake : </label>
              <input type='checkbox' placeholder='Earthquake' name="earthquake" checked={earthquake===true} onChange={e => onChangeCheckbox(e)} />
            </td>
          </tr>
          <label>Savings:</label>
          <tr>
            <td>
              <label>Rescue Count : </label>
              <input type='number' style={{width:"3rem"}} name="rescuecount" value={rescuecount} onChange={e => onChange(e)} />
            </td>
            <td>
              <label>Refugee Count : </label>
              <input type='number' style={{width:"3rem"}} name="refugeecount" value={refugeecount} onChange={e => onChange(e)} />
            </td>
          </tr>
          <tr>
            <td>
            <input type="submit" style={{marginTop: '1rem', marginBottom: '2rem'}} className="btn btn-primary" value="Save Changes" /> 
            </td>
          </tr>
          
        </form>
      </div>
      </tbody>
    </table>
    </>
  )
}

EditCentre.propTypes = {
  getCentres: propTypes.func.isRequired,
  centre: propTypes.object.isRequired,
  editCentre: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  centre: state.centre,
});

export default connect(mapStateToProps, { getCentres, editCentre })(EditCentre);