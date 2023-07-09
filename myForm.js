
function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1CCWtadJv2yk8i8YRZ4F4HEUXvmBDh2xe/view?usp=sharing ';
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function github(){
    window.open('https://github.com/riadosman?tab=repositories', '_blank');
  }
  