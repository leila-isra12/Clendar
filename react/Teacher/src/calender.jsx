import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const App = () => {
    const localizer = momentLocalizer(moment);
    const [tasks, setTasks] = useState([]); // Store tasks with date, time, and location
    const [selectedDate, setSelectedDate] = useState(null);
    const [newTask, setNewTask] = useState("");
    const [taskTime, setTaskTime] = useState(""); // New: to capture the task hour
    const [taskLocation, setTaskLocation] = useState(""); // New: to capture the task location
    const [showModal, setShowModal] = useState(false);

    // Function to handle date selection
    const handleDayClick = (slotInfo) => {
        setSelectedDate(moment(slotInfo.start).format("YYYY-MM-DD"));
        setShowModal(true);
    };

    // Function to add a new task
    const addTask = () => {
        if (!newTask.trim() || !taskTime.trim()) return;

        const newTaskEvent = {
            title: `${newTask} (${taskLocation})`, // Display task title and location
            start: moment(`${selectedDate} ${taskTime}`).toDate(), // Combine date and time
            end: moment(`${selectedDate} ${taskTime}`)
                .add(1, "hours") // Default duration is 1 hour
                .toDate(),
        };

        setTasks((prev) => [...prev, newTaskEvent]); // Add the new task
        setNewTask("");
        setTaskTime("");
        setTaskLocation("");
        setShowModal(false);
    };

    return (
        <div class='all' style={{  marginRight:'180vw' }} >
 
            <div>
                <div className="header-section">
                    {/* Search Section */}
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search tasks, events..."
                            className="search-input"
                        />
                    </div>
                    {/* People Section */}


                    <div className="people-list">
                        <div className="person">
                            <img
                                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV8zNF9nbGl0dGVyX29mX3B1cnBsZV9wbHVzX3NpZ25faWNvbl9zaGFwZV9jbGlwYV8xMjFmZDUxOS1lMDRjLTRjNmMtOWEzYy1lNTUxYmViNmMwOTJfMS5qcGc.jpg"
                                alt="Person 5"
                                className="person-image"
                            />
                        </div>
                        <div className="person">
                            <img
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Person 1"
                                className="person-image"
                            />
                        </div>
                        <div className="person">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg"
                                alt="Person 4"
                                className="person-image"
                            />


                        </div>
                        <div className="person">
                            <img
                                src="https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg"
                                alt="Person 2"
                                className="person-image"
                            />


                        </div>
                        <div className="person">
                            <img
                                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
                                alt="Person 3"
                                className="person-image"
                            />
                        </div>

                        {/* Add more people here */}

                    </div>


                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div class='sah_gae'>

                    <div className="calendrier">
                        <Calendar
                            localizer={localizer}
                            events={tasks}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500, color: "#1d1969" ,marginLeft:'18vw', width:'55vw', marginRight:'500vw'}}
                            selectable
                            onSelectSlot={handleDayClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

