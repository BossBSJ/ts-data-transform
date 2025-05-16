import { User } from "./type";
import { groupByDepartment } from "./group-by-department";
import { describe, expect, test } from "vitest";

const mockUsers: User[] = [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smith",
    age: 45,
    gender: "male",
    email: "terry.medhurst@example.com",
    phone: "+1 555 123 4567",
    username: "terry45",
    password: "pass1234",
    birthDate: "1979-04-12",
    image: "https://dummyimage.com/200x200/000/fff&text=Terry",
    bloodGroup: "A+",
    height: 178,
    weight: 78,
    eyeColor: "Brown",
    hair: {
      color: "Black",
      type: "Straight",
    },
    ip: "192.168.1.1",
    address: {
      address: "123 Main St",
      city: "New York",
      state: "NY",
      stateCode: "NY",
      postalCode: "10001",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
      country: "USA",
    },
    macAddress: "00:1B:44:11:3A:B7",
    university: "New York University",
    bank: {
      cardExpire: "12/25",
      cardNumber: "1234-5678-9012-3456",
      cardType: "Visa",
      currency: "USD",
      iban: "US12345678901234567890",
    },
    company: {
      department: "Marketing",
      name: "TechCorp",
      title: "Marketing Manager",
      address: {
        address: "500 Tech Blvd",
        city: "San Francisco",
        state: "CA",
        stateCode: "CA",
        postalCode: "94105",
        coordinates: {
          lat: 37.7749,
          lng: -122.4194,
        },
        country: "USA",
      },
    },
    ein: "12-3456789",
    ssn: "123-45-6789",
    userAgent: "Mozilla/5.0",
    crypto: {
      coin: "Bitcoin",
      wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      network: "BTC",
    },
    role: "admin",
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Johnson",
    maidenName: "Williams",
    age: 32,
    gender: "female",
    email: "alice.johnson@example.com",
    phone: "+1 555 987 6543",
    username: "alice32",
    password: "securepass",
    birthDate: "1992-07-25",
    image: "https://dummyimage.com/200x200/000/fff&text=Alice",
    bloodGroup: "O-",
    height: 165,
    weight: 60,
    eyeColor: "Blue",
    hair: {
      color: "Blond",
      type: "Wavy",
    },
    ip: "10.0.0.2",
    address: {
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      stateCode: "CA",
      postalCode: "90001",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437,
      },
      country: "USA",
    },
    macAddress: "00:1B:44:11:3A:B8",
    university: "University of California",
    bank: {
      cardExpire: "08/26",
      cardNumber: "9876-5432-1098-7654",
      cardType: "MasterCard",
      currency: "USD",
      iban: "US09876543210987654321",
    },
    company: {
      department: "Marketing",
      name: "Creative Inc.",
      title: "Brand Strategist",
      address: {
        address: "789 Creative Way",
        city: "Los Angeles",
        state: "CA",
        stateCode: "CA",
        postalCode: "90002",
        coordinates: {
          lat: 34.0522,
          lng: -118.2437,
        },
        country: "USA",
      },
    },
    ein: "98-7654321",
    ssn: "987-65-4321",
    userAgent: "Mozilla/5.0",
    crypto: {
      coin: "Ethereum",
      wallet: "0x1234567890abcdef1234567890abcdef12345678",
      network: "ETH",
    },
    role: "user",
  },
];

test("groupByDepartment", () => {
  describe("should group users correctly by department", () => {
    const result = groupByDepartment(mockUsers);
    console.log("DEBUG:", result);
    expect(result.Marketing.male).toBe(1);
    expect(result.Marketing.female).toBe(1);
    expect(result.Marketing.ageRange).toBe("30-50");
    expect(result.Marketing.hair).toEqual({ Black: 1, Blond: 1 });
    expect(result.Marketing.addressUser).toEqual({
      TerryMedhurst: "12345",
      AliceSmith: "67890",
    });
  });
});
