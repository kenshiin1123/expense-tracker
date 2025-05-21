import {
  FaHome, // General home, rent, utilities
  FaUtensils, // Food, dining out, groceries
  FaShoppingCart, // General shopping
  FaHotel, // Accommodation, travel
  FaHeartbeat, // Health, medical expenses
  FaPills, // Pharmacy, medication
  FaBook, // Education, books
  FaLaptopCode, // Technology, software, gadgets
  FaGift, // Gifts, donations
  FaFilm, // Entertainment, movies, subscriptions
  FaTheaterMasks, // Arts, cultural events
  FaPaw, // Pets, pet supplies
  FaChild, // Kids, baby expenses
  FaPaintBrush, // Hobbies, art supplies
  FaDumbbell, // Fitness, gym memberships
  FaMoneyBillAlt, // General income or payments
  FaCreditCard, // Credit card payments, banking
  FaWallet, // General expenses, cash transactions
  FaChartLine, // Reports, analytics
  FaTags, // Categories, tagging expenses
  FaPlusCircle, // Adding new entries
  FaMinusCircle, // Subtracting/removing entries
  FaEdit, // Editing entries
  FaTrash, // Deleting entries
  FaCog, // Settings
  FaBell, // Notifications, reminders
  FaPiggyBank, // Savings, investments
  FaRegLightbulb, // Utilities, electricity
  FaWater, // Water bill
  FaWifi, // Internet, communication
  FaPhone, // Phone bill
  FaBuilding, // Rent, mortgage
  FaTools, // Home maintenance, repairs
  FaSmoking, // Personal vices (e.g., cigarettes)
  FaGlassMartiniAlt, // Drinks, social events
  FaCoffee, // Coffee, cafes
  FaTshirt, // Clothing
  FaStethoscope, // Doctor visits
  FaPrescriptionBottleAlt, // Prescriptions
  FaGraduationCap, // Tuition, school fees
  FaBasketballBall, // Sports activities
  FaGuitar, // Music, instruments
  FaBroom, // Cleaning supplies, household items
  FaSpa, // Wellness, beauty
  FaUmbrellaBeach, // Vacation, leisure
  FaEllipsisH, // More options, general "other" category
  FaCar, // Transportation, car expenses
  FaGasPump, // Fuel, gas
  FaGrinStars, // General happiness/well-being
  FaHandshake, // Debts, loans
  FaBus, // Public transportation
  FaPlane, // Flights, long-distance travel
  FaSeedling, // Gardening, outdoor
  FaShoppingBag, // Shopping (alternative)
  FaHeadphones, // Music streaming, audio
  FaClinicMedical, // Clinic visits
  FaBriefcase, // Work-related expenses
  FaDollarSign, // Currency, general money
  FaReceipt, // Receipts, tracking spending
  FaPercent, // Discounts, taxes
  FaCoins, // Loose change, small transactions
  FaFileInvoiceDollar, // Bills, invoices
  FaClipboardList, // To-do lists, planning
} from "react-icons/fa";

import {
  MdRestaurant, // Food, dining out
  MdDirectionsCar, // Car, auto
  MdSchool, // Education, school
  MdAttachMoney, // Money, general transactions
  MdCategory, // Categories, organizing
  MdAddCircle, // Add new item
  MdRemoveCircle, // Remove item
  MdSettings, // Settings (alternative)
  MdNotifications, // Notifications (alternative)
  MdSavings, // Savings (alternative)
  MdLightbulb, // Utilities, general
  MdWater, // Water (alternative)
  MdWifi, // Wifi (alternative)
  MdPhone, // Phone (alternative)
  MdHouse, // Home (alternative)
  MdBuild, // Tools, repairs (alternative)
  MdLocalGasStation, // Gas station, fuel
  MdShoppingBag, // Shopping bag (alternative)
  MdFastfood, // Fast food
  MdTheaters, // Entertainment, movies
  MdPets, // Pets (alternative)
  MdChildFriendly, // Child-related
  MdFitnessCenter, // Fitness (alternative)
  MdMedicalServices, // Medical services (alternative)
  MdComputer, // Computer, tech (alternative)
  MdCardGiftcard, // Gift card
  MdCoffee, // Coffee (alternative)
  MdCheckroom, // Clothing (alternative)
  MdLocalBar, // Bar, drinks (alternative)
  MdCleaningServices, // Cleaning (alternative)
  MdContentCut, // Haircut, personal care
  MdSpa, // Spa, wellness (alternative)
  MdBeachAccess, // Beach, vacation (alternative)
  MdMoreHoriz, // More horizontal, general "other" (alternative)
  MdPublic, // Travel, public transport
  MdEmojiEmotions, // Personal well-being
  MdCreditScore, // Credit score, financial
  MdHardware, // Home hardware
  MdPayments, // Payments, transactions
  MdSupport, // Support, services
  MdWork, // Work-related
  MdDirectionsTransit, // Public transit
  MdFlight, // Flights
  MdLocalFlorist, // Plants, gardening
  MdWatch, // Accessories, gadgets
  MdReceiptLong, // Receipts
  MdDiscount, // Discounts
} from "react-icons/md";

import {
  IoFastFood, // Fast food (alternative)
  IoCar, // Car (alternative)
  IoSchool, // School (alternative)
  IoCash, // Cash, money (alternative)
  IoSettingsSharp, // Settings (alternative)
  IoAddCircleSharp, // Add (alternative)
  IoRemoveCircleSharp, // Remove (alternative)
  IoWallet, // Wallet (alternative)
  IoHome, // Home (alternative)
  IoGift, // Gift (alternative)
  IoPaw, // Pets (alternative)
  IoMedical, // Medical (alternative)
  IoNewspaper, // News, subscriptions
  IoFitness, // Fitness (alternative)
  IoGameController, // Gaming
  IoBarbell, // Barbell, gym
  IoBook, // Book (alternative)
  IoShirt, // Shirt, clothing (alternative)
  IoHeart, // Health, wellness (alternative)
  IoWifi, // Wifi (alternative)
  IoPhonePortrait, // Phone (alternative)
  IoWater, // Water (alternative)
  IoBulb, // Bulb, light (alternative)
  IoBuild, // Build, tools (alternative)
  IoTrash, // Trash (alternative)
  IoPencil, // Pencil, edit (alternative)
  IoNotifications, // Notifications (alternative)
  IoKey, // Keys, rent (alternative)
  IoWine, // Wine, drinks (alternative)
  IoCafe, // Cafe (alternative)
  IoBrush, // Brush, art (alternative)
  IoAccessibility, // Accessibility, personal care
  IoSunny, // Outdoor activities
  IoEllipsisHorizontal, // Ellipsis horizontal (alternative)
  IoTrain, // Train travel
  IoAirplane, // Airplane travel
  IoLeaf, // Eco-friendly, nature
  IoBag, // Bag, shopping
  IoMusicalNotes, // Music, instruments
  IoCut, // Haircut, beauty
  IoHandLeft, // Personal care
  IoTime, // Time, subscriptions
  IoCard, // Card payments
  IoStatsChart, // Charts, statistics
  IoHappy, // General well-being
  IoReceipt, // Receipt (alternative)
  IoWalletOutline, // Wallet (outline version)
} from "react-icons/io5";

const icons = [
  // Fa Icons (Font Awesome)
  { id: 1, name: "Home", icon: FaHome() },
  { id: 2, name: "Food & Dining", icon: FaUtensils() },
  { id: 3, name: "Shopping", icon: FaShoppingCart() },
  { id: 4, name: "Accommodation", icon: FaHotel() },
  { id: 5, name: "Health", icon: FaHeartbeat() },
  { id: 6, name: "Pharmacy", icon: FaPills() },
  { id: 7, name: "Education", icon: FaBook() },
  { id: 8, name: "Technology", icon: FaLaptopCode() },
  { id: 9, name: "Gifts & Donations", icon: FaGift() },
  { id: 10, name: "Entertainment", icon: FaFilm() },
  { id: 11, name: "Arts & Culture", icon: FaTheaterMasks() },
  { id: 12, name: "Pets", icon: FaPaw() },
  { id: 13, name: "Kids & Baby", icon: FaChild() },
  { id: 14, name: "Hobbies", icon: FaPaintBrush() },
  { id: 15, name: "Fitness", icon: FaDumbbell() },
  { id: 16, name: "Income", icon: FaMoneyBillAlt() },
  { id: 17, name: "Credit Card", icon: FaCreditCard() },
  { id: 18, name: "Wallet", icon: FaWallet() },
  { id: 19, name: "Reports & Analytics", icon: FaChartLine() },
  { id: 20, name: "Categories", icon: FaTags() },
  { id: 21, name: "Add Entry", icon: FaPlusCircle() },
  { id: 22, name: "Remove Entry", icon: FaMinusCircle() },
  { id: 23, name: "Edit Entry", icon: FaEdit() },
  { id: 24, name: "Delete Entry", icon: FaTrash() },
  { id: 25, name: "Settings", icon: FaCog() },
  { id: 26, name: "Notifications", icon: FaBell() },
  { id: 27, name: "Savings & Investments", icon: FaPiggyBank() },
  { id: 28, name: "Electricity Bill", icon: FaRegLightbulb() },
  { id: 29, name: "Water Bill", icon: FaWater() },
  { id: 30, name: "Internet Bill", icon: FaWifi() },
  { id: 31, name: "Phone Bill", icon: FaPhone() },
  { id: 32, name: "Rent & Mortgage", icon: FaBuilding() },
  { id: 33, name: "Home Repairs", icon: FaTools() },
  { id: 34, name: "Personal Vices", icon: FaSmoking() },
  { id: 35, name: "Drinks & Social", icon: FaGlassMartiniAlt() },
  { id: 36, name: "Coffee & Cafes", icon: FaCoffee() },
  { id: 37, name: "Clothing & Apparel", icon: FaTshirt() },
  { id: 38, name: "Doctor Visits", icon: FaStethoscope() },
  { id: 39, name: "Prescriptions", icon: FaPrescriptionBottleAlt() },
  { id: 40, name: "Tuition & School Fees", icon: FaGraduationCap() },
  { id: 41, name: "Sports Activities", icon: FaBasketballBall() },
  { id: 42, name: "Music & Instruments", icon: FaGuitar() },
  { id: 43, name: "Cleaning Supplies", icon: FaBroom() },
  { id: 44, name: "Wellness & Beauty", icon: FaSpa() },
  { id: 45, name: "Vacation & Leisure", icon: FaUmbrellaBeach() },
  { id: 46, name: "Other Expenses", icon: FaEllipsisH() },
  { id: 47, name: "Car Expenses", icon: FaCar() },
  { id: 48, name: "Fuel", icon: FaGasPump() },
  { id: 49, name: "Well-being", icon: FaGrinStars() },
  { id: 50, name: "Debts & Loans", icon: FaHandshake() },
  { id: 51, name: "Public Transportation", icon: FaBus() },
  { id: 52, name: "Flights", icon: FaPlane() },
  { id: 53, name: "Gardening", icon: FaSeedling() },
  { id: 54, name: "Shopping Bag", icon: FaShoppingBag() },
  { id: 55, name: "Audio & Streaming", icon: FaHeadphones() },
  { id: 56, name: "Clinic Visits", icon: FaClinicMedical() },
  { id: 57, name: "Work Expenses", icon: FaBriefcase() },
  { id: 58, name: "Currency", icon: FaDollarSign() },
  { id: 59, name: "Receipts", icon: FaReceipt() },
  { id: 60, name: "Discounts & Taxes", icon: FaPercent() },
  { id: 61, name: "Loose Change", icon: FaCoins() },
  { id: 62, name: "Bills & Invoices", icon: FaFileInvoiceDollar() },
  { id: 63, name: "Planning & To-Do", icon: FaClipboardList() },

  // Md Icons (Material Design) - providing alternatives or specific uses
  { id: 64, name: "Restaurant Dining", icon: MdRestaurant() },
  { id: 65, name: "Auto Expenses", icon: MdDirectionsCar() },
  { id: 66, name: "School Supplies", icon: MdSchool() },
  { id: 67, name: "Financial Transactions", icon: MdAttachMoney() },
  { id: 68, name: "Organize Categories", icon: MdCategory() },
  { id: 69, name: "Add Item", icon: MdAddCircle() },
  { id: 70, name: "Remove Item", icon: MdRemoveCircle() },
  { id: 71, name: "Gas Station", icon: MdLocalGasStation() },
  { id: 72, name: "Fast Food", icon: MdFastfood() },
  { id: 73, name: "Theaters & Shows", icon: MdTheaters() },
  { id: 74, name: "Child Care", icon: MdChildFriendly() },
  { id: 75, name: "Fitness Center", icon: MdFitnessCenter() },
  { id: 76, name: "Medical Services", icon: MdMedicalServices() },
  { id: 77, name: "Computer & Gadgets", icon: MdComputer() },
  { id: 78, name: "Gift Cards", icon: MdCardGiftcard() },
  { id: 79, name: "Clothing & Wardrobe", icon: MdCheckroom() },
  { id: 80, name: "Bars & Pubs", icon: MdLocalBar() },
  { id: 81, name: "Professional Cleaning", icon: MdCleaningServices() },
  { id: 82, name: "Hair & Personal Care", icon: MdContentCut() },
  { id: 83, name: "Beach & Outdoor", icon: MdBeachAccess() },
  { id: 84, name: "General Other", icon: MdMoreHoriz() },
  { id: 85, name: "Public Transport", icon: MdPublic() },
  { id: 86, name: "Emotional Well-being", icon: MdEmojiEmotions() },
  { id: 87, name: "Credit Score", icon: MdCreditScore() },
  { id: 88, name: "Home Hardware", icon: MdHardware() },
  { id: 89, name: "General Payments", icon: MdPayments() },
  { id: 90, name: "Support Services", icon: MdSupport() },
  { id: 91, name: "Work-related", icon: MdWork() },
  { id: 92, name: "Transit", icon: MdDirectionsTransit() },
  { id: 93, name: "Air Travel", icon: MdFlight() },
  { id: 94, name: "Gardening & Plants", icon: MdLocalFlorist() },
  { id: 95, name: "Accessories", icon: MdWatch() },
  { id: 96, name: "Receipts Log", icon: MdReceiptLong() },
  { id: 97, name: "Discounts", icon: MdDiscount() },

  // Io Icons (Ionicons) - providing alternatives or specific uses
  { id: 98, name: "Quick Meals", icon: IoFastFood() },
  { id: 99, name: "Vehicle Maintenance", icon: IoCar() },
  { id: 100, name: "School Activities", icon: IoSchool() },
  { id: 101, name: "Cash Transactions", icon: IoCash() },
  { id: 102, name: "Gaming", icon: IoGameController() },
  { id: 103, name: "Weight Training", icon: IoBarbell() },
  { id: 104, name: "News & Subscriptions", icon: IoNewspaper() },
  { id: 105, name: "Phone Services", icon: IoPhonePortrait() },
  { id: 106, name: "Key & Access", icon: IoKey() },
  { id: 107, name: "Wine & Spirits", icon: IoWine() },
  { id: 108, name: "Cafe Visits", icon: IoCafe() },
  { id: 109, name: "Art & Supplies", icon: IoBrush() },
  { id: 110, name: "Accessibility Needs", icon: IoAccessibility() },
  { id: 111, name: "Sunny Outdoors", icon: IoSunny() },
  { id: 112, name: "Horizontal Options", icon: IoEllipsisHorizontal() },
  { id: 113, name: "Train Travel", icon: IoTrain() },
  { id: 114, name: "Airplane Travel", icon: IoAirplane() },
  { id: 115, name: "Eco-friendly", icon: IoLeaf() },
  { id: 116, name: "Shopping Bag (Ionic)", icon: IoBag() },
  { id: 117, name: "Musical Instruments", icon: IoMusicalNotes() },
  { id: 118, name: "Haircut", icon: IoCut() },
  { id: 119, name: "Personal Care", icon: IoHandLeft() },
  { id: 120, name: "Time-based", icon: IoTime() },
  { id: 121, name: "Card Payments", icon: IoCard() },
  { id: 122, name: "Statistical Data", icon: IoStatsChart() },
  { id: 123, name: "Happiness", icon: IoHappy() },
  { id: 124, name: "Digital Receipt", icon: IoReceipt() },
  { id: 125, name: "Wallet Outline", icon: IoWalletOutline() },
];

export default icons;
