//Task 2: adding support tickets dynamically.
allTickets = [];

function createTicket(name, description, priority) {
    let ticketContainer = document.getElementById("ticketContainer");
    let ticket = document.createElement(`div`);

    ticket.setAttribute(`class`, `ticket`);
    ticket.setAttribute(`id`, `${allTickets.length + 1}`);

    ticket.style.backgroundColor = "lightblue";
    ticket.style.width = "33.33%";
    ticket.style.textAlign = "center";
    ticket.style.borderRadius = "10px";
    ticket.innerHTML = `
    <h3>Name: ${name}</h3>
    <p>Issue: ${description}</p>
    <label>Priority: ${priority}</label>
    <button class="resolveButton">Resolve</button>`;

    allTickets.push(ticket);
    ticketContainer.appendChild(ticket);

    const resolveButton = ticket.querySelector(".resolveButton");
    resolveButton.addEventListener("click", () => {
        ticketContainer.removeChild(ticket);
    });

}

createTicket("Jake", "My computer broke", "High");
createTicket("Finn", "My computer exploded", "Medium");
createTicket("Patrick", "My computer caught fire", "Medium");
createTicket("Subaru", "My computer has a virus", "Low");
createTicket("Matt", "My computer smells", "High");
