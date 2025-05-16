import axios from "axios";
import { GroupResponse, Info, User } from "./type";
import { groupByDepartment } from "./group-by-department";

const fetchData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users as User[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// ----------------------------------------------------------------------

async function main() {
  console.log(groupByDepartment(await fetchData()));
}

main();
