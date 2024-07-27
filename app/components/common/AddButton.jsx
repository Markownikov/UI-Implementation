import Image from 'next/image';

const AddButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            <Image src="/add.svg" alt="Add" width={20} height={20} className='w-[20px] h-[20px]' />
        </button>
    );
};

export default AddButton;
