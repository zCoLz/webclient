import { Button, Modal } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import './scss/styleDashboard.scss';
import { MdBookmarkAdd } from 'react-icons/md';
interface DataType {
    nameclasssection: string;
    class: string;
    semester: number;
    schoolyear: number;
    status: 'Đang mở' | 'Đang đóng';
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Tên lớp học phần',
        dataIndex: 'nameclasssection',
    },
    {
        title: 'Lớp',
        dataIndex: 'class',
    },
    {
        title: 'Học kỳ',
        dataIndex: 'semester',
    },
    {
        title: 'Năm học',
        dataIndex: 'schoolyear',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (status: DataType['status']) => (
            <span className="text-sm" style={{ color: statusColorMap[status] }}>
                {status}
            </span>
        ),
    },
];
const data: DataType[] = [
    {
        nameclasssection: 'Công nghệ phần mềm CĐ TH 19A',
        class: 'CĐ TH 19A',
        semester: 4,
        schoolyear: 2021,
        status: 'Đang mở',
    },
    {
        nameclasssection: 'Cơ sở dữ liệu CĐ TH 20A',
        class: 'CĐ TH 20A',
        semester: 2,
        schoolyear: 2022,
        status: 'Đang mở',
    },
    {
        nameclasssection: 'Nhập môn lập trình CĐ TH 20A',
        class: 'CĐ TH 19A',
        semester: 4,
        schoolyear: 2021,
        status: 'Đang đóng',
    },
    {
        nameclasssection: 'Phần cứng máy tính CĐ TH 18B',
        class: 'CĐ TH 18B',
        semester: 6,
        schoolyear: 2019,
        status: 'Đang đóng',
    },
    {
        nameclasssection: 'Thiết kế website',
        class: 'CĐ Th 21A',
        semester: 2,
        schoolyear: 2023,
        status: 'Đang mở',
    },
];
const statusColorMap: { [key in DataType['status']]: string } = {
    'Đang mở': 'green',
    'Đang đóng': 'red',
};

const AppClassSection = () => {
    const [isPopupVisibleCreateClass, setIsPopupVisibleCreateClass] = useState(false);

    // const handleIsShowModal = () => {};
    const handleOnclickCreateClass = () => {
        setIsPopupVisibleCreateClass(true);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {' '}
            <div className="container mt-10">
                <div className="flex justify-between mb-5">
                    <div>
                        <input className="outline-none focus:outline-blue-200 h-6 w-52" type="text" />
                    </div>
                    <div>
                        <Button onChange={showModal} type="default">
                            <MdBookmarkAdd />
                        </Button>
                    </div>

                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
                <Table dataSource={data} columns={columns} />
            </div>
        </>
    );
};

export default AppClassSection;
