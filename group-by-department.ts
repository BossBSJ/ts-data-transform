import { GroupResponse, User } from "./type";

export const groupByDepartment = (data: User[]) => {
  let response: GroupResponse = {};

  data.forEach((user) => {
    const department = user.company.department;
    if (!response[department])
      response[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };

    const summary = response[department];

    // Gender
    const gender = user.gender;
    summary[gender]++;

    // Age range
    if (!summary.ageRange) {
      summary.ageRange = `${user.age}-${user.age}`;
    } else {
      const [min, max] = summary.ageRange.split("-").map(Number);
      summary.ageRange = `${Math.min(min, user.age)}-${Math.max(
        max,
        user.age
      )}`;
    }

    // Hair color
    summary.hair[user.hair.color] = (summary.hair[user.hair.color] || 0) + 1;

    // Address
    summary.addressUser[user.firstName + user.lastName] =
      user.address.postalCode;
  });

  return response;
};
