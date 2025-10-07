import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined}) {
  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Employee[]>(
    `${API_URL}/employees/location/${store}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return (
    <div>
      {data.map((employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
        return (
          <Card
            key={employee.employeeId}
            className="bg-white border border-gray-200 rounded-lg mx-5 my-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                {fullName}
              </h3>
            </CardHeader>
            <Divider/>
            <CardBody className="p-4">
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  {employee.employeeEmail}
                </p>
                <p>
                  <span className="font-medium text-gray-900">Teléfono:</span>{" "}
                  {employee.employeePhoneNumber}
                </p>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}