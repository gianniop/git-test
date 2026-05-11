


function toggleHeight(item, start = 0) {
  if (item.style.height === '0px' || item.style.height === '' || item.style.height === `${start}px` ) {
    // Υπολόγισε το πραγματικό ύψος
    console.log(start);
    item.style.height = 'auto';
    const height = item.scrollHeight + 'px';
    item.style.height = `${start}px`; // Επαναφορά στο 0
    
    // Ξεκίνα το transition
    setTimeout(() => {
      item.style.height = height;
    }, 10); // Μικρή καθυστέρηση για να εφαρμοστεί το transition
  } else {
    // Κλείσιμο του στοιχείου
    item.style.height = item.scrollHeight + 'px'; // Ορίζουμε το τρέχον ύψος για να ξεκινήσει το transition
    setTimeout(() => {
      item.style.height = `${start}px`;
    }, 10);
  }
}