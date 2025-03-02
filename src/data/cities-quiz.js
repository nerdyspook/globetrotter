const citiesQuizData = [
  // =====================
  // CHECKPOINT 1 (Original 20 entries, all unique)
  // =====================
  {
    city: "Mumbai",
    country: "India",
    clues: [
      "Coastal metropolis with an iconic arch monument.",
      "Known for its film industry and diverse street food.",
    ],
    fun_fact: [
      "Built on seven islands; home to Bollywood.",
      "Its local trains transport millions daily.",
    ],
    trivia: [
      "The Gateway of India is a famous landmark.",
      "Mumbai never sleeps, bustling 24/7.",
    ],
    prompt:
      "Which Indian city, built on seven islands and famous for Bollywood, is a major financial hub on the west coast?",
    options: ["Mumbai", "Chennai", "Kolkata", "Pune"],
    correctAnswer: "Mumbai",
    checkpoint: 1,
  },
  {
    city: "Delhi",
    country: "India",
    clues: [
      "A mix of ancient monuments and modern infrastructure.",
      "Capital of India with diverse street bazaars.",
    ],
    fun_fact: [
      "Red Fort is a UNESCO World Heritage Site.",
      "Street food varieties are globally renowned.",
    ],
    trivia: [
      "One of the oldest continuously inhabited cities.",
      "Hosts historic mosques and colonial buildings.",
    ],
    prompt:
      "Which city, known for its Red Fort and bustling bazaars, is the political capital of India?",
    options: ["Delhi", "Mumbai", "Jaipur", "Chennai"],
    correctAnswer: "Delhi",
    checkpoint: 1,
  },
  {
    city: "Bangalore",
    country: "India",
    clues: [
      "City with moderate climate and lush parks.",
      "Major hub for IT and startups.",
    ],
    fun_fact: [
      "Called the 'Silicon Valley of India'.",
      "Renowned for innovation and research centers.",
    ],
    trivia: [
      "Has a vibrant pub culture.",
      "Tech festivals are hosted annually.",
    ],
    prompt:
      "Which Indian city, renowned for its green parks and booming IT sector, is considered the tech capital of India?",
    options: ["Bangalore", "Hyderabad", "Pune", "Chennai"],
    correctAnswer: "Bangalore",
    checkpoint: 1,
  },
  {
    city: "Chennai",
    country: "India",
    clues: [
      "Coastal city with one of the longest urban beaches.",
      "Center for classical dance and Carnatic music.",
    ],
    fun_fact: [
      "Marina Beach is among the world’s longest.",
      "Renowned for its ancient temples.",
    ],
    trivia: [
      "A major hub for the Tamil film industry.",
      "Famous for dosas and filter coffee.",
    ],
    prompt:
      "Which coastal city, known for its long beach and classical arts, is a cultural capital in South India?",
    options: ["Chennai", "Kochi", "Mumbai", "Hyderabad"],
    correctAnswer: "Chennai",
    checkpoint: 1,
  },
  {
    city: "Hyderabad",
    country: "India",
    clues: [
      "Famous for its biryani and historic monuments.",
      "Mix of ancient heritage and a booming IT industry.",
    ],
    fun_fact: [
      "Called the 'City of Pearls'; Charminar is iconic.",
      "Key center for both cuisine and technology.",
    ],
    trivia: [
      "Once the seat of Qutb Shahi dynasty.",
      "Houses many multinational IT campuses.",
    ],
    prompt:
      "Which city, nicknamed the 'City of Pearls' and renowned for biryani, is home to the iconic Charminar?",
    options: ["Hyderabad", "Bangalore", "Ahmedabad", "Chennai"],
    correctAnswer: "Hyderabad",
    checkpoint: 1,
  },
  {
    city: "Kolkata",
    country: "India",
    clues: [
      "Known for literary and artistic heritage.",
      "Features colonial architecture and old trams.",
    ],
    fun_fact: [
      "Hosts the grand Durga Puja festival.",
      "Considered India’s cultural capital.",
    ],
    trivia: [
      "Rich history of intellectual movements.",
      "Beloved street food culture thrives here.",
    ],
    prompt:
      "Which city, famed for its literary heritage and trams, is often deemed the cultural capital of India?",
    options: ["Kolkata", "Delhi", "Mumbai", "Chennai"],
    correctAnswer: "Kolkata",
    checkpoint: 1,
  },
  {
    city: "Pune",
    country: "India",
    clues: [
      "Known for educational institutions and pleasant weather.",
      "Once played a significant role in the freedom movement.",
    ],
    fun_fact: [
      "Often called the 'Oxford of the East'.",
      "Has a large student population.",
    ],
    trivia: [
      "Blends tradition and modernity seamlessly.",
      "Hosts academic and cultural festivals.",
    ],
    prompt:
      "Which Indian city, famed for its colleges and historically known for activism, is nicknamed the 'Oxford of the East'?",
    options: ["Pune", "Mumbai", "Bangalore", "Ahmedabad"],
    correctAnswer: "Pune",
    checkpoint: 1,
  },
  {
    city: "Ahmedabad",
    country: "India",
    clues: [
      "Famous for textiles and historical landmarks.",
      "Associated with a notable freedom fighter.",
    ],
    fun_fact: [
      "Home to Mahatma Gandhi’s Sabarmati Ashram.",
      "One of India’s first industrialized cities.",
    ],
    trivia: [
      "City’s culture is evident in its architecture and cuisine.",
      "Major center for trade in western India.",
    ],
    prompt:
      "Which city, known for its textile heritage and connection to Mahatma Gandhi, is a major hub in Gujarat?",
    options: ["Ahmedabad", "Jaipur", "Surat", "Rajkot"],
    correctAnswer: "Ahmedabad",
    checkpoint: 1,
  },
  {
    city: "Jaipur",
    country: "India",
    clues: [
      "Often called the 'Pink City' for its building color.",
      "Famous for majestic forts and palaces.",
    ],
    fun_fact: [
      "Jaipur was one of India’s earliest planned cities.",
      "Hawa Mahal and Amber Fort are notable attractions.",
    ],
    trivia: [
      "Top tourist destination in Rajasthan.",
      "Known for handicrafts and jewelry.",
    ],
    prompt:
      "Which city, known for its pink-colored architecture and imposing forts, is a major tourist hub in Rajasthan?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    correctAnswer: "Jaipur",
    checkpoint: 1,
  },
  {
    city: "Surat",
    country: "India",
    clues: [
      "Fast-growing city with a strong textile sector.",
      "Also famed for diamond cutting and polishing.",
    ],
    fun_fact: [
      "One of the fastest-growing cities in the world.",
      "Has a history as an ancient port city.",
    ],
    trivia: [
      "Attracts traders from around the globe.",
      "Crucial to India’s textile and gems industries.",
    ],
    prompt:
      "Which city, known for its textile and diamond industries, has seen rapid economic growth in recent decades?",
    options: ["Surat", "Ahmedabad", "Mumbai", "Pune"],
    correctAnswer: "Surat",
    checkpoint: 1,
  },
  {
    city: "Lucknow",
    country: "India",
    clues: [
      "Renowned for refined culture and delectable cuisine.",
      "Features architecture from the Nawabi era.",
    ],
    fun_fact: [
      "Famous for chikankari embroidery.",
      "Long tradition of Urdu poetry and music.",
    ],
    trivia: [
      "Culinary traditions are celebrated nationwide.",
      "A cultural jewel in north India.",
    ],
    prompt:
      "Which city, known for its Nawabi culture and exquisite embroidery, is a cultural gem of northern India?",
    options: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    correctAnswer: "Lucknow",
    checkpoint: 1,
  },
  {
    city: "Varanasi",
    country: "India",
    clues: [
      "One of the oldest continuously inhabited cities.",
      "Famous for sacred ghats and spiritual rituals.",
    ],
    fun_fact: [
      "Major pilgrimage site for Hindus on the Ganges.",
      "Its evening aarti is world-renowned.",
    ],
    trivia: [
      "Inspiration for countless poets and philosophers.",
      "Prominent in religious tourism.",
    ],
    prompt:
      "Which city, known for its sacred river ghats and timeless spiritual traditions, is one of India’s oldest inhabited places?",
    options: ["Varanasi", "Patna", "Lucknow", "Ranchi"],
    correctAnswer: "Varanasi",
    checkpoint: 1,
  },
  {
    city: "Agra",
    country: "India",
    clues: [
      "Home to one of the most famous monuments in the world.",
      "Features Mughal-era architectural masterpieces.",
    ],
    fun_fact: [
      "Best known for the Taj Mahal.",
      "Once the capital of the Mughal Empire.",
    ],
    trivia: [
      "Major destination for history enthusiasts.",
      "Its marble monuments are celebrated globally.",
    ],
    prompt:
      "Which city is synonymous with the magnificent white marble mausoleum known as the Taj Mahal?",
    options: ["Agra", "Jaipur", "Delhi", "Lucknow"],
    correctAnswer: "Agra",
    checkpoint: 1,
  },
  {
    city: "Indore",
    country: "India",
    clues: [
      "Celebrated for cleanliness and vibrant street food.",
      "Major commercial hub in central India.",
    ],
    fun_fact: [
      "Repeatedly awarded as one of India’s cleanest cities.",
      "Street food here is famously delicious.",
    ],
    trivia: [
      "Blends modern malls with traditional markets.",
      "Key trade center in Madhya Pradesh.",
    ],
    prompt:
      "Which city, famous for impeccable cleanliness and renowned street food, is a commercial center in central India?",
    options: ["Indore", "Bhopal", "Nagpur", "Kanpur"],
    correctAnswer: "Indore",
    checkpoint: 1,
  },
  {
    city: "Bhopal",
    country: "India",
    clues: [
      "Known as the 'City of Lakes' with a blend of history and nature.",
      "Features palaces and ancient mosques.",
    ],
    fun_fact: [
      "Has several man-made lakes adding to its charm.",
      "Rich in both historical and natural attractions.",
    ],
    trivia: [
      "Center for arts and cultural festivals.",
      "Unique mix of Hindu and Islamic architecture.",
    ],
    prompt:
      "Which city, famously called the 'City of Lakes', showcases a rich mix of historical architecture and scenic beauty?",
    options: ["Bhopal", "Indore", "Nagpur", "Patna"],
    correctAnswer: "Bhopal",
    checkpoint: 1,
  },
  {
    city: "Patna",
    country: "India",
    clues: [
      "Steeped in ancient history, once center of powerful empires.",
      "Known for educational institutions and cultural heritage.",
    ],
    fun_fact: [
      "Lies on the banks of the Ganges; was once part of the Magadha empire.",
      "Has hosted many historical dynasties.",
    ],
    trivia: [
      "Major commercial hub in eastern India.",
      "Home to multiple museums and historical sites.",
    ],
    prompt:
      "Which ancient city on the Ganges was once the seat of the Magadha empire and remains a key hub in eastern India?",
    options: ["Patna", "Varanasi", "Lucknow", "Ranchi"],
    correctAnswer: "Patna",
    checkpoint: 1,
  },
  {
    city: "Kanpur",
    country: "India",
    clues: [
      "Industrial city known for leather and textile industries.",
      "Significant during British colonial era.",
    ],
    fun_fact: [
      "Was once dubbed the 'Manchester of India'.",
      "Has a longstanding industrial heritage.",
    ],
    trivia: [
      "Major center for manufacturing and trade.",
      "Holds historical landmarks from colonial times.",
    ],
    prompt:
      "Which city, recognized for robust leather and textile industries, earned the nickname 'Manchester of India'?",
    options: ["Kanpur", "Agra", "Lucknow", "Patna"],
    correctAnswer: "Kanpur",
    checkpoint: 1,
  },
  {
    city: "Nagpur",
    country: "India",
    clues: [
      "Known for oranges and central location.",
      "Key trade center in the heart of India.",
    ],
    fun_fact: [
      "Often considered the geographical center of India.",
      "Famed for its juicy oranges.",
    ],
    trivia: [
      "Plays an important role in commerce.",
      "Has a blend of modern amenities and traditional markets.",
    ],
    prompt:
      "Which city, celebrated for its oranges and central geographic position, is a major trading hub in India?",
    options: ["Nagpur", "Pune", "Indore", "Bhopal"],
    correctAnswer: "Nagpur",
    checkpoint: 1,
  },
  {
    city: "Coimbatore",
    country: "India",
    clues: [
      "Recognized for its textile production and pleasant weather.",
      "Prominent commercial and educational center in South India.",
    ],
    fun_fact: [
      "Called the 'Manchester of South India'.",
      "Booming industrial and entrepreneurial culture.",
    ],
    trivia: [
      "Known for handloom and cotton markets.",
      "Gateway to the Nilgiri hills.",
    ],
    prompt:
      "Which South Indian city, famed for its textile industry and cool climate, is often referred to as the 'Manchester of South India'?",
    options: ["Coimbatore", "Chennai", "Madurai", "Trichy"],
    correctAnswer: "Coimbatore",
    checkpoint: 1,
  },
  {
    city: "Kochi",
    country: "India",
    clues: [
      "Blend of modernity and colonial heritage on the southwest coast.",
      "Famous for historic spice markets and vibrant art scene.",
    ],
    fun_fact: [
      "Major trading port, sometimes called 'Queen of the Arabian Sea'.",
      "Influenced by Portuguese, Dutch, and British.",
    ],
    trivia: [
      "Cultural festivals attract global visitors.",
      "Fusion of ancient spice trade and modern arts.",
    ],
    prompt:
      "Which coastal city, known for spice markets and a rich colonial past, is often called the 'Queen of the Arabian Sea'?",
    options: ["Kochi", "Kozhikode", "Thiruvananthapuram", "Kollam"],
    correctAnswer: "Kochi",
    checkpoint: 1,
  },
  // =====================
  // CHECKPOINT 1 (Additional 30 entries for Indian cities)
  // =====================
  {
    city: "Chandigarh",
    country: "India",
    clues: [
      "Known for its modern architecture and green spaces.",
      "One of the earliest planned cities in post-independence India.",
    ],
    fun_fact: [
      "Designed by renowned architect Le Corbusier.",
      "Famous for its rock garden and well-organized sectors.",
    ],
    trivia: [
      "Often cited as one of the cleanest cities in India.",
      "Its urban planning is studied worldwide.",
    ],
    prompt:
      "Which Indian city, designed by Le Corbusier, is known for its sector-based layout and modern architecture?",
    options: ["Chandigarh", "Pune", "Mumbai", "Hyderabad"],
    correctAnswer: "Chandigarh",
    checkpoint: 1,
  },
  {
    city: "Vadodara",
    country: "India",
    clues: [
      "Known for its palaces and rich history of Maharajas.",
      "A cultural hub in the state of Gujarat.",
    ],
    fun_fact: [
      "Home to the Laxmi Vilas Palace, one of the largest private residences.",
      "Famed for its art and sculpture museums.",
    ],
    trivia: [
      "Vibrant festival culture celebrates music and art.",
      "Renowned for its prestigious educational institutions.",
    ],
    prompt:
      "Which Gujarati city is celebrated for its majestic Laxmi Vilas Palace and cultural heritage?",
    options: ["Vadodara", "Ahmedabad", "Surat", "Rajkot"],
    correctAnswer: "Vadodara",
    checkpoint: 1,
  },
  {
    city: "Rajkot",
    country: "India",
    clues: [
      "An important industrial and educational center in Gujarat.",
      "Known for its association with Mahatma Gandhi.",
    ],
    fun_fact: [
      "Once served as the capital of the princely state of Rajkot.",
      "A key center for the textile and manufacturing industry.",
    ],
    trivia: [
      "Famous for its vibrant local markets and handicrafts.",
      "Holds annual cultural and trade festivals.",
    ],
    prompt:
      "Which city in Gujarat, linked to Mahatma Gandhi and known for its textile industry, was once a princely state capital?",
    options: ["Rajkot", "Vadodara", "Surat", "Gandhinagar"],
    correctAnswer: "Rajkot",
    checkpoint: 1,
  },
  {
    city: "Guwahati",
    country: "India",
    clues: [
      "The gateway to Northeast India, nestled along the Brahmaputra River.",
      "A major riverine and cultural city in Assam.",
    ],
    fun_fact: [
      "Famous for the Kamakhya Temple, a significant pilgrimage site.",
      "Hosts diverse festivals celebrating indigenous traditions.",
    ],
    trivia: [
      "A major commercial center of the northeastern region.",
      "Serves as a hub for river cruises and wildlife sanctuaries nearby.",
    ],
    prompt:
      "Which city in Assam, situated on the Brahmaputra and known for Kamakhya Temple, is considered the gateway to Northeast India?",
    options: ["Guwahati", "Imphal", "Agartala", "Shillong"],
    correctAnswer: "Guwahati",
    checkpoint: 1,
  },
  {
    city: "Madurai",
    country: "India",
    clues: [
      "Ancient city known for its grand temples and cultural heritage.",
      "A key center of Tamil culture in southern India.",
    ],
    fun_fact: [
      "Home to the iconic Meenakshi Amman Temple.",
      "Celebrated for its traditional arts and religious festivals.",
    ],
    trivia: [
      "Has been a significant cultural hub for over two millennia.",
      "Famous for its vibrant street markets and culinary traditions.",
    ],
    prompt:
      "Which Tamil city, renowned for the Meenakshi Amman Temple and rich cultural history, is a major pilgrimage site?",
    options: ["Madurai", "Chennai", "Coimbatore", "Trichy"],
    correctAnswer: "Madurai",
    checkpoint: 1,
  },
  {
    city: "Tiruchirappalli",
    country: "India",
    clues: [
      "Historic city with impressive temples and forts.",
      "Known for its rock-cut architecture and heritage sites.",
    ],
    fun_fact: [
      "Famous for the Ranganathaswamy Temple at Srirangam.",
      "Historically significant in South Indian kingdoms.",
    ],
    trivia: [
      "Often referred to as Trichy by locals.",
      "A center for education and engineering institutions.",
    ],
    prompt:
      "Which South Indian city, often called Trichy, is renowned for the Ranganathaswamy Temple and ancient fort structures?",
    options: ["Tiruchirappalli", "Madurai", "Chennai", "Coimbatore"],
    correctAnswer: "Tiruchirappalli",
    checkpoint: 1,
  },
  {
    city: "Nashik",
    country: "India",
    clues: [
      "Ancient city known for its religious significance and vineyards.",
      "Located in Maharashtra along the Godavari River.",
    ],
    fun_fact: [
      "Hosts the Kumbh Mela, one of the world's largest religious gatherings.",
      "Renowned for its winemaking industry.",
    ],
    trivia: [
      "An important pilgrimage site for Hindus.",
      "Famous for its blend of spirituality and modern industry.",
    ],
    prompt:
      "Which city in Maharashtra, known for the Kumbh Mela and its vineyards, is an important pilgrimage center?",
    options: ["Nashik", "Pune", "Mumbai", "Aurangabad"],
    correctAnswer: "Nashik",
    checkpoint: 1,
  },
  {
    city: "Amritsar",
    country: "India",
    clues: [
      "Home to a sacred Sikh shrine with golden architecture.",
      "A spiritual and cultural center in Punjab.",
    ],
    fun_fact: [
      "Houses the Golden Temple, one of Sikhism's holiest sites.",
      "Famous for its langar (community kitchen) serving thousands daily.",
    ],
    trivia: [
      "An important symbol of Sikh heritage.",
      "A destination for pilgrims and tourists alike.",
    ],
    prompt:
      "Which Punjabi city is renowned for the Golden Temple and its community kitchen serving millions?",
    options: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
    correctAnswer: "Amritsar",
    checkpoint: 1,
  },
  {
    city: "Prayagraj",
    country: "India",
    clues: [
      "Historically known as Allahabad, situated at a river confluence.",
      "A city of immense religious significance.",
    ],
    fun_fact: [
      "Hosts the Kumbh Mela at the confluence of the Ganges, Yamuna, and Saraswati rivers.",
      "Renowned for its ancient temples and cultural legacy.",
    ],
    trivia: [
      "Played a central role in India's independence movement.",
      "A hub for education and spiritual gatherings.",
    ],
    prompt:
      "Which city, formerly known as Allahabad, is famed for hosting the Kumbh Mela at the sacred river confluence?",
    options: ["Prayagraj", "Varanasi", "Lucknow", "Patna"],
    correctAnswer: "Prayagraj",
    checkpoint: 1,
  },
  {
    city: "Thiruvananthapuram",
    country: "India",
    clues: [
      "Capital of Kerala, known for its scenic coastal and hilltop views.",
      "Rich in cultural and historical landmarks.",
    ],
    fun_fact: [
      "Home to the famous Padmanabhaswamy Temple.",
      "Renowned for its blend of tradition and modernity.",
    ],
    trivia: [
      "A center for education and research in South India.",
      "Popular for its picturesque beaches and backwaters.",
    ],
    prompt:
      "Which city, serving as the capital of Kerala and famous for Padmanabhaswamy Temple, is a blend of tradition and modernity?",
    options: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kannur"],
    correctAnswer: "Thiruvananthapuram",
    checkpoint: 1,
  },
  {
    city: "Dehradun",
    country: "India",
    clues: [
      "Nestled in the foothills of the Himalayas.",
      "A gateway to hill stations and adventure tourism.",
    ],
    fun_fact: [
      "Known for its pleasant climate and lush landscapes.",
      "Home to prestigious educational institutions.",
    ],
    trivia: [
      "Popular for trekking and nature excursions.",
      "Often referred to as the 'School Capital of India'.",
    ],
    prompt:
      "Which Himalayan city, known for its educational institutions and scenic beauty, is a popular gateway to adventure tourism?",
    options: ["Dehradun", "Shimla", "Manali", "Mussoorie"],
    correctAnswer: "Dehradun",
    checkpoint: 1,
  },
  {
    city: "Raipur",
    country: "India",
    clues: [
      "A rapidly developing commercial and industrial hub in central India.",
      "Known for its rich mineral resources and modern infrastructure.",
    ],
    fun_fact: [
      "Capital of the state of Chhattisgarh.",
      "Famous for its vibrant local markets and traditional crafts.",
    ],
    trivia: [
      "A key center for power and steel production.",
      "Blends modern industry with tribal cultural influences.",
    ],
    prompt:
      "Which central Indian city, serving as the capital of Chhattisgarh, is known for its industrial growth and rich cultural heritage?",
    options: ["Raipur", "Bhilai", "Nagpur", "Ranchi"],
    correctAnswer: "Raipur",
    checkpoint: 1,
  },
  {
    city: "Aurangabad",
    country: "India",
    clues: [
      "Famous for its proximity to ancient caves and historic monuments.",
      "A cultural hub in Maharashtra with rich Mughal history.",
    ],
    fun_fact: [
      "Gateway to the Ajanta and Ellora Caves.",
      "Once served as an important trading center on the Silk Road.",
    ],
    trivia: [
      "Celebrated for its ancient rock-cut architecture.",
      "Home to numerous historical palaces and mosques.",
    ],
    prompt:
      "Which Maharashtra city is renowned as the gateway to the Ajanta and Ellora Caves and rich in Mughal heritage?",
    options: ["Aurangabad", "Nashik", "Pune", "Mumbai"],
    correctAnswer: "Aurangabad",
    checkpoint: 1,
  },
  {
    city: "Vijayawada",
    country: "India",
    clues: [
      "A bustling commercial hub located on the banks of the Krishna River.",
      "Known for its historic temples and rapid urban growth.",
    ],
    fun_fact: [
      "Famous for the Kanaka Durga Temple.",
      "A major center for trade and industry in Andhra Pradesh.",
    ],
    trivia: [
      "Renowned for its strategic location and transport connectivity.",
      "Hosts numerous cultural and religious festivals.",
    ],
    prompt:
      "Which Andhra Pradesh city, celebrated for the Kanaka Durga Temple and its commercial vibrancy, lies on the Krishna River?",
    options: ["Vijayawada", "Visakhapatnam", "Hyderabad", "Chennai"],
    correctAnswer: "Vijayawada",
    checkpoint: 1,
  },
  {
    city: "Visakhapatnam",
    country: "India",
    clues: [
      "A coastal city known for its scenic beaches and port.",
      "A major industrial center in Andhra Pradesh.",
    ],
    fun_fact: [
      "Nicknamed the 'Jewel of the East Coast'.",
      "Home to one of India’s busiest seaports.",
    ],
    trivia: [
      "Popular for its naval base and maritime heritage.",
      "Hosts several annual cultural and trade festivals.",
    ],
    prompt:
      "Which coastal city in Andhra Pradesh, known as the 'Jewel of the East Coast', is famous for its busy seaport?",
    options: ["Visakhapatnam", "Vijayawada", "Chennai", "Kolkata"],
    correctAnswer: "Visakhapatnam",
    checkpoint: 1,
  },
  {
    city: "Jodhpur",
    country: "India",
    clues: [
      "Often known as the 'Blue City' due to its vibrant blue houses.",
      "Famous for its imposing forts and palaces in Rajasthan.",
    ],
    fun_fact: [
      "Home to the majestic Mehrangarh Fort.",
      "Renowned for its handicrafts and traditional textiles.",
    ],
    trivia: [
      "A popular tourist destination in the desert state of Rajasthan.",
      "Celebrated for its rich cultural and architectural heritage.",
    ],
    prompt:
      "Which Rajasthani city, famously known as the 'Blue City' and home to Mehrangarh Fort, is a major cultural attraction?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Jaisalmer"],
    correctAnswer: "Jodhpur",
    checkpoint: 1,
  },
  {
    city: "Udaipur",
    country: "India",
    clues: [
      "Known as the 'City of Lakes' due to its picturesque water bodies.",
      "Famous for its royal palaces and scenic beauty.",
    ],
    fun_fact: [
      "Home to the iconic Lake Pichola and City Palace.",
      "Often dubbed as one of the most romantic cities in India.",
    ],
    trivia: [
      "A major center for art and cultural festivals.",
      "Attracts tourists with its boat rides and sunset views.",
    ],
    prompt:
      "Which city in Rajasthan, celebrated for its beautiful lakes and regal palaces, is often called the 'City of Lakes'?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Rajasthan"],
    correctAnswer: "Udaipur",
    checkpoint: 1,
  },
  {
    city: "Jamshedpur",
    country: "India",
    clues: [
      "An industrial city known for its steel production and urban planning.",
      "Often referred to as the 'Steel City' of India.",
    ],
    fun_fact: [
      "Founded by industrialist Jamshedji Tata.",
      "Renowned for its well-planned layout and greenery.",
    ],
    trivia: [
      "A pioneer in corporate town planning in India.",
      "Home to several educational and research institutions.",
    ],
    prompt:
      "Which Indian city, established by Jamshedji Tata and known as the 'Steel City', is celebrated for its urban planning?",
    options: ["Jamshedpur", "Ranchi", "Dhanbad", "Bhubaneswar"],
    correctAnswer: "Jamshedpur",
    checkpoint: 1,
  },
  {
    city: "Gwalior",
    country: "India",
    clues: [
      "A historic city in central India known for its majestic fort.",
      "Rich in royal history and classical architecture.",
    ],
    fun_fact: [
      "Famous for the Gwalior Fort and intricate palaces.",
      "Home to several ancient temples and monuments.",
    ],
    trivia: [
      "A center for art and music.",
      "Renowned for its cultural festivals and historical significance.",
    ],
    prompt:
      "Which central Indian city is renowned for its imposing fort and rich royal history?",
    options: ["Gwalior", "Indore", "Bhopal", "Jabalpur"],
    correctAnswer: "Gwalior",
    checkpoint: 1,
  },
  {
    city: "Jabalpur",
    country: "India",
    clues: [
      "Located in Madhya Pradesh, known for its marble rocks and river gorges.",
      "A city blending natural beauty with historical landmarks.",
    ],
    fun_fact: [
      "Famous for the marble rocks of Bhedaghat.",
      "A hub for cultural and historical exploration.",
    ],
    trivia: [
      "Attracts tourists with its scenic riverfront views.",
      "Known for its blend of natural wonders and ancient monuments.",
    ],
    prompt:
      "Which Madhya Pradesh city, noted for the marble rocks of Bhedaghat and river gorges, is a unique blend of nature and history?",
    options: ["Jabalpur", "Bhopal", "Indore", "Raipur"],
    correctAnswer: "Jabalpur",
    checkpoint: 1,
  },
  {
    city: "Dhanbad",
    country: "India",
    clues: [
      "Known as the 'Coal Capital of India' due to its extensive coal mining.",
      "A major industrial hub in Jharkhand.",
    ],
    fun_fact: [
      "Home to vast coal mines and related industries.",
      "Has a significant history in mining and energy production.",
    ],
    trivia: [
      "A key center for coal-based industries in India.",
      "Attracts experts and engineers from across the country.",
    ],
    prompt:
      "Which city, famously dubbed the 'Coal Capital of India', is a major mining and industrial hub in Jharkhand?",
    options: ["Dhanbad", "Jamshedpur", "Ranchi", "Bokaro"],
    correctAnswer: "Dhanbad",
    checkpoint: 1,
  },
  {
    city: "Solapur",
    country: "India",
    clues: [
      "An important center for textile production and agriculture in Maharashtra.",
      "Known for its distinctive woven fabrics.",
    ],
    fun_fact: [
      "Renowned for its handloom and textile industry.",
      "Hosts numerous fairs celebrating local crafts.",
    ],
    trivia: [
      "A significant trade hub with a rich cultural tapestry.",
      "Famous for its cotton and textile markets.",
    ],
    prompt:
      "Which city in Maharashtra, noted for its vibrant textile industry and handloom products, is a key trade center?",
    options: ["Solapur", "Aurangabad", "Nashik", "Pune"],
    correctAnswer: "Solapur",
    checkpoint: 1,
  },
  {
    city: "Kolhapur",
    country: "India",
    clues: [
      "Known for its historical temples and rich Marathi culture.",
      "A city with deep-rooted traditions and modern development.",
    ],
    fun_fact: [
      "Home to the famous Mahalakshmi Temple.",
      "Renowned for its wrestling traditions and leather goods.",
    ],
    trivia: [
      "A major cultural center in Maharashtra.",
      "Celebrated for its unique blend of history and modernity.",
    ],
    prompt:
      "Which Marathi city is celebrated for the Mahalakshmi Temple and its vibrant cultural traditions?",
    options: ["Kolhapur", "Mumbai", "Pune", "Nagpur"],
    correctAnswer: "Kolhapur",
    checkpoint: 1,
  },
  {
    city: "Siliguri",
    country: "India",
    clues: [
      "A key transit hub in the foothills of the Himalayas.",
      "Gateway to the northeastern states of India.",
    ],
    fun_fact: [
      "Strategically located on the crossroads of international borders.",
      "Known for its tea gardens and vibrant bazaars.",
    ],
    trivia: [
      "An important commercial center in West Bengal.",
      "Serves as a major link to Sikkim and Bhutan.",
    ],
    prompt:
      "Which city, acting as a gateway to Northeast India and known for its tea gardens, is a vital transit hub?",
    options: ["Siliguri", "Darjeeling", "Guwahati", "Shillong"],
    correctAnswer: "Siliguri",
    checkpoint: 1,
  },
  {
    city: "Gandhinagar",
    country: "India",
    clues: [
      "Planned city serving as the capital of Gujarat.",
      "Noted for its green spaces and modern government buildings.",
    ],
    fun_fact: [
      "Named in honor of Mahatma Gandhi.",
      "Famous for its circular road layout and gardens.",
    ],
    trivia: [
      "A center for political and administrative activities in Gujarat.",
      "Hosts annual cultural and political events.",
    ],
    prompt:
      "Which planned city, named after Mahatma Gandhi and known for its green spaces, is the capital of Gujarat?",
    options: ["Gandhinagar", "Vadodara", "Rajkot", "Surat"],
    correctAnswer: "Gandhinagar",
    checkpoint: 1,
  },
  {
    city: "Aligarh",
    country: "India",
    clues: [
      "Known for its prominent educational institutions and historic fort.",
      "A city with a rich legacy in literature and science.",
    ],
    fun_fact: [
      "Home to the famous Aligarh Muslim University.",
      "Renowned for its Mughal-era architecture.",
    ],
    trivia: [
      "A cultural hub with deep historical roots.",
      "Hosts several literary and academic festivals.",
    ],
    prompt:
      "Which Indian city, celebrated for its prestigious university and Mughal heritage, is a center of education and culture?",
    options: ["Aligarh", "Lucknow", "Delhi", "Agra"],
    correctAnswer: "Aligarh",
    checkpoint: 1,
  },
  {
    city: "Jammu",
    country: "India",
    clues: [
      "Known as the 'City of Temples' in the northern region.",
      "An important administrative and cultural center in Jammu & Kashmir.",
    ],
    fun_fact: [
      "Famous for the Raghunath Temple complex.",
      "Holds historical significance as a gateway to the Himalayas.",
    ],
    trivia: [
      "A city rich in religious and cultural traditions.",
      "Hosts vibrant festivals attracting pilgrims.",
    ],
    prompt:
      "Which northern Indian city, often called the 'City of Temples', is a key cultural hub in Jammu & Kashmir?",
    options: ["Jammu", "Srinagar", "Leh", "Shimla"],
    correctAnswer: "Jammu",
    checkpoint: 1,
  },
  {
    city: "Gorakhpur",
    country: "India",
    clues: [
      "Situated in eastern Uttar Pradesh and known for its spiritual significance.",
      "Famous for its historic temple dedicated to Guru Gorakhnath.",
    ],
    fun_fact: [
      "Holds an important place in regional folklore.",
      "Known for its vibrant fairs and cultural events.",
    ],
    trivia: [
      "A center for spirituality and ancient traditions.",
      "Renowned for its historical and cultural legacy.",
    ],
    prompt:
      "Which city in Uttar Pradesh, known for the Gorakhnath Temple and cultural fairs, is an important spiritual center?",
    options: ["Gorakhpur", "Lucknow", "Varanasi", "Agra"],
    correctAnswer: "Gorakhpur",
    checkpoint: 1,
  },
  {
    city: "Gurgaon",
    country: "India",
    clues: [
      "A modern city known for its skyscrapers and IT hubs.",
      "Rapidly emerging as a commercial center near Delhi.",
    ],
    fun_fact: [
      "Often referred to as a leading corporate and tech hub in India.",
      "Famous for its modern infrastructure and luxury malls.",
    ],
    trivia: [
      "A key part of the National Capital Region (NCR).",
      "Home to numerous multinational companies and startups.",
    ],
    prompt:
      "Which city near Delhi, known for its modern skyscrapers and IT sector, has rapidly transformed into a commercial hub?",
    options: ["Gurgaon", "Noida", "Chandigarh", "Ghaziabad"],
    correctAnswer: "Gurgaon",
    checkpoint: 1,
  },
  {
    city: "Srinagar",
    country: "India",
    clues: [
      "Famous for its scenic Dal Lake and traditional houseboats.",
      "A major tourist destination in the Kashmir Valley.",
    ],
    fun_fact: [
      "Renowned for its traditional Kashmiri handicrafts and gardens.",
      "Famous for its shikara rides on Dal Lake.",
    ],
    trivia: [
      "Known for its picturesque landscapes and Mughal gardens.",
      "A symbol of natural beauty in the Himalayas.",
    ],
    prompt:
      "Which city in the Kashmir Valley, celebrated for Dal Lake and its Mughal gardens, is a top tourist destination?",
    options: ["Srinagar", "Kargil", "Leh", "Pahalgam"],
    correctAnswer: "Srinagar",
    checkpoint: 1,
  },
  // =====================
  // CHECKPOINT 2 (Original 19 entries)
  // =====================
  {
    city: "London",
    country: "UK",
    clues: [
      "Famed for royal palaces and modern financial districts.",
      "A global hub of art, theatre, and diverse culture.",
    ],
    fun_fact: [
      "Home to Big Ben and the Tower Bridge.",
      "Has a long history as a world capital.",
    ],
    trivia: [
      "Its West End is a center for theatre.",
      "Multicultural neighborhoods define its vibrant atmosphere.",
    ],
    prompt:
      "Which city, known for landmarks like Big Ben, is the bustling capital of the United Kingdom?",
    options: ["London", "Manchester", "Birmingham", "Edinburgh"],
    correctAnswer: "London",
    checkpoint: 2,
  },
  {
    city: "Paris",
    country: "France",
    clues: [
      "Synonymous with romance, art, and haute couture.",
      "Historic boulevards and celebrated museums.",
    ],
    fun_fact: [
      "Home to the Louvre, one of the world’s largest art museums.",
      "The Eiffel Tower lights up dramatically at night.",
    ],
    trivia: [
      "Has inspired artists and writers for centuries.",
      "Renowned for its culinary and fashion industries.",
    ],
    prompt:
      "Which city, often referred to as the 'City of Light', features the Eiffel Tower and a legendary art museum?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    correctAnswer: "Paris",
    checkpoint: 2,
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "Modern creativity meets poignant history.",
      "Dynamic art scene and influential music culture.",
    ],
    fun_fact: [
      "Once divided by a wall, symbolizing the Cold War.",
      "Now known for dynamic nightlife and creative communities.",
    ],
    trivia: [
      "Art and music festivals are famous across Europe.",
      "Architecture reflects its complex past and modern spirit.",
    ],
    prompt:
      "Which German city, recognized for its diverse art scene and history of division, is the nation's capital?",
    options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    correctAnswer: "Berlin",
    checkpoint: 2,
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "Ancient city filled with ruins and classical architecture.",
      "Center of a historic empire and home to the Vatican.",
    ],
    fun_fact: [
      "Often called the 'Eternal City'.",
      "Colosseum stands as a major historical site.",
    ],
    trivia: [
      "Art and cuisine here influenced global culture.",
      "Vatican City lies within its boundaries.",
    ],
    prompt:
      "Which historic 'Eternal City' in Italy is home to the Colosseum and Vatican City?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome",
    checkpoint: 2,
  },
  {
    city: "Madrid",
    country: "Spain",
    clues: [
      "Vibrant city with art museums and lively plazas.",
      "A mix of historical charm and modern energy.",
    ],
    fun_fact: [
      "Home to the renowned Prado Museum.",
      "Boasts a passionate football culture.",
    ],
    trivia: [
      "Nightlife is celebrated throughout Europe.",
      "Hosts many cultural festivals annually.",
    ],
    prompt:
      "Which Spanish city, known for its art museums and bustling plazas, serves as the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville", "Valencia"],
    correctAnswer: "Madrid",
    checkpoint: 2,
  },
  {
    city: "Toronto",
    country: "Canada",
    clues: [
      "Multicultural city with a towering skyline.",
      "Key center for arts, finance, and education.",
    ],
    fun_fact: [
      "CN Tower was once the world’s tallest free-standing structure.",
      "People from over 200 nationalities live here.",
    ],
    trivia: [
      "Hosts various international film and cultural fests.",
      "Major hub for business and innovation.",
    ],
    prompt:
      "Which Canadian city, recognized for the CN Tower and extreme diversity, is the country’s largest city?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correctAnswer: "Toronto",
    checkpoint: 2,
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "Harbor city known for a famous opera house.",
      "Stunning beaches and vibrant arts scene.",
    ],
    fun_fact: [
      "The Opera House is a UNESCO World Heritage Site.",
      "New Year’s Eve fireworks are globally celebrated.",
    ],
    trivia: [
      "Major center for tourism and outdoor activities.",
      "The harbor is one of the world’s most photographed.",
    ],
    prompt:
      "Which Australian city, home to a landmark Opera House and scenic harbor, is a top global tourist spot?",
    options: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    correctAnswer: "Sydney",
    checkpoint: 2,
  },
  {
    city: "Dubai",
    country: "UAE",
    clues: [
      "Futuristic city known for skyscrapers and luxury shopping.",
      "International business and tourism hub in the Middle East.",
    ],
    fun_fact: [
      "Home to the Burj Khalifa, the world’s tallest building.",
      "Evolved from a small fishing village.",
    ],
    trivia: [
      "Hosts extravagant festivals and sporting events.",
      "Famous for man-made islands and desert safaris.",
    ],
    prompt:
      "Which Middle Eastern city, renowned for record-breaking skyscrapers and rapid transformation, is a global luxury hub?",
    options: ["Dubai", "Doha", "Abu Dhabi", "Riyadh"],
    correctAnswer: "Dubai",
    checkpoint: 2,
  },
  {
    city: "Singapore",
    country: "Singapore",
    clues: [
      "Island city-state with strict cleanliness, efficient transport.",
      "Futuristic skyline meets multicultural neighborhoods.",
    ],
    fun_fact: [
      "A global financial center with advanced urban planning.",
      "Has hawker centers celebrated by Michelin.",
    ],
    trivia: [
      "Known for sustainability and innovation.",
      "Hosts numerous international events yearly.",
    ],
    prompt:
      "Which city-state, famous for immaculate streets and futuristic gardens, is a major financial hub in Asia?",
    options: ["Singapore", "Hong Kong", "Seoul", "Tokyo"],
    correctAnswer: "Singapore",
    checkpoint: 2,
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "Dynamic pop culture meets rich history.",
      "Blends cutting-edge tech with ancient palaces.",
    ],
    fun_fact: [
      "Major center for K-pop and fashion.",
      "Street food markets are a tourist highlight.",
    ],
    trivia: [
      "Home to many royal palaces and museums.",
      "Modern districts attract young professionals.",
    ],
    prompt:
      "Which city, celebrated for K-pop and advanced technology, is the capital of South Korea?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    correctAnswer: "Seoul",
    checkpoint: 2,
  },
  {
    city: "Beijing",
    country: "China",
    clues: [
      "Historic city with imperial heritage and famous landmarks.",
      "Features sprawling palaces and hutongs.",
    ],
    fun_fact: ["Home to the Forbidden City.", "Hosted the 2008 Olympics."],
    trivia: [
      "Center of ancient culture and modern innovation.",
      "Beijing’s cuisine is diverse and globally known.",
    ],
    prompt:
      "Which Chinese city, known for the Forbidden City and centuries of imperial history, is China’s capital?",
    options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    correctAnswer: "Beijing",
    checkpoint: 2,
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "Iconic architecture and deep political history.",
      "Vast public squares and classical arts.",
    ],
    fun_fact: [
      "Red Square is one of the world’s most famous squares.",
      "Central to Russia’s political and cultural life.",
    ],
    trivia: [
      "Rich tradition in ballet and literature.",
      "Many historic cathedrals and museums.",
    ],
    prompt:
      "Which Russian city, home to Red Square and a storied cultural legacy, is the nation’s capital?",
    options: ["Moscow", "Saint Petersburg", "Kiev", "Volgograd"],
    correctAnswer: "Moscow",
    checkpoint: 2,
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "Coastal city famous for carnival and iconic statue.",
      "Beaches and lush mountains in its backdrop.",
    ],
    fun_fact: [
      "Christ the Redeemer overlooks the city.",
      "Hosts one of the world’s largest carnival festivals.",
    ],
    trivia: [
      "Renowned for samba music and dance.",
      "Major international tourist destination.",
    ],
    prompt:
      "Which Brazilian city, known for its carnival and towering Christ the Redeemer statue, symbolizes vibrant culture?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Rio de Janeiro",
    checkpoint: 2,
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "Sprawling metropolis with pre-Columbian and colonial history.",
      "Bustling markets and a vibrant arts scene.",
    ],
    fun_fact: [
      "Built on the ruins of the Aztec capital Tenochtitlán.",
      "One of the largest cities in the Americas.",
    ],
    trivia: [
      "Blend of ancient traditions and modern innovations.",
      "Street tacos are world-renowned.",
    ],
    prompt:
      "Which city, built upon the Aztec capital Tenochtitlán, is the massive capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Cancún"],
    correctAnswer: "Mexico City",
    checkpoint: 2,
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "Straddles Europe and Asia, boasting a rich, layered history.",
      "Famed for bazaars and centuries-old mosques.",
    ],
    fun_fact: [
      "Formerly known as Byzantium and Constantinople.",
      "Major cultural crossroads for centuries.",
    ],
    trivia: [
      "Grand Bazaar is among the largest covered markets.",
      "Fusion of Eastern and Western influences.",
    ],
    prompt:
      "Which historic city, once called Constantinople, physically bridges Europe and Asia?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    correctAnswer: "Istanbul",
    checkpoint: 2,
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "Situated near one of the world’s longest rivers.",
      "Close to monumental pyramids and ancient tombs.",
    ],
    fun_fact: [
      "Near the Giza Pyramid Complex.",
      "Cultural and political center of North Africa.",
    ],
    trivia: [
      "Bustling bazaars and deep-rooted history.",
      "Merges ancient heritage with modern urban life.",
    ],
    prompt:
      "Which Egyptian capital, lying close to the Giza Pyramids, is known for its rich ancient heritage?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo",
    checkpoint: 2,
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "Ornate temples and bustling street markets.",
      "Modern skyscrapers intermixed with tradition.",
    ],
    fun_fact: [
      "Grand Palace is a major tourist draw.",
      "Renowned for its vibrant street food.",
    ],
    trivia: [
      "Gateway to Southeast Asia tourism.",
      "Famously energetic nightlife.",
    ],
    prompt:
      "Which Thai city, revered for its ornate temples and busy street markets, is Thailand’s capital?",
    options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
    correctAnswer: "Bangkok",
    checkpoint: 2,
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    clues: [
      "Modern city known for skyscrapers and diverse culture.",
      "Economic and cultural center of the country.",
    ],
    fun_fact: [
      "Home to the Petronas Twin Towers.",
      "Multicultural influences of Malay, Chinese, and Indian.",
    ],
    trivia: [
      "Hosts vibrant festivals year-round.",
      "Famed for its diverse food scene.",
    ],
    prompt:
      "Which Malaysian city, known for the Petronas Towers and multicultural heritage, is the country’s capital?",
    options: ["Kuala Lumpur", "Singapore", "Jakarta", "Manila"],
    correctAnswer: "Kuala Lumpur",
    checkpoint: 2,
  },
  // =====================
  // CHECKPOINT 2 (Additional 31 entries)
  // =====================
  {
    city: "Los Angeles",
    country: "USA",
    clues: [
      "Famous for its entertainment industry and sunny beaches.",
      "Home to Hollywood and a diverse cultural scene.",
    ],
    fun_fact: [
      "Hosts the iconic Hollywood Sign on a hill.",
      "Known for its sprawling film studios and celebrity culture.",
    ],
    trivia: [
      "A global center for film, television, and music.",
      "Diverse neighborhoods reflect its multicultural heritage.",
    ],
    prompt:
      "Which American city is renowned for Hollywood, its film studios, and iconic sunny beaches?",
    options: ["Los Angeles", "San Francisco", "New York", "Chicago"],
    correctAnswer: "Los Angeles",
    checkpoint: 2,
  },
  {
    city: "San Francisco",
    country: "USA",
    clues: [
      "Known for its iconic Golden Gate Bridge and hilly terrain.",
      "A cultural melting pot with historic neighborhoods.",
    ],
    fun_fact: [
      "Famous for its cable cars and Victorian houses.",
      "Hosts a vibrant tech and arts scene.",
    ],
    trivia: [
      "A major tourist attraction with unique architecture.",
      "Renowned for its liberal community and diverse population.",
    ],
    prompt:
      "Which American city is famous for the Golden Gate Bridge, cable cars, and its steep hills?",
    options: ["San Francisco", "Los Angeles", "Seattle", "Boston"],
    correctAnswer: "San Francisco",
    checkpoint: 2,
  },
  {
    city: "Chicago",
    country: "USA",
    clues: [
      "Known for its striking skyline and deep-dish pizza.",
      "A major center for finance, industry, and culture in the Midwest.",
    ],
    fun_fact: [
      "Home to the Willis (Sears) Tower.",
      "Famous for its influential blues and jazz music scenes.",
    ],
    trivia: [
      "A hub for architecture and innovative urban design.",
      "Hosts several world-class museums and cultural institutions.",
    ],
    prompt:
      "Which Midwestern American city is celebrated for its skyline, deep-dish pizza, and vibrant music scene?",
    options: ["Chicago", "New York", "Boston", "Houston"],
    correctAnswer: "Chicago",
    checkpoint: 2,
  },
  {
    city: "Washington, D.C.",
    country: "USA",
    clues: [
      "The political capital of the United States.",
      "Home to iconic monuments and government institutions.",
    ],
    fun_fact: [
      "Hosts landmarks like the White House and Capitol Building.",
      "Renowned for its extensive museum district.",
    ],
    trivia: [
      "A center for national history and political events.",
      "Features numerous parks and historical memorials.",
    ],
    prompt:
      "Which American city, known for the White House and Capitol Building, serves as the nation's capital?",
    options: ["Washington, D.C.", "New York", "Chicago", "Los Angeles"],
    correctAnswer: "Washington, D.C.",
    checkpoint: 2,
  },
  {
    city: "Boston",
    country: "USA",
    clues: [
      "One of the oldest cities in the United States with rich colonial history.",
      "A hub for education and innovation.",
    ],
    fun_fact: [
      "Home to renowned universities like Harvard and MIT (in nearby Cambridge).",
      "Famous for its role in the American Revolution.",
    ],
    trivia: [
      "Known for its historic Freedom Trail and diverse neighborhoods.",
      "A center for healthcare, education, and culture in New England.",
    ],
    prompt:
      "Which historic American city is known for its colonial heritage, the Freedom Trail, and proximity to top universities?",
    options: ["Boston", "Philadelphia", "New York", "Washington, D.C."],
    correctAnswer: "Boston",
    checkpoint: 2,
  },
  {
    city: "Montreal",
    country: "Canada",
    clues: [
      "A vibrant city known for its European charm and cultural diversity.",
      "Famous for its festivals and culinary scene.",
    ],
    fun_fact: [
      "Bilingual in French and English.",
      "Hosts one of the largest jazz festivals in the world.",
    ],
    trivia: [
      "Renowned for its historic architecture and arts scene.",
      "A major center for film, music, and cuisine in Canada.",
    ],
    prompt:
      "Which Canadian city, known for its European charm and bilingual culture, hosts a famous jazz festival?",
    options: ["Montreal", "Toronto", "Vancouver", "Ottawa"],
    correctAnswer: "Montreal",
    checkpoint: 2,
  },
  {
    city: "Edinburgh",
    country: "UK",
    clues: [
      "Famous for its historic castle and annual festivals.",
      "The capital of Scotland with a rich literary heritage.",
    ],
    fun_fact: [
      "Hosts the Edinburgh Fringe Festival, the world's largest arts festival.",
      "Known for its medieval Old Town and elegant Georgian New Town.",
    ],
    trivia: [
      "A center for literature, arts, and history in the UK.",
      "Rich in folklore and home to iconic landmarks.",
    ],
    prompt:
      "Which Scottish city, renowned for its castle and the Fringe Festival, is known for its historic charm?",
    options: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
    correctAnswer: "Edinburgh",
    checkpoint: 2,
  },
  {
    city: "Dublin",
    country: "Ireland",
    clues: [
      "A lively city with rich literary and musical traditions.",
      "Capital of Ireland, known for its friendly pubs and historic sites.",
    ],
    fun_fact: [
      "Birthplace of famous writers like James Joyce.",
      "Famed for its traditional Irish music and folklore.",
    ],
    trivia: [
      "A center for cultural festivals and historic architecture.",
      "Home to landmarks like Trinity College and Dublin Castle.",
    ],
    prompt:
      "Which Irish city is celebrated for its literary history, vibrant pubs, and cultural festivals?",
    options: ["Dublin", "Cork", "Galway", "Belfast"],
    correctAnswer: "Dublin",
    checkpoint: 2,
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "A coastal city known for its pastel-colored buildings and historic trams.",
      "Capital of Portugal with a rich maritime history.",
    ],
    fun_fact: [
      "Famous for its traditional Fado music.",
      "Built on seven hills offering stunning city views.",
    ],
    trivia: [
      "A blend of traditional heritage and modern influences.",
      "Known for its historic neighborhoods like Alfama.",
    ],
    prompt:
      "Which European city, built on seven hills and famous for Fado music, is the capital of Portugal?",
    options: ["Lisbon", "Porto", "Madrid", "Barcelona"],
    correctAnswer: "Lisbon",
    checkpoint: 2,
  },
  {
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "Known for its stunning medieval architecture and charming bridges.",
      "Often referred to as 'The City of a Hundred Spires.'",
    ],
    fun_fact: [
      "Famous for its historic Prague Castle.",
      "A hub for cultural festivals and classical music.",
    ],
    trivia: [
      "Renowned for its cobblestone streets and enchanting old town.",
      "A major tourist destination in Central Europe.",
    ],
    prompt:
      "Which Central European city, known for its medieval castle and a hundred spires, is a cultural gem?",
    options: ["Prague", "Vienna", "Budapest", "Krakow"],
    correctAnswer: "Prague",
    checkpoint: 2,
  },
  {
    city: "Budapest",
    country: "Hungary",
    clues: [
      "Divided by the Danube River into two historic parts.",
      "Famous for its thermal baths and grand architecture.",
    ],
    fun_fact: [
      "Often called the 'Pearl of the Danube'.",
      "Renowned for its iconic Parliament building.",
    ],
    trivia: [
      "A blend of Eastern and Western European cultures.",
      "Hosts vibrant cultural festivals and historic baths.",
    ],
    prompt:
      "Which Hungarian city, known for its thermal baths and the Danube-split historic districts, is a cultural marvel?",
    options: ["Budapest", "Prague", "Vienna", "Belgrade"],
    correctAnswer: "Budapest",
    checkpoint: 2,
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    clues: [
      "Known for its modern design and cycling culture.",
      "Capital of Denmark with a mix of historic charm and innovation.",
    ],
    fun_fact: [
      "Famous for the colorful Nyhavn harbor.",
      "Renowned for its eco-friendly urban lifestyle.",
    ],
    trivia: [
      "A center for culinary innovation and design.",
      "Hosts numerous festivals celebrating arts and culture.",
    ],
    prompt:
      "Which Scandinavian city, celebrated for its colorful Nyhavn harbor and cycling culture, is the capital of Denmark?",
    options: ["Copenhagen", "Stockholm", "Oslo", "Helsinki"],
    correctAnswer: "Copenhagen",
    checkpoint: 2,
  },
  {
    city: "Brussels",
    country: "Belgium",
    clues: [
      "Famous for its chocolate, waffles, and European institutions.",
      "A cultural and political hub in Europe.",
    ],
    fun_fact: [
      "Home to the European Union headquarters.",
      "Renowned for its ornate Grand Place.",
    ],
    trivia: [
      "A melting pot of European culture and cuisine.",
      "Hosts a variety of international festivals and events.",
    ],
    prompt:
      "Which Belgian city is known for its exquisite chocolates, waffles, and being the de facto capital of the EU?",
    options: ["Brussels", "Antwerp", "Ghent", "Charleroi"],
    correctAnswer: "Brussels",
    checkpoint: 2,
  },
  {
    city: "Frankfurt",
    country: "Germany",
    clues: [
      "A global financial center with a modern skyline.",
      "Known for its trade fairs and cultural diversity.",
    ],
    fun_fact: [
      "Hosts one of the world's largest book fairs.",
      "Home to the European Central Bank.",
    ],
    trivia: [
      "A major hub for commerce and international trade.",
      "Famous for its mix of modern skyscrapers and historic sites.",
    ],
    prompt:
      "Which German city, renowned for its financial institutions and international trade fairs, features a striking modern skyline?",
    options: ["Frankfurt", "Berlin", "Munich", "Hamburg"],
    correctAnswer: "Frankfurt",
    checkpoint: 2,
  },
  {
    city: "Munich",
    country: "Germany",
    clues: [
      "Famous for its annual Oktoberfest and rich Bavarian traditions.",
      "A cultural and economic hub in southern Germany.",
    ],
    fun_fact: [
      "Home to numerous historic beer halls and breweries.",
      "Renowned for its vibrant arts and cultural scene.",
    ],
    trivia: [
      "A city that blends traditional Bavarian culture with modern industry.",
      "Hosts world-famous festivals and events throughout the year.",
    ],
    prompt:
      "Which German city is celebrated for Oktoberfest, its historic beer halls, and rich Bavarian culture?",
    options: ["Munich", "Frankfurt", "Berlin", "Stuttgart"],
    correctAnswer: "Munich",
    checkpoint: 2,
  },
  {
    city: "Hamburg",
    country: "Germany",
    clues: [
      "A major port city known for its maritime heritage.",
      "Renowned for its expansive harbor and vibrant music scene.",
    ],
    fun_fact: [
      "Hosts one of the largest ports in Europe.",
      "Famous for the Elbphilharmonie concert hall.",
    ],
    trivia: [
      "A center for international shipping and commerce.",
      "Known for its cultural festivals and nightlife.",
    ],
    prompt:
      "Which German city, famous for its bustling port and the Elbphilharmonie, is a major maritime hub?",
    options: ["Hamburg", "Frankfurt", "Cologne", "Dresden"],
    correctAnswer: "Hamburg",
    checkpoint: 2,
  },
  {
    city: "Milan",
    country: "Italy",
    clues: [
      "Recognized as a global fashion and design capital.",
      "A major economic and cultural center in Italy.",
    ],
    fun_fact: [
      "Hosts Milan Fashion Week, one of the world's most influential fashion events.",
      "Famous for its historic cathedral, the Duomo.",
    ],
    trivia: [
      "A hub for art, design, and high-end shopping.",
      "Known for blending historic architecture with modern trends.",
    ],
    prompt:
      "Which Italian city is renowned for its fashion, design, and the iconic Duomo?",
    options: ["Milan", "Rome", "Venice", "Florence"],
    correctAnswer: "Milan",
    checkpoint: 2,
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "Famous for its intricate canal network and romantic ambiance.",
      "A historic city built on water.",
    ],
    fun_fact: [
      "Known for its gondola rides through narrow waterways.",
      "Hosts the famous Venice Carnival.",
    ],
    trivia: [
      "A unique blend of art, history, and architecture.",
      "Attracts millions of visitors for its scenic beauty.",
    ],
    prompt:
      "Which Italian city, built on a network of canals and known for its romantic gondola rides, is a popular tourist destination?",
    options: ["Venice", "Milan", "Rome", "Naples"],
    correctAnswer: "Venice",
    checkpoint: 2,
  },
  {
    city: "Naples",
    country: "Italy",
    clues: [
      "A historic coastal city known for its vibrant street life.",
      "Famous for its rich culinary heritage, especially pizza.",
    ],
    fun_fact: [
      "Birthplace of modern pizza.",
      "Offers stunning views of the nearby Amalfi Coast.",
    ],
    trivia: [
      "Home to ancient ruins and a vibrant arts scene.",
      "A melting pot of historic and contemporary culture.",
    ],
    prompt:
      "Which Italian coastal city is celebrated as the birthplace of pizza and known for its vibrant street culture?",
    options: ["Naples", "Rome", "Milan", "Turin"],
    correctAnswer: "Naples",
    checkpoint: 2,
  },
  {
    city: "Florence",
    country: "Italy",
    clues: [
      "Renowned for its Renaissance art and architecture.",
      "A cultural jewel in the heart of Tuscany.",
    ],
    fun_fact: [
      "Home to masterpieces by Michelangelo and Leonardo da Vinci.",
      "Famous for its iconic Duomo and Uffizi Gallery.",
    ],
    trivia: [
      "A major center for art, history, and literature.",
      "Attracts art lovers from around the world.",
    ],
    prompt:
      "Which Italian city is known as the cradle of the Renaissance and famous for its art and architecture?",
    options: ["Florence", "Rome", "Venice", "Milan"],
    correctAnswer: "Florence",
    checkpoint: 2,
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "The cradle of Western civilization and ancient philosophy.",
      "Rich with historic landmarks and ancient ruins.",
    ],
    fun_fact: [
      "Home to the Acropolis and Parthenon.",
      "Known for its contributions to democracy and philosophy.",
    ],
    trivia: [
      "A city where modern life meets ancient history.",
      "Famed for its vibrant cultural and artistic scene.",
    ],
    prompt:
      "Which ancient city, known for the Acropolis and its contributions to philosophy, is the capital of Greece?",
    options: ["Athens", "Sparta", "Thessaloniki", "Rome"],
    correctAnswer: "Athens",
    checkpoint: 2,
  },
  {
    city: "Tel Aviv",
    country: "Israel",
    clues: [
      "A modern, bustling metropolis on the Mediterranean coast.",
      "Known for its vibrant nightlife and startup culture.",
    ],
    fun_fact: [
      "Famed for its Bauhaus architecture and beautiful beaches.",
      "A major hub for technology and innovation in the region.",
    ],
    trivia: [
      "A center for arts, culture, and business in Israel.",
      "Renowned for its dynamic urban life and creative spirit.",
    ],
    prompt:
      "Which Israeli city is celebrated for its modern architecture, vibrant nightlife, and tech industry?",
    options: ["Tel Aviv", "Jerusalem", "Haifa", "Eilat"],
    correctAnswer: "Tel Aviv",
    checkpoint: 2,
  },
  {
    city: "Beirut",
    country: "Lebanon",
    clues: [
      "Known as the 'Paris of the Middle East' for its vibrant cultural scene.",
      "A city with a rich history and resilient spirit.",
    ],
    fun_fact: [
      "Famed for its diverse culinary scene and nightlife.",
      "Historically known as a center of arts and education.",
    ],
    trivia: [
      "A blend of ancient history and modern vibrancy.",
      "Renowned for its beautiful Mediterranean coastline.",
    ],
    prompt:
      "Which Lebanese city, often called the 'Paris of the Middle East', is known for its vibrant culture and culinary delights?",
    options: ["Beirut", "Tripoli", "Byblos", "Sidon"],
    correctAnswer: "Beirut",
    checkpoint: 2,
  },
  {
    city: "Auckland",
    country: "New Zealand",
    clues: [
      "A major urban center known for its stunning harbors and islands.",
      "The largest city in New Zealand with a diverse population.",
    ],
    fun_fact: [
      "Famous for its iconic Sky Tower.",
      "Hosts numerous international sporting and cultural events.",
    ],
    trivia: [
      "A blend of modern city life and natural beauty.",
      "Renowned for its sailing and waterfront activities.",
    ],
    prompt:
      "Which New Zealand city is recognized for its iconic Sky Tower and beautiful harbors?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    correctAnswer: "Auckland",
    checkpoint: 2,
  },
  {
    city: "Wellington",
    country: "New Zealand",
    clues: [
      "The capital city known for its arts, culture, and windswept charm.",
      "Located on a picturesque harbor with a vibrant downtown.",
    ],
    fun_fact: [
      "Famous for its creative film industry and coffee culture.",
      "Hosts numerous cultural festivals and events.",
    ],
    trivia: [
      "A hub for government and creative industries in New Zealand.",
      "Renowned for its blend of natural beauty and urban art.",
    ],
    prompt:
      "Which New Zealand capital, celebrated for its creative arts and breezy harbor views, is known for its vibrant culture?",
    options: ["Wellington", "Auckland", "Dunedin", "Queenstown"],
    correctAnswer: "Wellington",
    checkpoint: 2,
  },
  {
    city: "Sao Paulo",
    country: "Brazil",
    clues: [
      "A sprawling metropolis known as the financial heart of Brazil.",
      "Famous for its dynamic cultural and culinary scene.",
    ],
    fun_fact: [
      "One of the largest cities in the world by population.",
      "Renowned for its street art and diverse neighborhoods.",
    ],
    trivia: [
      "A center for commerce, finance, and vibrant nightlife.",
      "Hosts numerous festivals and international events.",
    ],
    prompt:
      "Which Brazilian city, known for its vast urban sprawl and vibrant street art, is the financial powerhouse of the country?",
    options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
    correctAnswer: "Sao Paulo",
    checkpoint: 2,
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "Known as the 'Paris of South America' for its European-style architecture.",
      "A cultural hub famous for tango and vibrant arts.",
    ],
    fun_fact: [
      "Famed for its dynamic nightlife and historic neighborhoods.",
      "Home to numerous theatres and art galleries.",
    ],
    trivia: [
      "A blend of Latin passion and European elegance.",
      "Hosts grand festivals celebrating dance and music.",
    ],
    prompt:
      "Which Argentine city, celebrated for its tango, European architecture, and vibrant arts scene, is known as the 'Paris of South America'?",
    options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
    correctAnswer: "Buenos Aires",
    checkpoint: 2,
  },
  {
    city: "Lima",
    country: "Peru",
    clues: [
      "A coastal city known for its rich pre-Columbian history and modern cuisine.",
      "Capital of Peru with a dynamic cultural scene.",
    ],
    fun_fact: [
      "Famous for its fusion of traditional and contemporary culinary delights.",
      "Home to ancient ruins and modern museums.",
    ],
    trivia: [
      "A major center for art, history, and gastronomy in South America.",
      "Renowned for its vibrant street food culture.",
    ],
    prompt:
      "Which Peruvian city, blending ancient history with modern culinary innovation, is the capital of Peru?",
    options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
    correctAnswer: "Lima",
    checkpoint: 2,
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    clues: [
      "A bustling megacity and the political, economic, and cultural center of Indonesia.",
      "Known for its diverse culture and vibrant street markets.",
    ],
    fun_fact: [
      "One of the most populous urban areas in Southeast Asia.",
      "Famous for its mix of modern skyscrapers and historic districts.",
    ],
    trivia: [
      "A melting pot of Indonesian cultures and traditions.",
      "Hosts a variety of festivals and international events.",
    ],
    prompt:
      "Which Indonesian city is renowned as a bustling megacity that serves as the country's political and cultural hub?",
    options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    correctAnswer: "Jakarta",
    checkpoint: 2,
  },
  {
    city: "Oslo",
    country: "Norway",
    clues: [
      "A modern Scandinavian city with rich maritime history.",
      "Capital of Norway known for its green spaces and museums.",
    ],
    fun_fact: [
      "Famous for the Viking Ship Museum.",
      "Renowned for its commitment to sustainability and design.",
    ],
    trivia: [
      "A blend of modern architecture and historic charm.",
      "Hosts numerous cultural festivals throughout the year.",
    ],
    prompt:
      "Which Norwegian city, celebrated for its Viking heritage and eco-friendly urban design, is the capital of Norway?",
    options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    correctAnswer: "Oslo",
    checkpoint: 2,
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    clues: [
      "The historic capital of Vietnam known for its centuries-old architecture.",
      "Famous for its rich culture and vibrant street markets.",
    ],
    fun_fact: [
      "Home to many lakes and bustling markets.",
      "Renowned for its fusion of French colonial and traditional Vietnamese architecture.",
    ],
    trivia: [
      "A center for art, literature, and Vietnamese heritage.",
      "Hosts numerous festivals celebrating its rich cultural legacy.",
    ],
    prompt:
      "Which Vietnamese city, blending French colonial influences with traditional culture, is known for its historic architecture and vibrant street markets?",
    options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
    correctAnswer: "Hanoi",
    checkpoint: 2,
  },
  // =====================
  // CHECKPOINT 3 (Original 10 entries)
  // =====================
  {
    city: "Zurich",
    country: "Switzerland",
    clues: [
      "High quality of life and efficient public services.",
      "Major financial center amid alpine scenery.",
    ],
    fun_fact: [
      "Consistently ranks high in global livability.",
      "Home to numerous international banks.",
    ],
    trivia: [
      "Historic charm plus modern innovation.",
      "Cultural festivals and museums are well-liked.",
    ],
    prompt:
      "Which Swiss city, famed for financial institutions and scenic alpine views, is considered one of the world’s most livable?",
    options: ["Zurich", "Geneva", "Basel", "Bern"],
    correctAnswer: "Zurich",
    checkpoint: 3,
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "Steeped in classical music and imperial history.",
      "Renowned for elegant architecture and coffee culture.",
    ],
    fun_fact: [
      "Home to composers like Mozart and Beethoven.",
      "Known for its opulent palaces and pastry traditions.",
    ],
    trivia: [
      "A center for opera and classical festivals.",
      "Historic palaces attract tourists worldwide.",
    ],
    prompt:
      "Which European city, famous for imperial heritage and classical music, is Austria’s capital?",
    options: ["Vienna", "Salzburg", "Innsbruck", "Graz"],
    correctAnswer: "Vienna",
    checkpoint: 3,
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "Spread across islands with scenic water passages.",
      "Mix of rich history and modern design.",
    ],
    fun_fact: [
      "Often called the 'Venice of the North'.",
      "Major hub for startups and technology.",
    ],
    trivia: [
      "Its museums and archipelago are major tourist draws.",
      "Innovative fashion and sustainability practices.",
    ],
    prompt:
      "Which Scandinavian city, built on islands and renowned for its modern design, is Sweden’s capital?",
    options: ["Stockholm", "Gothenburg", "Oslo", "Copenhagen"],
    correctAnswer: "Stockholm",
    checkpoint: 3,
  },
  {
    city: "New York",
    country: "USA",
    clues: [
      "Iconic skyline and diverse cultural neighborhoods.",
      "Global epicenter for finance, arts, and fashion.",
    ],
    fun_fact: [
      "Statue of Liberty was a gift from France.",
      "Times Square is one of the busiest intersections.",
    ],
    trivia: [
      "Broadway, countless museums, and robust nightlife.",
      "Melting pot for communities worldwide.",
    ],
    prompt:
      "Which city, known for its iconic skyline and cultural diversity, is home to the Statue of Liberty?",
    options: ["New York", "London", "Tokyo", "Paris"],
    correctAnswer: "New York",
    checkpoint: 3,
  },
  {
    city: "Melbourne",
    country: "Australia",
    clues: [
      "Esteemed for its coffee culture and vibrant laneways.",
      "Frequent cultural festivals and sporting events.",
    ],
    fun_fact: [
      "Often ranked among the world’s most livable cities.",
      "Has a robust arts and street culture scene.",
    ],
    trivia: [
      "Australian Open tennis is hosted here annually.",
      "Known for graffiti art in hidden alleyways.",
    ],
    prompt:
      "Which Australian city, recognized for its coffee obsession and frequent cultural events, is often deemed highly livable?",
    options: ["Melbourne", "Sydney", "Brisbane", "Adelaide"],
    correctAnswer: "Melbourne",
    checkpoint: 3,
  },
  {
    city: "Vancouver",
    country: "Canada",
    clues: [
      "Coastal city with stunning mountain views.",
      "Known for sustainability and outdoor activities.",
    ],
    fun_fact: [
      "Ranked among the top cities for quality of life.",
      "Film industry often calls it 'Hollywood North'.",
    ],
    trivia: [
      "Stanley Park is a major urban park with scenic trails.",
      "Culturally diverse with strong indigenous heritage.",
    ],
    prompt:
      "Which Canadian coastal city, famed for mountains and a high quality of life, is often called 'Hollywood North'?",
    options: ["Vancouver", "Toronto", "Montreal", "Calgary"],
    correctAnswer: "Vancouver",
    checkpoint: 3,
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "Dramatic coastal city overlooked by a flat-topped mountain.",
      "Blend of diverse cultures and scenic landscapes.",
    ],
    fun_fact: [
      "Table Mountain is a prominent landmark.",
      "Known for its port and vibrant waterfront.",
    ],
    trivia: [
      "Renowned for beaches and nearby wine regions.",
      "Historic significance in South Africa’s cultural mosaic.",
    ],
    prompt:
      "Which South African city, dominated by Table Mountain and known for its stunning coast, is a major tourist destination?",
    options: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
    correctAnswer: "Cape Town",
    checkpoint: 3,
  },
  {
    city: "Honolulu",
    country: "USA",
    clues: [
      "Island city with famous volcanic crater and beaches.",
      "Capital of an archipelago known for surfing and luaus.",
    ],
    fun_fact: [
      "Waikiki Beach is a global surfing hotspot.",
      "Diamond Head crater is a major landmark.",
    ],
    trivia: [
      "Hawaiian culture is celebrated through hula and cuisine.",
      "Pearl Harbor memorial is located nearby.",
    ],
    prompt:
      "Which Hawaiian city, home to Waikiki Beach and the Diamond Head crater, is the capital of Hawaii?",
    options: ["Honolulu", "Maui", "Kailua-Kona", "Hilo"],
    correctAnswer: "Honolulu",
    checkpoint: 3,
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    clues: [
      "Northernmost capital, famous for geothermal spas and auroras.",
      "Rich Viking heritage meets modern design.",
    ],
    fun_fact: [
      "Blue Lagoon is a notable geothermal spa near the city.",
      "Winter nights can feature stunning Northern Lights.",
    ],
    trivia: [
      "Fosters a strong culture of literature and music.",
      "Long winter nights and midnight sun in summer.",
    ],
    prompt:
      "Which city, recognized as the world’s northernmost capital with geothermal wonders, is Iceland’s capital?",
    options: ["Reykjavik", "Oslo", "Helsinki", "Tromsø"],
    correctAnswer: "Reykjavik",
    checkpoint: 3,
  },
  {
    city: "Marrakesh",
    country: "Morocco",
    clues: [
      "Desert city known for its bustling souks and vibrant squares.",
      "Mix of medieval architecture and modern cultural fusion.",
    ],
    fun_fact: [
      "Jemaa el-Fnaa is a famous market square with snake charmers.",
      "Historic palaces and gardens reflect Moorish designs.",
    ],
    trivia: [
      "Colorful markets sell spices and traditional crafts.",
      "A major tourist destination in North Africa.",
    ],
    prompt:
      "Which Moroccan city, celebrated for its bustling souks and historic medina, features the famous Jemaa el-Fnaa?",
    options: ["Marrakesh", "Casablanca", "Fes", "Rabat"],
    correctAnswer: "Marrakesh",
    checkpoint: 3,
  },
  // =====================
  // CHECKPOINT 3 (Additional 40 entries)
  // =====================
  {
    city: "Bern",
    country: "Switzerland",
    clues: [
      "The de facto capital known for its medieval city center.",
      "Famous for its well-preserved architecture and charming atmosphere.",
    ],
    fun_fact: [
      "Recognized as a UNESCO World Heritage site.",
      "Renowned for its historic bear park.",
    ],
    trivia: [
      "A blend of old-world charm and modern Swiss efficiency.",
      "A center for cultural events and Swiss governance.",
    ],
    prompt:
      "Which Swiss city, known for its medieval architecture and bear park, is considered the de facto capital of Switzerland?",
    options: ["Bern", "Zurich", "Geneva", "Basel"],
    correctAnswer: "Bern",
    checkpoint: 3,
  },
  {
    city: "Geneva",
    country: "Switzerland",
    clues: [
      "A global hub for diplomacy and international organizations.",
      "Known for its picturesque lakeside setting.",
    ],
    fun_fact: [
      "Hosts the headquarters of numerous international agencies.",
      "Famous for its high standard of living.",
    ],
    trivia: [
      "A center for global diplomacy and humanitarian efforts.",
      "Renowned for its watchmaking and finance industries.",
    ],
    prompt:
      "Which Swiss city, renowned for its role in international diplomacy and stunning lake views, is home to many global organizations?",
    options: ["Geneva", "Zurich", "Bern", "Lausanne"],
    correctAnswer: "Geneva",
    checkpoint: 3,
  },
  {
    city: "Helsinki",
    country: "Finland",
    clues: [
      "The capital of Finland, known for its design and architecture.",
      "Famous for its innovative urban solutions.",
    ],
    fun_fact: [
      "Renowned for its modernist architecture and waterfront vistas.",
      "Hosts numerous design and technology festivals.",
    ],
    trivia: [
      "A blend of tradition and cutting-edge innovation.",
      "A hub for Scandinavian art and culture.",
    ],
    prompt:
      "Which Scandinavian city, known for its modern design and waterfront setting, is the capital of Finland?",
    options: ["Helsinki", "Oslo", "Stockholm", "Copenhagen"],
    correctAnswer: "Helsinki",
    checkpoint: 3,
  },
  {
    city: "Tallinn",
    country: "Estonia",
    clues: [
      "A medieval city known for its well-preserved old town.",
      "Capital of Estonia with a blend of history and digital innovation.",
    ],
    fun_fact: [
      "Famous for its cobblestone streets and historic towers.",
      "Renowned as one of the most digitally advanced cities in Europe.",
    ],
    trivia: [
      "A center for medieval architecture and modern tech startups.",
      "Hosts vibrant cultural festivals throughout the year.",
    ],
    prompt:
      "Which Estonian city, celebrated for its preserved medieval old town and digital advancements, serves as the nation's capital?",
    options: ["Tallinn", "Riga", "Vilnius", "Tartu"],
    correctAnswer: "Tallinn",
    checkpoint: 3,
  },
  {
    city: "Riga",
    country: "Latvia",
    clues: [
      "Known for its Art Nouveau architecture and vibrant cultural scene.",
      "Capital of Latvia with a rich history.",
    ],
    fun_fact: [
      "Famous for its intricate architectural details and historic buildings.",
      "Hosts one of the largest Art Nouveau districts in Europe.",
    ],
    trivia: [
      "A blend of old and new, with modern cafes and historic sites.",
      "Renowned for its dynamic arts and cultural festivals.",
    ],
    prompt:
      "Which Latvian city, celebrated for its Art Nouveau architecture and cultural vibrancy, is the capital of Latvia?",
    options: ["Riga", "Tallinn", "Vilnius", "Kaunas"],
    correctAnswer: "Riga",
    checkpoint: 3,
  },
  {
    city: "Vilnius",
    country: "Lithuania",
    clues: [
      "Known for its baroque architecture and bohemian vibe.",
      "Capital of Lithuania with a rich artistic heritage.",
    ],
    fun_fact: [
      "Famous for its charming old town and vibrant street art.",
      "Renowned for its literary and artistic traditions.",
    ],
    trivia: [
      "A center for cultural events and historical landmarks.",
      "Hosts numerous festivals celebrating art and literature.",
    ],
    prompt:
      "Which Lithuanian city, recognized for its baroque architecture and vibrant cultural scene, is the nation's capital?",
    options: ["Vilnius", "Riga", "Kaunas", "Tallinn"],
    correctAnswer: "Vilnius",
    checkpoint: 3,
  },
  {
    city: "Luxembourg City",
    country: "Luxembourg",
    clues: [
      "A fortified city known for its blend of modernity and history.",
      "Capital of Luxembourg with scenic fortifications.",
    ],
    fun_fact: [
      "Famous for its dramatic cliffs and historic casemates.",
      "Renowned as a key financial hub in Europe.",
    ],
    trivia: [
      "A center for European politics and finance.",
      "Known for its multicultural population and rich history.",
    ],
    prompt:
      "Which city, noted for its ancient fortifications and modern financial district, is the capital of Luxembourg?",
    options: ["Luxembourg City", "Geneva", "Brussels", "Bern"],
    correctAnswer: "Luxembourg City",
    checkpoint: 3,
  },
  {
    city: "Zagreb",
    country: "Croatia",
    clues: [
      "A city blending 18th-century charm with contemporary culture.",
      "Capital of Croatia known for its historic and modern districts.",
    ],
    fun_fact: [
      "Famous for its vibrant street art and museums.",
      "Renowned for its annual film and music festivals.",
    ],
    trivia: [
      "A hub for cultural and political activities in the Balkans.",
      "Combines historical architecture with modern urban life.",
    ],
    prompt:
      "Which Croatian city, recognized for its vibrant cultural scene and historic architecture, is the capital of Croatia?",
    options: ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
    correctAnswer: "Zagreb",
    checkpoint: 3,
  },
  {
    city: "Belgrade",
    country: "Serbia",
    clues: [
      "A historic city with a turbulent past and lively nightlife.",
      "Capital of Serbia known for its mix of old and new.",
    ],
    fun_fact: [
      "Famous for its fortress overlooking the Danube.",
      "Renowned for its vibrant music and festival scene.",
    ],
    trivia: [
      "A center for cultural and historical exploration in the Balkans.",
      "Hosts numerous international music and film festivals.",
    ],
    prompt:
      "Which Serbian city, known for its fortress and dynamic nightlife, is the capital of Serbia?",
    options: ["Belgrade", "Sarajevo", "Zagreb", "Bucharest"],
    correctAnswer: "Belgrade",
    checkpoint: 3,
  },
  {
    city: "Sarajevo",
    country: "Bosnia and Herzegovina",
    clues: [
      "Famous for its historic blend of Eastern and Western cultures.",
      "Known for its role in pivotal historical events in the Balkans.",
    ],
    fun_fact: [
      "Often called the 'Jerusalem of Europe'.",
      "Renowned for its diverse religious heritage.",
    ],
    trivia: [
      "A city where ancient bazaars meet modern art scenes.",
      "Holds a rich tapestry of cultural influences.",
    ],
    prompt:
      "Which Bosnian city, known for its cultural diversity and historic bazaars, was a focal point during pivotal Balkan events?",
    options: ["Sarajevo", "Belgrade", "Zagreb", "Skopje"],
    correctAnswer: "Sarajevo",
    checkpoint: 3,
  },
  {
    city: "Skopje",
    country: "North Macedonia",
    clues: [
      "The capital of North Macedonia, blending ancient history with modern statues.",
      "Known for its diverse cultural and architectural influences.",
    ],
    fun_fact: [
      "Famous for its historic bazaar and modern city center.",
      "Renowned for the 'Warrior on a Horse' statue.",
    ],
    trivia: [
      "A center for Balkan history and contemporary art.",
      "Hosts vibrant cultural festivals year-round.",
    ],
    prompt:
      "Which North Macedonian city, characterized by its ancient bazaar and modern statues, is the country's capital?",
    options: ["Skopje", "Belgrade", "Sofia", "Podgorica"],
    correctAnswer: "Skopje",
    checkpoint: 3,
  },
  {
    city: "Podgorica",
    country: "Montenegro",
    clues: [
      "The capital of Montenegro, known for its blend of old and new.",
      "Famous for its diverse cultural influences and scenic landscapes.",
    ],
    fun_fact: [
      "Hosts a mix of Ottoman and modern architecture.",
      "Renowned for its relaxing parks and riverside walks.",
    ],
    trivia: [
      "A growing urban center with a rich historical past.",
      "A gateway to Montenegro's natural beauty.",
    ],
    prompt:
      "Which Montenegrin city, characterized by its blend of Ottoman and modern architecture, is the capital of Montenegro?",
    options: ["Podgorica", "Tivat", "Kotor", "Budva"],
    correctAnswer: "Podgorica",
    checkpoint: 3,
  },
  {
    city: "Sofia",
    country: "Bulgaria",
    clues: [
      "A city with a history spanning over 2,000 years, mixing ancient and modern influences.",
      "Capital of Bulgaria known for its rich cultural heritage.",
    ],
    fun_fact: [
      "Famous for the Alexander Nevsky Cathedral.",
      "Renowned for its archaeological sites and Roman ruins.",
    ],
    trivia: [
      "A center for education and arts in Bulgaria.",
      "Hosts numerous festivals celebrating its diverse history.",
    ],
    prompt:
      "Which Bulgarian city, celebrated for its ancient ruins and the Alexander Nevsky Cathedral, is the nation's capital?",
    options: ["Sofia", "Plovdiv", "Varna", "Burgas"],
    correctAnswer: "Sofia",
    checkpoint: 3,
  },
  {
    city: "Bucharest",
    country: "Romania",
    clues: [
      "Known as 'Little Paris' for its elegant architecture.",
      "The largest city in Romania with a mix of historic and modern vibes.",
    ],
    fun_fact: [
      "Famous for its grand palaces and vibrant cultural scene.",
      "Renowned for its lively nightlife and artistic spirit.",
    ],
    trivia: [
      "A hub for Eastern European culture and history.",
      "Hosts numerous festivals and art exhibitions.",
    ],
    prompt:
      "Which Romanian city, nicknamed 'Little Paris', is known for its mix of historic charm and modern vibrancy?",
    options: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"],
    correctAnswer: "Bucharest",
    checkpoint: 3,
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    clues: [
      "One of the oldest cities in Eastern Europe with rich history and culture.",
      "Capital of Ukraine known for its grand churches and monuments.",
    ],
    fun_fact: [
      "Famous for the Kyiv Pechersk Lavra (Monastery of the Caves).",
      "Renowned for its vibrant arts and music scene.",
    ],
    trivia: [
      "A center for Ukrainian politics and culture.",
      "Holds significant historical landmarks and museums.",
    ],
    prompt:
      "Which Ukrainian city, known for the Monastery of the Caves and historic churches, is the capital of Ukraine?",
    options: ["Kyiv", "Lviv", "Odessa", "Kharkiv"],
    correctAnswer: "Kyiv",
    checkpoint: 3,
  },
  {
    city: "St. Petersburg",
    country: "Russia",
    clues: [
      "Famed for its imperial history and splendid baroque architecture.",
      "Known as the cultural capital of Russia.",
    ],
    fun_fact: [
      "Home to the Hermitage Museum, one of the largest in the world.",
      "Renowned for its intricate canals and historic palaces.",
    ],
    trivia: [
      "A center for arts, literature, and Russian history.",
      "Hosts grand festivals and cultural events annually.",
    ],
    prompt:
      "Which Russian city, celebrated for the Hermitage Museum and its imperial heritage, is known as the cultural capital of Russia?",
    options: ["St. Petersburg", "Moscow", "Novosibirsk", "Kazan"],
    correctAnswer: "St. Petersburg",
    checkpoint: 3,
  },
  {
    city: "Brisbane",
    country: "Australia",
    clues: [
      "A vibrant city known for its sunny weather and river views.",
      "Famous for its outdoor lifestyle and cultural festivals.",
    ],
    fun_fact: [
      "Renowned for its scenic Brisbane River and lush parks.",
      "Hosts major events like the Brisbane Festival.",
    ],
    trivia: [
      "A hub for arts, sports, and urban development.",
      "Offers a mix of modern architecture and natural beauty.",
    ],
    prompt:
      "Which Australian city, celebrated for its sunny weather and vibrant riverfront, is known for its lively cultural scene?",
    options: ["Brisbane", "Sydney", "Melbourne", "Perth"],
    correctAnswer: "Brisbane",
    checkpoint: 3,
  },
  {
    city: "Adelaide",
    country: "Australia",
    clues: [
      "Known for its festivals, wine regions, and cultural institutions.",
      "A well-planned city with elegant architecture.",
    ],
    fun_fact: [
      "Famous for the Adelaide Fringe Festival.",
      "Renowned for its proximity to world-class wineries.",
    ],
    trivia: [
      "A center for arts, food, and culture in Australia.",
      "Hosts numerous international festivals and events.",
    ],
    prompt:
      "Which Australian city is famous for its annual Fringe Festival and proximity to renowned wine regions?",
    options: ["Adelaide", "Brisbane", "Melbourne", "Sydney"],
    correctAnswer: "Adelaide",
    checkpoint: 3,
  },
  {
    city: "Perth",
    country: "Australia",
    clues: [
      "A coastal city known for its laid-back lifestyle and sunny beaches.",
      "Renowned for its natural beauty and vibrant arts scene.",
    ],
    fun_fact: [
      "Famous for its expansive parks and waterfront areas.",
      "Hosts a variety of cultural and music festivals.",
    ],
    trivia: [
      "A hub for outdoor activities and coastal adventures.",
      "Celebrated for its blend of urban development and nature.",
    ],
    prompt:
      "Which Australian city, known for its sunny beaches and vibrant cultural scene, is a major hub in Western Australia?",
    options: ["Perth", "Sydney", "Melbourne", "Adelaide"],
    correctAnswer: "Perth",
    checkpoint: 3,
  },
  {
    city: "Hobart",
    country: "Australia",
    clues: [
      "The capital of Tasmania, known for its historic charm and scenic landscapes.",
      "Famous for its waterfront and artistic communities.",
    ],
    fun_fact: [
      "Renowned for the MONA (Museum of Old and New Art).",
      "Offers stunning views of Mount Wellington.",
    ],
    trivia: [
      "A blend of colonial history and modern art.",
      "Hosts unique festivals and cultural events.",
    ],
    prompt:
      "Which Tasmanian city is celebrated for the MONA museum and its picturesque waterfront?",
    options: ["Hobart", "Darwin", "Canberra", "Perth"],
    correctAnswer: "Hobart",
    checkpoint: 3,
  },
  {
    city: "Antwerp",
    country: "Belgium",
    clues: [
      "Known as a major diamond trading hub and fashion center.",
      "A vibrant city with rich historical and cultural roots.",
    ],
    fun_fact: [
      "Famous for its diamond district and creative industries.",
      "Renowned for its art and Flemish heritage.",
    ],
    trivia: [
      "A blend of modern design and medieval architecture.",
      "Hosts numerous art galleries and fashion events.",
    ],
    prompt:
      "Which Belgian city is celebrated as a major diamond trading center and a hub for fashion and art?",
    options: ["Antwerp", "Brussels", "Ghent", "Charleroi"],
    correctAnswer: "Antwerp",
    checkpoint: 3,
  },
  {
    city: "Ghent",
    country: "Belgium",
    clues: [
      "A charming city known for its medieval architecture and canals.",
      "Famous for its lively cultural scene and historic landmarks.",
    ],
    fun_fact: [
      "Renowned for its well-preserved medieval buildings.",
      "Famous for hosting vibrant music and art festivals.",
    ],
    trivia: [
      "A blend of historic charm and modern innovation.",
      "A popular destination for both history buffs and art enthusiasts.",
    ],
    prompt:
      "Which Belgian city, known for its medieval charm and scenic canals, is a cultural gem in the region?",
    options: ["Ghent", "Antwerp", "Brussels", "Liège"],
    correctAnswer: "Ghent",
    checkpoint: 3,
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    clues: [
      "Known for its modern architecture and bustling port.",
      "A vibrant city that was rebuilt after WWII.",
    ],
    fun_fact: [
      "Famous for innovative architectural designs and structures.",
      "Renowned for being one of the largest ports in the world.",
    ],
    trivia: [
      "A center for commerce, art, and urban innovation.",
      "Hosts numerous cultural festivals and events.",
    ],
    prompt:
      "Which Dutch city, recognized for its modern architecture and one of the world's busiest ports, is a symbol of urban renewal?",
    options: ["Rotterdam", "Amsterdam", "The Hague", "Utrecht"],
    correctAnswer: "Rotterdam",
    checkpoint: 3,
  },
  {
    city: "Barcelona",
    country: "Spain",
    clues: [
      "Famous for its unique blend of modernist architecture and vibrant street life.",
      "Home to iconic works by architect Antoni Gaudí.",
    ],
    fun_fact: [
      "Renowned for the Sagrada Família and Park Güell.",
      "Famous for its dynamic arts and cultural festivals.",
    ],
    trivia: [
      "A hub for art, architecture, and Mediterranean cuisine.",
      "Celebrated for its lively markets and seaside charm.",
    ],
    prompt:
      "Which Spanish city, known for Gaudí's masterpieces and vibrant street life, is a cultural beacon of Catalonia?",
    options: ["Barcelona", "Madrid", "Valencia", "Seville"],
    correctAnswer: "Barcelona",
    checkpoint: 3,
  },
  {
    city: "Bilbao",
    country: "Spain",
    clues: [
      "A city that transformed from industrial roots to modern art and architecture.",
      "Famous for its contemporary art museum.",
    ],
    fun_fact: [
      "Home to the Guggenheim Museum Bilbao.",
      "Renowned for its innovative urban regeneration.",
    ],
    trivia: [
      "A center for modern art and design in Spain.",
      "Celebrated for its blend of tradition and modernity.",
    ],
    prompt:
      "Which Spanish city, known for the Guggenheim Museum and urban revitalization, is a symbol of modern art?",
    options: ["Bilbao", "Barcelona", "Madrid", "Valencia"],
    correctAnswer: "Bilbao",
    checkpoint: 3,
  },
  {
    city: "Granada",
    country: "Spain",
    clues: [
      "Famous for its breathtaking Moorish architecture and historic palace.",
      "A city steeped in history and cultural fusion.",
    ],
    fun_fact: [
      "Home to the Alhambra, a stunning palace and fortress complex.",
      "Renowned for its rich blend of Islamic and Spanish heritage.",
    ],
    trivia: [
      "A hub for art, architecture, and history in Andalusia.",
      "Celebrated for its scenic views and cultural landmarks.",
    ],
    prompt:
      "Which Andalusian city, renowned for the Alhambra and its rich Moorish heritage, is a top historical destination in Spain?",
    options: ["Granada", "Seville", "Madrid", "Barcelona"],
    correctAnswer: "Granada",
    checkpoint: 3,
  },
  {
    city: "Osaka",
    country: "Japan",
    clues: [
      "A dynamic city known for its modern architecture and vibrant street food scene.",
      "Famous for its friendly locals and bustling entertainment districts.",
    ],
    fun_fact: [
      "Renowned for its delicious street food, especially takoyaki.",
      "A major economic center in Japan with a rich history.",
    ],
    trivia: [
      "A blend of traditional culture and cutting-edge innovation.",
      "Hosts numerous festivals and cultural events.",
    ],
    prompt:
      "Which Japanese city, celebrated for its street food and dynamic urban life, is a major economic hub in the Kansai region?",
    options: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
    correctAnswer: "Osaka",
    checkpoint: 3,
  },
  {
    city: "Kyoto",
    country: "Japan",
    clues: [
      "Famous for its classical Buddhist temples, gardens, and traditional tea houses.",
      "Once the capital of Japan and a center of cultural refinement.",
    ],
    fun_fact: [
      "Home to numerous UNESCO World Heritage sites.",
      "Renowned for its seasonal festivals and geisha culture.",
    ],
    trivia: [
      "A hub for traditional arts and historic preservation.",
      "Celebrated for its serene gardens and ancient temples.",
    ],
    prompt:
      "Which Japanese city, known for its ancient temples and traditional tea houses, was once the imperial capital?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    correctAnswer: "Kyoto",
    checkpoint: 3,
  },
  {
    city: "Sapporo",
    country: "Japan",
    clues: [
      "Famous for its annual snow festival and winter sports.",
      "A modern city with a strong cultural identity in the north.",
    ],
    fun_fact: [
      "Renowned for its Sapporo Snow Festival, attracting visitors worldwide.",
      "Famous for its ramen and beer.",
    ],
    trivia: [
      "A center for winter sports and festivals in Japan.",
      "Combines urban modernity with snowy charm.",
    ],
    prompt:
      "Which northern Japanese city is celebrated for its annual snow festival and is a hub for winter sports?",
    options: ["Sapporo", "Tokyo", "Osaka", "Nagoya"],
    correctAnswer: "Sapporo",
    checkpoint: 3,
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    clues: [
      "A bustling metropolis known for its dynamic street markets and history.",
      "Formerly known as Saigon, with a rich colonial past.",
    ],
    fun_fact: [
      "Famous for its vibrant street food and coffee culture.",
      "Renowned for its historical landmarks and war museums.",
    ],
    trivia: [
      "A center for commerce and cultural fusion in Vietnam.",
      "Hosts a mix of French colonial architecture and modern skyscrapers.",
    ],
    prompt:
      "Which Vietnamese city, formerly known as Saigon, is famous for its energetic markets and historical landmarks?",
    options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
    correctAnswer: "Ho Chi Minh City",
    checkpoint: 3,
  },
  {
    city: "Manila",
    country: "Philippines",
    clues: [
      "The bustling capital of the Philippines with a rich colonial history.",
      "Known for its vibrant culture and historic sites.",
    ],
    fun_fact: [
      "Famous for its Intramuros, a historic walled city.",
      "Renowned for its diverse cultural influences.",
    ],
    trivia: [
      "A hub for commerce, education, and arts in the Philippines.",
      "Hosts numerous festivals and historic landmarks.",
    ],
    prompt:
      "Which Philippine city, known for the historic Intramuros district, is the nation's bustling capital?",
    options: ["Manila", "Cebu", "Davao", "Quezon City"],
    correctAnswer: "Manila",
    checkpoint: 3,
  },
  {
    city: "Quezon City",
    country: "Philippines",
    clues: [
      "A major urban center known for its media and educational institutions.",
      "Once the capital of the Philippines, with a rich cultural scene.",
    ],
    fun_fact: [
      "Famous for its sprawling urban parks and film studios.",
      "Renowned for its role in Philippine cinema and television.",
    ],
    trivia: [
      "A center for arts, culture, and innovation in the Philippines.",
      "Hosts several national cultural and film festivals.",
    ],
    prompt:
      "Which Philippine city, known for its significant contributions to media and education, was once the nation's capital?",
    options: ["Quezon City", "Manila", "Cebu", "Davao"],
    correctAnswer: "Quezon City",
    checkpoint: 3,
  },
  {
    city: "Taipei",
    country: "Taiwan",
    clues: [
      "The vibrant capital known for its bustling night markets and modern skyline.",
      "A blend of traditional culture and cutting-edge technology.",
    ],
    fun_fact: [
      "Famous for the Taipei 101 skyscraper.",
      "Renowned for its flavorful street food and bubble tea.",
    ],
    trivia: [
      "A center for arts, culture, and commerce in Taiwan.",
      "Hosts numerous festivals and cultural events throughout the year.",
    ],
    prompt:
      "Which Taiwanese city, famous for the Taipei 101 and vibrant night markets, is the country's capital?",
    options: ["Taipei", "Kaohsiung", "Taichung", "Tainan"],
    correctAnswer: "Taipei",
    checkpoint: 3,
  },
  {
    city: "Hong Kong",
    country: "China",
    clues: [
      "A dynamic metropolis known for its impressive skyline and bustling harbor.",
      "Famous for its unique blend of Eastern and Western cultures.",
    ],
    fun_fact: [
      "Renowned for its deep natural harbor and vibrant financial district.",
      "Hosts a mix of traditional markets and modern shopping malls.",
    ],
    trivia: [
      "A global center for finance and international trade.",
      "Famous for its efficient public transportation and culinary scene.",
    ],
    prompt:
      "Which Chinese city is celebrated for its stunning skyline, bustling harbor, and unique cultural blend?",
    options: ["Hong Kong", "Shanghai", "Beijing", "Guangzhou"],
    correctAnswer: "Hong Kong",
    checkpoint: 3,
  },
  {
    city: "Kuwait City",
    country: "Kuwait",
    clues: [
      "The capital known for its modern skyscrapers and rich oil heritage.",
      "A hub for commerce and culture in the Gulf region.",
    ],
    fun_fact: [
      "Famous for its striking waterfront and modern architecture.",
      "Renowned as a center for oil-based industries and trade.",
    ],
    trivia: [
      "A blend of traditional Middle Eastern culture and modern innovation.",
      "Hosts numerous cultural and economic events.",
    ],
    prompt:
      "Which Middle Eastern city, known for its modern skyscrapers and oil heritage, is the capital of Kuwait?",
    options: ["Kuwait City", "Doha", "Riyadh", "Abu Dhabi"],
    correctAnswer: "Kuwait City",
    checkpoint: 3,
  },
  {
    city: "Doha",
    country: "Qatar",
    clues: [
      "A rapidly modernizing city with futuristic architecture.",
      "Capital of Qatar known for its cultural and economic development.",
    ],
    fun_fact: [
      "Famous for its Museum of Islamic Art.",
      "Renowned for its vibrant skyline and rapid growth.",
    ],
    trivia: [
      "A center for international sports and cultural exhibitions.",
      "Hosts major global events and conferences.",
    ],
    prompt:
      "Which Qatari city, celebrated for its futuristic architecture and Museum of Islamic Art, is the nation's capital?",
    options: ["Doha", "Dubai", "Abu Dhabi", "Manama"],
    correctAnswer: "Doha",
    checkpoint: 3,
  },
  {
    city: "Muscat",
    country: "Oman",
    clues: [
      "Known for its historic forts and stunning coastal scenery.",
      "Capital of Oman with a blend of tradition and modernity.",
    ],
    fun_fact: [
      "Famous for its scenic souks and maritime heritage.",
      "Renowned for its pristine beaches and mountain backdrops.",
    ],
    trivia: [
      "A center for culture and commerce in the Arabian Peninsula.",
      "Hosts numerous festivals celebrating Omani heritage.",
    ],
    prompt:
      "Which city, recognized for its historic forts and beautiful coastal views, is the capital of Oman?",
    options: ["Muscat", "Doha", "Riyadh", "Abu Dhabi"],
    correctAnswer: "Muscat",
    checkpoint: 3,
  },
  {
    city: "Amman",
    country: "Jordan",
    clues: [
      "A city rich in history, blending ancient ruins with modern culture.",
      "Capital of Jordan known for its hospitality and diverse architecture.",
    ],
    fun_fact: [
      "Famous for its historic Roman amphitheater.",
      "Renowned for its vibrant art galleries and cafes.",
    ],
    trivia: [
      "A center for Middle Eastern culture and ancient history.",
      "Hosts a mix of traditional markets and modern malls.",
    ],
    prompt:
      "Which Middle Eastern city, known for its Roman ruins and modern cultural scene, is the capital of Jordan?",
    options: ["Amman", "Beirut", "Riyadh", "Doha"],
    correctAnswer: "Amman",
    checkpoint: 3,
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    clues: [
      "A coastal city known for its laid-back lifestyle and rich cultural heritage.",
      "The capital of Uruguay with a blend of European charm and modernity.",
    ],
    fun_fact: [
      "Famous for its historic Rambla and vibrant art scene.",
      "Renowned for its friendly atmosphere and quality of life.",
    ],
    trivia: [
      "A hub for music, dance, and cultural festivals in South America.",
      "Offers a mix of historic architecture and modern amenities.",
    ],
    prompt:
      "Which South American city, known for its scenic Rambla and European charm, is the capital of Uruguay?",
    options: ["Montevideo", "Buenos Aires", "Santiago", "Lima"],
    correctAnswer: "Montevideo",
    checkpoint: 3,
  },
  {
    city: "Quito",
    country: "Ecuador",
    clues: [
      "A high-altitude city known for its well-preserved colonial architecture.",
      "The capital of Ecuador nestled in the Andes.",
    ],
    fun_fact: [
      "Famous for its historic center, a UNESCO World Heritage site.",
      "Renowned for its panoramic mountain views and rich cultural history.",
    ],
    trivia: [
      "A center for art, history, and indigenous traditions in Ecuador.",
      "Hosts numerous festivals celebrating its colonial heritage.",
    ],
    prompt:
      "Which Ecuadorian city, celebrated for its UNESCO-listed historic center and Andean views, is the capital of Ecuador?",
    options: ["Quito", "Guayaquil", "Cuenca", "Ambato"],
    correctAnswer: "Quito",
    checkpoint: 3,
  },
];

export default citiesQuizData;
