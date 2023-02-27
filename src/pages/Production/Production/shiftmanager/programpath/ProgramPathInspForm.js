import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import MachineSelectionForm from './MachineSelectionForm';
import ProgramPath1 from './ProgramPath1';
import ProgramPath2 from './ProgramPath2';


export default function ProgramPathInspForm() {
  return (
    <div>
    <ProgramPath1 />
   <ProgramPath2 />
    </div>
  );
}
