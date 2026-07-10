import React from "react";

import "./RoomsWings.css";

const statusClass = {
  Available: "green",
  Occupied: "blue",
  "Out of Service": "gray",
};

const RoomsWings = ({ mockRooms }) => {
  const wingCount = new Set(mockRooms.map((r) => r.wing)).size;
  const handleAddRoom = () => {
    // Placeholder for add room functionality
    console.log("Add Room functionality is not implemented yet.");
  };

  return (
    <div className="rooms-wings-card">
      <div className="rooms-header">
        <span className="rooms-count">
          {mockRooms.length} rooms configured across {wingCount} wings
        </span>
        <button className="add-room-button" onClick={handleAddRoom}>
          + Add Room
        </button>
      </div>

      <div className="rooms-table-header">
        <div className="col wing">Wing</div>
        <div className="col room">Room</div>
        <div className="col bed">Bed</div>
        <div className="col roomType">Room Type</div>
        <div className="col roomStatus">Status</div>
        <div className="col occupant">Occupant / Note</div>
      </div>

      <div className="rooms-table">
        {mockRooms.map((room) => (
          <div className="room-row" key={room.id}>
            <div className="col wing">{room.wing}</div>
            <div className="col room">{room.room}</div>
            <div className="col bed">{room.bed}</div>
            <div className="col roomType">{room.roomType}</div>
            <div className="col roomStatus">
              <span className={`badge ${statusClass[room.status]}`}>
                {room.status}
              </span>
            </div>
            <div className="col occupant">{room.occupant}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsWings;
