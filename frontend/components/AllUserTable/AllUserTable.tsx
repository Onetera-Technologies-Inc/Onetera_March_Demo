import { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import AllUserTableActions from "./AllUserTableActions";

interface DataType {
  profile: string;
  key: React.Key;
  firstname: string;
  lastname: string;
  service: string;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Profile",
    width: 50,
    dataIndex: "profile",
    key: "profile",
    fixed: "left",
  },
  {
    title: "First Name",
    width: 100,
    dataIndex: "firstname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Last Name",
    width: 100,
    dataIndex: "lastname",
    key: "name",
    fixed: "left",
  },
  {
    title: "Address",
    width: 100,
    dataIndex: "address",
    key: "age",
    fixed: "left",
  },
  {
    title: "Service",
    width: 100,
    dataIndex: "service",
    key: "age",
    fixed: "left",
    sorter: true,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <AllUserTableActions />,
  },
];

const tableData: DataType[] = [
  {
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    firstname: "Kristen",
    lastname: "Dominguez",
    address: "5201 Tonya Garden Apt. 898, Lake Joseph, CA 36068",
    service: "Permits",
    key: "a4c58e61-8d25-48f0-9e6e-121c57f153c4",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    firstname: "Michael",
    lastname: "Campos",
    address: "96656 Guerrero Row Apt. 281, South Taylortown, OK 49858",
    service: "Permits",
    key: "4bfd7a15-7903-43ad-954e-e6877cedaa7d",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/59.jpg",
    firstname: "Amanda",
    lastname: "Gonzalez",
    address: "00994 Thomas Locks Apt. 323, East Brandon, OK 36381",
    service: "Permits",
    key: "a9f323b2-568a-4312-8249-10f06b490e9a",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/20.jpg",
    firstname: "Deborah",
    lastname: "Brown",
    address: "29843 Rodriguez Walks, Port Reginaldmouth, ND 34141",
    service: "Affordable Housing",
    key: "7799ba2f-0932-4335-86a5-3ae9e5673af7",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/97.jpg",
    firstname: "Joseph",
    lastname: "Santana",
    address: "79800 Alexander Forks, Sherryshire, KY 65130",
    service: "Affordable Housing",
    key: "446086ac-9746-468f-901b-420ae7688d7d",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/98.jpg",
    firstname: "Joseph",
    lastname: "Bryant",
    address: "269 Williamson Fields Apt. 047, West Thomas, VA 96560",
    service: "Permits",
    key: "344a8974-70b1-4ee4-8a24-466be9e50de3",
  },
  {
    profile: "https://randomuser.me/api/portraits/women/70.jpg",
    firstname: "Matthew",
    lastname: "Wallace",
    address: "7091 Scott Highway, Alisonburgh, KS 70152",
    service: "Permits",
    key: "5aa26e49-8665-458a-9d37-6e1b7edb9315",
  },
  {
    profile: "https://randomuser.me/api/portraits/men/61.jpg",
    firstname: "Philip",
    lastname: "Ramirez",
    address: "79055 Peterson Land, Kiddfort, ND 79355",
    service: "Permits",
    key: "e1e3b908-9baa-4d08-ace8-392b24aa3687",
  },
];

const AllUserTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>(tableData);
  const [selectedService, setSelectedService] = useState<string>('All Applications');

  const tags = [
    { name: "All Applications", color: "blue" },
    { name: "Affordable Housing", color: "green" },
    { name: "Permits", color: "volcano" },
    { name: "Archived Applications", color: "gold" },
  ];

  useEffect(() => {
    if(selectedService === 'All Applications')
    {
        setData(tableData)
    }
    else{
        const filteredData = tableData.filter(item => item.service === selectedService);
        setData(filteredData);
    }
    
  }, [selectedService]);

  const handleClick = (tagName: string) => {
    setSelectedService(tagName);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        {tags.map((tag : any) => (
          <Tag
            key={tag.name}
            color={selectedService === tag.name ? "magenta" : tag.color}
            onClick={() => handleClick(tag.name)}
            style={{ cursor: "pointer", margin: "5px" }}
          >
            {tag.name}
          </Tag>
        ))}
      </div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </>
  );
};

export default AllUserTable;
