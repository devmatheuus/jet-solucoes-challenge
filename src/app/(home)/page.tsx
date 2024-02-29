"use client";

import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { useCarData } from "@/hooks/useCarData";
import { useTableHeaderTitle } from "@/hooks/useTableHeaderTitle";
import { mapperReservationDate } from "@/utils/mapperReservationDate";
import { Wrapper, Badge, MobileBadge, StarsRating } from "@/components";
import { Table } from "./components/table";
import { MoreVertical } from "lucide-react";
import { List } from "./components/list";

const Home: React.FC = () => {
  const { cars } = useCarData();
  const { headerTitles } = useTableHeaderTitle();
  const isMobile = useIsMobile();

  return (
    <main className="m-auto flex w-screen max-w-screen-xl flex-1 justify-center p-4">
      {!isMobile && (
        <Table.Root>
          <Table.Head className="w-full bg-gray-50">
            <Table.Row className="uppercase text-gray-500">
              {headerTitles.map((title, i) => (
                <Table.HeaderItem
                  key={title}
                  className={`
                   text-sm
              ${i === headerTitles.length - 1 && "text-center"}
              `}
                >
                  {title}
                </Table.HeaderItem>
              ))}
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {cars.map((i, index) => (
              <Table.Row
                className={`border-b border-t border-b-gray-200 border-t-gray-200 px-2 ${
                  index === cars.length - 1 ? "rounded-xl border-none" : ""
                }`}
                key={index}
              >
                <Table.DataItem>
                  <Wrapper className="flex items-center gap-2">
                    <Image src={i.img} alt={i.name} width={50} height={50} />
                    <h2 className="font-medium">{i.name}</h2>
                  </Wrapper>
                </Table.DataItem>
                <Table.DataItem className="text-base text-gray-500">
                  <span>{mapperReservationDate(i.startReservationDate)}</span> -{" "}
                  <span>{mapperReservationDate(i.endReservationDate)}</span>
                </Table.DataItem>
                <Table.DataItem>
                  <Badge text={i.status} />
                </Table.DataItem>
                <Table.DataItem>
                  <StarsRating rating={+i.rating} />
                </Table.DataItem>
                <Table.DataItem>
                  <button
                    className="w-full text-center"
                    title="Options"
                    name="Options"
                  >
                    <MoreVertical className="w-full" />
                  </button>
                </Table.DataItem>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}

      {isMobile && (
        <List.Root>
          {cars.map((car, index) => (
            <List.ListItem
              className="flex justify-between border-b border-gray-200 pb-2"
              key={index}
            >
              <Wrapper className="flex gap-4">
                <Wrapper className="relative">
                  <Image src={car.img} alt={car.name} width={85} height={85} />
                  <MobileBadge status={car.status} />
                </Wrapper>
                <Wrapper className="flex flex-col justify-between">
                  <h2 className="text-lg font-bold">{car.name}</h2>
                  <p className="text-sm font-normal text-gray-500">
                    Next reservation: 11/07
                  </p>
                  <StarsRating rating={+car.rating} />
                </Wrapper>
              </Wrapper>
              <Wrapper className="self-start">
                <MoreVertical />
              </Wrapper>
            </List.ListItem>
          ))}
        </List.Root>
      )}
    </main>
  );
};

export default Home;
