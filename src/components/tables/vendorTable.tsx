'use client';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
// Chakra imports
import {
    Button,
    Flex,
    Tooltip,
    useColorModeValue
} from '@chakra-ui/react'
import { ConfigProvider, Form, FormInstance, GetRef, Input, Popconfirm, Table, TableProps } from 'antd';
import React, { useContext, useEffect, useRef, useState } from "react";



type TableRowSelection<T> = TableProps<T>['rowSelection'];
type InputRef = GetRef<typeof Input>;
const EditableContext = React.createContext<FormInstance<any> | null>(null);
type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
type AnyObject = {key: React.Key}





export default function VendorTable(props: { data: any, extra: JSX.Element }) {

    const { extra, data, ...rest } = props
    const [count, setCount] = useState(2);
    const [dataSource, setDataSource] = useState<DataType[]>([...data]);

    // Chakra Color Mode

    //Gray 600 #4A5568

    const tableBgColor = useColorModeValue('#FFFFFF', '#2D3748');
    const tableBorderColor = useColorModeValue('#A0AEC0', '#525151');
    const tableCellBorderColor = useColorModeValue('#D6D6D6', '#525151');
    const textColorPrimary = useColorModeValue('#1B2559', '#DEDEDF');
    const tableHeaderBg = useColorModeValue('#F5F5F5', '#1A202C');
    const tableRowHover = useColorModeValue('#F7F7F7', '#4A5568');
    const tableScrollBarBg = useColorModeValue('#A0AEC0', '#171923');



    interface EditableRowProps {
        index: number;
    }
    interface Item {
        key: string;
        FirstName: string;
        LastName: string;
        EmailAddress: string;
        WorkPhone: string;
        Mobile: string;
    }
    interface EditableCellProps {
        title: React.ReactNode;
        editable: boolean;
        children: React.ReactNode;
        dataIndex: keyof Item;
        record: Item;
        handleSave: (record: Item) => void;
    }
    interface DataType {
        key: React.Key;
        FirstName: string;
        LastName: string;
        EmailAddress: string;
        WorkPhone: string;
        Mobile: string;
    }

    const handleAdd = () => {
        const newData: DataType = {
            key: count,
            FirstName: '',
            LastName: '',
            EmailAddress: "@gmail.com",
            WorkPhone: "055",
            Mobile: "07"
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };



    const EditableCell: React.FC<EditableCellProps> = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef<InputRef>();
        const form = useContext(EditableContext)!;

        useEffect(() => {
            if (editing) {
                inputRef.current!.focus();
            }
        }, [editing]);

        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({ [dataIndex]: record[dataIndex] });
        };

        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({ ...record, ...values });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };

        let childNode = children;

        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input allowClear ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                    {children}
                </div>
            );
        }

        return <td {...restProps}>{childNode}</td>;
    };






    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'First Name',
            dataIndex: 'FirstName',
            editable: true,
        },
        {
            title: 'Last Name',
            dataIndex: 'LastName',
            editable: true,
        },
        ,
        {
            title: 'Email',
            dataIndex: 'EmailAddress',
            editable: true,
            width: '21%',
        },
        ,
        {
            title: 'Work Phone',
            dataIndex: 'WorkPhone',
            editable: true,
            width: '13%',
        },
        ,
        {
            title: 'Mobile',
            dataIndex: 'Mobile',
            editable: true,
            width: '13%',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            fixed: 'right',
            width: '7.5%',
            render: (_: any, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <DeleteIcon color={'red'} cursor={'pointer'} />
                    </Popconfirm>
                ) : null,

        },
    ];




    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });



    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };


    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        /* here is your component tokens */
                        colorBgContainer: tableBgColor,
                        borderColor: tableCellBorderColor,
                        headerColor: textColorPrimary,
                        headerBg: tableHeaderBg,
                        // rowSelectedBg: 'white',
                        stickyScrollBarBg: tableScrollBarBg,
                        rowHoverBg: tableRowHover,
                        headerSplitColor: tableBorderColor,
                        // filterDropdownBg: "red",
                        // bodySortBg: "red"
                        colorText:textColorPrimary,
                        controlItemBgHover:"red"
                    },
                },
            }}
        >
            <Table
                title={() =>
                    <Tooltip label='Add New Row' placement='top'>
                        <Button
                            border={2}
                            onClick={handleAdd}
                            size='sm'
                            variant='solid'
                            rightIcon={<AddIcon />}
                        >
                            Add Row
                        </Button>
                    </Tooltip>
                }
                components={components}
                rowClassName={() => 'editable-row'}
                dataSource={dataSource}
                size='middle'
                columns={columns as ColumnTypes}
                pagination={{ pageSize: 4 }}
                scroll={{ y: 180, x: 1000 }}
            />
        </ConfigProvider>
    )
}
