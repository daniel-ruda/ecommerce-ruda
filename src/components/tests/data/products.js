const products = [
  {
    id: 1,
    category: 1,
    stock: 1,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/19GATUGTRDPDSGLCRGEN_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Gatorade Gx Pod 4-Pack",
    description: "",
    price: 7.99,
    promotion: "More Flavors Available!",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 2,
    stock: 2,
    category: 1,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/22KOUUGHSTWHY2LBNGEN_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "GHOST Whey X Protein Powder – 2 lbs.",
    description: "",
    price: 47.99,
    promotion: "More Flavors Available!",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 3,
    stock: 3,
    category: 1,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/18ONUUCRTN2500100GEN_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Optimum Nutrition Creatine 2500 Caps",
    description: "",
    price: 17.99,
    promotion: "More Flavors Available!",
    isShipAvailable: false,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 4,
    stock: 4,
    category: 1,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16ONUUNMNNRGYBLRSGAA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Gatorade Gx Pod 4-Pack",
    description: "",
    price: 7.99,
    promotion: "More Flavors Available!",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 5,
    stock: 5,
    category: 1,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/18ACDULTBLRZZXXXXGEN_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Gatorade Gx Pod 4-Pack",
    description: "",
    price: 7.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 20,
    stock: 5,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16AU6UDPHRNXXXXXXWBA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "ETHOS Dip Horns",
    description: "",
    price: 139.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 21,
    stock: 5,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16FGEUTRCPRPXXXXXWBA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Fitness Gear Tricep Rope",
    description: "",
    price: 34.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 22,
    stock: 5,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16AU6UTHSWDRNGSXXEAC_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Fitness Gear Tricep Rope",
    description: "",
    price: 69.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 23,
    stock: 5,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16BSDUBSGTBLSTRSLEAC_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Body Solid AAB2 Gut-Blaster Slings",
    description: "",
    price: 58.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "GHOST® Full Disclosure Label;Premium 100% whey protein blend with natural digestive enzyme;25G+ Protein from Whey Protein Isolate, Concentrate and Hydrolysate;Real cookie pieces in the Nutter Butter® and Chips Ahoy!® flavors;Country of Origin : United States of America;Brand : GHOST",
  },
  {
    id: 24,
    stock: 15,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16BSDUBDYSLDMB229WBA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Body Solid MB229 Revolving Curl Bar",
    description:
      "Experience the most complete arm development possible with the Body Solid® MB229 Revolving Curl Bar. This biomechanically designed bar is specifically engineered for maximum bicep and triceps contraction. The Body Solid® Revolving Curl Bar delivers the results you deserve so you can build muscles more effectively.",
    price: 58.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: false,
    details:
      "Solid steel construction revolving curl bar for arm development;Angles on bar specifically designed for peak bicep/triceps contraction;Length: 29”;Weight: 7 lbs;Model: MB229;Body Solid;Country of Origin : Imported;DSG Pro Tips;Brand : Body-Solid;",
  },
  {
    id: 25,
    stock: 5,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16BSDUBDYSLDMB502WBA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Body Solid MB502 Seated Row/Chin Bar Combo",
    description:
      "Take your workout to the next level with the Body Solid® MB502 Seated Row/Chin Bar Combo. Super heavy-duty, welded flange ensures a lifetime of usage even under extreme conditions, while all ends are precision ground and polished to an exact radius. Perfectly balanced with knurl-textured grips, the Seated Row/Chin Bar Combo ensures superior performance.",
    price: 58.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: false,
    details:
      "Heavy-duty welded flange;All ends precision ground and polished;Perfectly balanced;Diamond knurl-textured grips;Weight: 5 lbs;Model: MB502;Body Solid;Country of Origin : Imported;DSG Pro Tips;Brand : Body-Solid",
  },
  {
    id: 26,
    stock: 8,
    category: 2,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/21SVZUJHKPWRRCKSTMEC_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Sunny Health & Fitness J-Hook Power Racks Attachment",
    description:
      "Take your workout to the next level with the Body Solid® MB502 Seated Row/Chin Bar Combo. Super heavy-duty, welded flange ensures a lifetime of usage even under extreme conditions, while all ends are precision ground and polished to an exact radius. Perfectly balanced with knurl-textured grips, the Seated Row/Chin Bar Combo ensures superior performance.",
    price: 43.99,
    promotion: "Limited Time! Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "Compatible with Sunny Health & Fitness® Power and Squat Racks;Country of Origin : Imported;Style : SF-XFA007;DSG Pro Tips;Brand : Sunny Health & Fitness;",
  },
  {
    id: 30,
    stock: 8,
    category: 3,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/20NTKUNRDCTRCKS22BKS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "NordicTrack S22I Studio Cycle (OLD MODEL)",
    description:
      "The NordicTrack® S22i Studio Cycle is revolutionizing the home gym cycling experience. Challenging top competitors in the field, the S22i provides a quality indoor, at-home studio cycle that boasts features both seasoned cyclists and newbies will love.",
    price: 500.99,
    promotion: "Limited Time! New Season Savings Event. Select styles.",
    isShipAvailable: true,
    details:
      "22” Rotating HD smart touchscreen;SMART-response drive system 4.0 CHP DurX™ commercial plus motor;Auxiliary music port and dual 2-inch speakers;Automatic trainer control;Dimensions: 59” x 22” x 60”;Shipping Dimensions: 34.50” x 17.00” x 51.50”;Product Weight: 204 lbs.;",
  },
  {
    id: 31,
    stock: 12,
    category: 3,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/19SCWUSCHWNNC4BKXBKS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Schwinn IC4 Bike",
    description:
      "The Schwinn IC4 Bike provides a premium, heart-pumping indoor cycling experience and features a 40 lb. flywheel with an intuitive resistance knob, a beautiful backlit LCD display, and easy-reach cradles for 3 lb. dumbbells. Digitally immerse yourself in a world of virtual races, exotic locales, and stunning trails from around the globe with connectivity to popular cycling apps like JRNY, Peloton, and Zwift. With the IC4, you’ll escape the everyday and stay on track for a life well-lived.",
    price: 999.99,
    promotion: "1-Year JRNY Membership Included",
    isShipAvailable: true,
    details:
      "Infinitely variable resistance allows you to dial the challenge up and down;Magnetic ECB flywheel;Black-backlit LCD console monitors heart rate, speed, time, distance, calories and RPM;Sport seat has fore/aft adjustment;Water bottle holder;3 lb. hand weight holders + hand weight set;",
  },
  {
    id: 32,
    stock: 1,
    category: 3,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/17SCWUSCHWNN270MYBKS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Schwinn 270 Recumbent Exercise Bike",
    description:
      "The Schwinn® 270 Recumbent Bike combines top level cycling with elite goal tracking technology for a smooth, comfortable cardiovascular workout with Bluetooth-enabled data transfer to your favorite fitness apps.",
    price: 549.99,
    promotion: "1-Year JRNY Membership Included",
    isShipAvailable: true,
    details:
      "Infinitely variable resistance allows you to dial the challenge up and down;Magnetic ECB flywheel;Black-backlit LCD console monitors heart rate, speed, time, distance, calories and RPM;Sport seat has fore/aft adjustment;Water bottle holder;3 lb. hand weight holders + hand weight set;",
  },

  {
    id: 33,
    stock: 6,
    category: 3,
    imageUrl:
      "https://images.dickssportinggoods.com/is/image/dkscdn/16MCYUMRCYCLBRVLTBKS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1",
    title: "Marcy Club Revolution Cycle",
    description:
      "The Marcy® Club Revolution Cycle is the perfect combination of club-style quality and home-fitness convenience. Set the pace and intensity with the manual resistance knob, while the easy brake mechanism halts motion so you can hydrate or take a breather before pedaling on. Features include adjustable handlebars, seat and pedals to accommodate several user types. Motivated yourself to stay fit by adding the Club Revolution Cycle to your home.",
    price: 349.99,
    promotion: "1-Year JRNY Membership Included",
    isShipAvailable: true,
    details:
      "Infinitely variable resistance allows you to dial the challenge up and down;Magnetic ECB flywheel;Black-backlit LCD console monitors heart rate, speed, time, distance, calories and RPM;Sport seat has fore/aft adjustment;Water bottle holder;3 lb. hand weight holders + hand weight set;",
  },
];

export default products;
