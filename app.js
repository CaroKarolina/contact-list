let contactList = [
    {
        name: 'Jan Kowalski',
        phoneNumber: '798 798 798',
    },
    {
        name: 'Janina Kowalska',
        phoneNumber: '799 799 799',
    }
]
console.log(contactList)

const renderContacts = () => {
    const contactsContainer = document.querySelector("#contacts");
    contactsContainer.innerHTML = '';
  
    contactList.forEach((contact) => {
      const newContact = `
          <div class="contact">
            <div class="contact-info">
                <p>${contact.name}</p>
                <span>${contact.phoneNumber}</span>
            </div>
            <div class="contact-remove">
                <i class="fas fa-trash"></i>
            </div> 
          </div>
        `;
  
      contactsContainer.innerHTML += newContact;
    });
};

document.querySelector('#add-contact').addEventListener('click', () => {
    const nameForm = document.querySelector('#name');
    const phoneNumberForm = document.querySelector('#phone-number');

    const newContact = {
        name: nameForm.value,
        phoneNumber: phoneNumberForm.value,
    };

    contactList.push(newContact);

    renderContacts();

    nameForm.value = ' ';
    phoneNumberForm.value = ' ';
});

document.querySelector('#contacts').addEventListener('click', (pointerEvent) => {
    if(pointerEvent.target.tagName === 'I') {
        const trashes = [...document.querySelectorAll('.contact-remove i')];
        const elementIndex = trashes.indexOf(pointerEvent.target);
        console.log(elementIndex)
        
        contactList = contactList.filter((el, index) => {
            return index !== elementIndex;
        });

        renderContacts();
    }
});

renderContacts();