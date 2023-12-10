function reserveRoom(){
    const name = document.getElementById('name').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const rooms=document.getElementById('numberofrooms').value;
    const reservationDetails = document.getElementById('reservationDetails');

    var one_room_price=2000;
    const total_price=one_room_price*rooms;


    reservationDetails.innerHTML = `
        <h2>Reservation Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Check-in Date:</strong> ${checkInDate}</p>
        <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
        <p><strong>Your total price:</strong> ${total_price}</p>
    `;

}