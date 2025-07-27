export const properties = [
    {
      id: '1',
      name: 'Luxury Apartment in Mumbai',
      address: '123 Marine Drive, Mumbai, Maharashtra 400020',
      purchaseDate: '2021-03-15',
      purchasePrice: 25000000, // 2.5 crore
      currentValue: 32000000, // 3.2 crore
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'APARTMENT',
      sqft: 1800,
      bedrooms: 3,
      bathrooms: 3,
      yearBuilt: 2018,
      status: 'ACTIVE'
    },
    {
      id: '2',
      name: 'Bangalore Villa',
      address: '456 Koramangala, Bangalore, Karnataka 560034',
      purchaseDate: '2020-07-22',
      purchasePrice: 15000000, // 1.5 crore
      currentValue: 18500000, // 1.85 crore
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'VILLA',
      sqft: 3500,
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 2015,
      status: 'ACTIVE'
    },
    {
      id: '3',
      name: 'Delhi Commercial Property',
      address: '789 Connaught Place, New Delhi 110001',
      purchaseDate: '2019-05-10',
      purchasePrice: 50000000, // 5 crore
      currentValue: 65000000, // 6.5 crore
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'COMMERCIAL',
      sqft: 5000,
      bedrooms: 0,
      bathrooms: 2,
      yearBuilt: 2010,
      status: 'ACTIVE'
    },
    {
      id: '4',
      name: 'Hyderabad Farm House',
      address: '101 Gachibowli, Hyderabad, Telangana 500032',
      purchaseDate: '2022-01-05',
      purchasePrice: 8000000, // 80 lakhs
      currentValue: 9500000, // 95 lakhs
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      type: 'FARM_HOUSE',
      sqft: 6000,
      bedrooms: 5,
      bathrooms: 4,
      yearBuilt: 2017,
      status: 'ACTIVE'
    }
  ];
  
  export const financialRecords = [
    {
      id: '101',
      propertyId: '1',
      date: '2023-01-05',
      amount: 250000,
      category: 'Rent',
      description: 'Monthly rental payment from corporate tenant',
      type: 'income'
    },
    {
      id: '102',
      propertyId: '1',
      date: '2023-02-05',
      amount: 250000,
      category: 'Rent',
      description: 'Monthly rental payment from corporate tenant',
      type: 'income'
    },
    {
      id: '103',
      propertyId: '1',
      date: '2023-01-15',
      amount: 50000,
      category: 'Maintenance',
      description: 'Quarterly society maintenance',
      type: 'expense'
    },
    {
      id: '104',
      propertyId: '2',
      date: '2023-01-01',
      amount: 180000,
      category: 'Rent',
      description: 'Monthly rental payment from family',
      type: 'income'
    },
    {
      id: '105',
      propertyId: '2',
      date: '2023-01-10',
      amount: 25000,
      category: 'Property Tax',
      description: 'Annual property tax payment',
      type: 'expense'
    },
    {
      id: '106',
      propertyId: '3',
      date: '2023-01-03',
      amount: 850000,
      category: 'Rent',
      description: 'Monthly rental payment from retail chain',
      type: 'income'
    },
    {
      id: '107',
      propertyId: '3',
      date: '2023-01-20',
      amount: 120000,
      category: 'Maintenance',
      description: 'Building maintenance charges',
      type: 'expense'
    },
    {
      id: '108',
      propertyId: '4',
      date: '2023-01-05',
      amount: 125000,
      category: 'Rent',
      description: 'Monthly rental payment from weekend rental',
      type: 'income'
    }
  ];
  
  export const performanceData = [
    {
      propertyId: '1',
      cashOnCash: 8.5,
      capRate: 6.2,
      netOperatingIncome: 2800000,
      cashFlow: 2200000,
      roi: 9.8,
      appreciationRate: 7.5
    },
    {
      propertyId: '2',
      cashOnCash: 7.2,
      capRate: 5.8,
      netOperatingIncome: 1900000,
      cashFlow: 1500000,
      roi: 8.4,
      appreciationRate: 6.1
    },
    {
      propertyId: '3',
      cashOnCash: 9.1,
      capRate: 7.5,
      netOperatingIncome: 8500000,
      cashFlow: 7500000,
      roi: 11.2,
      appreciationRate: 8.3
    },
    {
      propertyId: '4',
      cashOnCash: 6.8,
      capRate: 5.2,
      netOperatingIncome: 1400000,
      cashFlow: 1100000,
      roi: 7.5,
      appreciationRate: 5.4
    }
  ];
  
  export const tenants = [
    {
      id: 't1',
      propertyId: '1',
      name: 'Tech Solutions India Pvt. Ltd.',
      email: 'accounts@techsolutions.com',
      phone: '+91 9876543210',
      leaseStart: '2022-08-01',
      leaseEnd: '2024-07-31',
      monthlyRent: 250000
    },
    {
      id: 't2',
      propertyId: '2',
      name: 'Patel Family',
      email: 'amit.patel@gmail.com',
      phone: '+91 8765432109',
      leaseStart: '2022-06-15',
      leaseEnd: '2023-12-14',
      monthlyRent: 180000
    },
    {
      id: 't3',
      propertyId: '3',
      name: 'Reliance Retail',
      email: 'accounts@relianceretail.com',
      phone: '+91 7654321098',
      leaseStart: '2021-09-01',
      leaseEnd: '2026-08-31',
      monthlyRent: 850000
    },
    {
      id: 't4',
      propertyId: '4',
      name: 'Vacation Rentals India',
      email: 'bookings@vacationrentals.in',
      phone: '+91 6543210987',
      leaseStart: '2022-11-01',
      leaseEnd: '2023-10-31',
      monthlyRent: 125000
    }
  ];