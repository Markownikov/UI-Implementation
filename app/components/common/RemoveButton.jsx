import Image from 'next/image';

const RemoveButton = ({ onClick, icon }) => {
    return (
        <button onClick={onClick} className="cursor-pointer">
            <Image src={icon} alt="Remove" width={20} height={20} className='w-[20px] h-[20px]' />
        </button>
    );
};

export default RemoveButton;
