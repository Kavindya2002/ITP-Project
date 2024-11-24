
//  data arrays for forms
const regions = [ 'Afghanistan', 'Bangladesh', 'Bhutan', 'India', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka' ]
const cities = [ 'Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna', 'Matara', 'Anuradhapura', 'Batticaloa', 'Kurunegala', 'Ratnapura', 'Polonnaruwa', 'Trincomalee', 'Vavuniya', 'Nuwara Eliya', 'Hikkaduwa', 'Ambalangoda', 'Hambantota', 'Puttalam', 'Mullaitivu', 'Kalutara', 'Gampaha', 'Maharagama', 'Dehiwala', 'Colombo 7', 'Colombo 3' ]
const postalCodes = [ '10000', '10100', '10200', '10300', '10400', '10500', '10600', '10700', '10800', '10900', '11000', '11100', '11200', '11300', '11400', '11500', '11600', '11700', '11800', '11900', '12000', '12100', '12200', '12300', '12400', '12500', '12600', '12700', '12800', '12900', '13000', '13100', '13200', '13300', '13400', '13500', '13600', '13700', '13800', '13900', '14000', '14100', '14200', '14300', '14400', '14500', '14600', '14700', '14800', '14900', '15000', '15100', '15200', '15300', '15400', '15500', '15600', '15700', '15800', '15900', '16000', '16100', '16200', '16300', '16400', '16500', '16600', '16700', '16800', '16900', '17000', '17100', '17200', '17300', '17400', '17500', '17600', '17700', '17800', '17900', '18000', '18100', '18200', '18300', '18400', '18500', '18600', '18700', '18800', '18900', '19000', '19100', '19200', '19300', '19400', '19500' ]
const paymentMethods = [ 'Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'Cash', 'Mobile Payment', 'Cryptocurrency', 'Cheque', 'Gift Card', 'Direct Debit', 'Prepaid Card', 'Apple Pay', 'Google Pay', 'Amazon Pay', 'Alipay', 'WeChat Pay', 'Stripe', 'Square', 'Venmo', 'TransferWise', 'Zelle', 'Samsung Pay' ];      


  // just for UI remove when backend connects
  const customers = [
    {
        id: '001',
        firstName: 'Kasun',
        lastName: 'Kumara',
        username: 'kasun.kumara',
        country: 'Sri Lanka',
        nic: '991234567V',
        mobile: '+94771234567',
        email: 'kasun.kumara@example.com',
        address: 'No. 1, Colombo Road',
        city: 'Colombo',
        postalCode: '00100',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2018-03-15'),
        payMethod: 'Credit Card'
    },
    {
        id: '002',
        firstName: 'James',
        lastName: 'Bond',
        username: 'james.bond',
        country: 'USA',
        nic: '007123456',
        mobile: '+12025550123',
        email: 'james.bond@example.com',
        address: '221B Baker Street',
        city: 'Los Angeles',
        postalCode: '90001',
        imgPath: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2022-06-20'),
        payMethod: 'PayPal'
    },
    {
        id: '003',
        firstName: 'Dr.',
        lastName: 'Dre',
        username: 'dr.dre',
        country: 'Jamaica',
        nic: 'JA87654321',
        mobile: '+18761234567',
        email: 'dr.dre@example.com',
        address: '8 Mile Road',
        city: 'Kingston',
        postalCode: '12345',
        imgPath: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2017-09-01'),
        payMethod: 'Debit Card'
    },
    {
        id: '004',
        firstName: 'Maria',
        lastName: 'Garcia',
        username: 'maria.garcia',
        country: 'Spain',
        nic: 'ES12345678',
        mobile: '+34123456789',
        email: 'maria.garcia@example.com',
        address: 'Calle Mayor 10',
        city: 'Madrid',
        postalCode: '28001',
        imgPath: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        isActive: false,
        isLoyalMember: true,
        regDate: Date('2016-01-25'),
        payMethod: 'Credit Card'
    },
    {
        id: '005',
        firstName: 'Lee',
        lastName: 'Wong',
        username: 'lee.wong',
        country: 'China',
        nic: 'CN98765432',
        mobile: '+8613012345678',
        email: 'lee.wong@example.com',
        address: 'No. 88, Beijing Road',
        city: 'Beijing',
        postalCode: '100000',
        imgPath: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2021-11-05'),
        payMethod: 'Bank Transfer'
    },
    {
        id: '006',
        firstName: 'Nina',
        lastName: 'Patel',
        username: 'nina.patel',
        country: 'India',
        nic: 'IN9876543210',
        mobile: '+911234567890',
        email: 'nina.patel@example.com',
        address: '12 MG Road',
        city: 'Mumbai',
        postalCode: '400001',
        imgPath: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2018-07-19'),
        payMethod: 'UPI'
    },
    {
        id: '007',
        firstName: 'John',
        lastName: 'Doe',
        username: 'john.doe',
        country: 'Canada',
        nic: 'CA123456789',
        mobile: '+14161234567',
        email: 'john.doe@example.com',
        address: '123 Maple Street',
        city: 'Toronto',
        postalCode: 'M5V 2T6',
        imgPath: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        isActive: false,
        isLoyalMember: false,
        regDate: Date('2023-02-13'),
        payMethod: 'Credit Card'
    },
    {
        id: '008',
        firstName: 'Elena',
        lastName: 'Ivanova',
        username: 'elena.ivanova',
        country: 'Russia',
        nic: 'RU1234567890',
        mobile: '+79161234567',
        email: 'elena.ivanova@example.com',
        address: 'Tverskaya Street 7',
        city: 'Moscow',
        postalCode: '125009',
        imgPath: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2015-08-10'),
        payMethod: 'Yandex.Money'
    },
    {
        id: '009',
        firstName: 'Ahmed',
        lastName: 'Al-Farsi',
        username: 'ahmed.alfarsi',
        country: 'UAE',
        nic: 'AE123456789',
        mobile: '+971501234567',
        email: 'ahmed.alfarsi@example.com',
        address: 'Sheikh Zayed Road',
        city: 'Dubai',
        postalCode: '00000',
        imgPath: 'https://images.unsplash.com/photo-1531891437562-3a9c6e27e4c8',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2022-12-01'),
        payMethod: 'Cash'
    },
    {
        id: '010',
        firstName: 'Lena',
        lastName: 'Schmidt',
        username: 'lena.schmidt',
        country: 'Germany',
        nic: 'DE123456789',
        mobile: '+491721234567',
        email: 'lena.schmidt@example.com',
        address: 'Kurfürstendamm 50',
        city: 'Berlin',
        postalCode: '10115',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: true,
        regDate: Date('2017-04-22'),
        payMethod: 'SEPA'
    },
    {
        id: '011',
        firstName: 'Carlos',
        lastName: 'Martinez',
        username: 'carlos.martinez',
        country: 'Mexico',
        nic: 'MX123456789',
        mobile: '+521234567890',
        email: 'carlos.martinez@example.com',
        address: 'Calle Reforma 20',
        city: 'Mexico City',
        postalCode: '06000',
        imgPath: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2018-11-17'),
        payMethod: 'Credit Card'
    },
    {
        id: '012',
        firstName: 'Sophie',
        lastName: 'Dubois',
        username: 'sophie.dubois',
        country: 'France',
        nic: 'FR123456789',
        mobile: '+33123456789',
        email: 'sophie.dubois@example.com',
        address: '10 Avenue des Champs-Élysées',
        city: 'Paris',
        postalCode: '75008',
        imgPath: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
        isActive: false,
        isLoyalMember: false,
        regDate: Date('2022-08-09'),
        payMethod: 'Carte Bleue'
    },
    {
        id: '013',
        firstName: 'Yuki',
        lastName: 'Tanaka',
        username: 'yuki.tanaka',
        country: 'Japan',
        nic: 'JP1234567890',
        mobile: '+81312345678',
        email: 'yuki.tanaka@example.com',
        address: 'Shibuya Crossing',
        city: 'Tokyo',
        postalCode: '150-0001',
        imgPath: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2019-05-06'),
        payMethod: 'PayPay'
    },
    {
        id: '014',
        firstName: 'Hans',
        lastName: 'Müller',
        username: 'hans.muller',
        country: 'Switzerland',
        nic: 'CH123456789',
        mobile: '+41123456789',
        email: 'hans.muller@example.com',
        address: 'Bahnhofstrasse 10',
        city: 'Zurich',
        postalCode: '8001',
        imgPath: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2020-03-11'),
        payMethod: 'PostFinance'
    },
    {
        id: '015',
        firstName: 'Olga',
        lastName: 'Petrova',
        username: 'olga.petrova',
        country: 'Ukraine',
        nic: 'UA123456789',
        mobile: '+380123456789',
        email: 'olga.petrova@example.com',
        address: 'Khreshchatyk Street 22',
        city: 'Kyiv',
        postalCode: '01001',
        imgPath: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
        isActive: false,
        isLoyalMember: true,
        regDate: Date('2016-09-28'),
        payMethod: 'PrivatBank'
    },
    {
        id: '016',
        firstName: 'Amina',
        lastName: 'Hassan',
        username: 'amina.hassan',
        country: 'Nigeria',
        nic: 'NG123456789',
        mobile: '+234123456789',
        email: 'amina.hassan@example.com',
        address: '10 Victoria Island',
        city: 'Lagos',
        postalCode: '100001',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2019-04-12'),
        payMethod: 'Bank Transfer'
    },
    {
        id: '017',
        firstName: 'Chen',
        lastName: 'Wei',
        username: 'chen.wei',
        country: 'China',
        nic: 'CN123456789',
        mobile: '+8618012345678',
        email: 'chen.wei@example.com',
        address: 'No. 3, Huaihai Road',
        city: 'Shanghai',
        postalCode: '200000',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: false,
        regDate: Date('2017-12-18'),
        payMethod: 'Alipay'
    },
    {
        id: '018',
        firstName: 'Fatima',
        lastName: 'Mohamed',
        username: 'fatima.mohamed',
        country: 'Saudi Arabia',
        nic: 'SA123456789',
        mobile: '+966501234567',
        email: 'fatima.mohamed@example.com',
        address: 'King Fahd Road',
        city: 'Riyadh',
        postalCode: '11564',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2021-01-25'),
        payMethod: 'Credit Card'
    },
    {
        id: '019',
        firstName: 'Hans',
        lastName: 'Schneider',
        username: 'hans.schneider',
        country: 'Germany',
        nic: 'DE123456789',
        mobile: '+491601234567',
        email: 'hans.schneider@example.com',
        address: 'Alexanderplatz 5',
        city: 'Berlin',
        postalCode: '10178',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: false,
        regDate: Date('2015-11-11'),
        payMethod: 'SEPA'
    },
    {
        id: '020',
        firstName: 'Anna',
        lastName: 'Kowalski',
        username: 'anna.kowalski',
        country: 'Poland',
        nic: 'PL123456789',
        mobile: '+481231234567',
        email: 'anna.kowalski@example.com',
        address: 'Ul. Marszałkowska 10',
        city: 'Warsaw',
        postalCode: '00-001',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2022-03-30'),
        payMethod: 'Credit Card'
    },
    {
        id: '021',
        firstName: 'Pablo',
        lastName: 'Rodriguez',
        username: 'pablo.rodriguez',
        country: 'Argentina',
        nic: 'AR123456789',
        mobile: '+541123456789',
        email: 'pablo.rodriguez@example.com',
        address: 'Av. 9 de Julio 123',
        city: 'Buenos Aires',
        postalCode: 'C1002',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2020-05-19'),
        payMethod: 'Cash'
    },
    {
        id: '022',
        firstName: 'Siti',
        lastName: 'Aminah',
        username: 'siti.aminah',
        country: 'Malaysia',
        nic: 'MY123456789',
        mobile: '+60123456789',
        email: 'siti.aminah@example.com',
        address: 'Jalan Ampang 50',
        city: 'Kuala Lumpur',
        postalCode: '50088',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2021-09-07'),
        payMethod: 'Bank Transfer'
    },
    {
        id: '023',
        firstName: 'Gustavo',
        lastName: 'Torres',
        username: 'gustavo.torres',
        country: 'Brazil',
        nic: 'BR123456789',
        mobile: '+5511987654321',
        email: 'gustavo.torres@example.com',
        address: 'Rua das Flores 25',
        city: 'São Paulo',
        postalCode: '01001-000',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2020-10-15'),
        payMethod: 'Credit Card'
    },
    {
        id: '024',
        firstName: 'Ekaterina',
        lastName: 'Smirnova',
        username: 'ekaterina.smirnova',
        country: 'Russia',
        nic: 'RU123456789',
        mobile: '+791612345678',
        email: 'ekaterina.smirnova@example.com',
        address: 'Nevsky Prospekt 30',
        city: 'Saint Petersburg',
        postalCode: '191025',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: true,
        regDate: Date('2016-07-21'),
        payMethod: 'Yandex.Money'
    },
    {
        id: '025',
        firstName: 'Juan',
        lastName: 'Perez',
        username: 'juan.perez',
        country: 'Mexico',
        nic: 'MX123456789',
        mobile: '+521234567890',
        email: 'juan.perez@example.com',
        address: 'Calle Reforma 50',
        city: 'Guadalajara',
        postalCode: '44100',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2019-11-22'),
        payMethod: 'Credit Card'
    },
    {
        id: '026',
        firstName: 'Sofia',
        lastName: 'Gomez',
        username: 'sofia.gomez',
        country: 'Chile',
        nic: 'CL123456789',
        mobile: '+561234567890',
        email: 'sofia.gomez@example.com',
        address: 'Avenida O\'Higgins 120',
        city: 'Santiago',
        postalCode: '8320000',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2020-02-18'),
        payMethod: 'Cash'
    },
    {
        id: '027',
        firstName: 'Luca',
        lastName: 'Bianchi',
        username: 'luca.bianchi',
        country: 'Italy',
        nic: 'IT123456789',
        mobile: '+391234567890',
        email: 'luca.bianchi@example.com',
        address: 'Via Roma 25',
        city: 'Rome',
        postalCode: '00184',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: false,
        regDate: Date('2021-07-14'),
        payMethod: 'Credit Card'
    },
    {
        id: '028',
        firstName: 'Monica',
        lastName: 'Hernandez',
        username: 'monica.hernandez',
        country: 'Colombia',
        nic: 'CO123456789',
        mobile: '+571234567890',
        email: 'monica.hernandez@example.com',
        address: 'Calle 50 100',
        city: 'Bogotá',
        postalCode: '110111',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: true,
        regDate: Date('2018-09-23'),
        payMethod: 'Credit Card'
    },
    {
        id: '029',
        firstName: 'Hiroshi',
        lastName: 'Yamamoto',
        username: 'hiroshi.yamamoto',
        country: 'Japan',
        nic: 'JP123456789',
        mobile: '+813123456789',
        email: 'hiroshi.yamamoto@example.com',
        address: 'Shibuya 2-10-5',
        city: 'Tokyo',
        postalCode: '150-0002',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: false,
        isLoyalMember: true,
        regDate: Date('2016-01-12'),
        payMethod: 'PayPay'
    },
    {
        id: '030',
        firstName: 'Marie',
        lastName: 'Dupont',
        username: 'marie.dupont',
        country: 'France',
        nic: 'FR123456789',
        mobile: '+33123456789',
        email: 'marie.dupont@example.com',
        address: 'Avenue des Champs-Élysées 66',
        city: 'Paris',
        postalCode: '75008',
        imgPath: 'https://images.unsplash.com/photo-1502767089025-6572583495b0',
        isActive: true,
        isLoyalMember: false,
        regDate: Date('2023-02-10'),
        payMethod: 'Credit Card'
    }
]

export { customers, regions, cities, postalCodes, paymentMethods }

//  delete this file after Beckend connected