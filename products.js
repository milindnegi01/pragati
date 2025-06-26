// Product data for fire safety equipment
const products = [
  // Fire Extinguishers
  {
    id: 1,
    name: "ABC Dry Chemical Extinguisher",
    category: "extinguishers",
    image: "https://readdy.ai/api/search-image?query=Professional%20ABC%20dry%20chemical%20fire%20extinguisher%20with%20red%20metal%20cylinder%20and%20pressure%20gauge%20on%20clean%20white%20background.%20The%20extinguisher%20has%20clear%20labeling%20and%20appears%20new%20and%20well-maintained.%20High-quality%2C%20commercial-grade%20fire%20safety%20equipment%20with%20detailed%20pressure%20gauge%20and%20safety%20pin%20visible.&width=400&height=300&seq=equip1&orientation=landscape",
    description: "10 lb capacity, UL rated 4-A:80-B:C",
    price: "199.99",
    specs: [
      "Capacity: 10 lbs",
      "UL Rating: 4-A:80-B:C",
      "Operating Pressure: 195 PSI",
      "Discharge Time: 10-15 seconds",
      "Operating Temperature: -40°F to 120°F"
    ]
  },
  {
    id: 2,
    name: "CO2 Fire Extinguisher",
    category: "extinguishers",
    image: "https://readdy.ai/api/search-image?query=CO2%20fire%20extinguisher%20with%20black%20hose%20and%20horn%20nozzle%20on%20white%20background.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling%20and%20pressure%20gauge.%20Commercial-grade%20extinguisher%20designed%20for%20electrical%20fires%20with%20detailed%20safety%20features%20visible.&width=400&height=300&seq=equip2&orientation=landscape",
    description: "10 lb capacity, Class B:C rated",
    price: "$249.99",
    specs: [
      "Capacity: 10 lbs",
      "Class Rating: B:C",
      "Operating Pressure: 850 PSI",
      "Discharge Time: 8-10 seconds",
      "Operating Temperature: -40°F to 120°F"
    ]
  },
  {
    id: 3,
    name: "Water Mist Extinguisher",
    category: "extinguishers",
    image: "https://readdy.ai/api/search-image?query=Water%20mist%20fire%20extinguisher%20with%20modern%20design%20and%20clear%20labeling.%20Professional%20fire%20safety%20equipment%20with%20pressure%20gauge%20and%20safety%20features.%20Commercial-grade%20extinguisher%20suitable%20for%20multiple%20fire%20classes.&width=400&height=300&seq=equip3&orientation=landscape",
    description: "6L capacity, Class A:C rated",
    price: "$299.99",
    specs: [
      "Capacity: 6L",
      "Class Rating: A:C",
      "Operating Pressure: 145 PSI",
      "Discharge Time: 12-15 seconds",
      "Operating Temperature: -40°F to 120°F"
    ]
  },
  {
    id: 4,
    name: "Wheeled Fire Extinguisher",
    category: "extinguishers",
    image: "https://readdy.ai/api/search-image?query=Large%20wheeled%20fire%20extinguisher%20with%20sturdy%20frame%20and%20hose.%20Professional%20industrial%20fire%20safety%20equipment%20with%20clear%20labeling%20and%20pressure%20gauge.%20Commercial-grade%20extinguisher%20designed%20for%20large%20spaces.&width=400&height=300&seq=equip4&orientation=landscape",
    description: "50 lb capacity, UL rated 20-A:120-B:C",
    price: "$599.99",
    specs: [
      "Capacity: 50 lbs",
      "UL Rating: 20-A:120-B:C",
      "Operating Pressure: 195 PSI",
      "Discharge Time: 30-35 seconds",
      "Operating Temperature: -40°F to 120°F"
    ]
  },
  // Alarm Systems
  {
    id: 5,
    name: "Addressable Fire Alarm Panel",
    category: "alarms",
    image: "https://readdy.ai/api/search-image?query=Modern%20addressable%20fire%20alarm%20control%20panel%20with%20LCD%20display%20and%20LED%20indicators.%20Professional%20fire%20safety%20equipment%20with%20multiple%20zones%20and%20advanced%20features.%20Commercial-grade%20system%20with%20clear%20labeling.&width=400&height=300&seq=equip5&orientation=landscape",
    description: "64 zones, LCD display, networkable",
    price: "$1,499.99",
    specs: [
      "Zones: 64",
      "Display: 7\" LCD",
      "Network: Ethernet",
      "Battery Backup: 24 hours",
      "Certification: UL/ULC Listed"
    ]
  },
  {
    id: 6,
    name: "Smoke Detector",
    category: "alarms",
    image: "https://readdy.ai/api/search-image?query=Photoelectric%20smoke%20detector%20with%20LED%20indicator%20and%20test%20button.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20detector%20with%20advanced%20sensing%20technology.&width=400&height=300&seq=equip6&orientation=landscape",
    description: "Photoelectric sensor, 10-year battery",
    price: "$49.99",
    specs: [
      "Sensor Type: Photoelectric",
      "Battery Life: 10 years",
      "Interconnect: Yes",
      "Test Button: Yes",
      "Certification: UL/ULC Listed"
    ]
  },
  // Sprinkler Systems
  {
    id: 7,
    name: "Upright Sprinkler Head",
    category: "sprinklers",
    image: "https://readdy.ai/api/search-image?query=Upright%20fire%20sprinkler%20head%20with%20brass%20body%20and%20glass%20bulb.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20sprinkler%20with%20standard%20thread%20connection.&width=400&height=300&seq=equip7&orientation=landscape",
    description: "K5.6, 155°F, brass construction",
    price: "$24.99",
    specs: [
      "K-Factor: 5.6",
      "Temperature Rating: 155°F",
      "Construction: Brass",
      "Thread: 1/2\" NPT",
      "Certification: UL/ULC Listed"
    ]
  },
  {
    id: 8,
    name: "Pendent Sprinkler Head",
    category: "sprinklers",
    image: "https://readdy.ai/api/search-image?query=Pendent%20fire%20sprinkler%20head%20with%20brass%20body%20and%20glass%20bulb.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20sprinkler%20with%20standard%20thread%20connection.&width=400&height=300&seq=equip8&orientation=landscape",
    description: "K5.6, 165°F, brass construction",
    price: "$26.99",
    specs: [
      "K-Factor: 5.6",
      "Temperature Rating: 165°F",
      "Construction: Brass",
      "Thread: 1/2\" NPT",
      "Certification: UL/ULC Listed"
    ]
  },
  // Detection Devices
  {
    id: 9,
    name: "Heat Detector",
    category: "detection",
    image: "https://readdy.ai/api/search-image?query=Fixed%20temperature%20heat%20detector%20with%20LED%20indicator%20and%20test%20button.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20detector%20with%20advanced%20sensing%20technology.&width=400&height=300&seq=equip9&orientation=landscape",
    description: "Fixed temperature, 135°F",
    price: "$39.99",
    specs: [
      "Type: Fixed Temperature",
      "Temperature: 135°F",
      "Response Time: < 30 seconds",
      "Interconnect: Yes",
      "Certification: UL/ULC Listed"
    ]
  },
  {
    id: 10,
    name: "Carbon Monoxide Detector",
    category: "detection",
    image: "https://readdy.ai/api/search-image?query=Carbon%20monoxide%20detector%20with%20digital%20display%20and%20LED%20indicators.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20detector%20with%20advanced%20sensing%20technology.&width=400&height=300&seq=equip10&orientation=landscape",
    description: "Digital display, 10-year battery",
    price: "$59.99",
    specs: [
      "Sensor Type: Electrochemical",
      "Battery Life: 10 years",
      "Display: Digital",
      "Alarm: 85dB",
      "Certification: UL/ULC Listed"
    ]
  },
  // Suppression Systems
  {
    id: 11,
    name: "Clean Agent System",
    category: "suppression",
    image: "https://readdy.ai/api/search-image?query=Clean%20agent%20fire%20suppression%20system%20with%20control%20panel%20and%20nozzles.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20system%20with%20advanced%20features.&width=400&height=300&seq=equip11&orientation=landscape",
    description: "FM-200, 100lb capacity",
    price: "$4,999.99",
    specs: [
      "Agent: FM-200",
      "Capacity: 100 lbs",
      "Nozzles: 4",
      "Control Panel: Digital",
      "Certification: UL/ULC Listed"
    ]
  },
  {
    id: 12,
    name: "Kitchen Hood System",
    category: "suppression",
    image: "https://readdy.ai/api/search-image?query=Kitchen%20hood%20fire%20suppression%20system%20with%20nozzles%20and%20control%20panel.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20system%20with%20advanced%20features.&width=400&height=300&seq=equip12&orientation=landscape",
    description: "Wet chemical, 6 nozzles",
    price: "$3,499.99",
    specs: [
      "Agent: Wet Chemical",
      "Nozzles: 6",
      "Tank: 6 gallons",
      "Control Panel: Digital",
      "Certification: UL/ULC Listed"
    ]
  },
  // Emergency Lighting
  {
    id: 13,
    name: "Emergency Exit Light",
    category: "emergency",
    image: "https://readdy.ai/api/search-image?query=Emergency%20exit%20light%20with%20LED%20indicators%20and%20battery%20backup.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20light%20with%20advanced%20features.&width=400&height=300&seq=equip13&orientation=landscape",
    description: "LED, 90-minute battery",
    price: "$89.99",
    specs: [
      "Type: LED",
      "Battery: 90 minutes",
      "Mounting: Wall/Ceiling",
      "Voltage: 120V",
      "Certification: UL/ULC Listed"
    ]
  },
  {
    id: 14,
    name: "Emergency Flood Light",
    category: "emergency",
    image: "https://readdy.ai/api/search-image?query=Emergency%20flood%20light%20with%20LED%20array%20and%20battery%20backup.%20Professional%20fire%20safety%20equipment%20with%20clear%20labeling.%20Commercial-grade%20light%20with%20advanced%20features.&width=400&height=300&seq=equip14&orientation=landscape",
    description: "LED, 3-hour battery",
    price: "$149.99",
    specs: [
      "Type: LED",
      "Battery: 3 hours",
      "Mounting: Wall/Ceiling",
      "Voltage: 120V",
      "Certification: UL/ULC Listed"
    ]
  }
];

export default products; 