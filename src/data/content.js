// ─────────────────────────────────────────────────────────────
// CONTENT SOURCES
// [VERIFIED]  = taken from the uploaded company profile (Chapter II)
//               or the Duron Steel letterhead.
// [SUGGESTED] = marketing copy proposed for this website only.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'DURON STEEL',
  tagline: 'STRONGER TODAY • BUILT FOR TOMORROW', // [VERIFIED] letterhead
  since: 1983, // [VERIFIED]
  serviceCentres: 7, // [VERIFIED]
  address: [
    'No. 149, Manaval Nagar Cross Via,',
    'Sengaku Village,',
    'Sriperumbudur,',
    'Kancheepuram District,',
    'Tamil Nadu – 602002, India.',
  ], // [VERIFIED] letterhead
  phoneDisplay: '044-23267854', // [VERIFIED] letterhead
  phoneHref: 'tel:+914423267854',
  mapQuery:
    'No. 149, Manaval Nagar Cross Via, Sengaku Village, Sriperumbudur, Kancheepuram District, Tamil Nadu 602002, India',
}

export const hero = {
  // [SUGGESTED] marketing copy, not a verified slogan
  headline: ['Precision Steel.', 'Engineered for Performance.'],
  support: 'Specialized tool and die steel solutions for demanding industrial applications.',
}

export const products = [
  {
    slug: 'high-speed-steel',
    name: 'High Speed Steel (HSS)',
    short: 'High Speed Steel',
    visual: 'cutter',
    description:
      'A subset of tool steels used mainly for cutting tools. HSS withstands higher temperatures than older high carbon steel without losing its temper (hardness), which allows faster cutting.',
    characteristics: [
      'Withstands higher temperatures without losing hardness',
      'High hardness (above HRC60) in generally recommended heat treatment',
      'High abrasion resistance, generally linked to tungsten content',
    ],
    applications: [
      'Drills and taps',
      'Milling cutters and tool bits',
      'Gear cutters and saw blades',
      'Punches and dies (increasing usage)',
      'Fine hand tools: files, chisels, hand plane blades',
    ],
    detail: [
      'High speed steel (HSS or HS) is a subset of tool steels, usually used in tool bits and cutting tools, and often in power saw blades and drill bits.',
      'It is superior to the older high carbon steel tools used extensively through the 1940s because it can withstand higher temperatures without losing its temper (hardness). This allows HSS to cut faster than high carbon steel, hence the name.',
      'At room temperature, in their generally recommended heat treatment, HSS grades generally display high hardness (above HRC60) and high abrasion resistance, generally linked to the tungsten content often used in HSS, compared with common carbon and tool steels.',
      'The main use continues to be the manufacture of cutting tools, although usage for punches and dies is increasing. HSS has also found a market in fine hand tools, where relatively good toughness at high hardness and high abrasion resistance suit low speed applications that need a durable, keen edge.',
    ],
  },
  {
    slug: 'cold-work-tool-steel',
    name: 'Cold Work Tool Steel',
    short: 'Cold Work',
    visual: 'die',
    description:
      'Tool steels normally used at room temperature, featuring good wear resistance, toughness and dimensional stability. High temperature resistance is not required.',
    characteristics: [
      'High carbon, high chromium steels',
      'Oil hardening steels',
      'Air hardening steels',
    ],
    applications: [
      'Dies requiring wear resistance',
      'Dies requiring resistance to chipping',
      'Dies requiring resistance to cracking',
    ],
    detail: [
      'Cold work tool steels are normally used at room temperatures, featuring good wear resistance, toughness and dimensional stability. Since they operate at room temperature, high temperature resistance is not required.',
      'They are normally classified into three categories: high carbon high chromium steels, oil hardening steels, and air hardening steels.',
      'The most important properties for cold work tool steel dies are wear resistance, resistance to chipping, and resistance to cracking.',
      'To achieve wear resistance, higher hardness is recommended. For better impact strength, steels with better toughness are suggested. Toughness normally depends on the hardness level and the microstructure of the steel, such as carbide distribution, grain size and inclusion ratings.',
    ],
  },
  {
    slug: 'hot-work-tool-steel',
    name: 'Hot Work Tool Steel',
    short: 'Hot Work',
    visual: 'furnace',
    description:
      'Used for forging, forming, shearing, pressure die casting and punching at elevated temperatures, where the steel must maintain its wear resistance and mechanical properties.',
    characteristics: [
      'Maintains wear resistance and mechanical properties at elevated temperatures',
      'Alloyed with elements such as chromium, cobalt, molybdenum, tungsten, vanadium and nickel',
      'EFS and ESR quality steels used extensively in pressure die casting',
    ],
    applications: [
      'Forging (press and hammer)',
      'Pressure die casting',
      'Extrusion dies',
      'Forming, shearing and punching at elevated temperatures',
    ],
    detail: [
      'For forging, forming, shearing, pressure die casting and punching at elevated temperatures, hot work tool steels are used because they maintain their wear resistance and mechanical properties at these temperatures.',
      'Alloying elements like chromium, cobalt, molybdenum, tungsten, vanadium and nickel help achieve the required properties. One of the most demanding uses is pressure die casting, where EFS (Extra Fine Structure) and ESR (Electro Slag Refining) quality steels are used extensively.',
      'The main problems encountered in a pressure die casting die are heat checks, erosion and cracks. The right selection of tool steel can help minimize these problems and optimize die life.',
      'Forging is done at elevated temperatures using vertical presses and hammers. Hammer forging needs high toughness to absorb sudden impact loads, while press forging recommends high strength hot work tool steels. Forging hammer die material is normally supplied pre-hardened at 360–410 BHN.',
      'Extrusion converts a pre-heated ingot or billet to the desired profile by forcing the metal through a die. Besides the properties needed for die casting dies, nitriding ability is desired to avoid abrasive wear. AISI H11 and H13 are described as the most popular extrusion die materials.',
    ],
  },
  {
    slug: 'plastic-mould-steels',
    name: 'Plastic Mould Steels',
    short: 'Plastic Mould',
    visual: 'mould',
    description:
      'Steels for moulds that are mainly subjected to high pressure, wear, corrosion and elevated temperatures during operation.',
    characteristics: [
      'Easy machinability and polishability',
      'High compressive strength',
      'Dimensional stability and corrosion resistance',
    ],
    applications: [
      'Plastic moulding',
      'Moulds for abrasive-filled plastics (needs careful steel choice)',
    ],
    detail: [
      'Plastic mould steels are mainly subjected to high pressure, wear, corrosion and elevated temperatures. The main properties are easy machinability, polishability, high compressive strength, dimensional stability and corrosion resistance.',
      'The amount of abrasives added to plastics (to improve properties such as hardness) increases wear on the mould steel, and higher pressure is needed to mould these components. Great care must be taken in choosing the right kind of steel.',
    ],
    grades: [
      { level: 'Lower abrasive plastics', list: ['DIN 1.2738', 'DIN 1.2311'] },
      { level: 'Medium abrasive level', list: ['DIN 1.2344'] },
      { level: 'Higher abrasive plastics', list: ['DIN 1.2083', 'HPM38', 'DIN 1.2316', 'HPM77', 'DIN 1.2379', 'D2', 'SLD'] },
    ],
  },
]

export const applications = [
  { icon: 'Drill', title: 'Cutting Tools', text: 'Drills, taps, milling cutters, tool bits, gear cutters and saw blades.' },
  { icon: 'Hammer', title: 'Tool & Die Manufacturing', text: 'Tool steels for the dies and tooling that shape other components.' },
  { icon: 'Layers', title: 'Metal Forming', text: 'Hot work steels for forming, shearing and punching at elevated temperatures.' },
  { icon: 'Flame', title: 'Pressure Die Casting', text: 'A demanding use where EFS and ESR quality steels are used extensively.' },
  { icon: 'Anvil', title: 'Forging', text: 'Press and hammer forging dies; hammer die material is normally supplied pre-hardened at 360–410 BHN.' },
  { icon: 'MoveRight', title: 'Metal Extrusion', text: 'Dies that force pre-heated billet through a profile; AISI H11 and H13 are popular materials.' },
  { icon: 'Box', title: 'Plastic Mould Manufacturing', text: 'Mould steels chosen around pressure, wear, corrosion and plastic abrasiveness.' },
]

export const technical = [
  {
    title: 'Cold Work Tool Steel',
    properties: [
      ['Wear resistance', 'Higher hardness is recommended to achieve wear resistance.'],
      ['Resistance to chipping', 'A key property for cold work dies.'],
      ['Resistance to cracking', 'A key property for cold work dies.'],
      ['Toughness & dimensional stability', 'Toughness depends on hardness level and microstructure: carbide distribution, grain size, inclusion ratings.'],
    ],
  },
  {
    title: 'Hot Work Tool Steel',
    properties: [
      ['Ductility', 'Listed among the important properties.'],
      ['High hot yield strength', 'Needed at elevated working temperatures.'],
      ['Thermal properties', 'Lower thermal expansion coefficient and high thermal conductivity.'],
      ['Impact strength', 'High Charpy impact value.'],
      ['Weldability', 'Good weldability is desirable.'],
    ],
  },
  {
    title: 'Plastic Mould Steels',
    properties: [
      ['Machinability', 'Easy machinability.'],
      ['Polishability', 'Polish ability is a main property.'],
      ['Compressive strength', 'High compressive strength for high-pressure moulding.'],
      ['Dimensional stability', 'Listed among the main properties.'],
      ['Corrosion resistance', 'Moulds face corrosion during operation.'],
    ],
  },
]

export const whyChoose = [
  { icon: 'CalendarClock', title: `Industry presence since ${company.since}`, text: 'Serving the tool and die steel industry since 1983.' },
  { icon: 'Network', title: `${company.serviceCentres} service centres`, text: 'A network of seven service centres, as stated in the company profile.' },
  { icon: 'Target', title: 'Focus on tool & die steel', text: 'Steel products and machining capabilities built around the tool and die industry.' },
  { icon: 'Thermometer', title: 'Vacuum heat treatment', text: 'Vacuum heat treatment facilities for tools, with modern vacuum furnaces being made available.' },
  { icon: 'Globe2', title: 'Principals in Asia, Europe & India', text: 'Full support from principals in Asia/Europe and India.' },
]
