import React from 'react';

export default function Display() {
  let X=50;
  let Y=20;
  return (
    <div class="mt-5 pt-5">
      
      <h1>Evaluating Expression</h1>
      <h2>{X} {">"}{Y}:{X>Y?"True":"False"}</h2>

      

    </div>
  );
}
