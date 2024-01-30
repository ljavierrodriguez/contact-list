const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                {
                    id: 1,
                    full_name: 'John Doe',
                    email: 'john.doe@gmail.com',
                    agenda_slug: 'MyAgenda',
                    address: 'Av. Vitacura',
                    phone: '+56955555555'
                }
            ]
        },
        actions: {
            getContacts: () => {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/MyAgenda')
                    .then(response => response.json())
                    .then(datos => setStore({ contacts: datos }))
            }
        }
    }
}

export default getState