// TableCell component for table
const TableCell = ({ children, className }) => {
    return (
        <td className={`py-2 px-4 border-r ${className}`}>
            {children}
        </td>
    );
};

export default TableCell;
