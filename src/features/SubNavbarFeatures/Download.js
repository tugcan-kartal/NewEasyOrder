import React from 'react';

const Download = () => {
  const handleDownloadClick = () => {
    // Dosyanın URL'sini buraya ekleyin
    const fileUrl = 'https://sambapos.com/download/sambapos_setups/SambaSetup560.exe';

    // Dosya indirme işlemi için yeni bir link oluşturuyoruz
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'SambaSetup560'; // İndirilen dosyanın adı
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div className='flex flex-col gap-y-[15vh] justify-center items-center'>
        <div className='text-4xl text-red-600 font-bold text-center mt-[5vh]'>Download SambaPOS</div>
        <div className='md:text-2xl text-lg'>You can <span className='font-bold'>download</span> the SambaPOS</div>
        <button
          className='bg-pink-400 px-[5vh] py-[3vh] rounded-full text-white hover:text-pink-400 hover:bg-white'
          onClick={handleDownloadClick}
        >
          Download SambaPOS
        </button>
      </div>
    </div>
  );
};

export default Download;
