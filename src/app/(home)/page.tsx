import { Table } from "./components/table";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="m-auto flex w-screen max-w-screen-xl flex-1 justify-center p-4 ">
      <Table.Root>
        <Table.Head className="w-full bg-gray-50">
          <></>
        </Table.Head>
      </Table.Root>
    </main>
  );
};

export default Home;
