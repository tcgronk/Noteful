import React, { Component } from "react"
import NoteListMain from "./NoteListMain/NoteListMain";
import NoteListNav from "./NoteListNav/NoteListNav";

export default class NoteContext extends Component {
  render() {
    return (
      <div className='NoteContext'>
        <NoteListNav />
        <NoteListMain />
      </div>
    );
  }
}