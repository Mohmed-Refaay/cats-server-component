import { getCats } from "@/server/actions/cats";
import Table from "@mui/joy/Table";

export async function CatsList() {
  const data = await getCats();

  return (
    <div className="flex-1 max-w-[700px] mt-10">
      <Table sx={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Owner</th>
          </tr>
        </thead>

        <tbody>
          {data.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.age}</td>
              <td>{cat.owner}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
}
