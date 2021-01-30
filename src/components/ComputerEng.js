import React, { useState } from 'react';
import { Table, Input, Select, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import data from './data';
import ModalApp from './Modal';

const { Option } = Select;

const ComputerEng = () => {
  const [visible, setVisible] = useState(false);
  const [statusInput, setStatusInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  let [newTableData, setNewTableData] = useState(data);

  const columns = [
    {
      title: 'Ad, soyad',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ellipsis: true,
    },
    {
      title: 'Ünvan',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
      ellipsis: true,
    },
    {
      title: 'Yaş',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      ellipsis: true,
    },
    {
      title: 'Universitet',
      dataIndex: 'university',
      key: 'university',
      sorter: (a, b) => a.university.localeCompare(b.university),
      ellipsis: true,
    },
    {
      title: 'Təhsil növü',
      dataIndex: 'eduType',
      key: 'eduType',
      sorter: (a, b) => a.eduType.localeCompare(b.eduType),
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      ellipsis: true,
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   sorter: (a, b) => a.address.localeCompare(b.address),
    //   ellipsis: true,
    //   render: (status) => (
    //     <>
    //       {status.map((s) => {
    //         let color = s.length > 6 ? 'red' : 'green';
    //         if (s === 'blocked') {
    //           color = 'grey';
    //         }
    //         return (
    //           <Tag color={color} key={s}>
    //             {s.toLowerCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
  ];

  const onFinish = (values) => {
    setVisible(false);
    setNewTableData([...newTableData, values]);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleStatus = (selectedStatus) => {
    setStatusInput(selectedStatus);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  if (statusInput.length > 0) {
    newTableData = data.filter((dataItem) =>
      statusInput.includes(dataItem.status)
    );
  }
  newTableData = newTableData.filter((dataItem) =>
    dataItem.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: 'large' }}>
        SABAH qruplarında Kompüter Mühəndisliyi ixtisası üzrə tələbələrin
        siyahısı
      </h1>
      <div style={{ marginBottom: 30 }} className="filters-container">
        <Input
          style={{ width: 160, marginRight: 20 }}
          placeholder="Axtarış"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
        />
        <Select
          onChange={handleStatus}
          placeholder="Status"
          style={{ width: 96 }}
          allowClear
          mode={'multiple'}
        >
          <Option value="təhsil alır">Təhsil alır</Option>
          <Option value="məzun">Məzun</Option>
          <Option value="dondurulub">Dondurulub</Option>
        </Select>
        <Button
          style={{ float: 'right' }}
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Yeni tələbə
        </Button>
        <ModalApp
          visible={visible}
          setVisible={setVisible}
          onFinish={onFinish}
        />
      </div>
      <Table columns={columns} dataSource={newTableData} />
    </>
  );
};

export default ComputerEng;

/**                                                                                       SECOND WAY  */
// const [isModalVisible, setIsModalVisible] = useState(false);
//   const [tableData, setTableData] = useState(data);
//   const [selectData, setSelectData] = useState(data);
//   const [searchData, setSearchData] = useState(data);

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       sorter: (a, b) => a.name.localeCompare(b.name),
//       ellipsis: true,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//       sorter: (a, b) => a.age - b.age,
//       ellipsis: true,
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//       sorter: (a, b) => a.address.localeCompare(b.address),
//       ellipsis: true,
//     },
//     // {
//     //   title: 'Status',
//     //   dataIndex: 'status',
//     //   key: 'status',
//     //   sorter: (a, b) => a.address.localeCompare(b.address),
//     //   ellipsis: true,
//     //   render: (status) => (
//     //     <>
//     //       {status.map((s) => {
//     //         let color = s.length > 6 ? 'red' : 'green';
//     //         if (s === 'blocked') {
//     //           color = 'grey';
//     //         }
//     //         return (
//     //           <Tag color={color} key={s}>
//     //             {s.toLowerCase()}
//     //           </Tag>
//     //         );
//     //       })}
//     //     </>
//     //   ),
//     // },
//   ];

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     const newSearchData = selectData.filter((d) =>
//       d.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setSearchData(newSearchData);
//     setTableData(newSearchData);
//   };

//   const handleSelect = (selectedStatus) => {
//     if (selectedStatus.length > 0) {
//       const newSelectData = searchData.filter((searchDataItem) =>
//         selectedStatus.includes(searchDataItem.status)
//       );
//       setSelectData(newSelectData);
//       setTableData(newSelectData);
//     } else {
//       setSelectData(data);
//       setTableData(data);
//     }
//   };
