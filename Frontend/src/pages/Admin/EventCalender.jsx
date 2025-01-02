import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState('');

  const addEvent = () => {
    if (newEvent.trim() === '') {
      setError('Event name cannot be empty');
      return;
    }

    const updatedEvents = [...events, { name: newEvent, id: Date.now() }];
    setEvents(updatedEvents);
    setNewEvent('');
    setError('');
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <CalendarContainer>
          {/* Static Calendar for January 2025 to March 2025 */}
          <div className="calendar">
            <h2>January 2025</h2>
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td>
                </tr>
                <tr>
                  <td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
                </tr>
                <tr>
                  <td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
                </tr>
                <tr>
                  <td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>
                </tr>
                <tr>
                  <td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
              </tbody>
            </table>

            <h2>February 2025</h2>
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td><td></td><td></td><td></td><td></td><td>1</td><td>2</td>
                </tr>
                <tr>
                  <td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
                </tr>
                <tr>
                  <td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                  <td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
                </tr>
                <tr>
                  <td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td></td><td></td>
                </tr>
              </tbody>
            </table>

            <h2>March 2025</h2>
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td><td></td><td></td><td></td><td></td><td>1</td><td>2</td>
                </tr>
                <tr>
                  <td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
                </tr>
                <tr>
                  <td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                  <td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
                </tr>
                <tr>
                  <td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td>
                </tr>
                <tr>
                  <td>31</td><td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CalendarContainer>

        <Events>
          <AddEventForm>
            <EventInput
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Add a new event"
            />
            <AddEventButton onClick={addEvent}>Add Event</AddEventButton>
            {error && <ErrorText>{error}</ErrorText>}
          </AddEventForm>
          {events.map((event) => (
            <Event key={event.id}>
              {event.name}
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            </Event>
          ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;

